from rest_framework import serializers
from .models import TeacherProfile

class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = '__all__'  # or specify the fields you want to include, e.g., ['id', 'name', 'bio', 'specialty']