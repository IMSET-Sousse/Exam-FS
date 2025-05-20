from django.urls import path
from .views import UserListView, UserDetailView, UserProfileUpdateView

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),
    path('<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('profile/update/', UserProfileUpdateView.as_view(), name='user-profile-update'),
]