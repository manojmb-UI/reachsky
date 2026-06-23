from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = (
   "mysql://root:KKjVQigeAivtYMNdWYwrKgBXduVfguYk@reseau.proxy.rlwy.net:33443/railway"
)

engine = create_engine(DATABASE_URL)

print("DB_HOST =", os.getenv("DB_HOST"))
print("DB_PORT =", os.getenv("DB_PORT"))
print("DB_USER =", os.getenv("DB_USER"))
print("DB_NAME =", os.getenv("DB_NAME"))

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)