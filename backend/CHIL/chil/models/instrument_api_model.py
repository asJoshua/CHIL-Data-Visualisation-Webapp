"""
Defines the instrument model, used to represent instruments in the API
"""

from django.db import models
from django.core.exceptions import ValidationError

class InstrumentType(models.Model):
    """
    Represents instrument types
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "instrument_type_table"

    instrument_type_id = models.BigAutoField(primary_key=True)
    instrument_name = models.CharField(max_length=255)

class Instrument(models.Model):
    """
    Represents an instrument.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "instrument_table"

    instrument_id = models.BigAutoField(primary_key=True)
    type = models.ForeignKey(InstrumentType, on_delete=models.CASCADE)
    manufacture_date = models.DateField()
    manufacture_batch = models.CharField(max_length=255)
    commission_date = models.DateField()
    notes = models.TextField()
    pressure_keller_min = models.FloatField()
    pressure_keller_max = models.FloatField()

    fields = [
        'instrument_id',
        'type',
        'manufacture_date',
        'manufacture_batch',
        'commission_date',
        'notes',
        'pressure_keller_min',
        'pressure_keller_max'
    ]

    def clean(self):
        if self.manufacture_date > self.commission_date:
            raise ValidationError("commission_date cannot be before manufacture_date")

        if self.pressure_keller_max < self.pressure_keller_min:
            raise ValidationError("pressure_keller_min cannot be larger than pressure_keller_max")

    def __str__(self):
        return str(self.instrument_id)
