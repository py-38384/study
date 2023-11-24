from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

# Create your views here.
class Index(View):
    def get(self,request):
        context = {}
        return render(request,'core/index.html',context)
    
class User_home(View):
    def get(self,request):
        context = {}
        return render(request,'core/user_home.html',context)
    
class Post_job(View):
    def get(self,request):
        context = {}
        return render(request, 'core/post_job.html', context)