from rest_framework import serializers
from .models import genmeds

class kendrasSerializer(serializers.ModelSerializer):
    class Meta:
        model=genmeds
        fields='__all__'