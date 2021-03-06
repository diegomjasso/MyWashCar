# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-19 17:10
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import ventas.models


class Migration(migrations.Migration):

    dependencies = [
        ('negocios', '0009_auto_20170519_1053'),
        ('ventas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Servicios_Adquiridos_Venta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('precio_original', models.DecimalField(decimal_places=2, max_digits=5)),
                ('precio_final', models.DecimalField(decimal_places=2, max_digits=5)),
                ('cantidad', models.IntegerField()),
                ('id_servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='negocios.Catalago_Servicios', verbose_name='Servicio')),
            ],
        ),
        migrations.RemoveField(
            model_name='servicios_adquiridos_usuario',
            name='id_servicio',
        ),
        migrations.RemoveField(
            model_name='servicios_adquiridos_usuario',
            name='id_venta',
        ),
        migrations.AlterField(
            model_name='orden_venta',
            name='no_venta',
            field=models.IntegerField(default=ventas.models.Orden_Venta.ventaIncremental),
        ),
        migrations.DeleteModel(
            name='Servicios_Adquiridos_Usuario',
        ),
        migrations.AddField(
            model_name='servicios_adquiridos_venta',
            name='id_venta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ventas.Orden_Venta'),
        ),
    ]
