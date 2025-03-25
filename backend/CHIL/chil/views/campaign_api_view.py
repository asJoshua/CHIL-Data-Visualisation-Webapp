"""
Views for the Campaign API endpoints 
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


from ..utils import (
    authenticate_by_group
)

from ..serializers.campaign_api_serializer import CampaignSerializer

from ..services.campaign_api_service import (
    campaign_create,
    campaign_get_by_id,
    campaign_update,
    campaign_delete,
    campaign_list_all
)


class CampaignCreateView(APIView):
    """
    Create a campaign endpoint
    """

    def post(self, request):
        """Create a new campaign"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = CampaignSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        campaign_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

class CampaignGetView(APIView):
    """
    Get campaign by id
    """

    def get(self, request):
        """Gets a campaign by id"""
        response = campaign_get_by_id(campaign_id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

class CampaignUpdateView(APIView):
    """
    Update campaign entry
    """

    def put(self, request):
        """Updates a campaign entry"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        campaign_update(campaign_id=request.data['id'], data=request.data)

        return Response(status=status.HTTP_200_OK)

class CampaignDeleteView(APIView):
    """
    Delete the campaign entry
    """

    def delete(self, request):
        """Deletes a campaign entry"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not campaign_delete(campaign_id=request.data['id']):
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)

class CampaginListAll(APIView):
    """
    List all campaign endpoints
    """

    def get(self, request):
        """Retrieve all campaigns"""

        response = campaign_list_all()
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CampaignSerializer(response, many=True)

        return Response(status=status.HTTP_200_OK, data=serializer.data)
