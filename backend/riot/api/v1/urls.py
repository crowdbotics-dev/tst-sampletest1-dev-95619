
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MiniViewSet
router = DefaultRouter()
router.register('mini', MiniViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
