from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.Index.as_view(),name='index'),
    path('user/jobs/',views.User_home.as_view(),name='jobs'),
    path('user/post_job/',views.Post_job.as_view(),name='post_job'),
    path('user/dashboard/',views.Dashboard.as_view(),name='dashboard'),
    path('user/my_task/',views.My_task.as_view(),name='my_task'),
    path('user/my_jobs/',views.My_Jobs.as_view(),name='my_jobs'),
    path('user/notifications/',views.Notifications.as_view(),name='notifications'),
    path('user/withdrower/',views.Withdraw.as_view(),name='withdraw'),
]