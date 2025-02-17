"""
Views for the AUTH endpoints
"""

from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from ..serializers import CookiePairObtainPairSerializer, CookieTokenRefreshSerializer

class CookieTokenObtainPairView(TokenObtainPairView):
    """
    Inherits from TokenObtainPairView from rest_framework_simplejwt and sets the refresh token to a
    HTTP only header to help prevent XSRF attacks.
    Code from: https://github.com/jazzband/djangorestframework-simplejwt/issues/71#issuecomment-762927394
    Accessed: 14 Jan 2025
    """
    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 14 # 14 days
            response.set_cookie(
                'refresh_token',
                response.data['refresh'],
                max_age=cookie_max_age,
                httponly=True,
                samesite='none',
                secure=True,
            )
            del response.data['refresh']

        return super().finalize_response(request, response, *args, **kwargs)

    serializer_class = CookiePairObtainPairSerializer


class CookieTokenRefreshView(TokenRefreshView):
    """
    Inherits from TokenRefreshView from rest_framework_simplejwt and sets the refresh token to a
    HTTP only header to help prevent XSRF attacks.
    Code from: https://github.com/jazzband/djangorestframework-simplejwt/issues/71#issuecomment-762927394
    Accessed: 14 Jan 2025
    """
    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 14 # 14 days
            response.set_cookie(
                'refresh_token',
                response.data['refresh'],
                max_age=cookie_max_age,
                httponly=True,
                samesite='none',
                secure=True,
            )
            del response.data['refresh']

        return super().finalize_response(request, response, *args, **kwargs)

    serializer_class = CookieTokenRefreshSerializer
