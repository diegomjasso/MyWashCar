from rest_framework import viewsets
from .serializers import CarwashSerializer
from .models import Carwash

class CarwashViewSet(viewsets.ModelViewSet):
	queryset = Carwash.objects.all()
	serializer_class = CarwashSerializer