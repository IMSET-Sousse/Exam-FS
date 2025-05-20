from django.urls import path
from .views import QuizGenerateView, QuizDetailView

urlpatterns = [
    path('generate/', QuizGenerateView.as_view(), name='quiz-generate'),
    path('<int:id>/', QuizDetailView.as_view(), name='quiz-detail'),
]