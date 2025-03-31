"""
The serializer for the receiver endpoints on the API
"""

from rest_framework import serializers
from ..models.receiver_api_model import (
    Receiver,
    ReceiverDeployment
)
class ReceiverSerializer(serializers.ModelSerializer):
    """
    Serializer for receiver
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = Receiver
        fields = Receiver.fields


class ReceiverDeploymentSerializer(serializers.ModelSerializer):
    """
    Serializer for receiver deployments
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = ReceiverDeployment
        fields = ReceiverDeployment.fields
