"""
Views for Newsletter endpoints
"""

from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.newsletter_model import Subscribers

class NewsletterSignup(APIView):
    """
    Views for Newsletter endpoints
    """
    def post(self, _):
        """
        Handle the subscription to the newsletter.

        This method extracts the email address from the request data, checks for its validity,
        saves the email to the database as a new subscriber, and sends a welcome email to the user.
        """
        data = self.request.data
        email = data.get('email')
        # can be updated later on
        link = 'http://localhost:5173/home'

        if not email:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if Subscribers.objects.filter(email=email).exists():# pylint: disable=no-member

            return Response({"error": "This email is already subscribed"},
                            status=status.HTTP_400_BAD_REQUEST)

        try:
            Subscribers.objects.create(email=email)# pylint: disable=no-member

            send_mail(
# the message is not indented because it looks funny when receiving emails on mobile phones.
                subject='Welcome to the CHIL Newsletter!',
                message=f'''
Hi there!,

Thank you for subscribing to our newsletter!
Our goal is to provide you with weekly updates on how our research is going...

Click the link below to be redirected to the CHIL home page:
{link}''',
                from_email='CHIL Newsletter <chilnewsletter2025@gmail.com>',
                recipient_list=[email],
                fail_silently=False
            )

            return Response(
                status=status.HTTP_200_OK
            )

        except Exception as e: # pylint: disable=broad-exception-caught
            return Response(
                {e: "There was an error sending the request"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
