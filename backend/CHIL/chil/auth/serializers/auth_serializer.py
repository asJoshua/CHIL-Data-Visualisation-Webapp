"""
"""
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken
from django.core.serializers import serialize


class CookiePairObtainPairSerializer(TokenObtainPairSerializer):
    """
    Add user groups to the JWT
    """
    def get_token(self, user):
        token = super().get_token(user)
        token['groups'] = list(user.groups.values_list('name',flat = True).all())

        return token

class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    """
    Inherits from TokenRefreshSerializer from rest_framework_simplejwt and attempts to get the
    refresh token from the HTTP only cookie
    Code from: https://github.com/jazzband/djangorestframework-simplejwt/issues/71#issuecomment-762927394
    Accessed: 14 Jan 2025
    """
    refresh = None
    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken('No valid token found in cookie\'refresh_token\'')
