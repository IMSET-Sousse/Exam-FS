from rest_framework import viewsets
from rest_framework.response import Response
from .models import AnomalyAlert
from .serializers import AnomalyAlertSerializer

class AnomalyAlertViewSet(viewsets.ModelViewSet):
    queryset = AnomalyAlert.objects.all()
    serializer_class = AnomalyAlertSerializer

    def list(self, request):
        alerts = self.get_queryset()
        serializer = self.get_serializer(alerts, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        alert = serializer.save()
        return Response(self.get_serializer(alert).data, status=201)

    def retrieve(self, request, pk=None):
        alert = self.get_object()
        serializer = self.get_serializer(alert)
        return Response(serializer.data)

    def update(self, request, pk=None):
        alert = self.get_object()
        serializer = self.get_serializer(alert, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        alert = serializer.save()
        return Response(self.get_serializer(alert).data)

    def destroy(self, request, pk=None):
        alert = self.get_object()
        alert.delete()
        return Response(status=204)