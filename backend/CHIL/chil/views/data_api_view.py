from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..services.data_api_service import (
    cryoegg_raw_get_by_id,
    cryowurst_raw_get_by_id,
    cryoegg_get_by_id,
    cryowurst_get_by_id,
    cryoegg_raw_get_by_campaign_id,
    cryowurst_raw_get_by_campaign_id,
    cryoegg_get_by_campaign_id,
    cryowurst_get_by_campaign_id,
    cryoegg_raw_get_by_instrument,
    cryowurst_raw_get_by_instrument,
    cryoegg_get_by_instrument,
    cryowurst_get_by_instrument,
)

class CryoeggRawGetByIdView(APIView):
    """
    Get CryoeggRaw by id
    """

    def get(self, request):
        response = cryoegg_raw_get_by_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByIdView(APIView):
    """
    Get CryowurstRaw by id
    """

    def get(self, request):
        response = cryowurst_raw_get_by_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByIdView(APIView):
    """
    Get CryoeggData by id
    """

    def get(self, request):
        response = cryoegg_get_by_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetByIdView(APIView):
    """
    Get CryowurstData by id
    """

    def get(self, request):
        response = cryowurst_get_by_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggRawGetByCampaignIdView(APIView):
    """
    Get CryoeggRaw by campaign id
    """

    def get(self, request):
        response = cryoegg_raw_get_by_campaign_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByCampaignIdView(APIView):
    """
    Get CryowurstRaw by campaign id
    """

    def get(self, request):
        response = cryowurst_raw_get_by_campaign_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByCampaignIdView(APIView):
    """
    Get CryoeggData by campaign id
    """

    def get(self, request):
        response = cryoegg_get_by_campaign_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetByCampaignIdView(APIView):
    """
    Get CryowurstData by campaign id
    """

    def get(self, request):
        response = cryowurst_get_by_campaign_id(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggRawGetByInstrumentView(APIView):
    """
    Get CryoeggRaw by instrument id
    """

    def get(self, request):
        response = cryoegg_raw_get_by_instrument(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByInstrumentView(APIView):
    """
    Get CryowurstRaw by instrument id
    """

    def get(self, request):
        response = cryowurst_raw_get_by_instrument(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByInstrumentView(APIView):
    """
    Get CryoeggData by instrument id
    """

    def get(self, request):
        response = cryoegg_get_by_instrument(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetByInstrumentView(APIView):
    """
    Get CryowurstData by instrument id
    """

    def get(self, request):
        response = cryowurst_get_by_instrument(id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))