from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import HttpResponse, JsonResponse
from api.serializers import VacancySerializer, CompanySerializer

# Create your views here.

def get_all_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})

def get_company(request, pk=None):
    try: 
        company = Company.objects.get(id=pk)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})

def get_vacancies_by_company(request, pk=None):
    try: 
        company = Company.objects.get(id=pk)
        vacancies = Vacancy.objects.filter(company_id=pk)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

def get_vacancy(request, pk=None):
    try: 
        vacancy = Vacancy.objects.get(id=pk)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

def get_top_ten_vacancies(request):
    try: 
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)
    
def get_error_page(request):
        return HttpResponse('<h1>Error! Page not found</h1>')