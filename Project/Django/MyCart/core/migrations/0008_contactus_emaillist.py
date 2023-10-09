# Generated by Django 4.2.5 on 2023-10-07 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_subcategory_product_sub_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField()),
                ('subject', models.CharField(max_length=250)),
                ('message', models.TextField()),
                ('time_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='EmailList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('email', models.CharField()),
                ('mobile_number', models.CharField(blank=True, max_length=20, null=True)),
                ('time_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
