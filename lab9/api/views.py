from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import HttpResponse, JsonResponse

# Create your views here.

def get_all_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def get_company(request, pk=None):
    try: 
        company = Company.objects.get(id=pk)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)


def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancies_by_company(request, pk=None):
    try: 
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)
    
    vacancies = Vacancy.objects.filter(company_id=pk)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy(request, pk=None):
    try: 
        vacancy = Vacancy.objects.get(id=pk)
        return JsonResponse(vacancy.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

def get_top_ten_vacancies(request):
    try: 
        vacancy = Vacancy.objects.order_by('salary')[:10]
        return JsonResponse(vacancy.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

def get_error_page(request):
        return HttpResponse('<h1>Error! Page not found</h1>')