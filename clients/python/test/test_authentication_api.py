# coding: utf-8

"""
    M2M Gateway API

    The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework

    The version of the OpenAPI document: 0.1
    Contact: support@uxly.software
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.api.authentication_api import AuthenticationApi


class TestAuthenticationApi(unittest.TestCase):
    """AuthenticationApi unit test stubs"""

    def setUp(self) -> None:
        self.api = AuthenticationApi()

    def tearDown(self) -> None:
        pass

    def test_get_access_token(self) -> None:
        """Test case for get_access_token

        Obtain an OAuth2 access token
        """
        pass


if __name__ == '__main__':
    unittest.main()
