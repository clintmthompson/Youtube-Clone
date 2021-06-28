from django.db import models


# Create your models here.
class Comments(models.Model):
    commentID = models.CharField(max_length=50, primary_key=True)
    videoID = models.CharField(max_length=50)
    initial_comment = models.TextField(max_length=500)
    likes = models.IntegerField(default=0)


class SubComment(models.Model):
    sub_commentID = models.CharField(max_length=50, primary_key=True)
    commentID = models.ForeignKey(Comments, blank=True, null=True, on_delete=models.CASCADE)
    sub_comment = models.TextField(max_length=500)
    likes = models.IntegerField(default=0)
