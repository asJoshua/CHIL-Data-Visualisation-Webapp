from django.urls import path
from chil.contact_view import ContactSubmitView

urlpatterns = [
    path('submit/', ContactSubmitView.as_view(), name='contact-submit'),
]