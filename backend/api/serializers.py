from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from authentication.serializers import *

class ClassroomSerializer(serializers.ModelSerializer):
    teacher = serializers.CharField(source = 'teacher.username', required = False, read_only = True)
    teacher_id = serializers.IntegerField(source = 'teacher.id', required = False, read_only = True)
    class Meta:
        model = Classroom
        fields = ('id', 'title','teacher', 'teacher_id', 'classroom_color')

class StudentSerializer(serializers.ModelSerializer):
    classroom = serializers.CharField(source = 'classroom.title', required = False, read_only = True)
    classroom_id = serializers.IntegerField(source = 'classroom.id', required = False, read_only = True)
    student_id = serializers.IntegerField(source = 'id', required = False, read_only = True)
    class Meta:
        model = Student
        fields = ('student_id','classroom','classroom_id','students',)

class AssignmentSerializer(serializers.ModelSerializer):
    teacher = serializers.CharField(source = 'teacher.username', required = False, read_only = True)
    assignment_id = serializers.IntegerField(source = 'assignment.id', required = False, read_only = True)
    classroom = serializers.CharField(source = 'classroom.title', required = False, read_only = True)
    classroom_id = serializers.IntegerField(source = 'classroom.id', required = False, read_only = True)
    class Meta:
        model = Assignment
        fields = ('assignment_id','title','teacher','classroom','classroom_id','deadline','score',)

class AssignmentStatusSerializer(serializers.ModelSerializer):
    student = serializers.CharField(source = 'student.username', required = False, read_only = True)
    student_id = serializers.IntegerField(source = 'student.id', required = False, read_only = True)
    assignment = serializers.CharField(source = 'assignment.title', required = False, read_only = True)
    assignment_id = serializers.IntegerField(source = 'assignment.id', required = False, read_only = True)
    class Meta:
        model = AssignmentStatus
        fields = ('assignment_id','assignment','student','student_id','status',)