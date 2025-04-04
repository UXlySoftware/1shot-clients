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

from openapi_client.models.solidity_struct import SolidityStruct

class TestSolidityStruct(unittest.TestCase):
    """SolidityStruct unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SolidityStruct:
        """Test SolidityStruct
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SolidityStruct`
        """
        model = SolidityStruct()
        if include_optional:
            return SolidityStruct(
                deleted = False,
                updated = 1659485172,
                created = 1659485172,
                id = '100d2e83-dddd-480d-88ad-74a71c214912',
                business_id = '100d2e83-dddd-480d-88ad-74a71c214912',
                name = '',
                params = [
                    openapi_client.models.solidity_struct_param.SolidityStructParam(
                        id = '100d2e83-dddd-480d-88ad-74a71c214912', 
                        struct_id = '100d2e83-dddd-480d-88ad-74a71c214912', 
                        name = '', 
                        type = 'address', 
                        type_struct_id = '100d2e83-dddd-480d-88ad-74a71c214912', 
                        type_size = 56, 
                        type_size2 = 56, 
                        is_array = True, 
                        array_size = 56, 
                        index = 56, 
                        value = '', 
                        type_struct = null, )
                    ]
            )
        else:
            return SolidityStruct(
        )
        """

    def testSolidityStruct(self):
        """Test SolidityStruct"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
