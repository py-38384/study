from django.shortcuts import render
from django.http import  HttpResponse
from shop.models import Product
from math import ceil

# Create your views here.
def index(request):
    products = Product.objects.all()
    n = len(products)
    nSlide = n//4 + ceil((n/4)-(n//4))
    print(products)
    params = {"no_of_slide":nSlide,"range":range(1,nSlide),"products":products}
    return render(request,'shop/index.html',params)

def about(request):
    return render(request,'shop/about.html')

def contact(request):
    return render(request,'shop/contact.html')
        
def tracker(request):
    return render(request,'shop/tracker.html')

def search(request):
    return render(request,'shop/search.html')

def productview(request):
    return render(request,'shop/productview.html')

def checkout(request):
    return render(request,'shop/checkout.html')
