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

__all__ = [
    'CookieTokenObtainPairView',
    'CookieTokenRefreshView',
    'LogoutView',
    'InstrumentTypeCreateView',
    'InstrumentCreateView',
    'InstrumentGetView',
    'InstrumentUpdateView',
    'InstrumentDeleteView'
]
