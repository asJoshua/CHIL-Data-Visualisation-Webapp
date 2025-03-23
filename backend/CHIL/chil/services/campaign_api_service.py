"""
All the buisness logic for the campaign model
"""

from datetime import datetime
from django.db.models import Q
from django.db import transaction
from ..models.campaign_api_model import Campaign

from ..utils import (
    model_update
)

@transaction.atomic
def campaign_create( # pylint: disable=R0913
    *,
    name: str,
    description: str,
    latitude: float,
    longitude: float,
    elevation: float,
    start_timestamp: datetime,
    end_timestamp: datetime
) -> Campaign:
    """
    Creates a new campaign entry in the db
    """

    campaign = Campaign(
        name = name,
        description = description,
        latitude = latitude,
        longitude = longitude,
        elevation = elevation,
        start_timestamp = start_timestamp,
        end_timestamp = end_timestamp
    )
    campaign.full_clean()
    campaign.save()

    return campaign

def campaign_get_by_id(*, campaign_id: int):
    """
    Gets a campaign entry from the db
    """

    query=Q(campaign_id=campaign_id)

    return Campaign.objects.filter(query) # pylint: disable=E1101

@transaction.atomic
def campaign_update(
    *,
    campaign_id: int,
    data: list
) -> Campaign | tuple[bool, str]:
    """
    Updates a campaign entry
    """

    #Get campaign entry
    query = Q(campaign_id=campaign_id)
    campaign = Campaign.objects.filter(query) # pylint: disable=E1101

    if len(campaign) == 0:
        return (False, "404")

    campaign = campaign[0]

    updated_campaign = model_update(
        instance=campaign,
        fields= Campaign.fields,
        data = data
    )

    return updated_campaign

@transaction.atomic
def campaign_delete(
    *,
    campaign_id: int
) -> bool:
    """
    Deletes a campaign entry from the db by id
    """

    query = Q(campaign_id=campaign_id)
    campaign = Campaign.objects.filter(query) # pylint: disable=E1101

    if len(campaign) == 0:
        return False

    print(campaign)

    campaign.delete()
    return True

@transaction.atomic
def campaign_list_all() -> list:
    """
    List all campaigns.
    """

    query = Q()
    campaigns = Campaign.objects.filter(query) # pylint: disable=E1101

    if len(campaigns) == 0:
        return False

    print(campaigns)

    return list(campaigns)
