import logging
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.newsletter_model import Subscribers

logger = logging.getLogger(__name__)

class NewsletterSignup(APIView):
    def post(self, request, format=None):
        data = self.request.data
        email = data.get('email')
        link = 'http://localhost:5173/home'

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            Subscribers.objects.using('newsletterdb').create(email=email)

            send_mail(
                subject='Welcome to the CHIL Newsletter!',
                message=f'''
                Hi there!,

                Thank you fro subscribing to our news letter!

                Our goal is to provide you with weekly updates on how our research is going.

                Click the link below to be redirected to the CHIL home page:

                {link}''',
                from_email='chilnewsletter2025@gmail.com',
                recipient_list=[email],
                fail_silently=False  # Ensure errors raise exceptions
            )

            return Response(
                {'success': 'Contact added to the newsletter, and an email has been sent!'},
                status=status.HTTP_200_OK
            )

        except Exception as e:
            logger.error(f"Error during newsletter signup: {e}")  # Log the actual error
            return Response(
                {'error': 'There was an error saving your information or sending the email.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


# import logging
# from django.core.mail import send_mail
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from ..serializers.newsletter_serializer import NewsletterSignupSerializer

# logger = logging.getLogger(__name__)

# class NewsletterSignup(APIView):
#     def post(self, request, format=None):
#         serializer = NewsletterSignupSerializer(data=request.data) 
#         link = 'http://localhost:5173/home'

#         if serializer.is_valid():
#             email = serializer.validated_data.get("email")

#             try:
#                 serializer.save(using="newsltterdb")
                
#                 send_mail(
#                     subject='Welcome to the CHIL Newsletter!',
#                     message=f'''
#                     Hi there!,

#                     Thank you fro subscribing to our news letter!

#                     Our goal is to provide you with weekly updates on how our research is going.

#                     Click the link below to be redirected to the CHIL home page:

#                     {link}''',
#                     from_email='chilnewsletter2025@gmail.com',
#                     recipient_list=[email],
#                     fail_silently=False  # Ensure errors raise exceptions
#                 )

#                 return Response(
#                     {'success': 'Contact added to the newsletter, an email has been sent!'},
#                     status=status.HTTP_200_OK
#                 )

#             except Exception as e:
#                 logger.error(f"Error during newsletter signup: {e}")
#                 return Response(
#                     {'error': 'There was an error saving your information or sending the email.'},
#                     status=status.HTTP_500_INTERNAL_SERVER_ERROR
#                 )
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)