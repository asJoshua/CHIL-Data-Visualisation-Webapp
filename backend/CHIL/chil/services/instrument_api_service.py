"""
All the buisness logic for the instrument model
"""

from django.db.models import Q
from datetime import date
from django.db import transaction
from ..models import (
    InstrumentType,
    Instrument
)

@transaction.atomic
def instrument_type_create(
    *,
    instrument_name: str
) -> InstrumentType:
    """
    Creates a new instrument type entry in the db
    """

    instrument_type = InstrumentType(
        instrument_name = instrument_name
    )
    instrument_type.full_clean()
    instrument_type.save()

    return instrument_type

@transaction.atomic
def instrument_create( # pylint: disable=R0913
    *,
    type: int, # pylint: disable=W0622
    manufacture_date: date,
    manufacture_batch: str,
    commission_date: date,
    notes: str,
    pressure_keller_min: float,
    pressure_keller_max: float
) -> Instrument:
    """
    Creates a new instrument entry in the db
    """

    instrument = Instrument(
        type = type,
        manufacture_date = manufacture_date,
        manufacture_batch = manufacture_batch,
        commission_date = commission_date,
        notes = notes,
        pressure_keller_min = pressure_keller_min,
        pressure_keller_max = pressure_keller_max
    )
    instrument.full_clean()
    instrument.save()

    return instrument

def instrument_get_by_id(*, id = id):
    """
    Gets an instrument entry from the db
    """

    query = Q(instrument_id=id)

    return Instrument.objects.filter(query).values()
