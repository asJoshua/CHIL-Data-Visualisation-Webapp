"""
The URLS for newsletter sign-up
"""

from django.urls import path
from ..views.newsletter_view import NewsletterSignup

urlpatterns = [
    path('signup/', NewsletterSignup.as_view()),
]
