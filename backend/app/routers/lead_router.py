from fastapi import APIRouter
import logging

from app.schemas.lead_schema import LeadCreate
from app.utils.email import send_lead_email

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("/leads")
async def create_lead(lead: LeadCreate):

    try:
        # Send lead details by email
        await send_lead_email(lead)

        logger.info(
            f"Email sent successfully for lead: {lead.email}"
        )

        return {
            "message": "Lead submitted successfully"
        }

    except Exception as e:
        logger.error(
            f"Failed to send lead email: {str(e)}"
        )

        return {
            "message": "Lead submission failed",
            "error": str(e)
        }