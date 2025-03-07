"""
    Test the newsletter view
"""

from unittest.mock import patch, MagicMock
from django.urls import reverse
from django.test import TestCase
from rest_framework import status

class NewsletterSignupTestCase(TestCase):
    """
    class for newsletter view
    """

    database = ["newsletterdb"]

    def setUp(self):
        """Set up initial test data"""
        self.url = reverse('signup')
        self.email = 'testuser@example.com'
        self.data = {
            'email': self.email
            }

    @patch('chil.models.newsletter_model.Subscribers.objects.using')
    def test_newsletter_signup_already_subscribed(self, mock_db):
        """
        User can't subscribe twice with the same email.
        """
        # Mocking the database query
        mock_subscribers = MagicMock()
        mock_db.return_value = mock_subscribers

        # Mocking email already exists
        mock_subscribers.filter.return_value.exists.return_value = True

        response = self.client.post(self.url, self.data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], "This email is already subscribed")

    @patch('chil.models.newsletter_model.Subscribers.objects.using')
    def test_newsletter_signup_no_email(self, mock_db):
        """
        400 error is returned when no email is provided.
        """
        data = {}
        response = self.client.post(self.url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
