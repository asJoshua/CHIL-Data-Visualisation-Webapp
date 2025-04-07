"""
Defines the API views for handling contact form submissions.
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from chil.serializers.contact_api_serializer import ContactSubmissionSerializer
from chil.services.contact_api_service import create_contact_submission
from chil.models.contact_api_model import ContactSubmission


class ContactSubmitView(APIView):
    """
    API endpoint for submitting contact form data.
    """
    def post(self, request):
        """
        Handles the submission of contact form data via POST request.
        """
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            inquiry = serializer.validated_data['inquiry']

            try:
                contact_submission = create_contact_submission(  # Call the service function
                    name=name,
                    email=email,
                    inquiry=inquiry
                )
                serializer = ContactSubmissionSerializer(contact_submission)  # Serialize the created object
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                # Log the error for debugging
                print(f"Error creating contact submission: {e}")
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactSubmissionListView(APIView):
    """
    Retrieves all contact submissions (admin only).
    """
    # Add permission class to restrict access to admins
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        """
        Retrieves all contact submissions.
        """
        contact_submissions = ContactSubmission.objects.all()
        serializer = ContactSubmissionSerializer(contact_submissions, many=True)
        return Response(serializer.data)