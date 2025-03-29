"""
The URLS for newsletter sign-up
"""

from django.urls import path
from ..views.graph_data_view import (
    GetCryoeggDataGraphView,
    CryoeggGraphCreate
)

urlpatterns = [
    path(
        'cryoegg/data/', 
        GetCryoeggDataGraphView.as_view(),
        name="cryoegg_data"
    ),
     path(
        'cryoegg/create/', 
        CryoeggGraphCreate.as_view(),
        name="cryoegg_create"
    ),
]
