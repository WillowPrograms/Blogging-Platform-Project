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

## 🧪 Testing the API with `blog-api.http`

This repo includes a ready-to-run HTTP scratch file at:

- `blog-api.http` (project root)

### VS Code (REST Client extension)
1. Install the extension: **REST Client** (publisher: Huachao Mao).
2. Start the backend (`python run.py`).
3. Open `blog-api.http` in VS Code.
4. Click **Send Request** above any request, starting with:
   - `GET {{baseUrl}}/health`

Notes:
- `@baseUrl` is defined at the top of the file (defaults to `http://localhost:5000`).
- For requests like `GET /posts/1`, change the ID to an existing post.
- For `GET /posts?term=tech`, change `term` to try different searches.

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

---

## 👩‍💻 Contributors

* **Hazel** — Frontend (Angular)
* **Jackie** — Backend (Flask)
