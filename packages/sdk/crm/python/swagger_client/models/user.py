# coding: utf-8

"""
    Supaglue CRM API

    # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/crm/v1 ```   # noqa: E501

    OpenAPI spec version: 0.6.0
    Contact: docs@supaglue.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class User(object):
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
        'id': 'str',
        'remote_id': 'str',
        'name': 'str',
        'email': 'str',
        'is_active': 'bool',
        'remote_created_at': 'datetime',
        'remote_updated_at': 'datetime',
        'remote_was_deleted': 'bool',
        'last_modified_at': 'datetime'
    }

    attribute_map = {
        'id': 'id',
        'remote_id': 'remote_id',
        'name': 'name',
        'email': 'email',
        'is_active': 'is_active',
        'remote_created_at': 'remote_created_at',
        'remote_updated_at': 'remote_updated_at',
        'remote_was_deleted': 'remote_was_deleted',
        'last_modified_at': 'last_modified_at'
    }

    def __init__(self, id=None, remote_id=None, name=None, email=None, is_active=None, remote_created_at=None, remote_updated_at=None, remote_was_deleted=None, last_modified_at=None):  # noqa: E501
        """User - a model defined in Swagger"""  # noqa: E501
        self._id = None
        self._remote_id = None
        self._name = None
        self._email = None
        self._is_active = None
        self._remote_created_at = None
        self._remote_updated_at = None
        self._remote_was_deleted = None
        self._last_modified_at = None
        self.discriminator = None
        self.id = id
        self.remote_id = remote_id
        self.name = name
        self.email = email
        self.is_active = is_active
        if remote_created_at is not None:
            self.remote_created_at = remote_created_at
        if remote_updated_at is not None:
            self.remote_updated_at = remote_updated_at
        if remote_was_deleted is not None:
            self.remote_was_deleted = remote_was_deleted
        if last_modified_at is not None:
            self.last_modified_at = last_modified_at

    @property
    def id(self):
        """Gets the id of this User.  # noqa: E501


        :return: The id of this User.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this User.


        :param id: The id of this User.  # noqa: E501
        :type: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def remote_id(self):
        """Gets the remote_id of this User.  # noqa: E501


        :return: The remote_id of this User.  # noqa: E501
        :rtype: str
        """
        return self._remote_id

    @remote_id.setter
    def remote_id(self, remote_id):
        """Sets the remote_id of this User.


        :param remote_id: The remote_id of this User.  # noqa: E501
        :type: str
        """
        if remote_id is None:
            raise ValueError("Invalid value for `remote_id`, must not be `None`")  # noqa: E501

        self._remote_id = remote_id

    @property
    def name(self):
        """Gets the name of this User.  # noqa: E501


        :return: The name of this User.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this User.


        :param name: The name of this User.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def email(self):
        """Gets the email of this User.  # noqa: E501


        :return: The email of this User.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this User.


        :param email: The email of this User.  # noqa: E501
        :type: str
        """
        if email is None:
            raise ValueError("Invalid value for `email`, must not be `None`")  # noqa: E501

        self._email = email

    @property
    def is_active(self):
        """Gets the is_active of this User.  # noqa: E501


        :return: The is_active of this User.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this User.


        :param is_active: The is_active of this User.  # noqa: E501
        :type: bool
        """
        if is_active is None:
            raise ValueError("Invalid value for `is_active`, must not be `None`")  # noqa: E501

        self._is_active = is_active

    @property
    def remote_created_at(self):
        """Gets the remote_created_at of this User.  # noqa: E501


        :return: The remote_created_at of this User.  # noqa: E501
        :rtype: datetime
        """
        return self._remote_created_at

    @remote_created_at.setter
    def remote_created_at(self, remote_created_at):
        """Sets the remote_created_at of this User.


        :param remote_created_at: The remote_created_at of this User.  # noqa: E501
        :type: datetime
        """

        self._remote_created_at = remote_created_at

    @property
    def remote_updated_at(self):
        """Gets the remote_updated_at of this User.  # noqa: E501


        :return: The remote_updated_at of this User.  # noqa: E501
        :rtype: datetime
        """
        return self._remote_updated_at

    @remote_updated_at.setter
    def remote_updated_at(self, remote_updated_at):
        """Sets the remote_updated_at of this User.


        :param remote_updated_at: The remote_updated_at of this User.  # noqa: E501
        :type: datetime
        """

        self._remote_updated_at = remote_updated_at

    @property
    def remote_was_deleted(self):
        """Gets the remote_was_deleted of this User.  # noqa: E501


        :return: The remote_was_deleted of this User.  # noqa: E501
        :rtype: bool
        """
        return self._remote_was_deleted

    @remote_was_deleted.setter
    def remote_was_deleted(self, remote_was_deleted):
        """Sets the remote_was_deleted of this User.


        :param remote_was_deleted: The remote_was_deleted of this User.  # noqa: E501
        :type: bool
        """

        self._remote_was_deleted = remote_was_deleted

    @property
    def last_modified_at(self):
        """Gets the last_modified_at of this User.  # noqa: E501


        :return: The last_modified_at of this User.  # noqa: E501
        :rtype: datetime
        """
        return self._last_modified_at

    @last_modified_at.setter
    def last_modified_at(self, last_modified_at):
        """Sets the last_modified_at of this User.


        :param last_modified_at: The last_modified_at of this User.  # noqa: E501
        :type: datetime
        """

        self._last_modified_at = last_modified_at

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
        if issubclass(User, dict):
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
        if not isinstance(other, User):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other