"""
The serializer for the graph endpoints
"""

from rest_framework import serializers
from ..models.graph_data_model import (
    CryoeggGraph,
)

class GraphDataSerializer(serializers.ModelSerializer):
    """
    Serializer for graph data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = CryoeggGraph

        fields = CryoeggGraph.fields
