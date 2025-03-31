"""
The URLS for newsletter sign-up
"""

from django.urls import path
from ..views.graph_data_view import (
    GetCryoeggDataGraphView,
    CryoeggGraphCreateView,
    CryoeggGraphDeleteView,
    GetCryowurstDataGraphView,
    CryowurstGraphCreateView,
    CryowurstGraphDeleteView,
)

urlpatterns = [
    path(
        'cryoegg/data/', 
        GetCryoeggDataGraphView.as_view(),
        name="cryoegg_data"
    ),
    path(
        'cryoegg/create/', 
        CryoeggGraphCreateView.as_view(),
        name="cryoegg_create"
    ),
    path(
        'cryoegg/delete/<int:cryoegg_graph_id>/', 
        CryoeggGraphDeleteView.as_view(),
        name="cryoegg_delete"
    ),
    path(
        'cryowurst/data/', 
        GetCryowurstDataGraphView.as_view(),
        name="cryowurst_data"
    ),
    path(
        'cryowurst/create/', 
        CryowurstGraphCreateView.as_view(),
        name="cryowurst_create"
    ),
    path(
        'cryowurst/delete/<int:cryowurst_graph_id>/', 
        CryowurstGraphDeleteView.as_view(),
        name="cryowurst_delete"
    ),
]
