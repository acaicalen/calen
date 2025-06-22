from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
import dotenv

dotenv.load_dotenv()
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Gemini --- #
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
# GEMINI_PRO_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"


class ChatRequest(BaseModel):
    message: str
# -------------- #

# --- uvicorn main:app --reload で起動--- #
@app.get("/")
def read_root():
    print(GEMINI_API_KEY)
    return {"Hello": "World"}
   
@app.post("/chat")
async def chat(req: ChatRequest):
    headers = {
        "Content-Type": "application/json"
    }
    payload = {
        "contents": [{"parts": [{"text": req.message}]}],
    }
    response = requests.post(
        f"{GEMINI_URL}?key={GEMINI_API_KEY}",
        headers=headers,
        json=payload
    )
    
    print(response)
    
    if response.status_code == 200:
        data = response.json()
        reply = data["candidates"][0]["content"]["parts"][0]["text"]
        return {"reply": reply}
    else:
        return {"reply": "Error: Unable to reach Gemini API"}

# -------------- #