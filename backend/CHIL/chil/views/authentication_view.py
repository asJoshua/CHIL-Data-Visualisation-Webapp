"""
API view to handle authentication
"""

from rest_framework.views import APIView


class NewSession(APIView):
    """
    Handles new session authentication requests
    """

    def post(self, request):
        """
        Handles new session authentication requests
        """

        print("")
