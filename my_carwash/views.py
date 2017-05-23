from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth import logout as logout_django
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse_lazy
from django.views.generic import CreateView, View
from .forms import CreateUserForm

class IndexClass(CreateView):
	success_url = reverse_lazy('dashboard')
	model = User
	template_name = 'index.html'
	form_class =  CreateUserForm

	def form_valid(self, form):
		self.object = form.save(commit = False)
		self.object.set_password(self.object.password)
		self.object.save()

		return HttpResponseRedirect(self.get_success_url())

def error_404(request):
	return render(request, 'error_404.html', {})
