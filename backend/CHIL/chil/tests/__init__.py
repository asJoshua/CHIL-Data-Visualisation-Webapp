"""
    Creates the test package
"""

from .test_auth_view import (
    CookieTokenObtainPairViewTestCase,
)

from .test_instrument_api import (
    InstrumentServiceTestCase,
)

from .test_newsletter_view import (
    NewsletterSignupTestCase
)

__all__ = [
    'CookieTokenObtainPairViewTestCase',
    'InstrumentServiceTestCase',
    'NewsletterSignupTestCase',
]
