from fastapi import FastAPI, Query
from services.ola import get_ola_estimate
from services.uber import get_uber_estimate
from services.rapido import get_rapido_estimate

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="VOOM API",
    description="An API to compare fares across Ola, Uber, and Rapido 🚖",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Welcome to VOOM API 🚕"}

@app.get("/compare")
def compare_services(
    pickup: str = Query(..., description="Pickup location"),
    drop: str = Query(..., description="Drop location")
):
    """
    Compare cab estimates across Ola, Uber, and Rapido.
    Returns dummy data for now.
    """
    return {
        "pickup": pickup,
        "drop": drop,
        "ola": get_ola_estimate(pickup, drop),
        "uber": get_uber_estimate(pickup, drop),
        "rapido": get_rapido_estimate(pickup, drop)
    }
