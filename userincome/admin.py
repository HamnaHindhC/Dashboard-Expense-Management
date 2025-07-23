from django.contrib import admin

# Register your models here.
from .models import Source,UserIncome


admin.site.register(Source)
admin.site.register(UserIncome)