from pydantic import BaseModel

class FareRequest(BaseModel):
    pickup: str
    drop: str
