"""
The URLS for the deployment endpoints in the API
"""

from django.urls import path
from ..views import (
    DeploymentCreateView,
    DeploymentGetAllView,
    DeploymentGetView,
    DeploymentUpdateView,
    DeploymentDeleteView
)

urlpatterns = [
    path(
        '',
        DeploymentCreateView.as_view(),
        name='create_deployment'
    ),
    path(
        'list/',
        DeploymentGetAllView.as_view(),
        name='get_deployment_all_deployments'
    ),
    path(
        'get/',
        DeploymentGetView.as_view(),
        name='get_deployment_by_id'
    ),
    path(
        'update/',
        DeploymentUpdateView.as_view(),
        name='update_deployment_by_id'
    ),
    path(
        'delete/',
        DeploymentDeleteView.as_view(),
        name='delete_deployment_by_id'
    )
]
