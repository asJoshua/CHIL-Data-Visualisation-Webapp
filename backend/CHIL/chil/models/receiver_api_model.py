"""
Defines the receiver model, used to represent receivers in the API
"""

from django.db import models
from django.core.exceptions import ValidationError

class Receiver(models.Model):
    """
    Represents a receiver.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "receiver_table"

    receiver_id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    type = models.TextField()
    imei_number = models.TextField(null=True, blank=True)
    manufacture_date = models.DateField(null=True, blank=True)
    manufacture_batch = models.TextField(null=True, blank=True)
    commission_date = models.DateField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)

    fields = ["receiver_id", 
              "name",
              "type",
              "imei_number",
              "manufacture_date",
              "manufacture_batch",
              "commission_date",
              "notes"]

    def clean(self):
        if self.commission_date > self.manufacture_date:
            raise ValidationError("manufacture_date cannot be before commision_date")

    def __str__(self):
        return str(self.receiver_id)
    
class ReceiverDeployment(models.Model):
    """
    Represents a receivers deployment.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "receiver_deployments_table"

    receiver_deployment_id = models.AutoField(primary_key=True)
    deployment_id = models.ForeignKey(Deployment, on_delete=models.CASCADE)
    campaign_id = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    receiver_id = models.ForeignKey(Receiver, on_delete=models.CASCADE)
    firmware_version = models.TextField(null=True, blank=True)
    antenna_type = models.TextField(null=True, blank=True)
    start_timestamp = models.DateField()
    end_timestamp = models.DateField(null=True, blank=True)
    service_timestamp = models.DateField(null=True, blank=True)
    original_latitude = models.FloatField(null=True, blank=True)
    original_longitude = models.FloatField(null=True, blank=True)
    original_elevation = models.FloatField(null=True, blank=True)
    latest_latitude = models.FloatField(null=True, blank=True)
    latest_longitude = models.FloatField(null=True, blank=True)
    latest_elevation = models.FloatField(null=True, blank=True)

    fields = ["receiver_deployment_id", 
              "deployment_id",
              "campaign_id",
              "receiver_id",
              "firmware_version",
              "antenna_type",
              "start_timestamp",
              "end_timestamp",
              "service_timestamp",
              "original_latitude",
              "original_longitude",
              "original_elevation",
              "latest_latitude",
              "latest_longitude",
              "latest_elevation"
              ]

    def __str__(self):
        return str(self.receiver_deployment_id)