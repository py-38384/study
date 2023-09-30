from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True, blank=True, unique=False)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=120, null=True, blank=True)
    bio = models.TextField(blank=True,null=True)
    mobile_number = models.CharField(max_length=30,blank=True,null=True)

    display_picture = models.ImageField(upload_to="user_auth/display_picture/",null=True,blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']