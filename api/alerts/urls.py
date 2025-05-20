from django.urls import path
from . import views

urlpatterns = [
    path('', views.AlertListView.as_view(), name='alert-list'),
    path('<int:id>/', views.AlertDetailView.as_view(), name='alert-detail'),
    path('create/', views.AlertCreateView.as_view(), name='alert-create'),
]
