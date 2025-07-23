from django.db import models

# Create your models here.

from django.db import models

class CompanyAccount(models.Model):
    bank_name = models.CharField(max_length=100)
    account_holder_name = models.CharField(max_length=100)
    account_number = models.CharField(max_length=50)
    ifsc_code = models.CharField(max_length=20)
    branch = models.CharField(max_length=100)
    upi_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.bank_name} - {self.account_holder_name}"

