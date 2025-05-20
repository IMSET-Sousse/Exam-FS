from django.urls import path
from .views import MessageListView, MessageDetailView, MessageCreateView

urlpatterns = [
    path('', MessageListView.as_view(), name='message-list'),
    path('<int:pk>/', MessageDetailView.as_view(), name='message-detail'),
    path('create/', MessageCreateView.as_view(), name='message-create'),
]