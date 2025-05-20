from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions
from .models import TeacherProfile
from .serializers import TeacherProfileSerializer

class TeacherProfileViewSet(viewsets.ModelViewSet):
    queryset = TeacherProfile.objects.all()
    serializer_class = TeacherProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Optionally restricts the returned profiles to a given user,
        by filtering against a `user` query parameter in the URL.
        """
        queryset = self.queryset
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

def teacher_detail(request, id):
    teacher = get_object_or_404(TeacherProfile, id=id)
    return render(request, 'teachers/teacher_detail.html', {'teacher': teacher})