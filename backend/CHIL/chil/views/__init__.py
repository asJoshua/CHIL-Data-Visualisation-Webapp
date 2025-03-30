"""
Creates the views package
"""

from .auth_view import (
    CookieTokenObtainPairView,
    CookieTokenRefreshView,
    LogoutView
)

from .instrument_api_view import (
    InstrumentTypeCreateView,
    InstrumentCreateView,
    InstrumentGetView,
    InstrumentUpdateView,
    InstrumentDeleteView
)

from .campaign_api_view import (
    CampaignCreateView,
    CampaignGetView,
    CampaignUpdateView,
    CampaignDeleteView,
    CampaginListAll
)

__all__ = [
    'CookieTokenObtainPairView',
    'CookieTokenRefreshView',
    'LogoutView',
    'InstrumentTypeCreateView',
    'InstrumentCreateView',
    'InstrumentGetView',
    'InstrumentUpdateView',
    'InstrumentDeleteView',
    'CampaignCreateView',
    'CampaignGetView',
    'CampaignUpdateView',
    'CampaignDeleteView',
    'CampaginListAll'
]
