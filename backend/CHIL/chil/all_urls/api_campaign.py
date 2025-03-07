"""
The URLS for the campaign endpoints in the API
"""

from django.urls import path
from ..views import (
    CampaignTypeCreateView,
    CampaignCreateView,
    CampaignGetView,
    CampaignUpdateView,
    CampaignDeleteView
)

urlpatterns = [
    path(
        'type/',
        CampaignTypeCreateView.as_view(),
        name='create_campaign_type'
    ),
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
    )
]
