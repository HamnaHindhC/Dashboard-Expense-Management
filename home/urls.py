from django.urls import path
from.import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns=[
       
       path('',views.index,name="expenses"),
       path('add_expense/',views.add_expense,name="add_expenses"),
       path('edit-expense/<int:id>', views.expense_edit,name="expense-edit"),
       path('delete-expense/<int:id>',views.delete_expense,name="expense-delete"),
       path('search-expenses',csrf_exempt(views.search_expenses),name="search_expenses"),
       path('expense_category_summary',views.expense_category_summary,name="expense_category_summary"),
       path('stats',views.stats_View,name="stats"),
       path('export_csv',views.export_csv,name="export-csv"),
       path('export-excel',views.export_excel,name="export-excel"),
       path('export-pdf',views.export_pdf,name="export-pdf")

]