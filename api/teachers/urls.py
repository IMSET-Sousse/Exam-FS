from django.urls import path
from . import views

urlpatterns = [
    path('', views.TeacherListView.as_view(), name='teacher-list'),
    path('<int:id>/', views.TeacherDetailView.as_view(), name='teacher-detail'),
    path('create/', views.TeacherCreateView.as_view(), name='teacher-create'),
    path('<int:id>/update/', views.TeacherUpdateView.as_view(), name='teacher-update'),
    path('<int:id>/delete/', views.TeacherDeleteView.as_view(), name='teacher-delete'),
]