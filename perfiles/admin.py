from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as UserAdminAuth
from .models import Catalogo_Perfiles


class Catalogo_PerfilesAdmin(admin.ModelAdmin):
	exclude = ('user',)

class Catalogo_PerfilesInLine(admin.StackedInline):
	model = Catalogo_Perfiles
	can_delete = False

class UserAdmin(UserAdminAuth):
	inlines = [Catalogo_PerfilesInLine,]


# Register your models here.
admin.site.unregister(User)

admin.site.register(User, UserAdmin)