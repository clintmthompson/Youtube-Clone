from rest_framework import serializers
from .models import Comments, SubComment


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'videoID', 'initial_comment', 'likes']


class SubCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubComment
        fields = ['id', 'sub_commentID', 'commentID', 'sub_comment', 'likes']
