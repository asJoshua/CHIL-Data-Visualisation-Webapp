"""
The serializer for JWT auth.
It inherits the classes from simplejwt to put the refresh token in the HTTP header
"""
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken

class CookiePairObtainPairSerializer(TokenObtainPairSerializer): # pylint: disable=W0223
    """
    Add user groups to the JWT
    """
    def get_token(self, user): # pylint: disable=W0221
        token = super().get_token(user)
        token['groups'] = list(user.groups.values_list('name',flat = True).all())

        return token

class CookieTokenRefreshSerializer(TokenRefreshSerializer): # pylint: disable=W0223
    """
    Inherits from TokenRefreshSerializer from rest_framework_simplejwt and
    attempts to get the refresh token from the HTTP only cookie
    Code from:
        https://github.com/jazzband/djangorestframework-simplejwt/issues/71#issuecomment-762927394
    Accessed: 14 Jan 2025
    """
    refresh = None
    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']: # pylint: disable=R1705
            return super().validate(attrs)
        else:
            raise InvalidToken('No valid token found in cookie\'refresh_token\'')
