"""
Views for the Campaign API endpoints 
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


from ..utils import (
    authenticate_by_group
)

from ..serializers import (
    CampaignSerializer
)

from ..services import (
    campaign_create,
    campaign_get_by_id,
    campaign_update,
    campaign_delete
)
