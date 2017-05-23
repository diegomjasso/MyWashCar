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
from .forms import CreateUserForm, LoginUserForm

class IndexClass(CreateView):
	success_url = reverse_lazy('dashboard:dashboard')
	model = User
	template_name = 'index.html'
	form_class =  CreateUserForm

	def form_valid(self, form):
		self.object = form.save(commit = False)
		self.object.set_password(self.object.password)
		self.object.save()

		return HttpResponseRedirect(self.get_success_url())

class LoginClass(View):
	form = LoginUserForm()
	message = None
	template = 'login.html'

	def get(self, request, *args, **kwargs):
		if request.user.is_authenticated():
			return redirect('dashboard:dashboard')

		return render(request, self.template, self.get_context()) 

	def post(self, request, *args, **kwargs):
		username_req = request.POST['username']
		password_req = request.POST['password']

		user = authenticate(username = username_req, password = password_req )

		if user is not None:
			login_django(request, user)
			return redirect('dashboard:dashboard')
		else:
			self.message = "El usuario o la contraseña no son validos"

		return render(request, self.template, self.get_context())

	def get_context(self):
		return {'form' : self.form, 'message' : self.message}

"""
Funciones
"""
def login(request):
	return render(request, 'login.html', {})

@login_required(login_url = 'index')
def logout(request):
	logout_django(request)
	return redirect('index')

def error_404(request):
	return render(request, 'error_404.html', {})

