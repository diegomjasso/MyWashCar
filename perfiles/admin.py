from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as UserAdminAuth
from .models import Perfil_Usuario


class Catalogo_PerfilesAdmin(admin.ModelAdmin):
	exclude = ('user',)

class Perfil_UsuarioInLine(admin.StackedInline):
	model = Perfil_Usuario
	can_delete = False

class UserAdmin(UserAdminAuth):
	inlines = [Perfil_UsuarioInLine,]


# Register your models here.
admin.site.unregister(User)
admin.site.register(User, UserAdmin)