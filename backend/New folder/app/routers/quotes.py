from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

from ..database.connection import get_db
from ..models.quote import Quote
from ..schemas.quote import (
    QuoteCreate,
    QuoteResponse,
    QuoteRequestCreate
)

from ..services.email_service import (
    send_quote_confirmation,
    send_admin_notification
)

import uuid


router = APIRouter(
    prefix="/quotes",
    tags=["Quotes"]
)


# =========================================================
# GET QUOTE ITEMS FOR CURRENT GUEST SESSION
# =========================================================

@router.get(
    "/",
    response_model=list[QuoteResponse]
)
def get_quotes(
    session_id: str,
    db: Session = Depends(get_db)
):

    try:

        return (
            db.query(Quote)
            .filter(
                Quote.session_id == session_id,
                Quote.request_id.is_(None)
            )
            .order_by(Quote.id.asc())
            .all()
        )

    except SQLAlchemyError as e:

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )


# =========================================================
# ADD PRODUCT TO QUOTE
# =========================================================

@router.post(
    "/",
    response_model=QuoteResponse,
    status_code=201
)
def add_to_quote(
    quote_data: QuoteCreate,
    db: Session = Depends(get_db)
):

    # -----------------------------------------------------
    # Validate quantity
    # -----------------------------------------------------

    if quote_data.quantity < 1:

        raise HTTPException(
            status_code=400,
            detail="Quantity must be at least 1"
        )

    # -----------------------------------------------------
    # Validate session
    # -----------------------------------------------------

    if not quote_data.session_id:

        raise HTTPException(
            status_code=400,
            detail="Quote session is required"
        )

    try:

        # =================================================
        # CHECK IF PRODUCT ALREADY EXISTS
        # FOR THIS GUEST SESSION
        # =================================================

        existing_quote = (
            db.query(Quote)
            .filter(
                Quote.product_id == quote_data.product_id,
                Quote.session_id == quote_data.session_id,
                Quote.request_id.is_(None)
            )
            .first()
        )

        # =================================================
        # PRODUCT ALREADY EXISTS
        # =================================================

        if existing_quote:

            existing_quote.quantity += quote_data.quantity

            # Keep latest product information
            existing_quote.part_number = quote_data.part_number
            existing_quote.product_name = quote_data.product_name

            db.commit()
            db.refresh(existing_quote)

            return existing_quote

        # =================================================
        # CREATE NEW QUOTE ITEM
        # =================================================

        new_quote = Quote(
            session_id=quote_data.session_id,

            product_id=quote_data.product_id,

            part_number=quote_data.part_number,

            product_name=quote_data.product_name,

            quantity=quote_data.quantity,

            company_name=None,

            contact_person=None,

            email=None,

            phone=None,

            address=None,

            message=None,

            request_id=None,

            quote_number=None
        )

        db.add(new_quote)

        db.commit()

        db.refresh(new_quote)

        return new_quote

    except SQLAlchemyError as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )


# =========================================================
# REQUEST QUOTE SUBMIT
# =========================================================

@router.post(
    "/request",
    status_code=201
)
def submit_quote_request(
    quote_data: QuoteRequestCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):

    # -----------------------------------------------------
    # CHECK ITEMS
    # -----------------------------------------------------

    if not quote_data.items:

        raise HTTPException(
            status_code=400,
            detail="Please add at least one part to the quote"
        )

    # -----------------------------------------------------
    # CHECK CUSTOMER DETAILS
    # -----------------------------------------------------

    if not quote_data.company_name.strip():

        raise HTTPException(
            status_code=400,
            detail="Company name is required"
        )

    if not quote_data.contact_person.strip():

        raise HTTPException(
            status_code=400,
            detail="Contact person is required"
        )

    if not quote_data.email.strip():

        raise HTTPException(
            status_code=400,
            detail="Email is required"
        )

    if not quote_data.phone.strip():

        raise HTTPException(
            status_code=400,
            detail="Phone number is required"
        )

    # -----------------------------------------------------
    # GENERATE INTERNAL REQUEST ID
    # -----------------------------------------------------

    request_id = str(uuid.uuid4())

    try:

        created_quotes = []

        # =================================================
        # CREATE QUOTE ITEMS
        # =================================================

        for item in quote_data.items:

            if item.quantity < 1:

                raise HTTPException(
                    status_code=400,
                    detail="Quantity must be at least 1"
                )

            new_quote = Quote(

                # Product details
                product_id=item.product_id,

                part_number=item.part_number,

                product_name=item.product_name,

                quantity=item.quantity,

                # Customer details
                company_name=quote_data.company_name,

                contact_person=quote_data.contact_person,

                email=quote_data.email,

                phone=quote_data.phone,

                address=quote_data.address,

                message=quote_data.message,

                # Request identification
                request_id=request_id,

                # Quote number generated below
                quote_number=None,

                # This is a submitted quote,
                # so it does not belong to active cart
                session_id=None
            )

            db.add(new_quote)

            created_quotes.append(new_quote)

        # =================================================
        # FLUSH
        # =================================================

        db.flush()

        # =================================================
        # GENERATE CUSTOMER-FACING QUOTE NUMBER
        # =================================================

        first_quote_id = created_quotes[0].id

        quote_number = f"Q{100000 + first_quote_id}"

        # =================================================
        # ASSIGN SAME QUOTE NUMBER TO ALL ITEMS
        # =================================================

        for quote in created_quotes:

            quote.quote_number = quote_number

        # =================================================
        # SAVE DATABASE
        # =================================================

        db.commit()

        # =================================================
        # REFRESH OBJECTS
        # =================================================

        for quote in created_quotes:

            db.refresh(quote)

        # =================================================
        # CUSTOMER EMAIL
        # =================================================

        background_tasks.add_task(
            send_quote_confirmation,
            quote_data.email,
            quote_data.contact_person,
            quote_number
        )

        # =================================================
        # ADMIN EMAIL
        # =================================================

        background_tasks.add_task(
            send_admin_notification,
            quote_data.contact_person,
            quote_data.email,
            quote_number,
            quote_data.company_name
        )

        # =================================================
        # RESPONSE
        # =================================================

        return {

            "success": True,

            "message": (
                f"Thank you for your enquiry. "
                f"Your Quote Number is {quote_number}. "
                f"We will get back to you within 48 hours."
            ),

            "quote_number": quote_number,

            "request_id": request_id,

            "items": [
                {
                    "id": quote.id,
                    "product_id": quote.product_id,
                    "part_number": quote.part_number,
                    "product_name": quote.product_name,
                    "quantity": quote.quantity
                }
                for quote in created_quotes
            ]
        }

    # =====================================================
    # VALIDATION ERROR
    # =====================================================

    except HTTPException:

        db.rollback()

        raise

    # =====================================================
    # DATABASE ERROR
    # =====================================================

    except SQLAlchemyError as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )

    # =====================================================
    # UNEXPECTED ERROR
    # =====================================================

    except Exception as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Unable to submit quote request: {str(e)}"
        )


# =========================================================
# UPDATE QUANTITY
# =========================================================

@router.put(
    "/{quote_id}",
    response_model=QuoteResponse
)
def update_quote_quantity(
    quote_id: int,
    quantity: int,
    session_id: str,
    db: Session = Depends(get_db)
):

    # -----------------------------------------------------
    # VALIDATE QUANTITY
    # -----------------------------------------------------

    if quantity < 1:

        raise HTTPException(
            status_code=400,
            detail="Quantity must be at least 1"
        )

    # -----------------------------------------------------
    # VALIDATE SESSION
    # -----------------------------------------------------

    if not session_id:

        raise HTTPException(
            status_code=400,
            detail="Quote session is required"
        )

    try:

        quote = (
            db.query(Quote)
            .filter(
                Quote.id == quote_id,
                Quote.session_id == session_id,
                Quote.request_id.is_(None)
            )
            .first()
        )

        if not quote:

            raise HTTPException(
                status_code=404,
                detail="Quote item not found"
            )

        quote.quantity = quantity

        db.commit()

        db.refresh(quote)

        return quote

    except HTTPException:

        raise

    except SQLAlchemyError as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )


# =========================================================
# DELETE QUOTE ITEM
# =========================================================

@router.delete(
    "/{quote_id}"
)
def delete_quote(
    quote_id: int,
    session_id: str,
    db: Session = Depends(get_db)
):

    # -----------------------------------------------------
    # VALIDATE SESSION
    # -----------------------------------------------------

    if not session_id:

        raise HTTPException(
            status_code=400,
            detail="Quote session is required"
        )

    try:

        quote = (
            db.query(Quote)
            .filter(
                Quote.id == quote_id,
                Quote.session_id == session_id,
                Quote.request_id.is_(None)
            )
            .first()
        )

        if not quote:

            raise HTTPException(
                status_code=404,
                detail="Quote item not found"
            )

        db.delete(quote)

        db.commit()

        return {
            "success": True,
            "message": "Quote item deleted successfully"
        }

    except HTTPException:

        raise

    except SQLAlchemyError as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )


# =========================================================
# CLEAR ALL QUOTE ITEMS FOR CURRENT SESSION
# =========================================================

@router.delete(
    "/session/clear"
)
def clear_quote_session(
    session_id: str,
    db: Session = Depends(get_db)
):

    if not session_id:

        raise HTTPException(
            status_code=400,
            detail="Quote session is required"
        )

    try:

        deleted_count = (
            db.query(Quote)
            .filter(
                Quote.session_id == session_id,
                Quote.request_id.is_(None)
            )
            .delete(
                synchronize_session=False
            )
        )

        db.commit()

        return {
            "success": True,
            "deleted_count": deleted_count,
            "message": "Quote items cleared successfully"
        }

    except SQLAlchemyError as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )