from django.db import models
from apps.courses.models import Course
from apps.users.models import User

class Booking(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('canceled', 'Canceled'),
    ], default='pending')

    def __str__(self):
        return f"{self.user.username} - {self.course.title} ({self.status})"
# Create your models here.
