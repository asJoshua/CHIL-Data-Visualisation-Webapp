"""
Defines the serializer for the ContactSubmission model.
"""
from rest_framework import serializers
from chil.models.contact_api_model import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    """
    Serializer for the ContactSubmission model, used for API representation.
    """
    class Meta: # pylint: disable=too-few-public-methods 
        """
        Configures the ContactSubmissionSerializer to map to the ContactSubmission model
        and specify the fields to be included in the serialized output.
        """
        model = ContactSubmission
        fields = ['name', 'email', 'inquiry']
