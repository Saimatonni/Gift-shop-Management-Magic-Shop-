from django.urls import path,include
from rest_framework import routers

from .views import *

route = routers.DefaultRouter()
route.register('category',CatagoryViewset,basename="CatagoryViewset")
route.register('cart',MyCart,basename="cart")
route.register('orders',OldOrders,basename="orders")

urlpatterns = [
    path("",include(route.urls)),
    path("product/",ProductView.as_view(),name="product"),
    path("register/",RegisterView.as_view(),name="register"),
    path("product/<int:id>/",ProductView.as_view(),name="productdetal"), 
    path("profile/",ProfileView.as_view(),name="profile"),
    path("userdataupdate/",UserDataUpdate.as_view(),name="userdataupdate"),
    path("updateprofile/",Updateprofile.as_view(),name="updateprofile"),
    path("addtocart/",AddtoCartView.as_view(),name="addtocart"),
    path("updatecartproduct/",UpdateCartProduct.as_view(),name="updatecartproduct"),
    path("editcartproduct/",EditCartProduct.as_view(),name="editcartproduct"),
    path("delatecartproduct/",Delatecartproduct.as_view(),name="delatecartproduct"),
    path("delatefullcart/",Delatefullcart.as_view(),name="delatefullcart"),
]
