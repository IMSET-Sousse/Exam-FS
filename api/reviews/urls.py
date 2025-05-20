from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReviewList.as_view(), name='review-list'),
    path('<int:pk>/', views.ReviewDetail.as_view(), name='review-detail'),
    path('create/', views.ReviewCreate.as_view(), name='review-create'),
    path('update/<int:pk>/', views.ReviewUpdate.as_view(), name='review-update'),
    path('delete/<int:pk>/', views.ReviewDelete.as_view(), name='review-delete'),
]