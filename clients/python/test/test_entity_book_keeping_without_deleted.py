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

from openapi_client.models.entity_book_keeping_without_deleted import EntityBookKeepingWithoutDeleted

class TestEntityBookKeepingWithoutDeleted(unittest.TestCase):
    """EntityBookKeepingWithoutDeleted unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> EntityBookKeepingWithoutDeleted:
        """Test EntityBookKeepingWithoutDeleted
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `EntityBookKeepingWithoutDeleted`
        """
        model = EntityBookKeepingWithoutDeleted()
        if include_optional:
            return EntityBookKeepingWithoutDeleted(
                updated = 1659485172,
                created = 1659485172
            )
        else:
            return EntityBookKeepingWithoutDeleted(
        )
        """

    def testEntityBookKeepingWithoutDeleted(self):
        """Test EntityBookKeepingWithoutDeleted"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
