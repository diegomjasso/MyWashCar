from rest_framework import serializers
from .models import Carwash

class CarwashSerializer(serializers.ModelSerializer):
	dias_laborales = serializers.StringRelatedField(many = True)
	propietario = serializers.StringRelatedField()
	
	class Meta:
		model = Carwash
		fields = ("__all__")