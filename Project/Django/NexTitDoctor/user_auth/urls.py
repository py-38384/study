from django.urls import path, include
from . import views

urlpatterns = [
    path('login_signup/',views.Login_SignUp.as_view(),name='login_signup'),
]