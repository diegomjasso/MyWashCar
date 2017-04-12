from rest_framework import routers
from django.conf.urls import url, include

router = routers.DefaultRouter()

# router.register(r'rutas', RutasViewSet)
# router.register(r'corridas', CorridasViewSet)
# router.register(r'catalogo_rutas', Catalogo_rutasViewSet)
# router.register(r'coordenadas_rutas', Coordenadas_rutasViewSet)
# router.register(r'coordenadas_corridas', Coordenadas_corridasViewSet)

urlpatterns = [
	url(r'', include(router.urls))
]