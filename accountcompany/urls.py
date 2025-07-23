from django.urls import path
from . import views

urlpatterns = [
    path('company_account/', views.company_account_view, name='company_account'),
]