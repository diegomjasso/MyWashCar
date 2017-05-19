from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from negocios.models import Carwash, Catalago_Servicios

# Create your models here.
class Orden_Venta(models.Model):
	def ventaIncremental():
		total_ventas = Orden_Venta.objects.all().count()+1
		return total_ventas
	
	id = models.AutoField(primary_key = True)
	no_venta = models.IntegerField(default = ventaIncremental)
	carwash = models.ForeignKey(Carwash, on_delete = models.CASCADE)
	usuario = models.ForeignKey(User, on_delete = models.CASCADE)
	total_venta = models.DecimalField(max_digits = 6, decimal_places = 2)
	fecha_venta = models.DateTimeField(default = timezone.now)

	def __str__(self):
		return str(self.no_venta)

class Servicios_Adquiridos_Venta(models.Model):
	id = models.AutoField(primary_key = True)
	id_venta = models.ForeignKey(Orden_Venta, on_delete = models.CASCADE)
	id_servicio = models.ForeignKey(Catalago_Servicios, on_delete = models.CASCADE, verbose_name='Servicio')
	precio_original = models.DecimalField(max_digits = 5, decimal_places = 2)
	precio_final = models.DecimalField(max_digits = 5, decimal_places = 2)
	descuento = models.IntegerField(default = 0)
	cantidad = models.IntegerField(default = 1)

	def save(self, *args, **kwargs):
		po = Catalago_Servicios.objects.get(pk=self.id_servicio.id)
		self.precio_original = po.precio
		self.precio_final = self.precio_original - self.descuento
		super(Servicios_Adquiridos_Venta, self).save(*args, **kwargs)

	def __str__(self):
		return self.id_servicio.servicio