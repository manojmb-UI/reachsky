from sqlalchemy import Column, Integer, String, Text
from app.database.base import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)
    phone_number = Column(String(20), nullable=False)
    email = Column(String(100), nullable=False)
    course = Column(String(100), nullable=False)  # Selected course from dropdown
    message = Column(Text, nullable=True)         # Textarea content