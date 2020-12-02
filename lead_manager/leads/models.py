from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=50, unique=True)
    message = models.CharField(max_length=100, blank=True)
    owner = models.ForeignKey(User, on_delete = models.CASCADE, related_name="leads", null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
