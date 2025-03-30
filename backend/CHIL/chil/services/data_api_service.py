"""
This module provides data retrieval functions for Cryoegg and Cryowurst data.

It interacts with the database models to fetch raw and processed data based on
various criteria such as IDs, campaign IDs, instrument IDs, and timestamps.
"""

from datetime import date
from django.db.models import Q
from ..models.ingest_api_model import (
    CryoeggRaw,
    CryowurstRaw,
    CryoeggData,
    CryowurstData,
)
from ..models.deployment_api_model import DeploymentInstrument


def cryoegg_raw_get_by_id(*, paramId: int):
    """Gets a cryoegg raw entry from the db"""

    query = Q(cryoegg_raw=paramId)
    return CryoeggRaw.objects.filter(query)  # pylint: disable=E1101


def cryowurst_raw_get_by_id(*, paramId: int):
    """Gets a cryowurst raw entry from the db"""

    query = Q(cryowurst_raw_id=paramId)
    return CryowurstRaw.objects.filter(query)  # pylint: disable=E1101


def cryoegg_get_by_id(*, paramId: int):
    """Gets a cryoegg processed entry from the db"""

    query = Q(cryoegg_data_id=paramId)
    return CryoeggData.objects.filter(query)  # pylint: disable=E1101


def cryowurst_get_by_id(*, paramId: int):
    """Gets a cryowurst processed entry from the db"""

    query = Q(cryowurst_data_id=paramId)
    return CryowurstData.objects.filter(query)  # pylint: disable=E1101


def cryoegg_raw_get_by_campaign_id(*, paramId: int):
    """Gets a cryoegg raw entry from the db by campaign paramId"""

    Deployment_instruments = DeploymentInstrument.objects.filter(
        campaign=paramId
    )  # pylint: disable=E1101
    instrumentIds = Deployment_instruments.values_list(
        "instrument", flat=True
    ).distinct()

    query = Q(instrument_id__in=instrumentIds)
    return CryoeggRaw.objects.filter(query)  # pylint: disable=E1101


def cryowurst_raw_get_by_campaign_id(*, paramId: int):
    """Gets a cryowurst raw entry from the db by campaign paramId"""

    Deployment_instruments = DeploymentInstrument.objects.filter(
        campaign=paramId
    )  # pylint: disable=E1101
    instrumentIds = Deployment_instruments.values_list(
        "instrument", flat=True
    ).distinct()

    query = Q(instrument_id__in=instrumentIds)
    return CryowurstRaw.objects.filter(query)  # pylint: disable=E1101


def cryoegg_get_by_campaign_id(*, paramId: int):
    """Gets cryoegg processed entries from the db by campaign paramId"""

    Deployment_instruments = DeploymentInstrument.objects.filter(
        campaign=paramId
    )  # pylint: disable=E1101
    instrumentIds = Deployment_instruments.values_list(
        "instrument", flat=True
    ).distinct()

    query = Q(instrument_id__in=instrumentIds)
    cryoegg_raw = CryoeggRaw.objects.filter(query)  # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list("cryoegg_raw", flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoegg_raw_ids)
    return CryoeggData.objects.filter(query)  # pylint: disable=E1101


def cryowurst_get_by_campaign_id(*, paramId: int):
    """Gets cryowurst processed entries from the db by campaign paramId"""

    Deployment_instruments = DeploymentInstrument.objects.filter(
        campaign=paramId
    )  # pylint: disable=E1101
    instrumentIds = Deployment_instruments.values_list(
        "instrument", flat=True
    ).distinct()

    query = Q(instrument_id__in=instrumentIds)
    cryowurstRaw = CryowurstRaw.objects.filter(query)  # pylint: disable=E1101
    cryowurstRawIds = cryowurstRaw.values_list("cryoegg_raw", flat=True).distinct()

    query = Q(cryowurst_raw__in=cryowurstRawIds)
    return CryowurstData.objects.filter(query)  # pylint: disable=E1101


def cryoegg_raw_get_by_instrument(*, paramId: int):
    """Gets cryoegg raw entries from the db by instrument paramId"""

    query = Q(instrument_id=paramId)
    return CryoeggRaw.objects.filter(query)  # pylint: disable=E1101


def cryowurst_raw_get_by_instrument(*, paramId: int):
    """Gets cryowurst raw entries from the db by instrument paramId"""

    query = Q(instrument_id=paramId)
    return CryowurstRaw.objects.filter(query)  # pylint: disable=E1101


def cryoegg_get_by_instrument(*, paramId: int):
    """Gets cryoegg processed entries from the db by instrument paramId"""

    cryoegg_raw = CryoeggRaw.objects.filter(
        instrument_id=paramId
    )  # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list("cryoegg_raw", flat=True).distinct()

    query = Q(cryoegg_raw__in=cryoegg_raw_ids)
    return CryoeggData.objects.filter(query)  # pylint: disable=E1101


def cryowurst_get_by_instrument(*, paramId: int):
    """Gets cryoegg processed entries from the db by instrument paramId"""

    cryoegg_raw = CryowurstRaw.objects.filter(
        instrument_id=paramId
    )  # pylint: disable=E1101
    cryoegg_raw_ids = cryoegg_raw.values_list("cryowurst_raw", flat=True).distinct()

    query = Q(cryowurst_raw__in=cryoegg_raw_ids)
    return CryowurstData.objects.filter(query)  # pylint: disable=E1101


def cryoegg_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryoegg processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))
    return CryoeggData.objects.filter(query)  # pylint: disable=E1101


def cryowurst_get_between_timestamps(*, start_timestamp: date, end_timestamp: date):
    """Gets cryowurst processed entries from the db between two timestamps"""

    query = Q(timestamp__range=(start_timestamp, end_timestamp))
    return CryowurstData.objects.filter(query)  # pylint: disable=E1101
