from django.urls import path, include
from api.views import get_categories, get_category, get_products_by_category, get_products, get_product, get_epmty_page

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/<int:categ_id>/products/', get_products_by_category),
    path('', get_epmty_page)
]