"""
The serializer for the campaign endpoints on the API
"""

from rest_framework import serializers
from ..models.campaign_api_model import Campaign

class CampaignSerializer(serializers.ModelSerializer):
    """
    Serializer for Campaign
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = Campaign
        # fields = [
        #    'campaign_id',
        #    'name',
        #    'description',
        #    'latitude',
        #    'longitude',
        #    'elevation',
        #    'start_timestamp',
        #    'end_timestamp'
        # ]

        fields = Campaign.fields
