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

from openapi_client.api.transaction_execution_api import TransactionExecutionApi


class TestTransactionExecutionApi(unittest.TestCase):
    """TransactionExecutionApi unit test stubs"""

    def setUp(self) -> None:
        self.api = TransactionExecutionApi()

    def tearDown(self) -> None:
        pass

    def test_business_business_id_transactions_executions_get(self) -> None:
        """Test case for business_business_id_transactions_executions_get

        """
        pass

    def test_transactions_transaction_id_execute_post(self) -> None:
        """Test case for transactions_transaction_id_execute_post

        """
        pass

    def test_transactions_transaction_id_executions_transaction_execution_id_get(self) -> None:
        """Test case for transactions_transaction_id_executions_transaction_execution_id_get

        """
        pass

    def test_transactions_transaction_id_test_post(self) -> None:
        """Test case for transactions_transaction_id_test_post

        """
        pass


if __name__ == '__main__':
    unittest.main()
