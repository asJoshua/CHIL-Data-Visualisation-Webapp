"""
    Test the instrument API implementation
"""
from datetime import date

from django.test import TestCase
from django.core.exceptions import ValidationError

from ..models.deployment_api_model import (
    Deployment
)

from ..services.deployment_api_service import (
    deployment_create
)

class DeploymentServiceTestCase(TestCase):
    """
    All the tests for the deployment service
    """

    def test_deployment_create_creates_deployment(self):
        """
        Test that instrument create works as expected
        """
        deployment = deployment_create(
            description = "test description",
            start_timestamp = date(2024, 1, 12),
            end_timestamp = date(2025, 1, 12)
        )

        self.assertIsInstance(deployment, Deployment)

    def test_deployment_create_errors_when_start_timestamp_is_after_end_timestamp(self):
        """
        Check the data validation is working
        """
        with self.assertRaises(ValidationError):
            deployment_create(
            description = "test description",
            start_timestamp = date(2025, 1, 12),
            end_timestamp = date(2024, 1, 12)
        )
