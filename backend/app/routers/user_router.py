from fastapi import APIRouter
from app.database.connection import SessionLocal
from app.models.user import User
from app.schemas.user_schema import UserCreate

router = APIRouter()

@router.post("/users")
def create_user(user: UserCreate):

    db = SessionLocal()

    new_user = User(
        name=user.name,
        email=user.email
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully",
        "id": new_user.id
    }

@router.get("/users")
def get_users():

    db = SessionLocal()

    users = db.query(User).all()

    return users  
  

