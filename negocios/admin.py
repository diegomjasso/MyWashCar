from django.contrib import admin
from .models import Carwash, Catalago_Servicios, Semana

@admin.register(Catalago_Servicios)
class Catalogo_ServiciosAdmin(admin.ModelAdmin):
	list_display = ('id', 'negocio','servicio', 'precio')
	list_filter = ('negocio__nombre', 'precio', )

# Register your models here.
admin.site.register(Carwash)
admin.site.register(Semana)