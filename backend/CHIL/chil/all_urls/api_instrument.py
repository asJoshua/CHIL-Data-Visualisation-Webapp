"""
The URLS for the instrument endpoints in the API
"""

from django.urls import path
from ..views import (
    InstrumentTypeCreateView,
    InstrumentCreateView
)

urlpatterns = [
    path(
        'type',
        InstrumentTypeCreateView.as_view(),
        name='create_instrument_type'
    ),
    path(
        '',
        InstrumentCreateView.as_view(),
        name='create_instrument'
    ),
]
