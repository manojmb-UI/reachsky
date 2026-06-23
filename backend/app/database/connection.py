from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = "mysql+pymysql://root:KKjVQigeAivtYMNdWYwrKgBXduVfguYk@reseau.proxy.rlwy.net:33443/railway"

engine = create_engine(DATABASE_URL)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)