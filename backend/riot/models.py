from django.conf import settings
from django.db import models
class Mini(models.Model):
    'Generated Model'
    laffad = models.BigIntegerField()
    sdg = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
