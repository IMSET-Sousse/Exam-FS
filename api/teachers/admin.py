from django.contrib import admin
from .models import TeacherProfile

@admin.register(TeacherProfile)
class TeacherProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'specialty', 'experience', 'rate')
    search_fields = ('user__username', 'specialty')
    list_filter = ('specialty',)