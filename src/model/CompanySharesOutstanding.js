/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.45.0
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
    root.intrinioSDK.CompanySharesOutstanding = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompanySharesOutstanding model module.
   * @module model/CompanySharesOutstanding
   * @version 6.25.0
   */

  /**
   * Constructs a new <code>CompanySharesOutstanding</code>.
   * The summary of a company that submits filings to the SEC and has a security traded primarily on a US exchange
   * @alias module:model/CompanySharesOutstanding
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CompanySharesOutstanding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanySharesOutstanding} obj Optional instance to populate.
   * @return {module:model/CompanySharesOutstanding} The populated <code>CompanySharesOutstanding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xbrl_axis')) {
        obj['xbrl_axis'] = ApiClient.convertToType(data['xbrl_axis'], 'String');
      }
      if (data.hasOwnProperty('xbrl_member')) {
        obj['xbrl_member'] = ApiClient.convertToType(data['xbrl_member'], 'String');
      }
      if (data.hasOwnProperty('title_of_security')) {
        obj['title_of_security'] = ApiClient.convertToType(data['title_of_security'], 'String');
      }
      if (data.hasOwnProperty('trading_symbol')) {
        obj['trading_symbol'] = ApiClient.convertToType(data['trading_symbol'], 'String');
      }
      if (data.hasOwnProperty('security_exchange_name')) {
        obj['security_exchange_name'] = ApiClient.convertToType(data['security_exchange_name'], 'String');
      }
      if (data.hasOwnProperty('shares_outstanding')) {
        obj['shares_outstanding'] = ApiClient.convertToType(data['shares_outstanding'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The xbrl concept axis member reported to the SEC.
   * @member {String} xbrl_axis
   */
  exports.prototype['xbrl_axis'] = undefined;
  /**
   * Provides information about the class of stock as reported in XBRL
   * @member {String} xbrl_member
   */
  exports.prototype['xbrl_member'] = undefined;
  /**
   * The description of the security type
   * @member {String} title_of_security
   */
  exports.prototype['title_of_security'] = undefined;
  /**
   * The symbol under which the security is traded in the exchange
   * @member {String} trading_symbol
   */
  exports.prototype['trading_symbol'] = undefined;
  /**
   * The name of the secuirty exchange
   * @member {String} security_exchange_name
   */
  exports.prototype['security_exchange_name'] = undefined;
  /**
   * The amount of stock currently held by all shareholders
   * @member {Number} shares_outstanding
   */
  exports.prototype['shares_outstanding'] = undefined;



  return exports;
}));


