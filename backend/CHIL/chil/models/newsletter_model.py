"""
Defines the susbscribers model
"""

from django.db import models

class Subscribers(models.Model):
    """
    Represents a subscriber
    """

    # unique ensurs no duplicate entries
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    class Meta: #pylint: disable=too-few-public-methods
        """Overide settings"""
        db_table = 'newsletter_subscribers'

    def __str__(self):
        return str(self.email)
