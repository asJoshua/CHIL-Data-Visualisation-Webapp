"""
The serializer for the ingest endpoints on the API
"""

from rest_framework import serializers
from ..models.ingest_api_model import (
    CryoeggData,
    CryowurstData,
    HydrobeanData
)

class CryoeggSerializer(serializers.ModelSerializer):
    """
    Serializer for cryoegg processed data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = CryoeggData
        fields = CryoeggData.fields

class CryowurstSerializer(serializers.ModelSerializer):
    """
    Serializer for cryowurst processed data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = CryowurstData
        fields = CryowurstData.fields

class HydrobeanSerializer(serializers.ModelSerializer):
    """
    Serializer for hydrobean processed data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = HydrobeanData
        fields = HydrobeanData.fields
