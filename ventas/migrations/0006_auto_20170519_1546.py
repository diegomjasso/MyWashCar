# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-19 20:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0005_servicios_adquiridos_venta_descuento'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicios_adquiridos_venta',
            name='fecha',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='servicios_adquiridos_venta',
            name='cantidad',
            field=models.IntegerField(default=1),
        ),
    ]
