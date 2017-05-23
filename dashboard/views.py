from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib import messages

# Create your views here.
class DashboardClass(View):
	def get(self, request, *args, **kwargs):
		return render( request, 'dashboard/index.html', {})