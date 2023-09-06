from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from PIL import Image

def resize(image,new_hight):
    width, hight = image.size
    ratio = width/hight
    new_width = int(ratio*new_hight)
    resized_image = image.resize(new_width,new_hight)
    return resized_image

class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    mobile_number = models.CharField(max_length=20, null=True, blank=True)
    primary_address = models.CharField(max_length=200,null=True)
    secondary_address = models.CharField(max_length=200,null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.first_name

class Category(models.Model):
    name = models.CharField(max_length=200, null=True)
    small_desc = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to="category_image/",null=True,blank=True)

    def __str__(self):
        return self.name

class Color(models.Model):
    name = models.CharField(max_length=100)
    rgb = models.CharField(max_length=100,blank=True,null=True)
    hex_code = models.CharField(max_length=100,blank=True,null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200, null=True)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    small_desc = models.CharField(max_length=255)
    desc = models.TextField()
    add_info = models.TextField()
    digital = models.BooleanField(default=False, null=True, blank=False)
    has_size = models.BooleanField()
    colors = models.ManyToManyField(Color,blank=True,null=True)
    is_featured = models.BooleanField()
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name


class ProductImages(models.Model):
    product = models.ForeignKey(Product,blank=True,null=True,default=None,on_delete=models.CASCADE)
    image = models.ImageField(upload_to="product_images/",null=True,blank=True)

    def save(self, *args, **kwargs):
        super().save(*args,**kwargs)
        print(self.image.path)
        img = Image.open(self.image.path)
        img.resize((500,500))
        img.save(self.image.path)

    def __str__(self):
        return self.product.name

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE) 
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    comment = models.TextField()

    def __str__(self):
        return self.comment[0:30]


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    date_orderd = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)

    def __str__(self):
        return str(self.id)
    

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(max_length=200,blank=True,null=True)
    size = models.CharField(max_length=200,blank=True,null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)

    @property
    def total(self):
        total = round(self.product.price * self.quantity,2)
        return total

class ShippingAddress(models.Model):
    Customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.address)
    
