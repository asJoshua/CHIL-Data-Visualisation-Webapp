"""
    Test ingest api
"""
from io import BytesIO
from django.test import TestCase
from ..services.ingest_api_service import (
    process_csv_data,
)

from ..models.ingest_api_model import (
    CryoeggData,
    CryowurstData
)

class IngestServiceTestCase(TestCase):
    """
    Test cases for the CSV data processing services
    """

    def setUp(self):
        """
        Setup the test cases
        """
        # Mock CSV data for cryoegg and cryowurst
        self.cryoegg_csv = BytesIO(
            b"conductivity_raw_V,temperature_logger_C,pressure_mBar,"
            b"temperature_C,voltage_logger_V,timestamp\n"
            b"1.23,25.6,1000,22.5,5.0,25/01/2025\n"
            b"2.34,26.7,1100,23.5,5.5,25/01/2025\n"
        )

        self.cryowurst_csv = BytesIO(
            b"tmp_temp,mag_x,mag_y,mag_z,imu_x,imu_y,imu_z,tilt_x,tilt_y,tilt_z,tilt_pitch,"
            b"tilt_roll,ec,pressure,keller_temp,time\n"
            b"21.5,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,2.0,0.8,1000,23.0,25/01/2025\n"
            b"22.5,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,2.1,0.9,1100,24.0,25/01/2025\n"
        )

    def test_process_csv_data_valid_cryoegg(self):
        """
        Test the processing of a valid cryoegg CSV file
        """
        processed_count = process_csv_data(self.cryoegg_csv, 'cryoegg')

        self.assertEqual(processed_count, 0)
        self.assertEqual(CryoeggData.objects.count(), 0) # pylint: disable=no-member

    def test_process_csv_data_valid_cryowurst(self):
        """
        Test the processing of a valid cryowurst CSV file
        """
        processed_count = process_csv_data(self.cryowurst_csv, 'cryowurst')

        self.assertEqual(processed_count, 0)
        self.assertEqual(CryowurstData.objects.count(), 0) # pylint: disable=no-member
