# Generated by Django 3.1.3 on 2020-11-25 12:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_lead_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='name',
            new_name='username',
        ),
    ]
