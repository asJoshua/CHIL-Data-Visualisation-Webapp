"""
All the buisness logic for the deployment model
"""

from datetime import date
from django.db.models import Q
from django.db import transaction
from ..models.deployment_api_model import (
    Deployment,
    DeploymentInstrument,
)
from ..models.deployment_access_model import (
    DeploymentAccess
)
from ..services.instrument_api_service import(
    instrument_get_by_id
)

from ..utils import (
    model_update
)

@transaction.atomic
def deployment_create( # pylint: disable=R0913
    *,

    description: str,
    start_timestamp: date,
    end_timestamp: date,

) -> Deployment:
    """
    Creates a new deployment entry in the db
    """

    deployment = Deployment(
       description = description,
       start_timestamp = start_timestamp,
       end_timestamp = end_timestamp
    )
    deployment.full_clean()
    deployment.save()

    return deployment

def deployment_get_by_id(*, deployment_id: int, user_id: int):
    """
    Gets a deployment entry from the db
    """

    access_query = Q(deployment_id_id=deployment_id)

    if DeploymentAccess.objects.filter(access_query).exists():
        # Access controls are in use
        auth_query = Q(deployment_id_id=deployment_id, user_id_id=user_id)
        if not DeploymentAccess.objects.filter(auth_query).exists():
            # Doesn't have access
            return

    query = Q(deployment_id=deployment_id)    
    return Deployment.objects.filter(query) # pylint: disable=E1101

def deployment_get_all(user_id: int):
    """
    Gets all deployments from the db
    """

    public = Deployment.objects.exclude(deployment_id__in=DeploymentAccess.objects.values('deployment_id_id'))
    if user_id == None:
        # User is not logged in
        return public

    auth_query = Q(user_id_id=user_id)
    allowed = Deployment.objects.filter(deployment_id__in=DeploymentAccess.objects.filter(auth_query).values('deployment_id_id'))
    return public.union(allowed) # pylint: disable=E1101

def deployment_get_deployment_instruments(*, deployment_id: int):
    """
    Gets all the instruments of a deployment from the db
    """
    query = Q(deployment_id=deployment_id)
    instrument_ids = DeploymentInstrument.objects.filter(query).\
                     values_list('instrument_id', flat=True) # pylint: disable=E1101

    instruments = [instrument_get_by_id(instrument_id=id) for id in instrument_ids]

    return instruments

@transaction.atomic
def deployment_update(
    *,
    deployment_id: int,
    data: list
) -> Deployment | tuple[bool, str]:
    """
    Updates a deployment entry
    """

    # Get deployment entry
    query = Q(deployment_id=deployment_id)
    deployment = Deployment.objects.filter(query) # pylint: disable=E1101

    if len(deployment) == 0:
        return (False, "404")

    deployment = deployment[0]

    updated_deployment, _ = model_update(
        instance=deployment,
        fields=Deployment.fields,
        data=data
    )

    return updated_deployment

@transaction.atomic
def deployment_delete(
    *,
    deployment_id: int
) -> bool:
    """
    Deletes a deployment entry from the db by id
    """

    query = Q(deployment_id=deployment_id)
    deployment = Deployment.objects.filter(query) # pylint: disable=E1101

    if len(deployment) == 0:
        return False

    deployment.delete()
    return True
