"""
Creates the serializers package for the auth endpoints
"""

from .auth_serializer import (
    CookiePairObtainPairSerializer,
    CookieTokenRefreshSerializer,
)

__all__ = [
    'CookiePairObtainPairSerializer',
    'CookieTokenRefreshSerializer',
]
