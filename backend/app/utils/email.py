import os
import resend
from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")


async def send_lead_email(lead):
    params = {
        "from": os.getenv("MAIL_FROM"),
        "to": ["pottervishnu3@gmail.com"],
        "subject": "New Lead Received",
        "html": f"""
        <h2>New Lead Received</h2>

        <p><b>Name:</b> {lead.name}</p>
        <p><b>Email:</b> {lead.email}</p>
        <p><b>Phone:</b> {lead.phone_number}</p>
        <p><b>Course:</b> {lead.course}</p>
        <p><b>Message:</b> {lead.message}</p>
        """
    }

    try:
        resend.Emails.send(params)
        print("Email sent successfully")
    except Exception as e:
        print("Email Error:", e)
        raise