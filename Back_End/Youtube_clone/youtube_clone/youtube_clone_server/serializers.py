from rest_framework import serializers
from .models import Comments, SubComment


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['commentID', 'videoID', 'initial_comment', 'likes']


class SubCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubComment
        fields = ['sub_commentID', 'sub_comment', 'likes', 'commentID']
