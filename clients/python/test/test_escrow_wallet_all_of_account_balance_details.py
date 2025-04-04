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

from openapi_client.models.escrow_wallet_all_of_account_balance_details import EscrowWalletAllOfAccountBalanceDetails

class TestEscrowWalletAllOfAccountBalanceDetails(unittest.TestCase):
    """EscrowWalletAllOfAccountBalanceDetails unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> EscrowWalletAllOfAccountBalanceDetails:
        """Test EscrowWalletAllOfAccountBalanceDetails
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `EscrowWalletAllOfAccountBalanceDetails`
        """
        model = EscrowWalletAllOfAccountBalanceDetails()
        if include_optional:
            return EscrowWalletAllOfAccountBalanceDetails(
                type = '',
                ticker = 'ETH',
                chain_id = 1337,
                token_address = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
                account_address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                balance = '123400000000000000000',
                decimals = 56,
                usd_value = 1.337,
                usd_value_timestamp = 1.337
            )
        else:
            return EscrowWalletAllOfAccountBalanceDetails(
        )
        """

    def testEscrowWalletAllOfAccountBalanceDetails(self):
        """Test EscrowWalletAllOfAccountBalanceDetails"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
