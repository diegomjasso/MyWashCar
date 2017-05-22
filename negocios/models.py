from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from geoposition.fields import GeopositionField

class Semana(models.Model):
	id = models.AutoField(primary_key = True)
	dia_semana = models.CharField(max_length = 140)

	def __str__(self):
		return self.dia_semana

# Create your models here.
class Carwash(models.Model):
	class Meta:
		verbose_name_plural = 'Carwash'
	STATUS = (
			('1', 'Activo'),
			('2', 'Suspendido'),
			('3', 'Eliminado'),
			('4', 'Reactivado')
		)

	id = models.AutoField(primary_key = True)
	nombre = models.CharField(max_length = 140)
	calle = models.CharField(max_length = 140)
	no_calle = models.CharField(max_length = 140)
	colonia = models.CharField(max_length = 140)
	municipio = models.CharField(max_length = 140, default = 'Aguascalientes')
	estado = models.CharField(max_length = 140, default = 'Aguascalientes')
	pais = models.CharField(max_length = 140, default = "Mexico")
	cp = models.IntegerField()
	telefono = models.CharField(max_length = 10, blank = True, null = True)
	propietario = models.OneToOneField(User, on_delete = models.CASCADE)
	horario_abierto = models.TimeField("Abierto a las")
	horario_cerrado = models.TimeField("Cerrado a las")
	dias_laborales = models.ManyToManyField(Semana)
	fecha_registro = models.DateTimeField(default = timezone.now)
	fecha_modificacion = models.DateTimeField(default = timezone.now)
	status = models.CharField(max_length = 140, choices = STATUS)
	logo = models.ImageField(upload_to = "static/assets/images/logoCarwash/")
	ubicacion =  GeopositionField()

	def __str__(self):
		return self.nombre

class Catalago_Servicios(models.Model):
	class Meta:
		verbose_name_plural = "Catalogo de Servicios"
	id = models.AutoField(primary_key = True)
	negocio = models.ForeignKey(Carwash, on_delete = models.CASCADE)
	servicio = models.CharField(max_length = 140)
	descripcion = models.TextField()
	precio = models.DecimalField(max_digits = 5, decimal_places = 2)
	fecha_registro = models.DateTimeField(default = timezone.now)

	def __str__(self):
		return self.servicio
