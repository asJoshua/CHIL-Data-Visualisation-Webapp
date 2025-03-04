"""
Creates the views package
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
