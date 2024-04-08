from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    city = models.CharField(max_length=50)
    address = models.TextField(default='')

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
