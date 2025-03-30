"""
Defines the access models, used to restrict deployment access to certain users
"""

from django.db import models
from django.conf import settings
from ..models.deployment_api_model import Deployment

class DeploymentAccess(models.Model):
    """
    Represents the access each collaborator has with deployments
    """

    class Meta:
        """Override settings"""
        db_table = "deployment_access_table"

    deployment_id = models.ForeignKey(Deployment, on_delete=models.CASCADE)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    fields = [
        'deployment_id_id',
        'user_id_id'
    ]