# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-19 17:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0004_auto_20170519_1233'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicios_adquiridos_venta',
            name='descuento',
            field=models.IntegerField(default=0),
        ),
    ]