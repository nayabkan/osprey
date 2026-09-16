import os

from dotenv import load_dotenv

load_dotenv()


# =========================
# DATABASE
# =========================
DATABASE_URL = os.getenv("DATABASE_URL")


# =========================
# APPLICATION URLS
# =========================
BACKEND_URL = os.getenv("BACKEND_URL")
FRONTEND_URL = os.getenv("FRONTEND_URL")


# =========================
# EMAIL / RESEND
# =========================
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
MAIL_FROM = os.getenv("MAIL_FROM")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")


# =========================
# VALIDATION
# =========================
required_settings = {
    "DATABASE_URL": DATABASE_URL,
    "BACKEND_URL": BACKEND_URL,
    "FRONTEND_URL": FRONTEND_URL,
    "RESEND_API_KEY": RESEND_API_KEY,
    "MAIL_FROM": MAIL_FROM,
    "ADMIN_EMAIL": ADMIN_EMAIL,
}

missing_settings = [
    key for key, value in required_settings.items()
    if not value
]

if missing_settings:
    raise RuntimeError(
        "Missing environment variables: "
        + ", ".join(missing_settings)
    )