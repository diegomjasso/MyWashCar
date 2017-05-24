from rest_framework import routers
from django.conf.urls import url, include
from negocios.viewsets import CarwashViewSet
from perfiles.viewsets import PerfilViewSet

router = routers.DefaultRouter()

router.register(r'carwash', CarwashViewSet)
router.register(r'perfil', PerfilViewSet)


urlpatterns = [
	url(r'', include(router.urls))
]