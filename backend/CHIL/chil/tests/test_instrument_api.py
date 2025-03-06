"""
    Test the instrument API implementation
"""
from datetime import date

from django.test import TestCase
from django.core.exceptions import ValidationError

from ..models import (
    Instrument
)


from ..services import (
    instrument_type_create,
    instrument_create
)

class InstrumentServiceTestCase(TestCase):
    """
    All the tests for the instrument service
    """

    def setUp(self):
        """
        Setup for the tests
        """
        self.instrument_type = instrument_type_create(instrument_name="cryoegg")

    def test_instrument_create_creates_instrument(self):
        """
        Test that instrument create works as expected
        """
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
        """
        Check the data validation is working
        """
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
        """
        Check the data validation is working
        """
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
