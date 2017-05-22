
from django.conf.urls import include, url
from .views import DashboardClass

app_name = 'dashboard'

urlpatterns = [
	url(r'^$', DashboardClass.as_view(), name='dashboard'),
]