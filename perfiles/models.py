from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Catalogo_Perfiles(models.Model):
	class Meta:
		verbose_name_plural='Catalago de Perfiles'

	id = models.AutoField(primary_key = True)
	nombre = models.CharField(max_length = 140)
	user = models.OneToOneField(User, on_delete = models.CASCADE)

	def __str__(self):
		return self.nombre