from rest_framework import routers
from django.conf.urls import url, include
from negocios.viewsets import CarwashViewSet

router = routers.DefaultRouter()

router.register(r'carwash', CarwashViewSet)


urlpatterns = [
	url(r'', include(router.urls))
]