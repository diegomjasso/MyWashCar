from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Perfil_Usuario

class PerfileSerializer(serializers.ModelSerializer):
	avatar = serializers.SerializerMethodField('get_avatar_url')

	def get_avatar_url(self, obj):
		if obj.avatar and hasattr(obj.avatar, 'url'):
			return '%s' % (obj.avatar.url)
		else:
			return 'static/assets/images/noFoto.png'

	class Meta:
		model =Perfil_Usuario
		#fields = ("__all__")
		exclude = ('user',)


class UserSerializer(serializers.ModelSerializer):
	perfil_usuario = PerfileSerializer(read_only = True)

	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email', 'perfil_usuario')


