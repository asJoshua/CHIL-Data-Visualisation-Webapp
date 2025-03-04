"""
The serializer for Newsletter signup
model: Specifies that this serializer is associated with the `Subscribers` model.
fields: Lists the fields to be serialized. In this case, it includes only the `email` field.
"""

from rest_framework import serializers
from ..models.newsletter_model import Subscribers

# pylint: disable=too-few-public-methods
class NewsletterSignupSerializer(serializers.ModelSerializer):
    """
    Serializer for handling newsletter subscription sign-ups.
    """
    class Meta:
        """
        Meta class to configure the behavior of the NewsletterSignupSerializer.
        Specifies the model to use (Subscribers) and the fields to include (email).
        """
        model = Subscribers
        fields = ["email"]
