# from fastapi import APIRouter
# from app.database.connection import SessionLocal
# from app.models.lead import Lead
# from app.schemas.lead_schema import LeadCreate

# router = APIRouter()

# @router.post("/leads")
# def create_lead(lead: LeadCreate):

#     db = SessionLocal()

#     new_lead = Lead(
#         name=lead.name,
#         email=lead.email,
#         phone_number=lead.phone_number,
#         course=lead.course,
#         message=lead.message
#     )

#     db.add(new_lead)
#     db.commit()
#     db.refresh(new_lead)

#     return {
#         "message": "Lead created successfully",
#         "id": new_lead.id
#     }


# @router.get("/leads")
# def get_leads():

#     db = SessionLocal()

#     leads = db.query(Lead).all()

#     return leads
from fastapi import APIRouter
import logging
from app.database.connection import SessionLocal
from app.models.lead import Lead
from app.schemas.lead_schema import LeadCreate
from app.utils.email import send_lead_email

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("/leads")
async def create_lead(lead: LeadCreate):

    db = SessionLocal()

    new_lead = Lead(
        name=lead.name,
        email=lead.email,
        phone_number=lead.phone_number,
        course=lead.course,
        message=lead.message
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    try:
        await send_lead_email(lead)
        logger.info(f"Email sent successfully for lead ID: {new_lead.id}")
    except Exception as e:
        logger.error(f"Failed to send email for lead ID: {new_lead.id}: {str(e)}")

    return {
        "message": "Lead created successfully",
        "id": new_lead.id
    }