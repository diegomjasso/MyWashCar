from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Catalogo_Perfiles(models.Model):
	class Meta:
		verbose_name_plural='Catalago de Perfiles'

	id = models.AutoField(primary_key = True)
	user = models.OneToOneField(User, on_delete = models.CASCADE)
	direccion = models.CharField(max_length = 140)
	colonia = models.CharField(max_length = 140)
	municipio = models.CharField(max_length = 140, default = 'Aguascalientes')
	estado = models.CharField(max_length = 140, default = 'Aguascalientes')
	pais = models.CharField(max_length = 140, default = 'Mexico')
	telefono = models.CharField(max_length = 10)
	avatar = models.ImageField(upload_to = 'static/assets/images/avatars/', blank = True, null = True)


	def __str__(self):
		return self.user.username