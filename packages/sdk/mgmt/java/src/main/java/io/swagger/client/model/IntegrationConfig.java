/*
 * Supaglue Management API
 * # Introduction  Welcome to the Supaglue Management API documentation. You can use this API to manage customer integrations and connections.  ### Base API URL  ``` http://localhost:8080/mgmt/v1 ``` 
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
import io.swagger.client.model.IntegrationConfigOauth;
import io.swagger.client.model.IntegrationConfigSync;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * IntegrationConfig
 */


public class IntegrationConfig {
  @SerializedName("provider_app_id")
  private Object providerAppId = null;

  @SerializedName("oauth")
  private IntegrationConfigOauth oauth = null;

  @SerializedName("sync")
  private IntegrationConfigSync sync = null;

  public IntegrationConfig providerAppId(Object providerAppId) {
    this.providerAppId = providerAppId;
    return this;
  }

   /**
   * Get providerAppId
   * @return providerAppId
  **/
  @Schema(example = "my_app_id", required = true, description = "")
  public Object getProviderAppId() {
    return providerAppId;
  }

  public void setProviderAppId(Object providerAppId) {
    this.providerAppId = providerAppId;
  }

  public IntegrationConfig oauth(IntegrationConfigOauth oauth) {
    this.oauth = oauth;
    return this;
  }

   /**
   * Get oauth
   * @return oauth
  **/
  @Schema(required = true, description = "")
  public IntegrationConfigOauth getOauth() {
    return oauth;
  }

  public void setOauth(IntegrationConfigOauth oauth) {
    this.oauth = oauth;
  }

  public IntegrationConfig sync(IntegrationConfigSync sync) {
    this.sync = sync;
    return this;
  }

   /**
   * Get sync
   * @return sync
  **/
  @Schema(required = true, description = "")
  public IntegrationConfigSync getSync() {
    return sync;
  }

  public void setSync(IntegrationConfigSync sync) {
    this.sync = sync;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IntegrationConfig integrationConfig = (IntegrationConfig) o;
    return Objects.equals(this.providerAppId, integrationConfig.providerAppId) &&
        Objects.equals(this.oauth, integrationConfig.oauth) &&
        Objects.equals(this.sync, integrationConfig.sync);
  }

  @Override
  public int hashCode() {
    return Objects.hash(providerAppId, oauth, sync);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IntegrationConfig {\n");
    
    sb.append("    providerAppId: ").append(toIndentedString(providerAppId)).append("\n");
    sb.append("    oauth: ").append(toIndentedString(oauth)).append("\n");
    sb.append("    sync: ").append(toIndentedString(sync)).append("\n");
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