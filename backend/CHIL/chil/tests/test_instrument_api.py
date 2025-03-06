"""
    Test the instrument API implementation
"""

from django.test import TestCase
from django.core.exceptions import ValidationError
from datetime import date

from ..models import (
    Instrument
)


from ..services import (
    instrument_type_create,
    instrument_create
)

class InstrumentServiceTestCase(TestCase):

    def setUp(self):
        self.instrument_type = instrument_type_create(instrument_name="cryoegg")

    def test_instrument_create_creates_instrument(self):
        instrument = instrument_create(
            type = self.instrument_type,
            manufacture_date = date(2023, 12, 1),
            manufacture_batch = "Test",
            commission_date = date(2024, 1, 1),
            notes = "Lorem Ipsum",
            pressure_keller_max = 100,
            pressure_keller_min = 10
        )

        self.assertIsInstance(instrument, Instrument)

    def test_instrument_create_errors_when_manufacture_date_is_after_commission_date(self):
        with self.assertRaises(ValidationError):
                instrument_create(
                type = self.instrument_type,
                manufacture_date = date(2024, 12, 1),
                manufacture_batch = "Test",
                commission_date = date(2023, 1, 1),
                notes = "Lorem Ipsum",
                pressure_keller_max = 100,
                pressure_keller_min = 10
            )

    def test_instrument_create_errors_when_pressure_keller_max_is_smaller_than_min(self):
        with self.assertRaises(ValidationError):
            instrument_create(
                type = self.instrument_type,
                manufacture_date = date(2023, 12, 1),
                manufacture_batch = "Test",
                commission_date = date(2024, 1, 1),
                notes = "Lorem Ipsum",
                pressure_keller_max = 10,
                pressure_keller_min = 100
            )
