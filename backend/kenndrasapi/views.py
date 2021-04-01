from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import genmeds as genmedsmodel
from .serializers import kendrasSerializer

# Create your views here.

class kendras(APIView):
    def get(self,request):
        kendras1 = genmedsmodel.objects.order_by('Vendor_Name')
        serializer=kendrasSerializer(kendras1, many=True)
        return Response(serializer.data)