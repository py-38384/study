# Generated by Django 4.2.5 on 2023-09-30 13:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_remove_review_customer_review_review_star_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]