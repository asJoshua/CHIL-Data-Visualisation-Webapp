"""
This module defines API views for retrieving Cryoegg and Cryowurst data.

It utilizes Django REST framework to provide endpoints for fetching raw and
processed data based on IDs, campaign IDs, instrument IDs, and timestamps.
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.dateparse import parse_datetime

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
    cryoegg_get_between_timestamps,
    cryowurst_get_between_timestamps,
)


class CryoeggRawGetByIdView(APIView):
    """
    Get CryoeggRaw by paramId
    """

    def get(self, request):
        """
        Retrieves CryoeggRaw data by its unique paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_raw_get_by_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstRawGetByIdView(APIView):
    """
    Get CryowurstRaw by paramId
    """

    def get(self, request):
        """
        Retrieves CryowurstRaw data by its unique paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_raw_get_by_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggGetByIdView(APIView):
    """
    Get CryoeggData by paramId
    """

    def get(self, request):
        """
        Retrieves Cryoegg data by its unique paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_get_by_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstGetByIdView(APIView):
    """
    Get CryowurstData by paramId
    """

    def get(self, request):
        """
        Retrieves Cryowurst data by its unique paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_get_by_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggRawGetByCampaignIdView(APIView):
    """
    Get CryoeggRaw by campaign paramId
    """

    def get(self, request):
        """
        Retrieves CryoeggRaw data by its campaign paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_raw_get_by_campaign_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstRawGetByCampaignIdView(APIView):
    """
    Get CryowurstRaw by campaign paramId
    """

    def get(self, request):
        """
        Retrieves CryowurstRaw data by its campaign paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_raw_get_by_campaign_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggGetByCampaignIdView(APIView):
    """
    Get CryoeggData by campaign paramId
    """

    def get(self, request):
        """
        Retrieves Cryoegg data by its campaign paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_get_by_campaign_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstGetByCampaignIdView(APIView):
    """
    Get CryowurstData by campaign paramId
    """

    def get(self, request):
        """
        Retrieves Cryowurst data by its campaign paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_get_by_campaign_id(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggRawGetByInstrumentView(APIView):
    """
    Get CryoeggRaw by instrument paramId
    """

    def get(self, request):
        """
        Retrieves CryoeggRaw data by its instrument paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_raw_get_by_instrument(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstRawGetByInstrumentView(APIView):
    """
    Get CryowurstRaw by instrument paramId
    """

    def get(self, request):
        """
        Retrieves CryowurstRaw data by its instrument paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_raw_get_by_instrument(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggGetByInstrumentView(APIView):
    """
    Get CryoeggData by instrument paramId
    """

    def get(self, request):
        """
        Retrieves Cryoegg data by its instrument paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryoegg_get_by_instrument(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstGetByInstrumentView(APIView):
    """
    Get CryowurstData by instrument paramId
    """

    def get(self, request):
        """
        Retrieves Cryowurst data by its instrument paramId.
        """
        id_value = request.query_params.get("paramId")
        if id_value is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "Missing 'paramId' parameter"},
            )
        response = cryowurst_get_by_instrument(paramId=id_value)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryoeggGetBetweenTimestampsView(APIView):
    """
    Get CryoeggData entries between two timestamps
    """

    def get(self, request):
        """
        Retrieves CryoeggData entries between given start and end timestamps.
        """
        start_timestamp_str = request.query_params.get("start_timestamp")
        end_timestamp_str = request.query_params.get("end_timestamp")

        if not start_timestamp_str or not end_timestamp_str:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "error": "Both 'start_timestamp' and 'end_timestamp' parameters are required."
                },
            )

        start_timestamp = parse_datetime(start_timestamp_str)
        end_timestamp = parse_datetime(end_timestamp_str)

        if not start_timestamp or not end_timestamp:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "error": "Invalid timestamp format. "
                    + "Please use a valid datetime format (e.g., ISO 8601)."
                },
            )

        response = cryoegg_get_between_timestamps(
            start_timestamp=start_timestamp, end_timestamp=end_timestamp
        )

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))


class CryowurstGetBetweenTimestampsView(APIView):
    """
    Get CryowurstData entries between two timestamps
    """

    def get(self, request):
        """
        Retrieves CryowurstData entries between given start and end timestamps.
        """
        start_timestamp_str = request.query_params.get("start_timestamp")
        end_timestamp_str = request.query_params.get("end_timestamp")

        if not start_timestamp_str or not end_timestamp_str:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "error": "Both 'start_timestamp' and 'end_timestamp' parameters are required."
                },
            )

        start_timestamp = parse_datetime(start_timestamp_str)
        end_timestamp = parse_datetime(end_timestamp_str)

        if not start_timestamp or not end_timestamp:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "error": "Invalid timestamp format. "
                    + "Please use a valid datetime format (e.g., ISO 8601)."
                },
            )

        response = cryowurst_get_between_timestamps(
            start_timestamp=start_timestamp, end_timestamp=end_timestamp
        )

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=list(response.values()))
