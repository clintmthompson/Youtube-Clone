# Create your views here.
from django.shortcuts import render
from .models import Comments
from .serializers import CommentsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


# Create your views here.
class CommentsList(APIView):

    def get(self, request):
        query_params = request.query_params
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
        data = serializer.data
        return Response(serializer.data)

    def post(self, request):
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentsDetail(APIView):
    def get_comment(self, comment_id):
        try:
            return Comments.objects.get(id=comment_id)
        except Comments.DoesNotExist:
            raise Http404

    def get(self, request, comment_id):
        comment = self.get_comment(comment_id)
        serializer = CommentsSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, comment_id):
        comment = self.get_comment(comment_id)
        serializer = CommentsSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, comment_id):
        comment = self.get_comment(comment_id)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
