# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-18 20:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('negocios', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carwash',
            name='status',
            field=models.CharField(choices=[(1, 'Activo'), (2, 'Suspendido'), (3, 'Eliminado'), (4, 'Reactivado')], max_length=140),
        ),
    ]
