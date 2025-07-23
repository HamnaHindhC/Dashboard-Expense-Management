from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import CompanyAccount

def company_account_view(request):
    accounts = CompanyAccount.objects.all()
    return render(request, 'account/account.html', {'accounts': accounts})