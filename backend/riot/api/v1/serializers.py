from rest_framework import serializers
from riot.models import Mini

class MiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mini
        fields = "__all__"