from django.contrib import admin
from .models import *

admin.site.register(Classroom)
admin.site.register(Student)
admin.site.register(Assignment)
admin.site.register(AssignmentStatus)