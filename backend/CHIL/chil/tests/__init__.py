"""
    Creates the test package
"""

from .test_auth_view import (
    CookieTokenObtainPairViewTestCase,
)

from .test_instrument_api import (
    InstrumentServiceTestCase,
)

__all__ = [
    'CookieTokenObtainPairViewTestCase',
    'InstrumentServiceTestCase',
]
