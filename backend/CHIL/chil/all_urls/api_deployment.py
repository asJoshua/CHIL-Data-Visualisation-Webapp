"""
The URLS for the deployment endpoints in the API
"""

from django.urls import path
from ..views.deployment_api_view import (
    DeploymentCreateView,
    DeploymentGetAllView,
    DeploymentGetView,
    DeploymentUpdateView,
    DeploymentDeleteView,
    DeploymentGetDeploymentInstrumentsView
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
    ),
    path(
        '<int:deployment_id>/list-instruments',
        DeploymentGetDeploymentInstrumentsView.as_view(),
        name='get_all_deployment_instruments_by_id'
    ),
    path(
        '/list-instrument-deployment',
        DeploymentGetDeploymentInstrumentsView.as_view(),
        name='get_all_deployment_instruments_by_id'
    ),
]

