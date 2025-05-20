from django.db import models
from django.contrib.auth.models import User

class AnomalyAlert(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    alert_type = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Alert for {self.user.username} - {self.alert_type} at {self.timestamp}"