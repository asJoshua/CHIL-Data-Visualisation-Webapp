from django.db import models

class Subscribers(models.Model):
    # unique enurs no duplicate entries
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'newsletter_subscribers'

    def __str__(self):
        return self.email
