"""
    Test the campaign API implementation
"""
from datetime import datetime

from django.test import TestCase
from django.core.exceptions import ValidationError

from ..models.campaign_api_model import (
    Campaign
)

from ..services.campaign_api_service import (
    campaign_create
)

class CampaignServiceTestCase(TestCase):
    """
    All the tests for the campaign service
    """

    def test_campaign_create_creates_campaign(self):
        """
        Test that instrument create works as expected
        """
        campaign = campaign_create(
            name="Test Campaign",
            description="This is a dummy campaign for testing purposes.",
            latitude=37.7749,
            longitude=-122.4194,
            elevation=15.5,
            start_timestamp=datetime(2024, 3, 26, 10, 0, 0),
            end_timestamp=datetime(2024, 3, 27, 18, 30, 0)
        )

        self.assertIsInstance(campaign, Campaign)

    def test_campaign_create_errors_when_start_timestamp_is_after_end_timestamp(self):
        """
        Check the data validation is working
        """
        with self.assertRaises(ValidationError):
            campaign_create(
            name="Test Campaign",
            description="This is a dummy campaign for testing purposes.",
            latitude=37.7749,
            longitude=-122.4194,
            elevation=15.5,
            start_timestamp=datetime(2025, 3, 26, 10, 0, 0),
            end_timestamp=datetime(2024, 3, 27, 18, 30, 0)
        )
