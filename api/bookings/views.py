from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from .models import Booking
from .serializers import BookingSerializer
from rest_framework import viewsets

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
# Create your views here.
