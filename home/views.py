from django.shortcuts import render

def index(request):
  return render(request, 'home/index.html')



def add_expense(request):
    return render(request, 'home/add_expense.html')
