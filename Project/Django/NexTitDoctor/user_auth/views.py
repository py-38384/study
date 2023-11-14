from django.shortcuts import render
from django.views import View

# Create your views here.
class Login_SignUp(View):
    def get(self,request):
        context = {}
        return render(request,'user_auth/login_signup.html',context)