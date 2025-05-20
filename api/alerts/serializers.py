from rest_framework import serializers
from .models import AnomalyAlert

class AnomalyAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnomalyAlert
        fields = '__all__'  # or specify the fields you want to include explicitly
