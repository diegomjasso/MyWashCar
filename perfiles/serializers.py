from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Catalogo_Perfiles

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email')


class PerfileSerializer(serializers.ModelSerializer):
	user = UserSerializer()
	avatar = serializers.SerializerMethodField('get_avatar_url')

	def get_avatar_url(self, obj):
		return '%s' % (obj.avatar.url)
	class Meta:
		model = Catalogo_Perfiles
		fields = ("__all__")