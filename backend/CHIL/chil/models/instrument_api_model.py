"""
Defines the instrument model, used to represent instruments in the API
"""

from django.db import models

class Instrument(models.Model):
    """
    Represents an instrument.
    """

    instrument_id = models.BigAutoField(primary_key=True)
    type = models.CharField(max_length=9)
    manufacture_date
    manufacture_batch
    commission_date
    notes
    pressure_keller_min
    pressure_keller_max