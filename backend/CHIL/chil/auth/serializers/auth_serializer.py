"""
"""
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    """
    Inherits from TokenRefreshSerializer from rest_framework_simplejwt and attempts to get the
    refresh token from the HTTP only cookie
    Code from: https://github.com/jazzband/djangorestframework-simplejwt/issues/71#issuecomment-762927394
    Accessed: 14 Jan 2025
    """
    refresh = None
    def validate(self, attrs):
        attrs['refresh'] =  self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken('No valid token found in cookie\'refresh_token\'')
