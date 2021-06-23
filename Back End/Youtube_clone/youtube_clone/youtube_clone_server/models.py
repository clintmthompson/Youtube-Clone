from django.db import models


# Create your models here.
class Comments(models.Model):
    videoID = models.IntegerField()
    initial_comment = models.TextField(max_length=500)
