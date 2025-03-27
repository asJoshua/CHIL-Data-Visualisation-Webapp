from datetime import date
from django.db.models import Q
from django.db import transaction
from ..models.ingest_api_model import (
    CryoeggRaw,
    CryowurstRaw,
    CryoeggData,
    CryowurstData
)
from ..models.deployment_api_model import (
    DeploymentInstrument
)

def cryoegg_raw_get_by_id(*, id: int):
    """Gets a cryoegg raw entry from the db"""

    query = Q(cryoegg_raw=id)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_id(*, id: int):
    """Gets a cryowurst raw entry from the db"""

    query = Q(cryowurst_raw_id=id)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_id(*, id: int):
    """Gets a cryoegg processed entry from the db"""

    query = Q(cryoegg_data_id=id)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_id(*, id: int):
    """Gets a cryowurst processed entry from the db"""

    query = Q(cryowurst_data_id=id)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryoegg_raw_get_by_campaign_id(*, id: int):
    """Gets a cryoegg raw entry from the db by campaign ID"""
    
    deploymentInstruments = DeploymentInstrument.objects.filter(campaign=id) # pylint: disable=E1101
    instrumentIds = deploymentInstruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrumentIds)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_campaign_id(*, id: int):
    """Gets a cryowurst raw entry from the db by campaign ID"""

    deploymentInstruments = DeploymentInstrument.objects.filter(campaign=id) # pylint: disable=E1101
    instrumentIds = deploymentInstruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrumentIds)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_campaign_id(*, id: int):
    """Gets cryoegg processed entries from the db by campaign ID"""

    deploymentInstruments = DeploymentInstrument.objects.filter(campaign=id) # pylint: disable=E1101
    instrumentIds = deploymentInstruments.values_list('instrument', flat=True).distinct()

    query = Q(instrument_id__in=instrumentIds)
    cryoeggRaw = CryoeggRaw.objects.filter(query) # pylint: disable=E1101
    cryoeggRawIds = cryoeggRaw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoeggRawIds)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_campaign_id(*, id: int):
    """Gets cryowurst processed entries from the db by campaign ID"""

    deploymentInstruments = DeploymentInstrument.objects.filter(campaign=id) # pylint: disable=E1101
    instrumentIds = deploymentInstruments.values_list('instrument', flat=True).distinct()
    
    query = Q(instrument_id__in=instrumentIds)
    cryowurstRaw = CryowurstRaw.objects.filter(query) # pylint: disable=E1101
    cryowurstRawIds = cryowurstRaw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryowurst_raw__in=cryowurstRawIds)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryoegg_raw_get_by_instrument(*, id: int):
    """Gets cryoegg raw entries from the db by instrument ID"""

    query = Q(instrument_id=id)
    return CryoeggRaw.objects.filter(query) # pylint: disable=E1101

def cryowurst_raw_get_by_instrument(*, id: int):
    """Gets cryowurst raw entries from the db by instrument ID"""

    query = Q(instrument_id=id)
    return CryowurstRaw.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_by_instrument(*, id: int):
    """Gets cryoegg processed entries from the db by instrument ID"""

    cryoeggRaw = CryoeggRaw.objects.filter(instrument_id=id) # pylint: disable=E1101
    cryoeggRawIds = cryoeggRaw.values_list('cryoegg_raw', flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoeggRawIds)
    return CryoeggData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_instrument(*, id: int):
    """Gets cryoegg processed entries from the db by instrument ID"""

    cryoeggRaw = CryowurstRaw.objects.filter(instrument_id=id) # pylint: disable=E1101
    cryoeggRawIds = cryoeggRaw.values_list('cryowurst_raw', flat=True).distinct()

    query = Q(cryowurst_raw__in=cryoeggRawIds)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryowurst_get_by_campaign_id(*, id: int):
    """Gets cryowurst processed entries from the db by campaign ID"""

    cryowurstRaw = DeploymentInstrument.objects.filter(instrument_id=id) # pylint: disable=E1101
    cryowurstRawIds = cryowurstRaw.values_list('instrument', flat=True).distinct()

    query = Q(cryowurst_raw__in=cryowurstRawIds)
    return CryowurstData.objects.filter(query) # pylint: disable=E1101

def cryoegg_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryoegg processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))  # Assuming 'timestamp' is the field name
    return CryoeggData.objects.filter(query)

def cryowurst_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryowurst processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))  # Assuming 'timestamp' is the field name
    return CryowurstData.objects.filter(query)