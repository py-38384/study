from django.db import models

# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=60)
    category = models.CharField(max_length=100,default="")
    subcategory = models.CharField(max_length=100,default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=600)
    pub_date = models.DateField()
    image = models.ImageField(upload_to="shop/images",default="")

    def __str__(self) -> str:
        return self.product_name
