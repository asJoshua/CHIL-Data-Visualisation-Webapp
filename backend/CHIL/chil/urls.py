"""
Top level URL file for the chil project. Each feature's url's are collated here
before being got by the top level URL file in config/urls
"""
from django.urls import include, path

urlpatterns = [
    path('auth/', include('chil.all_urls.auth')),
    path('api/campaign/', include('chil.all_urls.api_campaign')),
    path('api/instrument/', include('chil.all_urls.api_instrument')),
    path('api/receiver/', include('chil.all_urls.api_receiver')),
    path('api/deployment/', include('chil.all_urls.api_deployment')),
    path('api/campaign/', include('chil.all_urls.api_campaign')),
    path('newsletter/', include('chil.all_urls.newsletter')),
]
