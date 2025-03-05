"""
Views for the Instrument API endpoints endpoints
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from ..serializers import

class InstrumentView(APIView):
    """

    """

    def create():
        """Create a new instrument of a specifed type"""
        print("Create")

    def listAll():
        """List all instruments of a specified type"""
        print("List all")

    def getInstrument():
        """Get infomation of a specific instrument by id"""

    def updateInstrument():
        """Update instrument entry"""

    def deleteByInstrument():
        """Delete a specific instrument"""

    def 