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

from openapi_client.models.transactions_transaction_id_restore_put_request import TransactionsTransactionIdRestorePutRequest

class TestTransactionsTransactionIdRestorePutRequest(unittest.TestCase):
    """TransactionsTransactionIdRestorePutRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TransactionsTransactionIdRestorePutRequest:
        """Test TransactionsTransactionIdRestorePutRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TransactionsTransactionIdRestorePutRequest`
        """
        model = TransactionsTransactionIdRestorePutRequest()
        if include_optional:
            return TransactionsTransactionIdRestorePutRequest(
                reward_ids = [
                    'f4e3d951-85ad-42fa-8e21-75545145c7cb'
                    ]
            )
        else:
            return TransactionsTransactionIdRestorePutRequest(
        )
        """

    def testTransactionsTransactionIdRestorePutRequest(self):
        """Test TransactionsTransactionIdRestorePutRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
