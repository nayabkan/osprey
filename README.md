<<<<<<< HEAD
# Osprey Fasteners
=======
<<<<<<< HEAD
Osprey Fasteners
=======
# Osprey Fasteners
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

A full-stack Fasteners Product & Quote Management System built with **React, FastAPI, PostgreSQL, SQLAlchemy, JWT Authentication, and Resend Email Service**.

## 🚀 Tech Stack

<<<<<<< HEAD
### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* React Context API
* Fetch API
=======
<<<<<<< HEAD
Features

Responsive Osprey Fasteners website
=======
### Frontend

- React.js

- React Router

- Vite

- CSS

### Backend

- Python

- FastAPI

- SQLAlchemy

- Pydantic

- Uvicorn

- PostgreSQL

- psycopg2
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

### Backend

* FastAPI
* Python
* SQLAlchemy
* Pydantic
* JWT Authentication
* Uvicorn

<<<<<<< HEAD
### Database

* PostgreSQL
* SQLAlchemy ORM
* psycopg2
=======
<<<<<<< HEAD
Category filtering

Add products to Quote
=======
- Home page with product categories

- Inventory/product listing

- Product search

- Category filtering

- Add to Quote

- Quote quantity update

- Remove quote items

- Request Quote form

- Contact Us form

- PostgreSQL database integration

- React ↔ FastAPI API communication

JWT-based user authentication

Protected API routes using Bearer access tokens

Access tokens configured to expire after 10 minutes

Email notifications using Resend

---
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

### Email Service

* Resend API

### Infrastructure

* Docker
* Docker Compose
* GitHub

---

## 📁 Project Structure

```text
osprey-fasteners/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── auth.py
│   │   ├── email.py
│   │   └── ...
│   │
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# ✨ Features

## Product Management

* Display products from PostgreSQL database
* Product search
* Category filtering
* Product details
* Product quantity/inventory information

## Quote Management

Users can:

* Add products to Quote
* Update product quantity
* Remove products from Quote
* View Quote items
* Submit Request Quote

## Request Quote

Submitted quote requests are stored separately from normal quote/cart items.

A normal quote item contains:

```text
request_id = NULL
```

A submitted Request Quote record contains:

```text
request_id = UUID
```

This distinction allows the frontend to prevent already submitted request records from appearing as normal cart/quote items.

## Contact Us

Users can submit contact forms through the frontend.

The backend receives the request and processes the email using the configured Resend email service.

---

# 🔐 JWT Authentication

The backend uses JWT-based authentication.

Access tokens are generated after successful authentication and are required for protected API endpoints.

## JWT Configuration

```env
SECRET_KEY=YOUR_LONG_RANDOM_SECRET_KEY
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10
```

Access tokens expire after **10 minutes**.

## Authorization Header

Protected API requests should send:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## JWT Authentication Flow

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT Access Token generated
    ↓
Frontend stores token
    ↓
Frontend sends Bearer Token
    ↓
Backend validates JWT
    ↓
Protected API accessed
```

## Security

Never commit these values to GitHub:

```text
SECRET_KEY
DATABASE_URL
RESEND_API_KEY
Database passwords
API keys
```

Use environment variables instead.

---

# 📧 Resend Email Service

The project uses **Resend** for sending transactional emails.

It can be used for:

* Contact Us emails
* Quote request notifications
* Application notifications
* Other transactional emails

## Resend Configuration

Add the Resend API key to your backend `.env` file:

```env
RESEND_API_KEY=YOUR_RESEND_API_KEY
```

## Email Flow

```text
Frontend
   ↓
FastAPI API
   ↓
Email Service
   ↓
Resend API
   ↓
Recipient Email
```

Never commit the real Resend API key to GitHub.

<<<<<<< HEAD
---
=======
<<<<<<< HEAD
Inventory
   ↓
Add to Quote
   ↓
POST /quotes/
   ↓
quotes table
=======
```text

Inventory

    ↓

Add to Quote

    ↓

POST /quotes/

    ↓

quotes table

```
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

# ⚙️ Environment Variables

<<<<<<< HEAD
Create a `.env` file inside the backend directory.
=======
<<<<<<< HEAD
Quote Items
   ↓
Request Quote Form
   ↓
POST /quotes/request
   ↓
quotes table
=======
```text

Request Quote → Submit

    ↓

POST /quotes/request

    ↓

quotes table

```
>>>>>>> 74511bd (Update README with JWT and email service)

Contact Us Flow

<<<<<<< HEAD
Contact Us Form
   ↓
POST /api/contact/
   ↓
contact_messages table
=======
```text

Contact Us → Submit

    ↓

POST /api/contact/

    ↓

contact_messages table

```
>>>>>>> 74511bd (Update README with JWT and email service)

Database

The application uses PostgreSQL.

<<<<<<< HEAD
Main Tables

products

Stores product and inventory information.
=======
### `products`

Stores inventory/product information.

### `quotes`

Stores:

- Quote products

- Quantity

- Company name

- Contact person

- Email

- Phone

- Address

- Message

- Request ID

- Created date

### `contact_messages`

Stores Contact Us submissions:

- Contact person/customer name

- Email

- Message

- Phone/company fields as nullable

- Items

- Status
>>>>>>> 74511bd (Update README with JWT and email service)

Typical product information includes:

Product ID

Part number

<<<<<<< HEAD
Product name
=======
```bash

cd backend

```
>>>>>>> 74511bd (Update README with JWT and email service)

Category

<<<<<<< HEAD
Inventory/product details
=======
```bash

python -m venv .venv

```
>>>>>>> 74511bd (Update README with JWT and email service)

quotes

<<<<<<< HEAD
Stores quote/cart items and submitted quote information.
=======
```powershell

.venv\Scripts\Activate.ps1

```
>>>>>>> 74511bd (Update README with JWT and email service)

The implemented workflow includes information such as:

<<<<<<< HEAD
Product
=======
```powershell

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

```
>>>>>>> 74511bd (Update README with JWT and email service)

Quantity

<<<<<<< HEAD
Company name
=======
```powershell

.venv\Scripts\Activate.ps1

```
>>>>>>> 74511bd (Update README with JWT and email service)

Contact person

<<<<<<< HEAD
Email
=======
```bash

pip install -r requirements.txt

```
>>>>>>> 74511bd (Update README with JWT and email service)

Phone

Address

Message

<<<<<<< HEAD
Request ID
=======
```text

osprey_fasteners

```
>>>>>>> 74511bd (Update README with JWT and email service)

Created date

<<<<<<< HEAD
contact_messages
=======
```env

DATABASE_URL=postgresql+psycopg2://postgres:YOUR_PASSWORD@localhost:5432/osprey_fasteners

```
>>>>>>> 74511bd (Update README with JWT and email service)

Stores Contact Us submissions, including:

Customer/contact name

<<<<<<< HEAD
Email
=======
```env

OPENAI_API_KEY=YOUR_OPENAI_API_KEY

OPENAI_MODEL=gpt-5-mini

```
>>>>>>> 74511bd (Update README with JWT and email service)

Phone

Company

Message

Items

<<<<<<< HEAD
Status
=======
```bash

uvicorn app.main:app --reload

```
>>>>>>> 74511bd (Update README with JWT and email service)

API Endpoints

<<<<<<< HEAD
Products

GET /products/
=======
```bash

python -m uvicorn app.main:app --reload

```

Backend:

```text

http://127.0.0.1:8000

```

Swagger API documentation:

```text

http://127.0.0.1:8000/docs

```

Health check:

```text

http://127.0.0.1:8000/health

```

Expected health response:

```json

{

  "status": "healthy"

}

```

---

# Frontend Setup

Open a second terminal:

```bash

cd frontend

```

Install dependencies:

```bash

npm install

```

Run the frontend:

```bash

npm run dev

```

The frontend normally runs at:

```text

http://localhost:5173

```

---

# Run Complete Project

Use two terminals.

### Terminal 1 — Backend

```bash

cd backend

.venv\Scripts\Activate.ps1

uvicorn app.main:app --reload

```

### Terminal 2 — Frontend

```bash

cd frontend

npm run dev

```

Open:

```text

http://localhost:5173

```

---

# API Endpoints

## Products

```text

GET /products/

```
>>>>>>> 74511bd (Update README with JWT and email service)

Returns available products/inventory.

Add to Quote

<<<<<<< HEAD
POST /quotes/
=======
```text

POST /quotes/

```
>>>>>>> 74511bd (Update README with JWT and email service)

Example request:

<<<<<<< HEAD
=======
```json

>>>>>>> 74511bd (Update README with JWT and email service)
{

  "product_id": 1,

  "part_number": "OS-NUT-999",

  "product_name": "Nut",

  "quantity": 5

}
<<<<<<< HEAD
=======

```
>>>>>>> 74511bd (Update README with JWT and email service)

Get Quote Items

<<<<<<< HEAD
GET /quotes/
=======
```text

GET /quotes/

```
>>>>>>> 74511bd (Update README with JWT and email service)

Update Quote Quantity

<<<<<<< HEAD
PUT /quotes/{quote_id}?quantity=5
=======
```text

PUT /quotes/{quote_id}?quantity=5

```
>>>>>>> 74511bd (Update README with JWT and email service)

Delete Quote Item

<<<<<<< HEAD
DELETE /quotes/{quote_id}
=======
```text

DELETE /quotes/{quote_id}

```
>>>>>>> 74511bd (Update README with JWT and email service)

Submit Request Quote

<<<<<<< HEAD
POST /quotes/request

Example:

{
  "company_name": "Osprey Fasteners",
  "contact_person": "Customer Name",
  "email": "customer@example.com",
  "phone": "9876543210",
  "address": "Customer Address",
  "message": "I need these fasteners.",
  "items": [
    {
      "product_id": 1,
      "part_number": "OS-NUT-999",
      "product_name": "Nut",
      "quantity": 5
    }
  ]
}
=======
```text

POST /quotes/request

```

Example:

```json

{

  "company_name": "Osprey Fasteners",

  "contact_person": "Nayab",

  "email": "test@example.com",

  "phone": "9876543210",

  "address": "California",

  "message": "I need these fasteners.",

  "items": [

    {

      "product_id": 1,

      "part_number": "OS-NUT-999",

      "product_name": "Nut",

      "quantity": 5

    }

  ]

}

```
>>>>>>> 74511bd (Update README with JWT and email service)

Contact Us

<<<<<<< HEAD
POST /api/contact/

Example:

{
  "customer_name": "Customer Name",
  "email": "customer@example.com",
  "phone": null,
  "company": null,
  "message": "I need fasteners.",
  "items": "[]"
}
=======
```text

POST /api/contact/

```

Example:

```json

{

  "customer_name": "Nayab",

  "email": "test@example.com",

  "phone": null,

  "company": null,

  "message": "I need fasteners.",

  "items": "[]"

}

```
>>>>>>> 74511bd (Update README with JWT and email service)

Local Development Setup

Prerequisites

Install:

Python 3.x

Node.js and npm

PostgreSQL, or Docker Desktop with Docker Compose

Git

Backend Setup

Open a terminal in the project root:

cd backend

Create a virtual environment:

python -m venv .venv

Windows PowerShell

.venv\Scripts\Activate.ps1

If PowerShell blocks activation:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Then activate again:

.venv\Scripts\Activate.ps1

Install backend dependencies:

pip install -r requirements.txt

Environment Variables

Create:

backend/.env
>>>>>>> 223bcd2 (Fix product API and update inventory)

Example:

```env
DATABASE_URL=postgresql+psycopg2://postgres:YOUR_PASSWORD@localhost:5432/osprey_fasteners

SECRET_KEY=YOUR_LONG_RANDOM_SECRET_KEY
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10

RESEND_API_KEY=YOUR_RESEND_API_KEY
```

Replace the placeholder values with your actual configuration.

---

# 🐘 PostgreSQL Database

The application uses PostgreSQL as its database.

Example configuration:

```text
Database: osprey_fasteners
Host: localhost
Port: 5432
User: postgres
```

<<<<<<< HEAD
The backend connects to PostgreSQL through SQLAlchemy.
=======
<<<<<<< HEAD
http://127.0.0.1:8000
=======
```text

http://127.0.0.1:8000

```
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

---

# 🐳 Docker Setup

The project includes Docker support.

<<<<<<< HEAD
Start the services:
=======
http://127.0.0.1:8000/health

Expected response:

{
  "status": "healthy"
}

Frontend Setup

Open a second terminal:

cd frontend

Install dependencies:

npm install

Run the development server:

npm run dev

Frontend normally runs at:

http://localhost:5173

Frontend API Configuration

For local development, the backend API is:

http://127.0.0.1:8000

If using Vite environment variables, create:

frontend/.env

and configure:

<<<<<<< HEAD
VITE_API_URL=http://127.0.0.1:8000
=======
```env

VITE_API_URL=http://127.0.0.1:8000

```
>>>>>>> 74511bd (Update README with JWT and email service)

For production, replace this value with the deployed backend URL.

Running the Complete Project

Terminal 1 — Backend

cd backend
.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload

Terminal 2 — Frontend

cd frontend
npm run dev

Then open:

http://localhost:5173

Docker

The repository includes Docker configuration for containerized deployment/development.

Build and start the services:
>>>>>>> 223bcd2 (Fix product API and update inventory)

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

Stop the services:

```bash
docker compose down
```

Check running containers:

```bash
docker ps
```

---

# 🖥️ Local Development

## Backend

<<<<<<< HEAD
Navigate to the backend:
=======
<<<<<<< HEAD
=======
```text

>>>>>>> 74511bd (Update README with JWT and email service)
http://localhost:5173

http://127.0.0.1:5173
<<<<<<< HEAD
=======

```
>>>>>>> 74511bd (Update README with JWT and email service)

For production deployment, update the backend CORS configuration with the actual frontend domain.

Troubleshooting

ModuleNotFoundError: No module named 'app'

Make sure the terminal is inside the backend directory:
>>>>>>> 223bcd2 (Fix product API and update inventory)

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI:

```bash
uvicorn app.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

---

# 📚 FastAPI Swagger Documentation

FastAPI provides automatic Swagger documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

Alternative ReDoc:

```text
http://127.0.0.1:8000/redoc
```

Swagger can be used to test API endpoints directly.

---

# ⚛️ Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

## Products

### Get Products

```http
GET /products/
```

Returns available products.

---

# 🛒 Quote APIs

### Add Product to Quote

```http
POST /quotes/
```

Adds a product to the quote/cart.

### Get Quote Items

```http
GET /quotes/
```

Returns quote items.

### Update Quote Quantity

```http
PUT /quotes/{quote_id}?quantity=5
```

Example:

```http
PUT /quotes/1?quantity=5
```

Updates the quantity of a quote item.

### Delete Quote Item

<<<<<<< HEAD
```http
DELETE /quotes/{quote_id}
```

Removes an item from the quote.

### Request Quote

```http
POST /quotes/request
```

Submits the quote request.
=======
<<<<<<< HEAD
=======
```gitignore

>>>>>>> 74511bd (Update README with JWT and email service)
# Python

.venv/

__pycache__/

*.pyc

# Environment

.env

# Node

node_modules/

dist/

# IDE

.vscode/

.idea/
<<<<<<< HEAD

Project Status
=======

```

Never commit PostgreSQL passwords, JWT secrets, Resend API keys, or any other credentials.
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)

Submitted records are associated with a `request_id`.

---

# 📩 Contact API

### Contact Us

<<<<<<< HEAD
```http
POST /api/contact/
```
=======
<<<<<<< HEAD
Category filtering
>>>>>>> 223bcd2 (Fix product API and update inventory)

Receives contact form submissions and processes the email through Resend.

---

# 🩺 Health Check

The backend provides a health endpoint:

```http
GET /health
```

Open:

```text
http://127.0.0.1:8000/health
```

This can be used to verify that the backend is running.

---

# 🔄 Application Flow

```text
                 ┌──────────────┐
                 │   React UI   │
                 └──────┬───────┘
                        │
                        │ HTTP Requests
                        ▼
                 ┌──────────────┐
                 │   FastAPI    │
                 └──────┬───────┘
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
      ┌──────────────┐      ┌──────────────┐
      │  PostgreSQL  │      │ Resend Email │
      └──────────────┘      └──────────────┘
```

<<<<<<< HEAD
---

# 🗃️ Database Flow

```text
React
  ↓
FastAPI
  ↓
SQLAlchemy
  ↓
PostgreSQL
```

SQLAlchemy acts as the ORM layer between FastAPI and PostgreSQL.

---

# 🧩 Frontend Context

The React application uses Context API for shared application state.

Important application state includes:

* Authentication state
* Quote/cart state
* User state

The Quote Context handles operations such as:

* Adding products
* Removing products
* Updating quantity
* Fetching quote items
* Submitting request quotes

---

# 🧪 API Testing

You can test the backend APIs using:

* FastAPI Swagger
* Postman
* Browser for GET APIs
* Frontend application

Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# 🔒 Security Best Practices

* Use a strong `SECRET_KEY`
* Keep JWT expiration short
* Never commit `.env`
* Never commit database passwords
* Never expose Resend API keys
* Use HTTPS in production
* Validate user input
* Protect authenticated endpoints
* Store sensitive configuration in environment variables
* Configure CORS correctly

---

# 🚨 Troubleshooting

## Backend is not starting

Install dependencies:

```bash
pip install -r requirements.txt
```

Then run:

```bash
uvicorn app.main:app --reload
```

---

## PostgreSQL Connection Error

Check:

* PostgreSQL is running
* Database exists
* Username is correct
* Password is correct
* Port is correct
* `DATABASE_URL` is correct

---

## JWT Authentication Error

Check:

```env
SECRET_KEY=YOUR_LONG_RANDOM_SECRET_KEY
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10
```

Also verify that the request contains:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Resend Email Not Working

Check:

```env
RESEND_API_KEY=YOUR_RESEND_API_KEY
```

Also verify:

* API key is valid
* Sender email/domain is configured correctly
* Recipient email is correct
* Backend can access the Resend service

---

# 📦 Git Commands

Clone repository:

```bash
git clone https://github.com/nayabkan/osprey-fasteners1.git
```

Enter project:

```bash
cd osprey-fasteners1
```

Check status:

```bash
git status
```

Pull latest changes:

```bash
git pull origin main
```

Add changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Update project"
```

Push:

```bash
git push origin main
```

---

# 🚀 Production Checklist

Before deploying to production:

* [ ] Set a strong JWT `SECRET_KEY`
* [ ] Set JWT expiry appropriately
* [ ] Configure production PostgreSQL
* [ ] Configure Resend API key
* [ ] Configure verified email/domain
* [ ] Enable HTTPS
* [ ] Configure CORS correctly
* [ ] Remove development secrets
* [ ] Do not commit `.env`
* [ ] Test authentication
* [ ] Test quote submission
* [ ] Test email delivery
* [ ] Test database connection

---

# 👨‍💻 Project Purpose

Osprey Fasteners is a full-stack fastener/product management and quote-request platform.

The project demonstrates integration between:

```text
React
  +
FastAPI
  +
PostgreSQL
  +
SQLAlchemy
  +
JWT Authentication
  +
Resend Email Service
  +
Docker
```

---

# 📄 License

This project is intended for the Osprey Fasteners application.
=======
This project is intended for the Osprey Fasteners application. Add the appropriate license here if the project is being distributed publicly.
=======
```bash

cd backend

```

Then:

```bash

python -m uvicorn app.main:app --reload

```

## `uvicorn is not recognized`

Activate the virtual environment:

```powershell

.venv\Scripts\Activate.ps1

```

Then:

```bash

pip install -r requirements.txt

```

## PostgreSQL connection error

Check:

- PostgreSQL service is running

- Database exists

- Username is correct

- Password is correct

- Port is normally `5432`

- `DATABASE_URL` is correct

## Frontend cannot connect to backend

Check:

```text

http://127.0.0.1:8000/health

```

Then check the frontend API URL and backend CORS settings.

## 422 Validation Error

A `422` means the request body does not match the Pydantic schema expected by the endpoint.

Open:

```text

http://127.0.0.1:8000/docs

```

and verify the request body.

---

# Production Checklist

Before deployment:

- [ ] Use a production PostgreSQL database

- [ ] Update `DATABASE_URL`

- [ ] Update frontend API URL

- [ ] Update CORS with production frontend domain

- [ ] Keep `.env` private

- [ ] Do not expose API keys

- [ ] Build frontend:

```bash

npm run build

```

- [ ] Configure production FastAPI server

- [ ] Configure domain and HTTPS

- [ ] Test Inventory

- [ ] Test Search

- [ ] Test Add to Quote

- [ ] Test Request Quote

- [ ] Test Contact Us

Test user authentication/login

Test JWT expiration and protected endpoints

Test Resend email delivery

---

# Final Functional Flow

```text

                    OSPREY FASTENERS

                           │

        ┌──────────────────┼──────────────────┐

        │                  │                  │

     Inventory           Quote            Contact Us

        │                  │                  │

   Add to Quote       Submit Quote       Submit Form

        │                  │                  │

        ↓                  ↓                  ↓

     /quotes/       /quotes/request     /api/contact/

        │                  │                  │

        ↓                  ↓                  ↓

     quotes             quotes        contact_messages

```

## Project Status

Current application functionality is complete for the implemented local workflow:

- Home page

- Inventory

- Product search

- Category filtering

- Add to Quote

- Quantity update

- Quote item removal

- Request Quote

- Contact Us

- PostgreSQL integration

- FastAPI REST API

- React/FastAPI communication

JWT authentication

10-minute JWT access-token expiry

Resend email service integration

Production deployment only requires environment-specific configuration such as production database, API URL, CORS, domain, HTTPS, and hosting/server setup.

**
>>>>>>> 74511bd (Update README with JWT and email service)
>>>>>>> 223bcd2 (Fix product API and update inventory)
