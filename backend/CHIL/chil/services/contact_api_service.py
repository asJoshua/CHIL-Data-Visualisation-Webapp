"""
Defines the service layer for handling contact form submissions.
"""
from django.db import transaction
from chil.models.contact_api_model import ContactSubmission

@transaction.atomic
def create_contact_submission(
    *,
    name: str,
    email: str,
    inquiry: str
) -> ContactSubmission:
    """
    Creates a new contact submission entry in the database.
    """
    contact_submission = ContactSubmission(
        name=name,
        email=email,
        inquiry=inquiry
    )
    contact_submission.full_clean()  # Validate the data
    contact_submission.save()
    return contact_submission
