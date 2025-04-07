"""
Defines the Django model for storing contact form submissions.
"""
from django.db import models

class ContactSubmission(models.Model):
    """
    Represents a contact form submission received from users.
    """
    name = models.CharField(max_length=255)
    email = models.EmailField()
    inquiry = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"