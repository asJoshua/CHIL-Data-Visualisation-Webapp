from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..utils import (
    authenticate_by_group
)

from ..serializers.graph_data_serializer import (
    GraphDataSerializer
)

from ..services.graph_data_service import (
    cryoegg_graph_get_all,
    cryoegg_graph_create,
    cryoegg_graph_delete
)


class GetCryoeggDataGraphView(APIView):
    """
    Get Cryoegg graph data by id
    """

    def get(self, request):
        url_id = request.query_params.get('url_id')  # Extract 'url_id' from query params
        if not url_id:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "'url_id' parameter is required"})

        graphs = cryoegg_graph_get_all(url_id=url_id)  # Pass 'url_id' to the service
        if not graphs:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"error": "No graphs found for this url_id"})

        serializer = GraphDataSerializer(graphs, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)   
     
class CryoeggGraphCreateView(APIView):
    """
    Create graph endpoint
    """
    def post(self, request):
        """Create a new graph"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not request.data.get("url_id"):
            return Response(status=status.HTTP_400_BAD_REQUEST, 
                            data={"error": "'url_id' is required"})

        serializer = GraphDataSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        cryoegg_graph_create(**serializer.validated_data)

        return Response(status=status.HTTP_201_CREATED)
    

class CryoeggGraphDeleteView(APIView):
    """
    Delete cryoegg graph by id
    """

    def delete(self, request, cryoegg_graph_id):
        """Deletes a cryoegg graphs data by id"""

        auth_result = authenticate_by_group(request, ['admin', 'collaborator'])

        if not auth_result:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not cryoegg_graph_delete(cryoegg_graph_id=cryoegg_graph_id):
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)

