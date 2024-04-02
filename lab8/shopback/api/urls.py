from django.contrib import admin
from django.urls import path, include

from lab8.shopback.api.views import get_categories, get_category, get_product, get_products, get_products_by_category 

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/<int:cat_id>/products/', get_products_by_category)
]