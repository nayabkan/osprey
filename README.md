# Osprey Fasteners

A full-stack Fastener Product & Quote Management System built with **React, FastAPI, PostgreSQL, SQLAlchemy, and Resend Email Service**.

---

## 🚀 Tech Stack

### Frontend

* React.js
* React Router
* Vite
* JavaScript
* HTML5
* CSS3
* React Context API
* Fetch API

### Backend

* Python
* FastAPI
* SQLAlchemy
* Pydantic
* Uvicorn
* PostgreSQL
* psycopg2

### Database

* PostgreSQL
* SQLAlchemy ORM

### Email Service

* Resend API

### Infrastructure

* Docker
* Docker Compose
* GitHub

---

# ✨ Features

* Responsive Osprey Fasteners website
* Home page with product categories
* Inventory/product listing
* Product search
* Category filtering
* Product details
* Product quantity/inventory information
* Add products to Quote
* Quote quantity update
* Remove quote items
* Request Quote form
* Contact Us form
* PostgreSQL database integration
* React ↔ FastAPI API communication
* Email notifications using Resend

---

# 📁 Project Structure

```text
osprey-fasteners/

│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
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

# 🛠️ Product Management

The product management functionality includes:

* Display products from PostgreSQL database
* Product search
* Category filtering
* Product details
* Product quantity/inventory information

---

# 🛒 Quote Management

Users can:

* Add products to Quote
* Update product quantity
* Remove products from Quote
* View Quote items
* Submit Request Quote

---

# 📩 Request Quote

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

The Request Quote process contains information such as:

* Company name
* Contact person
* Email
* Phone
* Address
* Message
* Selected products
* Quantity
* Request ID
* Created date

---

# 📞 Contact Us

Users can submit contact forms through the frontend.

The backend receives the request and stores the information in PostgreSQL while also processing the email through the configured Resend email service.

---

# 📧 Resend Email Service

The project uses **Resend** for sending transactional emails.

It can be used for:

* Contact Us emails
* Quote request notifications
* Other transactional emails

## Resend Configuration

Add the Resend API key to the backend `.env` file:

```env
RESEND_API_KEY=YOUR_RESEND_API_KEY
```

Never commit the real Resend API key to GitHub.

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend directory:

```text
backend/.env
```

Example:

```env
DATABASE_URL=postgresql+psycopg2://postgres:YOUR_PASSWORD@localhost:5432/osprey_fasteners
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

The backend connects to PostgreSQL through SQLAlchemy.

---

# 🗃️ Database Tables

## `products`

Stores product and inventory information.

Typical product information includes:

* Product ID
* Part number
* Product name
* Category
* Inventory/product details
* Standard
* Material
* Size
* Grade
* Process
* Status

## `quotes`

Stores quote/cart items and submitted quote information.

The implemented workflow includes:

* Product
* Quantity
* Company name
* Contact person
* Email
* Phone
* Address
* Message
* Request ID
* Created date

## `contact_messages`

Stores Contact Us submissions, including:

* Customer/contact name
* Email
* Phone
* Company
* Message
* Items
* Status

---

# 🔌 API Endpoints

## Products

### Get Products

```http
GET /products/
```

Returns available products/inventory.

---

## Quote APIs

### Add Product to Quote

```http
POST /quotes/
```

Adds a product to the quote/cart.

Example request:

```json
{
  "product_id": 1,
  "part_number": "OS-NUT-999",
  "product_name": "Nut",
  "quantity": 5
}
```

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

```http
DELETE /quotes/{quote_id}
```

Removes an item from the quote.

### Request Quote

```http
POST /quotes/request
```

Submits the quote request.

Example:

```json
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
```

---

# 📞 Contact API

### Contact Us

```http
POST /api/contact/
```

Example:

```json
{
  "customer_name": "Customer Name",
  "email": "customer@example.com",
  "phone": null,
  "company": null,
  "message": "I need fasteners.",
  "items": "[]"
}
```

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

Expected response:

```json
{
  "status": "healthy"
}
```

This can be used to verify that the backend is running.

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

# 🚀 Local Development Setup

## Prerequisites

Install:

* Python 3.x
* Node.js and npm
* PostgreSQL, or Docker Desktop with Docker Compose
* Git

---

# 🐍 Backend Setup

Open a terminal in the project root:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

### Windows PowerShell

```powershell
.venv\Scripts\Activate.ps1
```

If PowerShell blocks activation:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then activate again:

```powershell
.venv\Scripts\Activate.ps1
```

Install backend dependencies:

```bash
pip install -r requirements.txt
```

---

# ▶️ Run Backend

Start FastAPI:

```bash
uvicorn app.main:app --reload
```

Or:

```bash
python -m uvicorn app.main:app --reload
```

Backend normally runs at:

```text
http://127.0.0.1:8000
```

---

# ⚛️ Frontend Setup

Open a second terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend normally runs at:

```text
http://localhost:5173
```

---

# 🔗 Frontend API Configuration

For local development, the backend API is:

```text
http://127.0.0.1:8000
```

If using Vite environment variables, create:

```text
frontend/.env
```

Configure:

```env
VITE_API_URL=http://127.0.0.1:8000
```

For production, replace this value with the deployed backend URL.

---

# ▶️ Running the Complete Project

Use two terminals.

## Terminal 1 — Backend

```bash
cd backend
```

Activate the virtual environment:

```powershell
.venv\Scripts\Activate.ps1
```

Run:

```bash
uvicorn app.main:app --reload
```

## Terminal 2 — Frontend

```bash
cd frontend
```

Run:

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 🐳 Docker Setup

The project includes Docker support for containerized development and deployment.

## Build and Start Services

```bash
docker compose up --build
```

## Run in Detached Mode

```bash
docker compose up -d --build
```

## Stop Services

```bash
docker compose down
```

## Check Running Containers

```bash
docker ps
```

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
             ┌───────────┴───────────┐
             ▼                       ▼
      ┌──────────────┐       ┌──────────────┐
      │ PostgreSQL   │       │ Resend Email │
      └──────────────┘       └──────────────┘
```

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

* Quote/cart state

The Quote Context handles operations such as:

* Adding products
* Removing products
* Updating quantity
* Fetching quote items
* Submitting request quotes

---

# 🛒 Quote Flow

```text
Inventory
    ↓
Add to Quote
    ↓
POST /quotes/
    ↓
quotes table
```

---

# 📩 Request Quote Flow

```text
Request Quote → Submit
        ↓
POST /quotes/request
        ↓
quotes table
```

---

# 📞 Contact Us Flow

```text
Contact Us → Submit
        ↓
POST /api/contact/
        ↓
contact_messages table
```

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

Make sure the terminal is inside the backend directory:

```bash
cd backend
```

---

## `ModuleNotFoundError: No module named 'app'`

Make sure the terminal is inside the backend directory:

```bash
cd backend
```

Then activate the virtual environment:

```powershell
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI:

```bash
uvicorn app.main:app --reload
```

---

## `uvicorn is not recognized`

Activate the virtual environment:

```powershell
.venv\Scripts\Activate.ps1
```

Then install dependencies:

```bash
pip install -r requirements.txt
```

---

## PostgreSQL Connection Error

Check:

* PostgreSQL service is running
* Database exists
* Username is correct
* Password is correct
* Port is correct
* `DATABASE_URL` is correct

---

## Frontend Cannot Connect to Backend

Check:

```text
http://127.0.0.1:8000/health
```

Then verify:

* Frontend API URL
* Backend CORS configuration
* Backend server status

---

## `422 Validation Error`

A `422` means the request body does not match the Pydantic schema expected by the endpoint.

Open:

```text
http://127.0.0.1:8000/docs
```

and verify the request body.

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

## Clone Repository

```bash
git clone https://github.com/nayabkan/osprey-fasteners1.git
```

## Enter Project

```bash
cd osprey-fasteners1
```

## Check Status

```bash
git status
```

## Pull Latest Changes

```bash
git pull origin main
```

## Add Changes

```bash
git add .
```

## Commit

```bash
git commit -m "Update project"
```

## Push

```bash
git push origin main
```

---

# 📝 `.gitignore`

Recommended `.gitignore`:

```gitignore
# Python
.venv/
venv/
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
```

Never commit:

* PostgreSQL passwords
* Resend API keys
* Environment variables
* Other private credentials

---

# 🏭 Production Checklist

Before deployment:

* [ ] Use a production PostgreSQL database
* [ ] Update `DATABASE_URL`
* [ ] Configure the Resend API key
* [ ] Configure verified email/domain
* [ ] Update frontend API URL
* [ ] Update CORS with production frontend domain
* [ ] Keep `.env` private
* [ ] Do not expose API keys
* [ ] Enable HTTPS
* [ ] Build frontend
* [ ] Configure production FastAPI server
* [ ] Configure domain
* [ ] Test Inventory
* [ ] Test Search
* [ ] Test Add to Quote
* [ ] Test Quote Quantity Update
* [ ] Test Quote Item Removal
* [ ] Test Request Quote
* [ ] Test Contact Us
* [ ] Test database connection
* [ ] Test email delivery

Build frontend:

```bash
npm run build
```

---

# 📊 Final Functional Flow

```text
                    OSPREY FASTENERS
                           │
          ┌────────────────┼────────────────┐
          │                │                │
      Inventory          Quote          Contact Us
          │                │                │
     Add to Quote     Submit Quote     Submit Form
          │                │                │
          ↓                ↓                ↓
      /quotes/       /quotes/request   /api/contact/
          │                │                │
          ↓                ↓                ↓
       quotes           quotes      contact_messages
```

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
Resend Email Service
  +
Docker
```

---

# 📄 License

This project is intended for the Osprey Fasteners application.

Add the appropriate license here if the project is being distributed publicly.

---

# ✅ Project Status

Current application functionality includes:

* Home page
* Inventory
* Product search
* Category filtering
* Product details
* Add to Quote
* Quantity update
* Quote item removal
* Request Quote
* Contact Us
* PostgreSQL integration
* FastAPI REST API
* React/FastAPI communication
* Resend email service integration

Production deployment requires environment-specific configuration such as:

* Production database
* API URL
* CORS
* Domain
* HTTPS
* Hosting/server configuration
