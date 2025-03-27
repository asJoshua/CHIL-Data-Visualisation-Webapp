"""
The serializer for the deployment endpoints on the API
"""

from rest_framework import serializers
from ..models.deployment_api_model import (
    Deployment,
)

class DeploymentSerializer(serializers.ModelSerializer):
    """
    Serializer for Deployment
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = Deployment
        # fields = [
        # 'deployment_id',
        # 'description',
        # 'start_timestamp',
        # 'end_timestamp'
        # ]

        fields = Deployment.fields
