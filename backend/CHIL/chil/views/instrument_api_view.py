"""
Views for the Instrument API endpoints endpoints
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..utils import (
    authenticate_by_group
)

from ..serializers import (
    InstrumentTypeSerializer,
    InstrumentSerializer
)

from ..services import (
    instrument_type_create,
    instrument_create,
    instrument_get_by_id,
    instrument_update
)

class InstrumentTypeCreateView(APIView):
    """
    Create a new instrument type endpoint
    """

    def post(self, request):
        """Create a new instrument type"""

        auth_result = authenticate_by_group(request, ['admin'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

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

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = InstrumentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        instrument_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

class InstrumentGetView(APIView):
    """
    Get Instrument by id
    """

    def get(self, request):
        """Gets an instrument by id"""
        response = instrument_get_by_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

class InstrumentUpdateView(APIView):
    """
    Update instrument by id
    """

    def put(self, request):
        """Updates an instrument by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        # serializer = InstrumentSerializer(data=request.data)
        # serializer.is_valid(raise_exception=True)

        instrument_update(id=request.data['id'], data=request.data)

        return Response(status=status.HTTP_200_OK)
