"""
All the buisness logic for the graph model
"""

from django.db.models import Q
from django.db import transaction
from ..models.graph_data_model import (
    CryoeggGraph,
    CryowurstGraph
)

def cryoegg_graph_get_all(*, url_id: int):
    """Gets a cryoegg graph data from the db"""

    return CryoeggGraph.objects.filter(url_id=url_id)# pylint: disable=no-member

@transaction.atomic
def cryoegg_graph_create( # pylint: disable=R0913
    *,

    url_id: str,
    graph_name: str,
    measurement: str,
    start_date: str,
    end_date: str,
    stroke: str

) -> CryoeggGraph:
    """
    Creates a new cryoegg graph entry in the db
    """

    cryoegg_graph = CryoeggGraph(
       url_id=url_id,
       graph_name=graph_name,
       measurement=measurement,
       start_date=start_date,
       end_date=end_date,
       stroke=stroke
    )
    cryoegg_graph.full_clean()
    cryoegg_graph.save()

    return cryoegg_graph

@transaction.atomic
def cryoegg_graph_delete(
    *,
    cryoegg_graph_id: int
) -> bool:
    """
    Deletes a cryoegg graph entry from the db by id
    """

    query = Q(cryoegg_graph_id=cryoegg_graph_id)
    cryoegg_graph = CryoeggGraph.objects.filter(query) # pylint: disable=E1101

    if len(cryoegg_graph) == 0:
        return False

    print(cryoegg_graph)

    cryoegg_graph.delete()
    return True

def cryowurst_graph_get_all(*, url_id: int):
    """Gets a cryowurst graph data from the db"""

    return CryowurstGraph.objects.filter(url_id=url_id)# pylint: disable=no-member

@transaction.atomic
def cryowurst_graph_create( # pylint: disable=R0913
    *,

    url_id: str,
    unique_id: str,
    graph_name: str,
    measurement: str,
    start_date: str,
    end_date: str,
    stroke: str

) -> CryowurstGraph:
    """
    Creates a new cryowurst graph entry in the db
    """

    cryowurst_graph = CryowurstGraph(
       url_id=url_id,
       unique_id=unique_id,
       graph_name=graph_name,
       measurement=measurement,
       start_date=start_date,
       end_date=end_date,
       stroke=stroke
    )
    cryowurst_graph.full_clean()
    cryowurst_graph.save()

    return cryowurst_graph

@transaction.atomic
def cryowurst_graph_delete(
    *,
    cryowurst_graph_id: int
) -> bool:
    """
    Deletes a cryowurst graph entry from the db by id
    """

    query = Q(cryowurst_graph_id=cryowurst_graph_id)
    cryowurst_graph = CryowurstGraph.objects.filter(query) # pylint: disable=E1101

    if len(cryowurst_graph) == 0:
        return False

    print(cryowurst_graph)

    cryowurst_graph.delete()
    return True
