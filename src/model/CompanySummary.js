/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.42.0
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
    root.intrinioSDK.CompanySummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompanySummary model module.
   * @module model/CompanySummary
   * @version 6.24.0
   */

  /**
   * Constructs a new <code>CompanySummary</code>.
   * The summary of a company that submits filings to the SEC and has a security traded primarily on a US exchange
   * @alias module:model/CompanySummary
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CompanySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanySummary} obj Optional instance to populate.
   * @return {module:model/CompanySummary} The populated <code>CompanySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lei')) {
        obj['lei'] = ApiClient.convertToType(data['lei'], 'String');
      }
      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the company
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The stock market ticker symbol associated with the company's common stock securities
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company's common name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Legal Entity Identifier (LEI) assigned to the company
   * @member {String} lei
   */
  exports.prototype['lei'] = undefined;
  /**
   * The Central Index Key (CIK) assigned to the company
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;



  return exports;
}));


