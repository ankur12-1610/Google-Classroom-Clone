from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Classroom(models.Model):
#a class is created by teacher(user)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
 
class Student(models.Model):
#a single class has enrolled students
    students = models.ManyToManyField(User, null=True)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, null = True)
    
    def __str__(self):
        return self.classroom.title
