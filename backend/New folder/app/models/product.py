from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
)

from ..database.connection import Base


class Product(Base):

    __tablename__ = "products"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    part_number = Column(
        String(100),
        unique=True,
        nullable=False,
        index=True
    )


    name = Column(
        String(150),
        nullable=False
    )


    description = Column(
        String(255),
        nullable=False
    )


    category = Column(
        String(100),
        nullable=False
    )


    sub_category = Column(
        String(100),
        nullable=True
    )


    standard = Column(
        String(100),
        nullable=True
    )


    material = Column(
        String(100),
        nullable=True
    )


    size = Column(
        String(100),
        nullable=True
    )


    grade = Column(
        String(100),
        nullable=True
    )


    process = Column(
        String(100),
        nullable=True
    )


    status = Column(
        String(50),
        nullable=False,
        default="In stock"
    )


    quantity_available = Column(
        Integer,
        default=0,
        nullable=False
    )


    quantity = Column(
        Integer,
        default=0,
        nullable=False
    )


    specifications = Column(
        Text,
        nullable=True
    )