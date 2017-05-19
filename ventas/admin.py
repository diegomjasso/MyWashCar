from django.contrib import admin
from .models import Orden_Venta, Servicios_Adquiridos_Venta

# Register your models here.
@admin.register(Orden_Venta)
class Orden_VentaAdmin(admin.ModelAdmin):
	list_display = ('no_venta', 'carwash', 'usuario', 'total_venta', 'fecha_venta')
	list_filter = ('carwash', 'usuario', 'fecha_venta')

@admin.register(Servicios_Adquiridos_Venta)
class Servicios_Adquiridos_VentaAdmin(admin.ModelAdmin):
	list_display = ('id_venta', 'carwash', 'id_servicio', 'precio_original', 'precio_final', 'cantidad')
	list_filter = ('id_venta', 'id_servicio__negocio', 'id_servicio')
	exclude = ('precio_original', 'precio_final')

	def carwash(self, obj):
		return obj.id_servicio.negocio