from django.urls import path
from rest_framework import routers

from .views import *

urlpatterns = [
    path("product/",ProductView.as_view(),name="product"),
    path("product/<int:id>/",ProductView.as_view(),name="productdetal"), 
]
