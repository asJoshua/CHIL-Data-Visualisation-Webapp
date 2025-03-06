"""
Views for the Instrument API endpoints endpoints
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..serializers import (
    InstrumentTypeSerializer,
    InstrumentSerializer
)

from ..services import (
    instrument_type_create,
    instrument_create
)

class InstrumentTypeCreateView(APIView):
    """
    Create a new instrument type endpoint
    """

    def post(self, request):
        """Create a new instrument type"""
        serializer = InstrumentTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        instrument_type_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

class InstrumentCreateView(APIView):
    """
    Create instrument endpoint
    """

    def post(self, request):
        """Create a new instrument of a specifed type"""
        serializer = InstrumentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        instrument_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)
