# coding: utf-8

"""
    M2M Gateway API

    The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework

    The version of the OpenAPI document: 0.1
    Contact: support@uxly.software
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.escrow_wallet_all_of_account_balance_details import EscrowWalletAllOfAccountBalanceDetails
from typing import Optional, Set
from typing_extensions import Self

class EscrowWallet(BaseModel):
    """
    Escrow wallet stored by chain service
    """ # noqa: E501
    updated: Optional[Union[StrictFloat, StrictInt]] = None
    created: Optional[Union[StrictFloat, StrictInt]] = None
    id: Optional[StrictStr] = Field(default=None, description="internal ID of the escrowWallet object")
    account_address: Optional[StrictStr] = Field(default=None, description="string address of a wallet insight platform holds keys for", alias="accountAddress")
    business_id: Optional[StrictStr] = Field(default=None, description="The business ID that owns this wallet. Admin escrow wallets will not have this value. An escrow wallet will have either a user ID or a business ID.", alias="businessId")
    user_id: Optional[StrictStr] = Field(default=None, description="The User ID of the person that owns this wallet. Admin escrow wallets will not have this value. An escrow wallet will have either a user ID or a business ID.", alias="userId")
    chain_id: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Id of a chain", alias="chainId")
    name: Optional[StrictStr] = Field(default=None, description="The name of the escrow wallet.")
    description: Optional[StrictStr] = Field(default=None, description="Optional description of the escrow wallet, can be used to describe it's purpose.")
    is_admin: Optional[StrictBool] = Field(default=None, description="Whether or not the escrow wallet is an admin escrow wallet, used for internal purposes.", alias="isAdmin")
    account_balance_details: Optional[EscrowWalletAllOfAccountBalanceDetails] = Field(default=None, alias="accountBalanceDetails")
    __properties: ClassVar[List[str]] = ["updated", "created", "id", "accountAddress", "businessId", "userId", "chainId", "name", "description", "isAdmin", "accountBalanceDetails"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of EscrowWallet from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of account_balance_details
        if self.account_balance_details:
            _dict['accountBalanceDetails'] = self.account_balance_details.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of EscrowWallet from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "updated": obj.get("updated"),
            "created": obj.get("created"),
            "id": obj.get("id"),
            "accountAddress": obj.get("accountAddress"),
            "businessId": obj.get("businessId"),
            "userId": obj.get("userId"),
            "chainId": obj.get("chainId"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "isAdmin": obj.get("isAdmin"),
            "accountBalanceDetails": EscrowWalletAllOfAccountBalanceDetails.from_dict(obj["accountBalanceDetails"]) if obj.get("accountBalanceDetails") is not None else None
        })
        return _obj


