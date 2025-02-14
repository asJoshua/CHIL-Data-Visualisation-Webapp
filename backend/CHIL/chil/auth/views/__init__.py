"""
Creates the views package for the auth endpoints
"""

from .auth_view import (
    CookieTokenObtainPairView,
    CookieTokenRefreshView
)

__all__ = [
    'CookieTokenObtainPairView',
    'CookieTokenRefreshView'
]
