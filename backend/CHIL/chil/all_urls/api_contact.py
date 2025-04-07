"""
Defines the URL patterns for the contact API.
"""
from django.urls import path
from chil.views.contact_api_view import ContactSubmitView
from chil.views.contact_api_view import ContactSubmissionListView

urlpatterns = [
    path('submit/', ContactSubmitView.as_view(), name='contact-submit'),
    path('submissions/', ContactSubmissionListView.as_view(), name='contact-submissions'),
]
