"""
Creates the serializers package
"""

from .auth_serializer import (
    CookiePairObtainPairSerializer,
    CookieTokenRefreshSerializer,
)

__all__ = [
    'CookiePairObtainPairSerializer',
    'CookieTokenRefreshSerializer',
]
