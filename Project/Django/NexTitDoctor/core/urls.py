from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.Index.as_view(),name='index'),
    path('user/jobs/',views.User_home.as_view(),name='jobs'),
    path('user/post_job/',views.Post_job.as_view(),name='post_job'),
]