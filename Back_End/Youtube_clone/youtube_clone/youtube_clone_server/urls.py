from django.urls import path
from . import views

urlpatterns = [
    path('comments/', views.CommentsList.as_view()),
    path('commentsDetails/<str:video_id>/', views.CommentsDetail.as_view()),
    path('sub_comments/<str:comment_id>/', views.SubCommentList.as_view()),
    path('sub_comments/<str:sub_comment_id>/', views.SubCommentsDetail.as_view()),
]