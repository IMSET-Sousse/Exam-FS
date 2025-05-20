from django.contrib import admin
from .models import AnomalyAlert

@admin.register(AnomalyAlert)
class AnomalyAlertAdmin(admin.ModelAdmin):
    list_display = ('user', 'alert_type', 'timestamp', 'is_resolved')
    list_filter = ('alert_type', 'is_resolved')
    search_fields = ('user__username', 'alert_type')