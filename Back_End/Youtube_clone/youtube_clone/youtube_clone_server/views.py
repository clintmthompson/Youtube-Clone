# Create your views here.
from django.shortcuts import render
from .models import Comments
from .models import SubComment
from .serializers import CommentsSerializer
from .serializers import SubCommentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


# Create your views here.
class CommentsList(APIView):

    def get(self, request):
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
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
        try:
            comment = self.get_comment(comment_id)
            serializer = CommentsSerializer(comment)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Comments.DoesNotExist:
            raise Http404

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


class SubCommentList(APIView):

    def get(self, request, comment_id):
        init_comment = CommentsDetail()
        request = init_comment.get(comment_id)
        sub_comments = SubComment.objects.all()
        serializer = SubCommentSerializer(sub_comments, many=True)
        data = serializer.data
        return Response(serializer.data)

    def post(self, request):
        serializer = SubCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SubCommentsDetail(APIView):
    def get_sub_comment(self, sub_comment_id):
        try:
            return SubComment.objects.get(id=sub_comment_id)
        except SubComment.DoesNotExist:
            raise Http404

    def get(self, request, sub_comment_id):
        try:
            sub_comment = self.get_sub_comment(sub_comment_id)
            serializer = SubCommentSerializer(sub_comment)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Comments.DoesNotExist:
            raise Http404

    def put(self, request, sub_comment_id):
        sub_comment = self.get_sub_comment(sub_comment_id)
        serializer = SubCommentSerializer(sub_comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, sub_comment_id):
        sub_comment = self.get_sub_comment(sub_comment_id)
        sub_comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
