from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer

class PerfilViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer