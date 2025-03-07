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

from ..utils import (
    model_update
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

def instrument_get_by_id(*, id: int):
    """
    Gets an instrument entry from the db
    """

    query = Q(instrument_id=id)

    return Instrument.objects.filter(query)

@transaction.atomic
def instrument_update(
    *,
    id: int,
    data: list
) -> Instrument | tuple[bool, str]:
    """
    Updates an instrument entry
    """

    # Get instrument entry
    query = Q(instrument_id=id)
    instrument = Instrument.objects.filter(query)

    if len(instrument) == 0:
        return (False, "404")

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

    instrument = instrument[0]

    updated_instrument, _ = model_update(
        instance=instrument,
        fields=fields,
        data=data
    )

    return updated_instrument

@transaction.atomic
def instrument_delete(
    *,
    id: int
) -> bool:
    """
    Deletes an instrument entry from the db by id
    """

    query = Q(instrument_id=id)
    instrument = Instrument.objects.filter(query)

    if len(instrument) == 0:
        return False

    print(instrument)

    instrument.delete()
    return True
