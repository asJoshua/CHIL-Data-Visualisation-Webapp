"""
Defines the campaign model, used to represent campaigns in the API
"""

from django.db import models
from django.core.exceptions import ValidationError

class Data(models.Model):
    """
    Represent a cryoegg.
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryoegg_data_table"

    # cryoegg_data_id     INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT DEFAULT NULL,
    # cryoegg_raw_id      INTEGER UNSIGNED,
    # process_id          INTEGER UNSIGNED,
    # conductivity        REAL,
    # temperature_pt1000  INT,
    # pressure            REAL,
    # temperature         REAL,

    cryoegg_data_id = models.IntegerField(primary_key=True)
    cryeggg_raw_id = models.IntegerField
    process_id = models.IntegerField
    conductivity = models.FloatField
    temperature_pt1000 = models.IntegerField
    pressure = models.FloatField
    temperature = models.FloatField

    fields = [
        'cryoegg_data_id', 
        'cryeggg_raw_id',
        'process_id',
        'conductivity', 
        'temperature_pt1000',
        'pressure',
        'temperature'
    ]
    
    def __str__(self):
        return str(self.cryoegg_data_id)
