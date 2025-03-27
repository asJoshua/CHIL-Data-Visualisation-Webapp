"""
Views for the Receiver API endpoints endpoints
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..utils import (
    authenticate_by_group
)

from ..serializers.receiver_api_serilaizer import (
    ReceiverSerializer,
    ReceiverDeploymentSerializer
)

from ..services.receiver_api_service import (
   receiver_create,
   receiver_get_by_id,
   receiver_get_all,
   receiver_update,
   receiver_delete,
   receiver_deployment_create,
   receiver_deployment_get_by_id,
   receiver_deployment_get_all,
   receiver_deployment_update,
   receiver_deployment_delete
)

class ReceiverCreateView(APIView):
    """
    Create receiver endpoint
    """

    def post(self, request):
        """Create a receiver"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = ReceiverSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        receiver_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

class ReceiverGetAllView(APIView):
    """
    Get all Receivers
    """

    def get(self, _):
        """Gets all receivers"""
        response = receiver_get_all()
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = list(response.values())

        return Response(data, status=status.HTTP_200_OK)

class ReceiverGetView(APIView):
    """
    Get Receiver by id
    """

    def get(self, request):
        """Gets a receiver by id"""
        response = receiver_get_by_id(receiver_id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

class ReceiverUpdateView(APIView):
    """
    Update receiver by id
    """

    def put(self, request):
        """Updates a receiver by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        receiver_update(receiver_id=request.data['id'], data=request.data)

        return Response(status=status.HTTP_200_OK)

class ReceiverDeleteView(APIView):
    """
    Delete receiver by id
    """

    def delete(self, request):
        """Deletes a receiver by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not receiver_delete(receiver_id=request.data['id']):
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)

# receiver/deployment
class ReceiverDeploymentCreateView(APIView):
    """
    Create receiver deployment endpoint
    """

    def post(self, request):
        """Create a receiver"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = ReceiverDeploymentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        receiver_deployment_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)

# receiver/<receiver_id>/deployment/list
class ReceiverDeploymentGetAllView(APIView):
    """
    Get all deployments of a receiver
    """

    def get(self, _, receiver_id):
        """Get all deployments of a receiver"""
        deployments = receiver_deployment_get_all(receiver_id=receiver_id)

        if not deployments.exists():
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReceiverDeploymentSerializer(deployments, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

# receiver/deployment/get/<receiver_deployment_id>
class ReceiverDeploymentGetView(APIView):
    """
    Get Receiver by receiver_deployment_id
    """

    def get(self, request):
        """Gets a receiver deployment by receiver_deployment_id"""
        response = receiver_deployment_get_by_id(receiver_deployment_id=request.data['id'])
        if len(response) == 0:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_200_OK, data=response[0])

# receiver/deployment/update/<receiver_deployment_id>
class ReceiverDeploymentUpdateView(APIView):
    """
    Update receiver deployment by receiver_deployment_id
    """

    def put(self, request):
        """Updates a receiver deployment by receiver_deployment_id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        receiver_deployment_update(receiver_deployment_id=request.data['id'], data=request.data)

        return Response(status=status.HTTP_200_OK)

# receiver/deployment/delete/<receiver_deployment_id>
class ReceiverDeploymentDeleteView(APIView):
    """
    Delete receiver deployment by id
    """

    def delete(self, request):
        """Deletes a receiver deployment by receiver_deployment_id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not receiver_deployment_delete(receiver_deployment_id=request.data['id']):
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)
