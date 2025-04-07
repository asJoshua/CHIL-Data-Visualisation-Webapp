from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from chil.serializers.contact_api_serializer import ContactSubmissionSerializer
from chil.services.contact_api_service import create_contact_submission  # Import the service function
from chil.models.contact_api_model import ContactSubmission  # Import your model
from rest_framework import permissions  # Import permissions - ADD THIS LINE

class ContactSubmitView(APIView):
    def post(self, request):
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
                return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                # Handle potential errors from the service (e.g., validation errors)
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