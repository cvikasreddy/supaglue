/*
 * Supaglue CRM API
 * # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/crm/v1 ``` 
 *
 * OpenAPI spec version: 0.6.0
 * Contact: docs@supaglue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.client.model.Addresses;
import io.swagger.client.model.CustomFields;
import io.swagger.client.model.EmailAddresses;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * CreateUpdateLead
 */


public class CreateUpdateLead {
  @SerializedName("company")
  private String company = null;

  @SerializedName("first_name")
  private String firstName = null;

  @SerializedName("last_name")
  private String lastName = null;

  @SerializedName("lead_source")
  private String leadSource = null;

  @SerializedName("title")
  private String title = null;

  @SerializedName("email_addresses")
  private EmailAddresses emailAddresses = null;

  @SerializedName("addresses")
  private Addresses addresses = null;

  @SerializedName("owner_id")
  private String ownerId = null;

  @SerializedName("custom_fields")
  private CustomFields customFields = null;

  public CreateUpdateLead company(String company) {
    this.company = company;
    return this;
  }

   /**
   * Get company
   * @return company
  **/
  @Schema(example = "Supaglue", description = "")
  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public CreateUpdateLead firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @Schema(example = "George", description = "")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public CreateUpdateLead lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @Schema(example = "Xing", description = "")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public CreateUpdateLead leadSource(String leadSource) {
    this.leadSource = leadSource;
    return this;
  }

   /**
   * Get leadSource
   * @return leadSource
  **/
  @Schema(example = "API Blogger", description = "")
  public String getLeadSource() {
    return leadSource;
  }

  public void setLeadSource(String leadSource) {
    this.leadSource = leadSource;
  }

  public CreateUpdateLead title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @Schema(example = "Co-Founder", description = "")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public CreateUpdateLead emailAddresses(EmailAddresses emailAddresses) {
    this.emailAddresses = emailAddresses;
    return this;
  }

   /**
   * Get emailAddresses
   * @return emailAddresses
  **/
  @Schema(description = "")
  public EmailAddresses getEmailAddresses() {
    return emailAddresses;
  }

  public void setEmailAddresses(EmailAddresses emailAddresses) {
    this.emailAddresses = emailAddresses;
  }

  public CreateUpdateLead addresses(Addresses addresses) {
    this.addresses = addresses;
    return this;
  }

   /**
   * Get addresses
   * @return addresses
  **/
  @Schema(description = "")
  public Addresses getAddresses() {
    return addresses;
  }

  public void setAddresses(Addresses addresses) {
    this.addresses = addresses;
  }

  public CreateUpdateLead ownerId(String ownerId) {
    this.ownerId = ownerId;
    return this;
  }

   /**
   * Get ownerId
   * @return ownerId
  **/
  @Schema(example = "9f3e97fd-4d5d-4efc-959d-bbebfac079f5", description = "")
  public String getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(String ownerId) {
    this.ownerId = ownerId;
  }

  public CreateUpdateLead customFields(CustomFields customFields) {
    this.customFields = customFields;
    return this;
  }

   /**
   * Get customFields
   * @return customFields
  **/
  @Schema(description = "")
  public CustomFields getCustomFields() {
    return customFields;
  }

  public void setCustomFields(CustomFields customFields) {
    this.customFields = customFields;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateUpdateLead createUpdateLead = (CreateUpdateLead) o;
    return Objects.equals(this.company, createUpdateLead.company) &&
        Objects.equals(this.firstName, createUpdateLead.firstName) &&
        Objects.equals(this.lastName, createUpdateLead.lastName) &&
        Objects.equals(this.leadSource, createUpdateLead.leadSource) &&
        Objects.equals(this.title, createUpdateLead.title) &&
        Objects.equals(this.emailAddresses, createUpdateLead.emailAddresses) &&
        Objects.equals(this.addresses, createUpdateLead.addresses) &&
        Objects.equals(this.ownerId, createUpdateLead.ownerId) &&
        Objects.equals(this.customFields, createUpdateLead.customFields);
  }

  @Override
  public int hashCode() {
    return Objects.hash(company, firstName, lastName, leadSource, title, emailAddresses, addresses, ownerId, customFields);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUpdateLead {\n");
    
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    leadSource: ").append(toIndentedString(leadSource)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    emailAddresses: ").append(toIndentedString(emailAddresses)).append("\n");
    sb.append("    addresses: ").append(toIndentedString(addresses)).append("\n");
    sb.append("    ownerId: ").append(toIndentedString(ownerId)).append("\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}