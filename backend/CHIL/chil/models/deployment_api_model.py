"""
Defines the deployment model, used to represent instruments in the API
"""

from django.db import models
from django.core.exceptions import ValidationError
from ..models.campaign_api_model import Campaign
from ..models.instrument_api_model import Instrument

class DeploymentInstrument(models.Model):
    """
    Represents all instruments within given deployments
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "instrument_deployment_table"

    deployment_id = models.BigAutoField(primary_key=True)
    description = models.TextField()
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    start_timestamp = models.DateField()
    end_timestamp = models.DateField()

    fields = [
        'deployment_id',
        'description',
        'campaign',
        'instrument',
        'start_timestamp',
        'end_timestamp'
    ]

    def clean(self):
        if self.start_timestamp > self.end_timestamp:
            raise ValidationError("start_timestamp cannot be before end_timestamp")

    def __str__(self):
        return str(self.deployment_id)

class Deployment(models.Model):
    """
    Represents a deployment.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "deployment_table"

    deployment_id = models.BigAutoField(primary_key=True)
    description = models.TextField()
    start_timestamp = models.DateField()
    end_timestamp = models.DateField()

    fields = [
        'deployment_id',
        'description',
        'start_timestamp',
        'end_timestamp'
    ]

    def clean(self):
        if self.start_timestamp > self.end_timestamp:
            raise ValidationError("start_timestamp cannot be before end_timestamp")

    def __str__(self):
        return str(self.deployment_id)
