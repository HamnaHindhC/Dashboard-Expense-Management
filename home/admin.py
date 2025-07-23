from django.contrib import admin

# Register your models here.
from .models import Expense,Category

class ExpenseAdmin(admin.ModelAdmin):
   list_display=('amount','description','owner','category','date')
   search_fields=('description','category','date')

   list_per_page=4
admin.site.register(Expense,ExpenseAdmin)
admin.site.register(Category)
