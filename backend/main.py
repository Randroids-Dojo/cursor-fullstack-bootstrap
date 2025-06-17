from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from deps import get_db
import crud

app = FastAPI(title="Fullstack Bootstrap API")

# During local dev the frontend runs on 5173
origins = [
    os.getenv("FRONTEND_ORIGIN", "http://localhost:5173"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthz", tags=["health"])
async def healthcheck():
    """Simple liveness probe for Docker / k8s."""
    return {"status": "ok"}


@app.post("/counter/increment", tags=["counter"])
async def counter_inc(db=Depends(get_db)):
    new_val = crud.increment_counter(db)
    return {"value": new_val} 