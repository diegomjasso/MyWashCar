from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer

class PerfilViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

	def get_queryset(self):
		if self.request.user.is_superuser:
			return self.queryset.all()
		else:
			return self.queryset.filter(id = self.request.user.id)

		