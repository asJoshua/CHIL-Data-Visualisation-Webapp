"""
Defines the campaign model, used to represent campaigns in the API
"""

from django.db import models
from django.core.exceptions import ValidationError

class Campaign(models.Model):
    """
    Represent a campaign.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "campaign_table"

    campaign_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    elevation = models.FloatField()
    start_timestamp = models.CharField(max_length=255)
    end_timestamp = models.CharField(max_length=255)

    fields = [
        'campaign_id',
        'name',
        'description',
        'latitude',
        'longitude',
        'elevation',
        'start_timestamp',
        'end_timestamp'
    ]

    def clean(self):
        if self.start_timestamp > self.end_timestamp:
            raise ValidationError("end_timestamp cannot be before start_timestamp")

    def __str__(self):
        return str(self.campaign_id)
