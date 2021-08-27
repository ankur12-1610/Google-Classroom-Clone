from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=500)


class LoginSerializer(serializers.Serializer):
    # TODO: Implement login functionality
    pass


class RegisterSerializer(serializers.Serializer):
    # TODO: Implement register functionality
    pass


class UserSerializer(serializers.ModelSerializer):
    # TODO: Implement the functionality to display user details
    pass
    