"""
The URLS for newsletter sign-up
"""

from django.urls import path
from ..views.graph_data_view import (
    GetCryoeggDataGraphView,
    CryoeggGraphCreateView,
    CryoeggGraphDeleteView
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
]
