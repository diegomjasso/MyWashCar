from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages

"""
Classes
"""
class DashboardClass(LoginRequiredMixin, View):
	login_url = 'index'

	def get(self, request, *args, **kwargs):
		return render( request, 'dashboard/index.html', {})