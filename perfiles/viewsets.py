from rest_framework import viewsets
from .serializers import PerfileSerializer
from .models import Catalogo_Perfiles

class PerfilViewSet(viewsets.ModelViewSet):
	queryset = Catalogo_Perfiles.objects.all()
	serializer_class = PerfileSerializer