from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'  # You can specify the fields you want to include, e.g., ['id', 'title', 'description', 'teacher', 'price', 'availability']