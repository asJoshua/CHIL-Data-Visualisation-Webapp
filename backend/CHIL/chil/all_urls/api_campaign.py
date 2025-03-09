"""
The URLS for the campaign endpoints in the API
"""

from django.urls import path
from ..views import (
    CampaignCreateView,
    CampaignGetView,
    CampaignUpdateView,
    CampaignDeleteView,
    CampaginListAll
)

urlpatterns = [
    path(
        '',
        CampaignCreateView.as_view(),
        name='create_campaign'
    ),
    path(
        'get/',
        CampaignGetView.as_view(),
        name='get_campaign_by_id'
    ),
    path(
        'update/',
        CampaignUpdateView.as_view(),
        name='update_campaign_by_id'
    ),
    path(
        'delete/',
        CampaignDeleteView.as_view(),
        name='delete_campaign_by_id'
    ),
    path(
        'list/',
        CampaginListAll.as_view(),
        name='list_all_campaigns'
    )
]
