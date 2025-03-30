"""
Data api endpoints
"""

from datetime import date
from django.db.models import Q
from ..serializers.ingest_api_serializer import (
    CryoeggSerializer, CryowurstSerializer
)
from ..models.ingest_api_model import (
    CryoeggRaw,
    CryowurstRaw,
    CryoeggData,
    CryowurstData
)
from ..models.deployment_api_model import (
    DeploymentInstrument
)

def cryoegg_raw_get_by_id(*, cryoegg_raw: int):
    """Gets a cryoegg raw entry from the db"""

    query = Q(cryoegg_raw=cryoegg_raw)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_id(*, cryowurst_raw_id: int):
    """Gets a cryowurst raw entry from the db"""

    query = Q(cryowurst_raw_id=cryowurst_raw_id)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_id(*, cryoegg_data_id: int):
    """Gets a cryoegg processed entry from the db"""

    query = Q(cryoegg_data_id=cryoegg_data_id)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_all():
    """
    Gets all cryoegg data from the database and serializes it.
    """
    cryoeggs = CryoeggData.objects.all() # pylint: disable=no-member
    serializer = CryoeggSerializer(cryoeggs, many=True)
    return serializer.data

def cryowurst_get_by_uid(*, unique_id: str):
    """Gets a cryowurst processed entry from the db"""

    query = Q(unique_id=unique_id)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_id(*, cryowurst_data_id: int):
    """Gets a cryowurst processed entry from the db"""

    query = Q(cryowurst_data_id=cryowurst_data_id)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_all():
    """
    Gets all cryowurst data from the database and serializes it.
    """
    cryowursts = CryowurstData.objects.all() # pylint: disable=no-member
    serializer = CryowurstSerializer(cryowursts, many=True)  # Serialize the data
    return serializer.data  # Return the serialized data

def cryoegg_raw_get_by_campaign_id(*, campaign_id: int):
    """Gets a cryoegg raw entry from the db by campaign ID"""

    deployment_instruments = DeploymentInstrument.objects.filter(campaign=campaign_id) # pylint: disable=E1101
    instrument_ids = deployment_instruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrument_ids)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_campaign_id(*, campaign_id: int):
    """Gets a cryowurst raw entry from the db by campaign ID"""

    deployment_instruments = DeploymentInstrument.objects.filter(campaign=campaign_id) # pylint: disable=E1101
    instrument_ids = deployment_instruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrument_ids)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_campaign_id(*, campaign_id: int):
    """Gets cryoegg processed entries from the db by campaign ID"""

    deployment_instruments = DeploymentInstrument.objects.filter(campaign=campaign_id) # pylint: disable=E1101
    instrument_ids = deployment_instruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrument_ids)
    cryoegg_raw = CryoeggRaw.objects.filter(query) # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoegg_raw_ids)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_campaign_id(*, campaign_id: int):
    """Gets cryowurst processed entries from the db by campaign ID"""

    deployment_instruments = DeploymentInstrument.objects.filter(campaign=campaign_id) # pylint: disable=E1101
    instrument_ids = deployment_instruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrument_ids)
    cryowurst_raw = CryowurstRaw.objects.filter(query) # pylint: disable=E1101
    cryowurst_raw_ids = cryowurst_raw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryowurst_raw__in=cryowurst_raw_ids)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryoegg_raw_get_by_instrument(*, instrument_id: int):
    """Gets cryoegg raw entries from the db by instrument ID"""

    query = Q(instrument_id=instrument_id)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_instrument(*, instrument_id: int):
    """Gets cryowurst raw entries from the db by instrument ID"""

    query = Q(instrument_id=instrument_id)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_instrument(*, instrument_id: int):
    """Gets cryoegg processed entries from the db by instrument ID"""

    cryoegg_raw = CryoeggRaw.objects.filter(instrument_id=instrument_id) # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoegg_raw_ids)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_instrument(*, instrument_id: int):
    """Gets cryoegg processed entries from the db by instrument ID"""

    cryoegg_raw = CryowurstRaw.objects.filter(instrument_id=instrument_id) # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list('cryowurst_raw', flat=True).distinct()

    query = Q(cryowurst_raw__in=cryoegg_raw_ids)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryoegg processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))
    return CryoeggData.objects.filter(query)# pylint: disable=no-member

def cryowurst_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryowurst processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))
    return CryowurstData.objects.filter(query)# pylint: disable=no-member
