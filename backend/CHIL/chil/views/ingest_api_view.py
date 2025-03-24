"""
Views for the Ingest API endpoints endpoints
"""

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..services.ingest_api_service import(
    process_csv_data
)

from ..utils import (
    authenticate_by_group
)

class IngestCsvData(APIView):
    """
    Handles CSV uploads for Cryoegg and Cryowurst
    """

    def post(self, request):
        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        # Extracts type and file from the request. Key = type and other key = file
        # Use a drop down with file type: cryoegg or cryowurst
        data_type = request.data.get('type')
        if not data_type:
            return Response({"error": "'type' parameter is required"},\
                            status=status.HTTP_400_BAD_REQUEST)

        file = request.FILES.get('file')

        if not file:
            return Response("error, no file uploaded", status=status.HTTP_400_BAD_REQUEST)

        try:
            process_csv_data(file, data_type)

            return Response("file uploaded", status=status.HTTP_201_CREATED)

        except:
            return Response("error, not a csv file", status=status.HTTP_400_BAD_REQUEST)

