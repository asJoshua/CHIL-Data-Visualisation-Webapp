"""
Creates the serializers package
"""

from .auth import (
    urlpatterns as authUrl,
)

from .api_instrument import (
    urlpatterns as instrumentUrl,
)

__all__ = [
    'authUrl',
    'instrumentUrl'
]
