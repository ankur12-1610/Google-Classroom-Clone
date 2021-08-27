from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from api.serializers import *


def create_auth_token(user):
    token, created = Token.objects.get_or_create(user=user)
    return token
    
class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=500)

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data['username']
        password = data['password']
        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Invalid Credentials!")
        return data
    
    def get_token(self):
        username = self.validated_data['username']
        user = User.objects.get(username=username)
        return TokenSerializer({
            'token': create_auth_token(user),
        })


class RegisterSerializer(serializers.Serializer):

    password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    email=serializers.EmailField(required=True)
    first_name=serializers.CharField(required=True)
    last_name=serializers.CharField(required=True)
    username = serializers.CharField(required=True)
    
    def validate_username(self, username):
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username already exists!")
        return username

    def validate_eamil(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Username already exists!")
        return email

    def register(self):
        data=self.validated_data
        username=data['username']
        email=data['email']
        password=data['password']
        user=User.objects.create_user(username=username, email=email, password=password)
        user.first_name=data['first_name']
        user.last_name=data['last_name']
        user.save()

        return TokenSerializer({
            'token': create_auth_token(user)
        })


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name','last_name', 'email', 'password']