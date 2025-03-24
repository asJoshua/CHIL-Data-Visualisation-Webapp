"""
Defines the ingest models, used to represent the ingested data in the API

- Cryoegg raw data
- Cryoegg processed data

- Cryowurst raw data
- Cryowurst processed data

- Hydrobean raw data
- Hydrobean processed data
"""

from django.db import models
from django.core.exceptions import ValidationError
from ..models.instrument_api_model import Instrument
from ..models.ingest_api_model import (
    CryoeggData,
    HydrobeanData,
    CryowurstData
)

# Process Table
class Process(models.Model):
    """
    Represents cryoegg raw data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryoegg_raw_table"

    process_id = models.BigAutoField(primary_key=True)
    type = models.IntegerField()
    level = models.IntegerField()
    timestamp_begin = models.DateTimeField()
    timestamp_end = models.DateTimeField()
    notes = models.TextField()

    fields = [
        'process_id',
        'type',
        'level',
        'timestamp_begin',
        'timestamp_end',
        'notes',
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.process_id)

# Cryoegg Models
class CryoeggRaw(models.Model):
    """
    Represents cryoegg raw data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryoegg_raw_table"

    cryoegg_raw_id = models.BigAutoField(primary_key=True)
    cryoegg_data_id = models.ForeignKey(CryoeggData, on_delete=models.CASCADE)
    ingest_id = models.ForeignKey(Ingest, on_delete=models.CASCADE)
    instrument_id = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    conductivity_raw = models.IntegerField()
    temperature_pt1000_raw = models.IntegerField()
    pressure_raw = models.IntegerField()
    temperature_raw = models.IntegerField()
    battery_voltage = models.IntegerField()
    sequence_number = models.FloatField()
    rssi = models.FloatField()
    packet_version = models.TextField()

    fields = [
        'cryoegg_raw_id',
        'cryoegg_data_id',
        'ingest_id',
        'instrument_id',
        'conductivity_raw',
        'temperature_pt1000_raw',
        'pressure_raw',
        'temperature_raw',
        'battery_voltage',
        'sequence_number',
        'rssi',
        'packet_version',
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.cryoegg_raw_id)


class CryoeggData(models.Model):
    """
    Represents cryoegg processed data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryoegg_data_table"

    cryoegg_data_id = models.BigAutoField(primary_key=True)
    cryoegg_raw_id = models.ForeignKey(CryoeggRaw, on_delete=models.CASCADE)
    process_id = models.ForeignKey(Process, on_delete=models.CASCADE)
    conductivity = models.FloatField()
    temperature_pt1000 = models.IntegerField()
    pressure = models.FloatField()
    temperature = models.FloatField()

    fields = [
        'cryoegg_data_id',
        'cryoegg_raw_id',
        'process_id',
        'conductivity',
        'temperature_pt1000',
        'pressure',
        'temperature'
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.cryoegg_data_id)

    
# Cryowurst Models  
class CryowurstRaw(models.Model):
    """
    Represents cryowurst raw data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryowurst_raw_table"

    cryowurst_raw_id = models.BigAutoField(primary_key=True)
    cryowurst_data_id = models.ForeignKey(CryowurstData, on_delete=models.CASCADE)
    ingest_id = models.ForeignKey(Ingest, on_delete=models.CASCADE)
    instrument_id = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    temperature_tmp117_raw = models.IntegerField()
    mag_x_raw = models.IntegerField()
    mag_y_raw = models.IntegerField()
    mag_z_raw = models.IntegerField()
    accel_imu_x_raw = models.IntegerField()
    accel_imu_y_raw = models.IntegerField()
    accel_imu_z_raw = models.IntegerField()
    accel_tilt_x_raw = models.IntegerField()
    accel_tilt_y_raw = models.IntegerField()
    accel_tilt_z_raw = models.IntegerField()
    pitch_raw = models.IntegerField()
    roll_raw = models.IntegerField()
    conductivity_raw = models.IntegerField()
    pressure_raw = models.IntegerField()
    temperature_keller_raw = models.IntegerField()
    battery_voltage = models.IntegerField()
    sequence_number = models.IntegerField()
    rssi = models.FloatField()
    packet_version = models.TextField()

    fields = [
        'cryoegg_raw_id',
        'cryoegg_data_id',
        'ingest_id',
        'instrument_id',
        'temperature_tmp117_raw',
        'mag_x_raw',
        'mag_y_raw',
        'mag_z_raw',
        'accel_imu_x_raw',
        'accel_imu_y_raw',
        'accel_imu_z_raw',
        'accel_tilt_x_raw',
        'accel_tilt_y_raw',
        'accel_tilt_z_raw',
        'pitch_raw',
        'roll_raw',
        'conductivity_raw',
        'pressure_raw',
        'temperature_keller_raw',
        'battery_voltage',
        'sequence_number',
        'rssi',
        'packet_version',
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.cryowurst_raw_id)


class CryowurstData(models.Model):
    """
    Represents cryowurst processed data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryowurst_data_table"

    cryowurst_data_id = models.BigAutoField(primary_key=True)
    cryowurst_raw_id = models.ForeignKey(CryowurstRaw, on_delete=models.CASCADE)
    process_id = models.ForeignKey(Process, on_delete=models.CASCADE)
    temperature_tmp117 = models.FloatField()
    mag_x = models.FloatField()
    mag_y = models.FloatField()
    mag_z = models.FloatField()
    accel_imu_x = models.FloatField()
    accel_imu_y = models.FloatField()
    accel_imu_z = models.FloatField()
    accel_tilt_x = models.FloatField()
    accel_tilt_y = models.FloatField()
    accel_tilt_z = models.FloatField()
    pitch = models.FloatField()
    roll = models.FloatField()
    conductivity = models.FloatField()
    pressure = models.FloatField()
    temperature_keller = models.FloatField()

    fields = [
        'cryoegg_data_id',
        'cryoegg_raw_id',
        'process_id',
        'temperature_tmp117',
        'mag_x',
        'mag_y',
        'mag_z',
        'accel_imu_x',
        'accel_imu_y',
        'accel_imu_z',
        'accel_tilt_x',
        'accel_tilt_y',
        'accel_tilt_z',
        'pitch',
        'roll',
        'conductivity',
        'pressure',
        'temperature_keller'
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.cryowurst_data_id)


# Hydrobean Models
class HydrobeanRaw(models.Model):
    """
    Represents hydrobean raw data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "hydrobean_raw_table"

    hydrobean_raw_id = models.BigAutoField(primary_key=True)
    hydrobean_data_id = models.ForeignKey(HydrobeanData, on_delete=models.CASCADE)
    ingest_id = models.ForeignKey(Ingest, on_delete=models.CASCADE)
    instrument_id = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    conductivity_raw = models.FloatField()
    pressure_raw = models.IntegerField()
    temperature_raw = models.IntegerField()
    battery_voltage = models.IntegerField()
    sequence_number = models.IntegerField()
    rssi = models.FloatField()
    packet_version = models.TextField()

    fields = [
        'hydrobean_raw_id',
        'hydrobean_data_id',
        'ingest_id',
        'instrument_id',
        'conductivity_raw',
        'pressure_raw',
        'temperature_raw',
        'battery_voltage',
        'sequence_number',
        'rssi',
        'packet_version',
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.hydrobean_raw_id)
    

class HydrobeanData(models.Model):
    """
    Represents hydrobean processed data.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "hydrobean_data_table"

    hydrobean_data_id = models.BigAutoField(primary_key=True)
    hydrobean_raw_id = models.ForeignKey(HydrobeanRaw, on_delete=models.CASCADE)
    process_id = models.ForeignKey(Process, on_delete=models.CASCADE)
    conductivity = models.FloatField()
    pressure = models.FloatField()
    temperature = models.FloatField()

    fields = [
        'hydrobean_data_id',
        'hydrobean_raw_id',
        'process_id',
        'conductivity',
        'pressure',
        'temperature'
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.hydrobean_data_id)


