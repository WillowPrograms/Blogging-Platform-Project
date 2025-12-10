# 📚 Blogging Platform — REST API + Angular Frontend

A simple full-stack blogging platform built to practice backend development (CRUD, REST, databases) and frontend integration.
Hazel focuses on frontend (Angular), Jackie focuses on backend (Flask), and together we connect the full workflow.

---

## 🗂 Project Management
All tasks and workflow progress are managed here:

➡️ Trello Board: https://trello.com/b/sZLVHdIb

---

## ✨ Features 

* Create, read, update, and delete blog posts
* Search posts by term (title, content, or category)
* Clean API error handling
* Angular UI for listing, viewing, creating, and editing posts
* Mock data for early UI development

---

## 📁 Project Structure

```
blog-platform/
├─ backend/      # Flask API
└─ frontend/     # Angular Application
```

---

## 🛠 Running the Backend (Flask)

```bash
cd backend
pip install -r requirements.txt
python run.py
```

Default:
Backend runs at **[http://localhost:5000](http://localhost:5000)**

---

## 🎨 Running the Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Default:
Frontend runs at **[http://localhost:4200](http://localhost:4200)**

---

## 📘 API Overview

**POST /posts** — Create blog post
**GET /posts** — Get all posts
**GET /posts/:id** — Get a single post
**PUT /posts/:id** — Update a post
**DELETE /posts/:id** — Remove a post
**GET /posts?term=...** — Search posts

Full API contract is documented in `docs/api-contract.md`.

---

## 👩‍💻 Contributors

* **Hazel** — Frontend (Angular)
* **Jackie** — Backend (Flask)
