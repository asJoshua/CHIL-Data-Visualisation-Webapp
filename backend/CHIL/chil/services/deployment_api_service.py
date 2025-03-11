"""
All the buisness logic for the deployment model
"""

from datetime import date
from django.db.models import Q
from django.db import transaction
from ..models.deployment_api_model import (
    Deployment
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

def deployment_get_by_id(*, deployment_id: int):
    """
    Gets a deployment entry from the db
    """

    query = Q(deployment_id=deployment_id)

    return Deployment.objects.filter(query) # pylint: disable=E1101

def deployment_get_all():
    """
    Gets all deployments from the db
    """
    return Deployment.objects.all()

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

    print(deployment)

    deployment.delete()
    return True
