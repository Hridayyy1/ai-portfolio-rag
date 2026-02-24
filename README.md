

# 🚀 AI-Powered Personal Portfolio

An AI-enabled personal portfolio website built using **React (TypeScript)** and **FastAPI (Python)** with Retrieval-Augmented Generation (RAG) capabilities powered by **ChromaDB** and **OpenRouter**.

This project was developed as part of an assignment to build a personal portfolio with AI chat functionality — and extended into a full RAG-based system with production-grade architecture.

---

## 🧠 Features

### ✨ Interactive AI Chat

* Ask questions about my resume
* Context-aware answers powered by OpenRouter
* Retrieval-Augmented Generation (RAG) using ChromaDB
* Resume-aware conversational interface

### 🗂 Project Deep-Dive Pages

* Clickable project cards
* Dedicated project detail pages
* GitHub repository links for each project

### 🌙 Developer Aesthetic UI

* Dark / Light mode toggle
* Modern responsive layout
* Developer-style typography
* Clean routing and navigation

### ⚡ Full-Stack Architecture

* React + TypeScript frontend
* FastAPI backend
* Vector search using ChromaDB
* Sentence-transformer embeddings
* LLM integration via OpenRouter

---

## 🏗 Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router

### Backend

* FastAPI
* ChromaDB
* Sentence-Transformers (MiniLM)
* OpenRouter API

---

## 🧩 System Architecture

User → React Frontend → FastAPI Backend →
ChromaDB (Vector Retrieval) → OpenRouter LLM → Response

### RAG Flow

1. Resume is processed and chunked
2. Text converted into vector embeddings
3. Stored in ChromaDB
4. User question → embedding similarity search
5. Relevant context sent to LLM
6. AI-generated response returned

---

## 📦 Installation (Local Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Hridayyy1/ai-portfolio-rag
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
```

Create `.env` file inside backend:

```
OPENROUTER_API_KEY=your_api_key_here
```

Run backend:

```bash
uvicorn main:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create `.env` inside frontend:

```
VITE_API_URL=http://127.0.0.1:8000
```

---

## 📌 Assignment Context

This project was created as part of an assignment requiring:

* React (TypeScript) frontend
* Python backend
* AI chat functionality using OpenRouter
* Database integration
* Structured portfolio UI

The base requirement was extended into a full RAG-based AI portfolio system with scalable backend design and clean UI/UX.

---

## 📎 Related Projects

* 🔹 AI-Kaksha
* 🔹 MERN Chat App
* 🔹 Credit Card Fraud Detection System

---

## 👨‍💻 About Me

I’m a third-year Information Technology student passionate about AI systems, scalable backend engineering, and full-stack development. I enjoy building production-ready applications that combine intelligent systems with clean architecture.

---

## 📫 Connect With Me

* GitHub: [{(https://github.com/Hridayyy1)]
---

