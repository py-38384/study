from core.models import *
from core.views import DEFAULT_PRODUCT_LIMIT_PER_PAGE

def total_cart_items(request):
    total_items = 0
    items = []
    if request.user.is_authenticated:
            try:
                customer = Customer.objects.get(user=request.user)
            except:
                customer = None
            order, created = Order.objects.get_or_create(customer=customer, complete=False,)
            items = list(OrderItem.objects.filter(order=order.id))
    else:
        pass
    for item in items:
        total_items+=item.quantity
    return {'total_cart_items':total_items}



def category(request):
    categories_arr = [] 
    categories = Category.objects.all()

    for category in categories:
        categories_obj = {}
        categories_obj['name'] = category.name
        categories_obj['image'] = category.image
        categories_obj['products'] = len(list(Product.objects.filter(category=category)))
        categories_arr.append(categories_obj)

    return {'categories':categories_arr,'DEFAULT_PRODUCT_LIMIT_PER_PAGE':DEFAULT_PRODUCT_LIMIT_PER_PAGE}