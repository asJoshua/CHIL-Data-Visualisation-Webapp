"""
Top level URL file for the chil project. Each feature's url's are collated here
before being got by the top level URL file in config/urls
"""
from django.urls import include, path

urlpatterns = [
    path('newsletter/', include('chil.all_urls.newsletter-url'))
]
