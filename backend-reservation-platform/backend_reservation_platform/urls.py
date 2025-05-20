from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('apps.users.urls')),
    path('courses/', include('apps.courses.urls')),
    path('teachers/', include('apps.teachers.urls')),
    path('bookings/', include('apps.bookings.urls')),
    path('reviews/', include('apps.reviews.urls')),
    path('messages/', include('apps.messages.urls')),
    path('quiz/', include('apps.quiz.urls')),
    path('alerts/', include('apps.alerts.urls')),
]