from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from random import randint
from .models import *
from datetime import datetime
import json

# Create your views here.

SHIPPING_CHARGE = 10

def get_title(name,i):
    if len(name) > i:
        return name[0:i]+'. . .'
    return name

class Index(View):
    def get(self, request):
        featured_products = []
        recent_product = []
        categories_arr = [] 
        one_week = 60*60*24*7
        all_products = Product.objects.all()
        products = list(Product.objects.filter(is_featured=True))
        categories = Category.objects.all()

        for category in categories:
            categories_obj = {}
            categories_obj['name'] = category.name
            categories_obj['image'] = category.image
            categories_obj['products'] = len(list(Product.objects.filter(category=category)))
            categories_arr.append(categories_obj)

        for product in products:
            product_obj = {}
            product_obj['id'] = product.id
            product_obj['title'] = get_title(product.name,25)
            product_obj['price'] = product.price
            product_obj['review'] = None
            product_obj['comment'] = None
            images = list(ProductImages.objects.filter(product=product))
            if len(images) > 0:
                product_obj['image'] = images[0].image
            else:
                product_obj['image'] = False
            featured_products.append(product_obj)
        
        for product in all_products:
            date_created = product.date_added
            date_created = date_created.replace(tzinfo=None)
            now = datetime.now()
            diff = now - date_created
            diff = diff.total_seconds()
            if(diff < one_week):
                product_obj = {}
                product_obj['id'] = product.id
                product_obj['title'] = get_title(product.name,25)
                product_obj['price'] = product.price
                product_obj['review'] = None
                product_obj['comment'] = None
                images = list(ProductImages.objects.filter(product=product))
                if len(images) > 0:
                    product_obj['image'] = images[0].image
                else:
                    product_obj['image'] = False
                recent_product.append(product_obj)
            
        
        context = {'featured_products':featured_products,'recent_product':recent_product}
        return render(request,"index.html", context)

class UpdateItem(View):
    def post(self, request):
        if request.user.is_authenticated:
            productID = request.POST.get('productID')
            action = request.POST.get('action')
            quantity = request.POST.get('quantity')
            order_item_id = request.POST.get('order_item_id')
            color = request.POST.get('color')
            size = request.POST.get('size')
            quantity = int(quantity)

            total_items = 0
            subtotal = 0
            
            customer = Customer.objects.get(user=request.user)
            product = Product.objects.get(id=productID)
            order, created = Order.objects.get_or_create(customer=customer,complete=False)
            print('Order Created -> ',created)

            print('order_item_id -> ',order_item_id)
            if not order_item_id=="undefined":
                order_item_id = int(order_item_id)
                order_item = OrderItem.objects.get(order__customer__user=request.user,id=order_item_id)
                if action == 'add':
                    order_item.quantity = (order_item.quantity+quantity)
                elif action == 'remove':
                    order_item.quantity = (order_item.quantity-quantity)

                order_item.save()
                if order_item.quantity <= 0:
                    order_item.delete()
            else:
                order_item = OrderItem(order=order, product=product, color=color, size=size,quantity=quantity)
                order_item.save()
                order_item_id = order_item.id


            items = list(OrderItem.objects.filter(order=order.id))
            for item in items:
                total_items+=item.quantity
                subtotal+=item.total

            total_price = round((order_item.quantity*order_item.product.price),2)

            return JsonResponse({'id':order_item_id,'quantity':order_item.quantity,'total_items':total_items,'total_price':total_price,'subtotal':round(subtotal,2),'total':round(subtotal+SHIPPING_CHARGE,2)})
        

class Deals(View):
    def get(self, request):
        context = {}
        return render(request,"deals.html", context)


class Shop(View):
    def get(self, request, offset_key=0):
        product_arr = []
        page_list = []
        try:
            product_limit = int(request.session['limit'])
        except KeyError:
            product_limit = 10
        limit = request.GET.get('limit')
        if limit:
            request.session['limit'] = limit
            product_limit = int(limit)
        price_range = request.GET.get('price_range')
        price_range_value = {}
        product_ajex_arr = []
        for i in range(7):
            price_range_value[str(i)] = False
        # product_limit = 2
        if price_range:
            if price_range == "0":
                product_ajex_arr.extend(list(Product.objects.all()))
            for c in price_range:
                if int(c) == 1 and '0' not in price_range:
                    price_range_value['1'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=0,price__lte=100)))
                if int(c) == 2 and '0' not in price_range:
                    price_range_value['2'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=100,price__lte=200)))
                if int(c) == 3 and '0' not in price_range:
                    price_range_value['3'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=200,price__lte=300)))
                if int(c) == 4 and '0' not in price_range:
                    price_range_value['4'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=300,price__lte=400)))
                if int(c) == 5 and '0' not in price_range:
                    price_range_value['5'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=400,price__lte=500)))
                if int(c) == 6 and '0' not in price_range:
                    price_range_value['6'] = True
                    product_ajex_arr.extend(list(Product.objects.filter(price__gt=500)))

            p = Paginator(product_ajex_arr,product_limit)
        else:
            products_all = list(Product.objects.all())
            p = Paginator(products_all,product_limit)
            
        # random_object = Product.objects.all()[randint(0, product_count - 1)] random object example
        page_number_request = request.GET.get('page')
        if page_number_request:
            page_number = int(page_number_request)
        else:
            page_number = 1

        products = p.get_page(page_number)
        last_page = products.paginator.num_pages
        for i in range(1,last_page+1):
            if (i==(page_number-2)and(page_number-2)>0) or (i==(page_number-1)and(page_number-1)>0) or  (i == page_number and last_page>1) or (i==(page_number+1)and(page_number+1)<=last_page) or (i==(products.number+2)and(products.number+2)<=last_page):
                page_list.append(i)
                

        for product in products:
            product_obj = {}
            product_obj['id'] = product.id
            product_obj['title'] = get_title(product.name,25)
            product_obj['price'] = product.price
            product_obj['review'] = None
            product_obj['comment'] = None

            images = list(ProductImages.objects.filter(product=product))
            if len(images) > 0:
                product_obj['image'] = images[0].image
            else:
                product_obj['image'] = False
            product_arr.append(product_obj)
        context = {'products':product_arr,'pagenator_object':products,'last_page':last_page,'page_list':page_list,'current_page':page_number,'price_range':price_range,'price_range_value':price_range_value,}
        if price_range and not page_number_request:
            return render(request,"shop_ajex.html", context)
        else:
            return render(request,"shop.html", context)
    

class Cart(View):
    def get(self, request):
        if request.user.is_authenticated:
            product_image_obj = {}
            customer = Customer.objects.get(user=request.user)
            order, created = Order.objects.get_or_create(customer=customer, complete=False,)
            items = list(OrderItem.objects.filter(order=order.id))
        else:
            items = []
        product_obj = []
        subtotal = 0
        i = 0
        for item in items:
            product_obj_element = {}
            product_obj_element['id'] = item.id
            product_obj_element['product_id'] = item.product.id
            product_obj_element['title'] = item.product.name
            product_obj_element['quantity'] = item.quantity
            product_obj_element['total'] = item.total
            product_obj_element['price'] = item.product.price
            image_obj = list(ProductImages.objects.filter(product=item.product))
            if image_obj:
                product_obj_element['image'] = image_obj[0].image
            else:
                product_obj_element['image'] = None
            subtotal+=item.total
            product_obj.append(product_obj_element)

        subtotal = round(subtotal, 2)
        context = {'product_obj':product_obj, 'subtotal':subtotal, 'shipping':SHIPPING_CHARGE, 'total':round(subtotal+SHIPPING_CHARGE,2), 'product_image_obj':product_image_obj}
        return render(request,'cart.html',context)

class Order_Item_Delete(View):
    def get(self, request, productid):
        order_item = OrderItem.objects.get(id=productid)
        order_item.delete()
        return JsonResponse('Order item deleted',safe=False)
        

class Checkout(View):
    def get(self, request):
        if request.user.is_authenticated:
            customer = Customer.objects.get(user=request.user)
            order, created = Order.objects.get_or_create(customer=customer, complete=False,)
            items = list(OrderItem.objects.filter(order=order.id))
        else:
            pass
        subtotal = 0
        shipping = 10
        for item in items:
            subtotal+=item.total
        subtotal = round(subtotal, 2)
        total = round((subtotal+shipping), 2)
        context = {'customer':customer,'items':items, 'subtotal':subtotal, 'shipping':shipping, 'total':total}
        return render(request,"checkout.html", context)
    

class Contact(View):
    def get(self, request):
        context = {}
        return render(request,"contact.html", context)
    
class About(View):
    def get(self, request):
        context = {}
        return render(request,"about.html", context)
    

class Detail(View):
    def get(self, request, id):
        context = {}
        related_product_array = []
        product_image_obj = {}
        has_order = False
        product = Product.objects.get(id=id)
        related_products = list(Product.objects.filter(category=product.category))[:10]
        order_items = OrderItem.objects.all()
        has_size = product.has_size
        colors = product.colors.all()

        for order_item in order_items:
            if order_item.order.customer.user == request.user and order_item.product == product:
                has_order = True
                break

        images = list(ProductImages.objects.filter(product=product))
        if images:
            hero_image = images[0]
            context = {'product':product,'images':images[1:],'hero_image':hero_image}
        else:
            context = {'product':product,'related_products':related_products}
        for related_product in related_products:
            if product.id != related_product.id:
                product_image_obj = {}
                product_image_obj['id'] = related_product.id
                product_image_obj['title'] = get_title(related_product.name,20)
                product_image_obj['price'] = related_product.price
                product_image_obj['review'] = None
                product_image_obj['comment'] = None
                image_obj = list(ProductImages.objects.filter(product=related_product))
                if image_obj:
                    product_image_obj['image'] = image_obj[0].image
                else:
                    product_image_obj['image'] = None
                related_product_array.append(product_image_obj)
        context['related_products_array'] = related_product_array
        context['has_order'] = has_order
        context['colors'] = colors
        context['has_size'] = has_size
        return render(request,"detail.html", context)