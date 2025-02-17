"""
Creates the views package for the auth endpoints
"""

from .auth_view import (
    CookieTokenObtainPairView,
    CookieTokenRefreshView,
    LogoutView,
)

__all__ = [
    'CookieTokenObtainPairView',
    'CookieTokenRefreshView',
    'LogoutView',
]
