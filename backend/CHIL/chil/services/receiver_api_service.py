"""
All the buisness logic for the receiver model
"""

from datetime import date
from django.db.models import Q
from django.db import transaction
from ..models.receiver_api_model import (
    Receiver,
    ReceiverDeployment,
)

from ..models.deployment_api_model import (
    Deployment
)

from ..models.campaign_api_model import (
    Campaign
)

from ..utils import (
    model_update
)

@transaction.atomic
def receiver_create( # pylint: disable=R0913
    *,

    name: str,
    type: str,
    imei_number: str,
    manufacture_date: date,
    manufacture_batch: str,
    commission_date: date,
    notes: str,

) -> Receiver:
    """
    Creates a new receiver entry in the db
    """

    receiver = Receiver(
        name = name,
        type = type,
        imei_number = imei_number,
        manufacture_date = manufacture_date,
        manufacture_batch = manufacture_batch,
        commission_date = commission_date,
        notes = notes
    )
    receiver.full_clean()
    receiver.save()

    return receiver

def receiver_get_by_id(*, receiver_id: int):
    """
    Gets a receiver entry from the db
    """

    query = Q(receiver_id=receiver_id)

    return Receiver.objects.filter(query) # pylint: disable=E1101

def receiver_get_all():
    """
    Gets all receivers from the db
    """
    return Receiver.objects.all() # pylint: disable=E1101

@transaction.atomic
def receiver_update(
    *,
    receiver_id: int,
    data: list
) -> Receiver | tuple[bool, str]:
    """
    Updates a receiver entry
    """

    # Get receiver entry
    query = Q(receiver_id=receiver_id)
    receiver = Receiver.objects.filter(query) # pylint: disable=E1101

    if len(receiver) == 0:
        return (False, "404")

    receiver = receiver[0]

    updated_receiver, _ = model_update(
        instance=receiver,
        fields=Receiver.fields,
        data=data
    )

    return updated_receiver

@transaction.atomic
def receiver_delete(
    *,
    receiver_id: int
) -> bool:
    """
    Deletes a receiver entry from the db by id
    """

    query = Q(receiver_id=receiver_id)
    receiver = Receiver.objects.filter(query) # pylint: disable=E1101

    if len(receiver) == 0:
        return False

    print(receiver)

    receiver.delete()
    return True

@transaction.atomic
def receiver_deployment_create( # pylint: disable=R0913
    *,

    # receiver_deployment_id: int, 
    deployment_id: int,
    campaign_id: int,
    receiver_id: int,
    firmware_version: str,
    antenna_type: str,
    start_timestamp: date,
    end_timestamp: date,
    service_timestamp: date,
    original_latitude: float,
    original_longitude: float,
    original_elevation: float,
    latest_latitude: float,
    latest_longitude: float,
    latest_elevation: float
) -> ReceiverDeployment:
    """
    Creates a new receiver deployment entry in the db
    """

    deployment = Deployment.objects.get(id=deployment_id)
    campaign = Campaign.objects.get(id=campaign_id)
    receiver = Receiver.objects.get(id=receiver_id)

    receiver_deployment = ReceiverDeployment(
        # receiver_deployment_id=receiver_deployment_id, 
        deployment_id=deployment,
        campaign_id=campaign,
        receiver_id=receiver,
        firmware_version=firmware_version,
        antenna_type=antenna_type,
        start_timestamp=start_timestamp,
        end_timestamp=end_timestamp,
        service_timestamp=service_timestamp,
        original_latitude=original_latitude,
        original_longitude=original_longitude,
        original_elevation=original_elevation,
        latest_latitude=latest_latitude,
        latest_longitude=latest_longitude,
        latest_elevation=latest_elevation
    )
    receiver_deployment.full_clean()
    receiver_deployment.save()

    return receiver_deployment

def receiver_deployment_get_by_id(*, receiver_deployment_id: int):
    """
    Gets a receiver deployment entry from the db
    """

    query = Q(receiver_deployment_id=receiver_deployment_id)

    return ReceiverDeployment.objects.filter(query) # pylint: disable=E1101

def receiver_deployment_get_all(*, receiver_id):
    """
    Gets all deployments of a specific receiver from the db.
    """

    deployments = ReceiverDeployment.objects.filter(receiver_id=receiver_id)
    
    return deployments

@transaction.atomic
def receiver_deployment_update(
    *,
    receiver_deployment_id: int,
    data: list
) -> ReceiverDeployment | tuple[bool, str]:
    """
    Updates a receiver entry
    """

    # Get receiver entry
    query = Q(receiver_deployment_id=receiver_deployment_id)
    receiver_deployment = ReceiverDeployment.objects.filter(query) # pylint: disable=E1101

    if len(receiver_deployment) == 0:
        return (False, "404")

    receiver_deployment = receiver_deployment[0]

    updated_receiver_deployment, _ = model_update(
        instance=receiver_deployment,
        fields=ReceiverDeployment.fields,
        data=data
    )

    return updated_receiver_deployment

@transaction.atomic
def receiver_deployment_delete(
    *,
    receiver_deployment_id: int
) -> bool:
    """
    Deletes a receiver entry from the db by id
    """

    query = Q(receiver_deployment_id=receiver_deployment_id)
    receiver_deployment = ReceiverDeployment.objects.filter(query) # pylint: disable=E1101

    if len(receiver_deployment) == 0:
        return False

    print(receiver_deployment)

    receiver_deployment.delete()
    return True