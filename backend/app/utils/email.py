from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import load_dotenv
import os

load_dotenv()

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT")),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_STARTTLS=os.getenv("MAIL_STARTTLS") == "True",
    MAIL_SSL_TLS=os.getenv("MAIL_SSL_TLS") == "True",
    USE_CREDENTIALS=True,
)

async def send_lead_email(lead):
    html = f"""
    <h2>New Lead Received</h2>

    <p><b>Name:</b> {lead.name}</p>
    <p><b>Email:</b> {lead.email}</p>
    <p><b>Phone:</b> {lead.phone_number}</p>
    <p><b>Course:</b> {lead.course}</p>
    <p><b>Message:</b> {lead.message}</p>
    """

    message = MessageSchema(
        subject="New Lead Received",
        recipients=["pottervishnu3@gmail.com"],  # recipient email
        body=html,
        subtype="html"
    )


    # fm = FastMail(conf)
    # await fm.send_message(message)

    try:
        fm = FastMail(conf)
        await fm.send_message(message)
        print("Email sent successfully")
    except Exception as e:
        print("Email Error:", str(e))
        raise e