from django.urls import path
from.import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns=[
       
       path('',views.index,name="income"),
       path('add_income/',views.add_income,name="add_income"),
       path('edit-income/<int:id>', views.income_edit,name="income-edit"),
       path('delete-income/<int:id>',views.delete_income,name="income-delete"),
       path('search-income',csrf_exempt(views.search_income),name="search_income"),
       path('income_source_summary',views.income_source_summary,name="income_source_summary"),
       path('istats/',views.istats_View,name="istats"),
       path('convert_csv',views.convert_csv,name="convert-csv"),
       path('convert-excel',views.convert_excel,name="convert-excel"),
       path('convert-pdf',views.convert_pdf,name="convert-pdf")


]