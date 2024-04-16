import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@csrf_exempt
def get_all_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.data, status=400)
    
    

@csrf_exempt
def get_company(request, id=None):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'company not found'})
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(company, data=data)
        if serializer.is_valid():
            serializer.save()
            JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.data, status=400)
    
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'ok': True})
    

@csrf_exempt
def get_all_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.data, status=400)
    
@csrf_exempt
def get_vacancy(request, id=None):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'vacancy not found'})
    
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = VacancySerializer(vacancy, data=data)
        if serializer.is_valid():
            serializer.save()
            JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.data, status=400)
    
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'ok': True})
    

def get_vacancies_by_company(request, id=None):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'vacancies by this company not found'})
    
    vacancies = Vacancy.objects.filter(company_id = id)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_top_ten_vacancies(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'top 10 vacancies not found'})