import os

from dotenv import load_dotenv


load_dotenv()


# =========================================================
# DATABASE
# =========================================================

DATABASE_URL = os.getenv(
    "DATABASE_URL"
)


# =========================================================
# APPLICATION
# =========================================================

BACKEND_URL = os.getenv(
    "BACKEND_URL",
    "http://127.0.0.1:8000"
)

FRONTEND_URL = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173"
)


# =========================================================
# RESEND EMAIL
# =========================================================

RESEND_API_KEY = os.getenv(
    "RESEND_API_KEY"
)

MAIL_FROM = os.getenv(
    "MAIL_FROM",
    "Osprey Fasteners <onboarding@resend.dev>"
)

ADMIN_EMAIL = os.getenv(
    "ADMIN_EMAIL"
)


# =========================================================
# VALIDATION
# =========================================================

if not DATABASE_URL:

    raise RuntimeError(
        "DATABASE_URL is not set in .env"
    )