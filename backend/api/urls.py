from django.db import router
from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'students', StudentViewSet, basename='student')
router.register(r'classroom', ClassroomViewSet, basename='classroom')
router.register(r'assignments', AssignmentViewSet, basename='assignment')
router.register(r'assignment_status', AssignmentStatusViewSet, basename='assignment_status')

urlpatterns = [
    path(r'', include(router.urls)),
]