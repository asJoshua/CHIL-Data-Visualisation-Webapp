"""
Creates the serializers package
"""

from .auth import (
    urlpatterns as authUrl,
)

from .api_instrument import (
    urlpatterns as instrumentUrl,
)

from .api_contact import (  
    urlpatterns as contactUrl,
)

__all__ = [
    'authUrl',
    'instrumentUrl',
    'contactUrl',  
]