"""
Views for the Deployment API endpoints endpoints
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..utils import (
    authenticate_by_group
)

from ..serializers.deployment_api_serializer import (
    DeploymentSerializer,
)

from ..services.deployment_api_service import (
    deployment_create,
    deployment_get_by_id,
    deployment_get_all,
    deployment_update,
    deployment_delete,
    deployment_get_deployment_instruments,
    deployment_get_all_deployment_instrument
)

class DeploymentCreateView(APIView):
    """
    Create deployment endpoint
    """

    def post(self, request):
        """Create a new deployment"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = DeploymentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        deployment_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

class DeploymentGetView(APIView):
    """
    Get Deployment by id
    """

    def get(self, request):
        """Gets a deployment by id"""
        response = deployment_get_by_id(deployment_id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

class DeploymentGetAllView(APIView):
    """
    Get all Deployments
    """

    def get(self, _):
        """Gets all deployments"""
        response = deployment_get_all()

        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = list(response.values())

        return Response(data, status=status.HTTP_200_OK)

class DeploymentGetDeploymentInstrumentsView(APIView):
    """
    Gets all the instruments of a deployment from the db
    """

    def get(self, _, deployment_id):
        """Gets all the instruments of a deployment from the db"""
        response = deployment_get_deployment_instruments(deployment_id=deployment_id)
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

class DeploymentGetAllDeploymentInstrumentsView(APIView):
    """
    Get all info from instrument_deployment table
    """

    def get(self, _):
        """Get all info"""
        response = deployment_get_all_deployment_instrument()
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        data = list(response.values())

        return Response(data, status=status.HTTP_200_OK)

class DeploymentUpdateView(APIView):
    """
    Update Deployment by id
    """

    def put(self, request):
        """Updates a deployment by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        deployment_update(deployment_id=request.data['id'], data=request.data)

        return Response(status=status.HTTP_200_OK)

class DeploymentDeleteView(APIView):
    """
    Delete deployment by id
    """

    def delete(self, request):
        """Deletes a deployment by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not deployment_delete(deployment_id=request.data['id']):
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)
