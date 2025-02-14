"""
Creates the serializers package for the auth endpoints
"""

from .auth_serializer import (
    CookieTokenRefreshSerializer
)

__all__ = [
    'CookieTokenRefreshSerializer'
]
