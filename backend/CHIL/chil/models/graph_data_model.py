"""
Defines the graph model, used to get the graph data
"""

from django.db import models

class CryoeggGraph(models.Model):
    """
    Represents all graphs from that deployment id
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryoegg_graph_data_table"

    cryoegg_graph_id = models.BigAutoField(primary_key=True)
    url_id = models.CharField(max_length=100,null=True, blank=True)
    graph_name = models.TextField(null=True, blank=True)
    measurement = models.CharField(max_length=100, help_text="Measurement type")
    start_date = models.DateTimeField(help_text="Start date of the measurement")
    end_date = models.DateTimeField(help_text="End date of the measurement")
    stroke = models.CharField(max_length=7, default="#000000")

    fields = [
        'cryoegg_graph_id',
        'graph_name',
        'url_id',
        'measurement',
        'start_date',
        'end_date',
        'stroke'
    ]

    def __str__(self):
        return str(self.cryoegg_graph_id)

class CryowurstGraph(models.Model):
    """
    Represents all graphs from that deployment id
    """

    class Meta: # pylint: disable=R0903
        """Overide settings"""
        db_table = "cryowurst_graph_data_table"

    cryowurst_graph_id = models.BigAutoField(primary_key=True)
    url_id = models.CharField(max_length=100,null=True, blank=True)
    unique_id = models.CharField(null=True, blank=True, max_length=100)
    graph_name = models.TextField(null=True, blank=True)
    measurement = models.CharField(max_length=100, help_text="Measurement type")
    start_date = models.DateTimeField(help_text="Start date of the measurement")
    end_date = models.DateTimeField(help_text="End date of the measurement")
    stroke = models.CharField(max_length=7, default="#000000")

    fields = [
        'cryowurst_graph_id',
        'unique_id',
        'graph_name',
        'url_id',
        'measurement',
        'start_date',
        'end_date',
        'stroke'
    ]

    def __str__(self):
        return str(self.cryowurst_graph_id)
