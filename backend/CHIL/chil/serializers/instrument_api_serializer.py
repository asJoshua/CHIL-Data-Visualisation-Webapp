"""
The serializer for the instrument endpoints on the API
"""

from rest_framework import serializers
from ..models import (
    InstrumentType,
    Instrument
)
class InstrumentTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for Instrument Type
    """

    class Meta():
        model = InstrumentType
        fields = [
            'instrument_type_id',
            'instrument_name'
        ]


class InstrumentSerializer(serializers.ModelSerializer):
    """
    Serializer for Instrument
    """

    class Meta():
        model = Instrument
        fields = [
            'instrument_id',
            'type',
            'manufacture_date',
            'manufacture_batch',
            'commission_date',
            'notes',
            'pressure_keller_min',
            'pressure_keller_max'
        ]
