from django.urls import path,include
from rest_framework import routers

from .views import *

route = routers.DefaultRouter()
route.register('category',CatagoryViewset,basename="CatagoryViewset")

urlpatterns = [
    path("",include(route.urls)),
    path("product/",ProductView.as_view(),name="product"),
    path("product/<int:id>/",ProductView.as_view(),name="productdetal"), 
    path("profile/",ProfileView.as_view(),name="profile"),
]
