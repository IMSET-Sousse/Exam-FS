from django.shortcuts import render
from rest_framework import viewsets
from .models import Alert
from .serializers import AlertSerializer
from rest_framework.response import Response
from rest_framework import status

class AlertListView(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer

class AlertDetailView(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer  

class AlertCreateView(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    


# Create your views here.
