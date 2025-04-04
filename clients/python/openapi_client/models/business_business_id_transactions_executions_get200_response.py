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

from pydantic import BaseModel, ConfigDict, Field, StrictInt
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.transaction_execution import TransactionExecution
from typing import Optional, Set
from typing_extensions import Self

class BusinessBusinessIdTransactionsExecutionsGet200Response(BaseModel):
    """
    BusinessBusinessIdTransactionsExecutionsGet200Response
    """ # noqa: E501
    page: Optional[StrictInt] = Field(default=None, description="Which page to return. This is 1 indexed, and default to the first page, 1")
    page_size: Optional[StrictInt] = Field(default=None, description="The size of the page to return. Defaults to 25", alias="pageSize")
    total_results: Optional[StrictInt] = Field(default=None, description="The total number of results returned by a paged response", alias="totalResults")
    response: Optional[List[TransactionExecution]] = None
    __properties: ClassVar[List[str]] = ["page", "pageSize", "totalResults", "response"]

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
        """Create an instance of BusinessBusinessIdTransactionsExecutionsGet200Response from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in response (list)
        _items = []
        if self.response:
            for _item_response in self.response:
                if _item_response:
                    _items.append(_item_response.to_dict())
            _dict['response'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of BusinessBusinessIdTransactionsExecutionsGet200Response from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "page": obj.get("page"),
            "pageSize": obj.get("pageSize"),
            "totalResults": obj.get("totalResults"),
            "response": [TransactionExecution.from_dict(_item) for _item in obj["response"]] if obj.get("response") is not None else None
        })
        return _obj


