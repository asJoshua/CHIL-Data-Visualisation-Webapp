"""
The URLS for the ingest endpoints in the API
"""

from django.urls import path
from ..views import (
    IngestLingomo,
    IngestCsvData
)

urlpatterns = [
    path(
        'lingomo/',
        IngestLingomo.as_view(),
        name='ingest_raw_data'
    ),
    path(
        'csv/',
        IngestCsvData.as_view(),
        name='ingest_processed_csv_data'
    )
]
