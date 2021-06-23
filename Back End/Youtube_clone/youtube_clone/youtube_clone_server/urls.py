from django.urls import path
from . import views

urlpatterns = [
    path('youtube_clone', views.CommentsList.as_view()),
    path('youtube_clone/<int>:comment_id/', views.CommentsDetail.as_view()),
]