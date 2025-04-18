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
import json
from enum import Enum
from typing_extensions import Self


class EWebhookStatus(str, Enum):
    """
    The current status of the webhook
    """

    """
    allowed enum values
    """
    UNSENT = 'Unsent'
    SUCCESS = 'Success'
    RETRYING = 'Retrying'
    FAILED = 'Failed'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of EWebhookStatus from a JSON string"""
        return cls(json.loads(json_str))


