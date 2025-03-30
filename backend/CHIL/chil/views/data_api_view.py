from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.dateparse import parse_datetime

from ..services.data_api_service import (
    cryoegg_raw_get_by_id,
    cryowurst_raw_get_by_id,
    cryoegg_get_by_id,
    cryoegg_get_all,
    cryowurst_get_by_id,
    cryoegg_raw_get_by_campaign_id,
    cryowurst_raw_get_by_campaign_id,
    cryoegg_get_by_campaign_id,
    cryowurst_get_by_campaign_id,
    cryoegg_raw_get_by_instrument,
    cryowurst_raw_get_by_instrument,
    cryoegg_get_by_instrument,
    cryowurst_get_by_instrument,
    cryoegg_get_between_timestamps,
    cryowurst_get_between_timestamps,
    cryowurst_get_all,
    cryowurst_get_by_uid
)

class CryoeggRawGetByIdView(APIView):
    """
    Get CryoeggRaw by id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_raw_get_by_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByIdView(APIView):
    """
    Get CryowurstRaw by id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_raw_get_by_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByIdView(APIView):
    """
    Get CryoeggData by id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_get_by_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))
    
class CryoeggGetAllView(APIView):
    """
    Get all Cryoeggs
    """

    def get(self, _):
        """Gets all cryoeggs"""
        response = cryoegg_get_all()

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = list(response)
        return Response(data, status=status.HTTP_200_OK)

class CryowurstGetByIdView(APIView):
    """
    Get CryowurstData by id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_get_by_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))
    
class CryowurstGetByUidView(APIView):
    """
    Get CryowurstData by uid
    """

    def get(self, request):
        uid_value = request.query_params.get('uid')
        if uid_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_get_by_uid(uid=uid_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))
    
class CryowurstGetAllView(APIView):
    """
    Get all Cryowursts
    """

    def get(self, _):
        """Gets all cryowursts"""
        response = cryowurst_get_all()

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = list(response)
        return Response(data, status=status.HTTP_200_OK)

class CryoeggRawGetByCampaignIdView(APIView):
    """
    Get CryoeggRaw by campaign id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_raw_get_by_campaign_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByCampaignIdView(APIView):
    """
    Get CryowurstRaw by campaign id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_raw_get_by_campaign_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByCampaignIdView(APIView):
    """
    Get CryoeggData by campaign id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_get_by_campaign_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetByCampaignIdView(APIView):
    """
    Get CryowurstData by campaign id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_get_by_campaign_id(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggRawGetByInstrumentView(APIView):
    """
    Get CryoeggRaw by instrument id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_raw_get_by_instrument(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstRawGetByInstrumentView(APIView):
    """
    Get CryowurstRaw by instrument id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_raw_get_by_instrument(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryoeggGetByInstrumentView(APIView):
    """
    Get CryoeggData by instrument id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryoegg_get_by_instrument(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetByInstrumentView(APIView):
    """
    Get CryowurstData by instrument id
    """

    def get(self, request):
        id_value = request.query_params.get('id')
        if id_value is None:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Missing 'id' parameter"})
        response = cryowurst_get_by_instrument(id=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))
    
class CryoeggGetBetweenTimestampsView(APIView):
    """
    Get CryoeggData entries between two timestamps
    """

    def get(self, request):
        start_timestamp_str = request.query_params.get('start_timestamp')
        end_timestamp_str = request.query_params.get('end_timestamp')

        if not start_timestamp_str or not end_timestamp_str:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Both 'start_timestamp' and 'end_timestamp' parameters are required."}
            )

        start_timestamp = parse_datetime(start_timestamp_str)
        end_timestamp = parse_datetime(end_timestamp_str)

        if not start_timestamp or not end_timestamp:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Invalid timestamp format. Please use a valid datetime format (e.g., YYYY-MM-DDTHH:MM:SSZ)."}
            )

        response = cryoegg_get_between_timestamps(
            start_timestamp=start_timestamp,
            end_timestamp=end_timestamp
        )

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))

class CryowurstGetBetweenTimestampsView(APIView):
    """
    Get CryowurstData entries between two timestamps
    """

    def get(self, request):
        start_timestamp_str = request.query_params.get('start_timestamp')
        end_timestamp_str = request.query_params.get('end_timestamp')

        if not start_timestamp_str or not end_timestamp_str:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Both 'start_timestamp' and 'end_timestamp' parameters are required."}
            )

        start_timestamp = parse_datetime(start_timestamp_str)
        end_timestamp = parse_datetime(end_timestamp_str)

        if not start_timestamp or not end_timestamp:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Invalid timestamp format. Please use a valid datetime format (e.g., YYYY-MM-DDTHH:MM:SSZ)."}
            )

        response = cryowurst_get_between_timestamps(
            start_timestamp=start_timestamp,
            end_timestamp=end_timestamp
        )

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))