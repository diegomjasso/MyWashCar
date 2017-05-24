from django import forms
from django.contrib.auth.models import User
from perfiles.models import Perfil_Usuario

def must_be_gt(value_password):
	if len(value_password) < 5:
		raise forms.ValidationError('El password debe tener mas de 5 caracteres')

class CreateUserForm(forms.ModelForm):
	username = forms.CharField(max_length = 20, required = True)
	password = forms.CharField(max_length = 20, required = True, widget = forms.PasswordInput(),  validators = [must_be_gt])
	email = forms.CharField(required = True)

	def __init__(self, *args, **kwargs):
		super(CreateUserForm, self).__init__(*args, **kwargs)
		self.fields['username'].widget.attrs.update( {'id': 'username', 'class': 'form-control', 'placeholder' : 'Usuario' } )
		self.fields['password'].widget.attrs.update( {'id': 'password', 'class': 'form-control', 'placeholder' : 'Contraseña' } )
		self.fields['email'].widget.attrs.update( {'id': 'email', 'class': 'form-control', 'placeholder' : 'Email' } )

	def clean_email(self):
		email = self.cleaned_data.get('email')
		if User.objects.filter(email=email).count():
			raise forms.ValidationError('El email ya existe')
		return email

	class Meta:
		model = User
		fields = ('username', 'password', 'email')

class LoginUserForm(forms.Form):
	username = forms.CharField(max_length = 20)
	password = forms.CharField(max_length = 20, widget = forms.PasswordInput())

	def __init__(self, *args, **kwargs):
		super(LoginUserForm, self).__init__(*args, **kwargs)
		self.fields['username'].widget.attrs.update({'class' : 'form-control', 'placeholder' : 'Username'})
		self.fields['password'].widget.attrs.update({'class' : 'form-control', 'placeholder' : 'Contraseña'})

class EditUserForm(forms.ModelForm):
	username = forms.CharField(max_length = 20)
	email = forms.CharField()

	def clean_email(self):
		email = self.cleaned_data.get('email')
		if User.objects.filter(email=email).exclude(pk = self.instance.id).count():
			raise forms.ValidationError('El email ya existe')
		return email

	class Meta:
		model = User
		fields = ('username', 'email', 'first_name', 'last_name')

class EditPerfilForm(forms.ModelForm):
	class Meta:
		model = Perfil_Usuario
		fields = ('direccion', 'colonia', 'municipio', 'estado', 'pais', 'telefono')

class EditUserPasswordForm(forms.Form):
	password = forms.CharField(max_length = 20, widget = forms.PasswordInput())
	new_password = forms.CharField(max_length = 20, widget = forms.PasswordInput(), validators = [must_be_gt])
	repeat_password = forms.CharField(max_length = 20, widget = forms.PasswordInput())

	def clean(self):
		clean_data = super(EditUserPasswordForm, self).clean()
		password1 = clean_data['new_password']
		password2 = clean_data['repeat_password']

		if password1 != password2:
			raise forms.ValidationError('Las contraseñas no coinciden')