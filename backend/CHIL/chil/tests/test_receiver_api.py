"""
    Test the receiver API implementation
"""
from datetime import date

from django.test import TestCase
from django.core.exceptions import ValidationError

from ..models.receiver_api_model import (
    Receiver,
)

from ..services.receiver_api_service import (
    receiver_create,
)

class ReceiverServiceTestCase(TestCase):
    """
    All the tests for the recevier service
    """

    def test_receiver_create_creates_receiver(self):
        """
        Test that receiver create works as expected
        """
        receiver = receiver_create(
            name = "test receiver",
            type = "test type",
            imei_number = "test_1",
            manufacture_date = date(2024, 12, 1),
            manufacture_batch = "test batch",
            commission_date = date(2023, 12, 1),
            notes = "test notes"
        )

        self.assertIsInstance(receiver, Receiver)

    def test_receiver_create_errors_when_manufacture_date_is_before_commission_date(self):
        """
        Check the data validation is working
        """
        with self.assertRaises(ValidationError):
            receiver_create(
            name = "test receiver",
            type = "test type",
            imei_number = "test_1",
            manufacture_date = date(2023, 12, 1),
            manufacture_batch = "test batch",
            commission_date = date(2024, 12, 1),
            notes = "test notes"
        )
