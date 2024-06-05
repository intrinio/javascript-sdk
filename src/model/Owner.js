/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.61.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.Owner = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Owner model module.
   * @module model/Owner
   * @version 6.27.3
   */

  /**
   * Constructs a new <code>Owner</code>.
   * Insider and institutional owners of securities covered by Intrinio
   * @alias module:model/Owner
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Owner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Owner} obj Optional instance to populate.
   * @return {module:model/Owner} The populated <code>Owner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'String');
      }
      if (data.hasOwnProperty('owner_cik')) {
        obj['owner_cik'] = ApiClient.convertToType(data['owner_cik'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('state_inc')) {
        obj['state_inc'] = ApiClient.convertToType(data['state_inc'], 'String');
      }
      if (data.hasOwnProperty('country_inc')) {
        obj['country_inc'] = ApiClient.convertToType(data['country_inc'], 'String');
      }
      if (data.hasOwnProperty('business_address')) {
        obj['business_address'] = ApiClient.convertToType(data['business_address'], 'String');
      }
      if (data.hasOwnProperty('business_phone_no')) {
        obj['business_phone_no'] = ApiClient.convertToType(data['business_phone_no'], 'String');
      }
      if (data.hasOwnProperty('mailing_address')) {
        obj['mailing_address'] = ApiClient.convertToType(data['mailing_address'], 'String');
      }
      if (data.hasOwnProperty('institutional')) {
        obj['institutional'] = ApiClient.convertToType(data['institutional'], 'Boolean');
      }
      if (data.hasOwnProperty('updated_on')) {
        obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
      }
      if (data.hasOwnProperty('created_on')) {
        obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Owner
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The Intrinio ID for the company for which the Security is issued
   * @member {String} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * The Central Index Key issued by the SEC, which is the unique identifier all owner filings
   * @member {String} owner_cik
   */
  exports.prototype['owner_cik'] = undefined;
  /**
   * The name of the owner
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The state in which the owner is located
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The state in which the owner is incorporated
   * @member {String} state_inc
   */
  exports.prototype['state_inc'] = undefined;
  /**
   * The country in which the owner is incorporated
   * @member {String} country_inc
   */
  exports.prototype['country_inc'] = undefined;
  /**
   * The owner's business address
   * @member {String} business_address
   */
  exports.prototype['business_address'] = undefined;
  /**
   * The owner's business phone number
   * @member {String} business_phone_no
   */
  exports.prototype['business_phone_no'] = undefined;
  /**
   * The owner's mailing address
   * @member {String} mailing_address
   */
  exports.prototype['mailing_address'] = undefined;
  /**
   * A boolean to include only insider owners who have filed forms 3, 4, or 5 with the SEC
   * @member {Boolean} institutional
   */
  exports.prototype['institutional'] = undefined;
  /**
   * The date and time when the data was last updated.
   * @member {Date} updated_on
   */
  exports.prototype['updated_on'] = undefined;
  /**
   * The date and time when the data was created
   * @member {Date} created_on
   */
  exports.prototype['created_on'] = undefined;



  return exports;
}));


