"""
A test to ensure that tests are working and to develop the CI pipeline from
"""

import unittest

class TestTests(unittest.TestCase):
    """
    Class for the test
    """
    def tests_run(self):
        """
        This test always passes
        """
        self.assertEqual(1, 1)
