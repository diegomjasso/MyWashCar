from rest_framework import serializers
from .models import Carwash

class CarwashSerializer(serializers.ModelSerializer):
	dias_laborales = serializers.StringRelatedField(many = True)
	propietario = serializers.StringRelatedField()
	logo = serializers.SerializerMethodField('get_logo_url')

	def get_logo_url(self, obj):
		return '%s' % (obj.logo.url)

	class Meta:
		model = Carwash
		fields = ("__all__")