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

from openapi_client.models.business_business_id_transactions_executions_get200_response import BusinessBusinessIdTransactionsExecutionsGet200Response

class TestBusinessBusinessIdTransactionsExecutionsGet200Response(unittest.TestCase):
    """BusinessBusinessIdTransactionsExecutionsGet200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> BusinessBusinessIdTransactionsExecutionsGet200Response:
        """Test BusinessBusinessIdTransactionsExecutionsGet200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `BusinessBusinessIdTransactionsExecutionsGet200Response`
        """
        model = BusinessBusinessIdTransactionsExecutionsGet200Response()
        if include_optional:
            return BusinessBusinessIdTransactionsExecutionsGet200Response(
                page = 1,
                page_size = 25,
                total_results = 1,
                response = [
                    null
                    ]
            )
        else:
            return BusinessBusinessIdTransactionsExecutionsGet200Response(
        )
        """

    def testBusinessBusinessIdTransactionsExecutionsGet200Response(self):
        """Test BusinessBusinessIdTransactionsExecutionsGet200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
