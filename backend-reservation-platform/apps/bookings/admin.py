from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('course', 'student', 'date', 'status')
    list_filter = ('status', 'date')
    search_fields = ('course__title', 'student__username')
    ordering = ('-date',)