"""
App configuration for the CHIL application.
Handles application-specific settings and initialization.
Further details can be found here: https://docs.djangoproject.com/en/5.1/ref/applications/
"""

from django.apps import AppConfig

class CHILConfig(AppConfig):
    """
    Configuration class for the CHIL application.
    """
    name = 'chil'
    label = 'CHIL'
