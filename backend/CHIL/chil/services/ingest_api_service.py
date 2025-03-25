"""
All the buisness logic for the Cryoegg and Cryowurst models
"""

import csv
from io import StringIO
from django.db import transaction
from ..models.ingest_api_model import (
    CryoeggData,
    CryowurstData,
)

@transaction.atomic
def process_csv_data(file, data_type: str):
    """
    Processes the CSV file
    """
    # file.read() reads the file as bytes
    # .decode("utf-8") converts the bytes to a string
    # StringIO allows treating a string like a file
    # code adapted from https://gist.github.com/rg3915/85f1b600dd08619f76d94b7e41c3d04e
    csv_file = StringIO(file.read().decode('utf-8'))
    reader = csv.DictReader(csv_file)

    if data_type == 'cryoegg':
        return process_cryoegg_data(reader)

    if data_type == 'cryowurst':
        return process_cryowurst_data(reader)

    raise ValueError(f"Invalid data type: {data_type}")

@transaction.atomic
def process_cryoegg_data(reader):
    """
    Processes Cryoegg data from the CSV file and saves it into the database.
    """
    processed_data = []

    for row in reader:
        try:
            conductivity = float(row['conductivity_raw_V'])
            temperature_pt1000 = int(float(row['temperature_logger_C']))
            pressure = float(row['pressure_mBar'])
            temperature = float(row['temperature_C'])
            receiver_voltage = float(row['voltage_logger_V'])

            # Create new CryoeggData entry
            cryoegg_entry = CryoeggData(
                conductivity=conductivity,
                temperature_pt1000=temperature_pt1000,
                pressure=pressure,
                temperature=temperature,
                receiver_voltage = receiver_voltage
            )

            cryoegg_entry.full_clean()
            processed_data.append(cryoegg_entry)

        except ValueError as e:
            print(f"Skipping row due to error: {e}. Row data: {row}")
            continue

    CryoeggData.objects.bulk_create(processed_data) # pylint: disable=no-member

    return len(processed_data)

def process_cryowurst_data(reader): # pylint: disable=too-many-locals
    """
    Processes Cryowurst data from the CSV file.
    """
    processed_data = []

    for row in reader:
        try:
            temperature_tmp117 = float(row['tmp_temp'])
            mag_x = float(row['mag_x'])
            mag_y = float(row['mag_y'])
            mag_z = float(row['mag_z'])
            accel_imu_x = float(row['imu_x'])
            accel_imu_y = float(row['imu_y'])
            accel_imu_z = float(row['imu_z'])
            accel_tilt_x = float(row['tilt_x'])
            accel_tilt_y = float(row['tilt_y'])
            accel_tilt_z = float(row['tilt_z'])
            pitch = float(row['tilt_pitch'])
            roll = float(row['tilt_roll'])
            conductivity = float(row['ec'])
            pressure = float(row['pressure'])
            temperature_keller = float(row['keller_temp'])

        # Create new CryowurstData entry
            cryowurst_entry = CryowurstData(
                temperature_tmp117=temperature_tmp117,
                mag_x=mag_x,
                mag_y=mag_y,
                mag_z=mag_z,
                accel_imu_x=accel_imu_x,
                accel_imu_y=accel_imu_y,
                accel_imu_z=accel_imu_z,
                accel_tilt_x=accel_tilt_x,
                accel_tilt_y=accel_tilt_y,
                accel_tilt_z=accel_tilt_z,
                pitch=pitch,
                roll=roll,
                conductivity=conductivity,
                pressure=pressure,
                temperature_keller=temperature_keller,
            )

            cryowurst_entry.full_clean()
            processed_data.append(cryowurst_entry)

        except ValueError as e:
            print(f"Skipping row due to error: {e}. Row data: {row}")
            continue

    CryowurstData.objects.bulk_create(processed_data) # pylint: disable=no-member

    return len(processed_data)
