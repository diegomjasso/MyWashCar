# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-24 18:05
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('perfiles', '0004_catalogo_perfiles_avatar'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Catalogo_Perfiles',
            new_name='Perfil_Usuario',
        ),
        migrations.AlterModelOptions(
            name='perfil_usuario',
            options={'verbose_name_plural': 'Perfil del Usuario'},
        ),
    ]