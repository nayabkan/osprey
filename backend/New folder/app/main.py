from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database.connection import Base, engine

from .core.config import FRONTEND_URL

from .models import (
    Product,
    Quote,
    ContactMessage,
)

from .routers.products import (
    router as products_router
)

from .routers.quotes import (
    router as quotes_router
)

from .routers.contact import (
    router as contact_router
)


# =========================================================
# APPLICATION
# =========================================================

app = FastAPI(
    title="Osprey Fasteners API",
    description="Backend API for Osprey Fasteners",
    version="2.0.0"
)


# =========================================================
# DATABASE
# =========================================================

Base.metadata.create_all(
    bind=engine
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        FRONTEND_URL
    ],

    allow_credentials=True,

    allow_methods=[
        "*"
    ],

    allow_headers=[
        "*"
    ],
)


# =========================================================
# ROUTES
# =========================================================

app.include_router(
    products_router
)

app.include_router(
    quotes_router
)

app.include_router(
    contact_router
)


# =========================================================
# ROOT
# =========================================================

@app.get("/")
def root():
    return {
        "message": "Osprey Fasteners API is running"
    }


# =========================================================
# HEALTH
# =========================================================

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }