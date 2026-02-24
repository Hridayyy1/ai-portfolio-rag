from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PyPDF2 import PdfReader
from sentence_transformers import SentenceTransformer
import chromadb
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

# -------- Load Resume --------
def extract_text_from_pdf(file_path):
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"
    return text

def chunk_text(text, chunk_size=500):
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]


# -------- RAG Setup --------
model = SentenceTransformer("all-MiniLM-L6-v2")
chroma_client = chromadb.Client()

collection = chroma_client.create_collection(name="resume_collection")

# Try loading resume safely
if os.path.exists("resume.pdf"):
    resume_text = extract_text_from_pdf("resume.pdf")
    chunks = chunk_text(resume_text)
    embeddings = model.encode(chunks).tolist()

    collection.add(
        documents=chunks,
        embeddings=embeddings,
        ids=[f"id_{i}" for i in range(len(chunks))]
    )
else:
    print("⚠ resume.pdf not found. RAG not initialized.")

# -------- Chat Request --------
class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):

    results = collection.query(
        query_embeddings=model.encode([req.message]).tolist(),
        n_results=3
    )

    context = "\n\n".join(results["documents"][0])

    system_prompt = f"""
You are an AI assistant for Hriday Ranawat's portfolio website.

Only answer using the resume context below.
If the question is unrelated, politely say you can only answer questions about Hriday's profile.

Context:
{context}
"""

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": req.message}
        ]
    }

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=data
    )

    result = response.json()
    answer = result["choices"][0]["message"]["content"]

    return {"response": answer}