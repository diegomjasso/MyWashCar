"""my_carwash URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url,	include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.contrib import admin
from .views import IndexClass, LoginClass, logout, login

urlpatterns = [
	url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
	url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),  # Django JET dashboard URLS
    url(r'^dashboard/', include('dashboard.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', IndexClass.as_view(), name='index'),
    url(r'^logout/', logout, name='logout'),
    url(r'^login/', LoginClass.as_view(), name='login'),
    url(r'^api/', include('my_carwash.urls_api')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]