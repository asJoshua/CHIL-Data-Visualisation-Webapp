"""
    Test the newsletter view
"""

from django.urls import reverse
from django.test import TestCase
from rest_framework import status
from ..models.newsletter_model import Subscribers

class NewsletterSignupTestCase(TestCase):
    """
    Test cases for the NewsletterSignup view.
    """

    def setUp(self):
        """Setup for the newsletter subscription tests."""
        self.url = reverse('signup')
        self.valid_email = 'test@test.com'
        self.invalid_email = 'test.com'
        self.data_valid = {'email': self.valid_email}
        self.data_invalid = {'email': self.invalid_email}

    def test_valid_email_subscription(self):
        """
        Test that a valid email can be subscribed and saves to the database.
        """
        response = self.client.post(self.url, self.data_valid, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertTrue(Subscribers.objects.using('newsletterdb').filter(email=self.valid_email).exists())
    
    def test_invalid_email_subscription(self):
        """
        Test that an invalid email returns a 400 status code.
        """
        response = self.client.post(self.url, self.data_invalid, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.content)
        self.assertFalse(Subscribers.objects.using('newsletterdb').filter(email=self.invalid_email).exists())

    def test_duplicate_email_subscription(self):
        """
        Test that an email that's already subscribed returns an error.
        """
        # First subscription
        self.client.post(self.url, self.data_valid, format='json')
        
        # Try to subscribe again with the same email
        response = self.client.post(self.url, self.data_valid, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.content)
        self.assertEqual(response.data['error'], "This email is already subscribed")
    
    def test_missing_email(self):
        """
        Test that a request without an email results in a 400 response.
        """
        data = {}  # No email provided
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.content)
