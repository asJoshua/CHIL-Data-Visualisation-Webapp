"""
The serializer for the graph endpoints
"""

from rest_framework import serializers
from ..models.graph_data_model import (
    CryoeggGraph,
    CryowurstGraph
)

class CryoeggGraphDataSerializer(serializers.ModelSerializer):
    """
    Serializer for cryoegg graph data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = CryoeggGraph

        fields = CryoeggGraph.fields

class CryowurstGraphDataSerializer(serializers.ModelSerializer):
    """
    Serializer for cryowurst graph data
    """

    class Meta(): # pylint: disable=R0903, C0115
        model = CryowurstGraph

        fields = CryowurstGraph.fields
