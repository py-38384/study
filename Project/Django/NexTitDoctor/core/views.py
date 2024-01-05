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
    
class Dashboard(View):
    def get(self,request):
        context = {}
        return render(request, 'core/dashboard.html', context)

class My_task(View):
    def get(self,request):
        context = {}
        return render(request,'core/my_task.html',context)
    
class My_Jobs(View):
    def get(self,request):
        context = {}
        return render(request,'core/my_jobs.html',context)
    
class Notifications(View):
    def get(self,request):
        context = {}
        return render(request,'core/notifications.html',context)
    
class Withdraw(View):
    def get(self,request):
        context = {}
        return render(request,'core/withdraw.html',context)