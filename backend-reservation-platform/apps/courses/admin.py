from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'teacher', 'price', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('teacher', 'created_at')
    ordering = ('-created_at',)