"""
The serializer for the deployment access
"""

from rest_framework import serializers
from ..models.deployment_access_model import DeploymentAccess

class DeploymentAccessSerializer(serializers.ModelSerializer):
    """
    Serializer for DeploymentAccess
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = DeploymentAccess

        fields = DeploymentAccess.fields
