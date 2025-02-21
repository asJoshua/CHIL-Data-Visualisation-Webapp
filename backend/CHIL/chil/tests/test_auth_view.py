"""
    Test the auth view
"""

from django.urls import reverse
from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework import status

class CookieTokenObtainPairViewTestCase(TestCase):
    """
    Class for the test
    """
    fixtures = ['test-accounts']

    def setUp(self):
        """Setup for the auth tests"""
        self.username = 'Adminsds'
        self.password = '12345'
        self.data = {
            'username': self.username,
            'password': self.password
        }

    def test_provides_both_tokens_on_correct_credentials(self):
        """
            Ensure that both a token and refresh token are sent when given
            correct credentials
        """
        # Get the actual URL from the name as defined in urls.py
        url = reverse('token_obtain_pair')

        user = User.objects.create_superuser(username=self.username, password=self.password)
        self.assertEqual(user.is_active, 1, 'Active User')

        response = self.client.post(url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)
        self.assertEqual(len(response.data['access']), 244, 'Token exists in body')
        self.assertIs(len(response.client.cookies['refresh_token'].value), 245, 'Refresh Token exists in header')
