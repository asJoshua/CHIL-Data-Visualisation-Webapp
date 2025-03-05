"""
The URLS for the instrument endpoints in the API
"""

from django.urls import path
from ..views import (

)

urlpatterns = [
    path(
        '<str:type>/',
        CookieTokenObtainPairView.as_view(),
        name='create_instrument'
    ),
]
