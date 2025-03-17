"""
Auth util function that are used throughout the app
"""

from rest_framework_simplejwt.authentication import JWTAuthentication

JWT_authenticator = JWTAuthentication()

def authenticate_by_group(request, required_groups) -> bool:
    """
    Authenticates the JWT passed in a request
    If the JWT is valid, it compares the user groups to the required groups

    Returns True if the user is allowed access, else it returns False
    """

    response = JWT_authenticator.authenticate(request)
    if response is None:
        return False

    _, token = response

    if len(set(token.payload['groups']) & set(required_groups)) == 0:
        return False

    return True
