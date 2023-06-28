from rest_framework import authentication
from riot.models import Mini
from .serializers import MiniSerializer
from rest_framework import viewsets

class MiniViewSet(viewsets.ModelViewSet):
    serializer_class = MiniSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Mini.objects.all()