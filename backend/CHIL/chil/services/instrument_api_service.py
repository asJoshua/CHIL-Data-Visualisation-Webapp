"""
All the buisness logic for the instrument model
"""

from django.db import transaction
from ..models import (
    InstrumentType,
    Instrument
)

class InstrumentService:
    """
    Instrument service
    """

    @transaction.atomic
    def create_instrument(self, ) -> Instrument:
        