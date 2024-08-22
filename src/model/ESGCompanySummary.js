/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.66.2
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
    root.intrinioSDK.ESGCompanySummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ESGCompanySummary model module.
   * @module model/ESGCompanySummary
   * @version 6.30.0
   */

  /**
   * Constructs a new <code>ESGCompanySummary</code>.
   * @alias module:model/ESGCompanySummary
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ESGCompanySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESGCompanySummary} obj Optional instance to populate.
   * @return {module:model/ESGCompanySummary} The populated <code>ESGCompanySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('isin')) {
        obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
      }
      if (data.hasOwnProperty('primary_industry')) {
        obj['primary_industry'] = ApiClient.convertToType(data['primary_industry'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the company.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The company’s common name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The stock market ticker symbol associated with the company’s common stock security.
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company's common securities identification 12-digit alphanumeric code.
   * @member {String} isin
   */
  exports.prototype['isin'] = undefined;
  /**
   * The primary industry associated with the company based on their main revenue generating operations.
   * @member {String} primary_industry
   */
  exports.prototype['primary_industry'] = undefined;
  /**
   * The country in which the company's headquarters or primary place of business is located.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


