from pydantic import BaseModel

class LeadCreate(BaseModel):
    name: str
    email: str
    phone_number: str
    course: str
    message: str