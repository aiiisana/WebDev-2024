import json
from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import HttpResponse, JsonResponse
from api.serializers import VacancySerializer, CompanySerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def get_all_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def get_company(request, pk=None):
    if request.method == 'GET':
        try: 
            company = Company.objects.get(id=pk)
            serializer = CompanySerializer(company)
            return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
        except Company.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    elif request.method == 'PUT':
        try:
            company = Company.objects.get(id=pk)
            data = json.loads(request.body)
            serializer = CompanySerializer(company, data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
            return JsonResponse(serializer.errors, status=400)
        except Company.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    elif request.method == 'DELETE':
        try:
            company = Company.objects.get(id=pk)
            company.delete()
            return JsonResponse({'message': 'Company deleted successfully'}, status=204)
        except Company.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def get_all_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

@csrf_exempt
def get_vacancies_by_company(request, pk=None):
    try: 
        company = Company.objects.get(id=pk)
        vacancies = Vacancy.objects.filter(company_id=pk)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

@csrf_exempt
def get_vacancy(request, pk=None):
    if request.method == 'GET':
        try: 
            vacancy = Vacancy.objects.get(id=pk)
            serializer = VacancySerializer(vacancy)
            return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    elif request.method == 'PUT':
        try:
            vacancy = Vacancy.objects.get(id=pk)
            data = json.loads(request.body)
            serializer = VacancySerializer(vacancy, data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
            return JsonResponse(serializer.errors, status=400)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    elif request.method == 'DELETE':
        try:
            vacancy = Vacancy.objects.get(id=pk)
            vacancy.delete()
            return JsonResponse({'message': 'Vacancy deleted successfully'}, status=204)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error':str(e)}, status=404)
    else:
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)

def get_top_ten_vacancies(request):
    try: 
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'indent': 4})
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)
    
def get_error_page(request):
        return HttpResponse('<h1>Error! Page not found</h1>')