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

from openapi_client.models.transaction_execution import TransactionExecution

class TestTransactionExecution(unittest.TestCase):
    """TransactionExecution unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TransactionExecution:
        """Test TransactionExecution
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TransactionExecution`
        """
        model = TransactionExecution()
        if include_optional:
            return TransactionExecution(
                deleted = False,
                updated = 1659485172,
                created = 1659485172,
                id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb',
                transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb',
                api_credential_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb',
                user_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb',
                status = 'Submitted',
                chain_transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb',
                completed_timestamp = 1659485172
            )
        else:
            return TransactionExecution(
        )
        """

    def testTransactionExecution(self):
        """Test TransactionExecution"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
