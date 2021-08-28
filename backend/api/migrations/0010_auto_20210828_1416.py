# Generated by Django 3.0.7 on 2021-08-28 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_assignment_students'),
    ]

    operations = [
        migrations.RenameField(
            model_name='assignment',
            old_name='due_date',
            new_name='deadline',
        ),
        migrations.AddField(
            model_name='assignment',
            name='type',
            field=models.BooleanField(choices=[(True, 'Graded'), (False, 'Ungraded')], default=False),
        ),
    ]