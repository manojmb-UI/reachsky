from fastapi import APIRouter

router = APIRouter()


@router.post("/users")
def create_user():
    return {
        "message": "User registration is temporarily unavailable"
    }


@router.get("/users")
def get_users():
    return {
        "message": "User listing is temporarily unavailable"
    }