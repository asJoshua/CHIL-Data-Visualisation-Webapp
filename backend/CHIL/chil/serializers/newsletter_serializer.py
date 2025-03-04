from rest_framework import serializers
from ..models.newsletter_model import Subscribers

class NewsletterSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = ["email", "subscribed_at"]

    def validate_email(self, value):
        """Check if email is valid and not already subscribed"""
        if Subscribers.objects.using('newsletterdb').filter(email=value).exists():
            raise serializers.ValidationError("This email is already subscribed.")
        return value