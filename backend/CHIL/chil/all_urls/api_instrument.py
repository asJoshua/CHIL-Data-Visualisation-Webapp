"""
The URLS for the instrument endpoints in the API
"""

from django.urls import path
from ..views import (
    InstrumentTypeCreateView,
    InstrumentCreateView,
    InstrumentGetView,
    InstrumentUpdateView
)

urlpatterns = [
    path(
        'type/',
        InstrumentTypeCreateView.as_view(),
        name='create_instrument_type'
    ),
    path(
        '',
        InstrumentCreateView.as_view(),
        name='create_instrument'
    ),
    path(
        'get/',
        InstrumentGetView.as_view(),
        name='get_instrument_by_id'
    ),
    path(
        'update/',
        InstrumentUpdateView.as_view(),
        name='update_instrument_by_id'
    )
]
