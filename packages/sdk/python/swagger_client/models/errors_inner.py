# coding: utf-8

"""
    Supaglue CRM API

    # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/api/crm/v1 ```   # noqa: E501

    OpenAPI spec version: 0.3.3
    Contact: docs@supaglue.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class ErrorsInner(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'detail': 'str',
        'problem_type': 'str',
        'source': 'object',
        'title': 'str'
    }

    attribute_map = {
        'detail': 'detail',
        'problem_type': 'problem_type',
        'source': 'source',
        'title': 'title'
    }

    def __init__(self, detail=None, problem_type=None, source=None, title=None):  # noqa: E501
        """ErrorsInner - a model defined in Swagger"""  # noqa: E501
        self._detail = None
        self._problem_type = None
        self._source = None
        self._title = None
        self.discriminator = None
        if detail is not None:
            self.detail = detail
        if problem_type is not None:
            self.problem_type = problem_type
        if source is not None:
            self.source = source
        if title is not None:
            self.title = title

    @property
    def detail(self):
        """Gets the detail of this ErrorsInner.  # noqa: E501


        :return: The detail of this ErrorsInner.  # noqa: E501
        :rtype: str
        """
        return self._detail

    @detail.setter
    def detail(self, detail):
        """Sets the detail of this ErrorsInner.


        :param detail: The detail of this ErrorsInner.  # noqa: E501
        :type: str
        """

        self._detail = detail

    @property
    def problem_type(self):
        """Gets the problem_type of this ErrorsInner.  # noqa: E501


        :return: The problem_type of this ErrorsInner.  # noqa: E501
        :rtype: str
        """
        return self._problem_type

    @problem_type.setter
    def problem_type(self, problem_type):
        """Sets the problem_type of this ErrorsInner.


        :param problem_type: The problem_type of this ErrorsInner.  # noqa: E501
        :type: str
        """

        self._problem_type = problem_type

    @property
    def source(self):
        """Gets the source of this ErrorsInner.  # noqa: E501


        :return: The source of this ErrorsInner.  # noqa: E501
        :rtype: object
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this ErrorsInner.


        :param source: The source of this ErrorsInner.  # noqa: E501
        :type: object
        """

        self._source = source

    @property
    def title(self):
        """Gets the title of this ErrorsInner.  # noqa: E501


        :return: The title of this ErrorsInner.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this ErrorsInner.


        :param title: The title of this ErrorsInner.  # noqa: E501
        :type: str
        """

        self._title = title

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ErrorsInner, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ErrorsInner):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
