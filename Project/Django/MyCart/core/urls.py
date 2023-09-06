from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.Index.as_view(),name='home'),
    path('shop/',views.Shop.as_view(),name='shop'),
    path('deals/',views.Deals.as_view(),name='deals'),
    path('cart/',views.Cart.as_view(),name='cart'),
    path('checkout/',views.Checkout.as_view(),name='checkout'),
    path('update_item/',views.UpdateItem.as_view(),name='update_item'),
    path('order_item_delete/<str:productid>',views.Order_Item_Delete.as_view(),name='order_item_delete'),
    path('contact/',views.Contact.as_view(),name='contact'),
    path('about/',views.About.as_view(),name='about'),
    path('details/<str:id>',views.Detail.as_view(),name='detail'),
]