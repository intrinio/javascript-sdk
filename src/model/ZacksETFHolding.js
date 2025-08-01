/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    root.intrinioSDK.ZacksETFHolding = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksETFHolding model module.
   * @module model/ZacksETFHolding
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ZacksETFHolding</code>.
   * Returns detailed information and classifications on exchange traded funds sourced from Zacks.
   * @alias module:model/ZacksETFHolding
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ZacksETFHolding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksETFHolding} obj Optional instance to populate.
   * @return {module:model/ZacksETFHolding} The populated <code>ZacksETFHolding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('etf_ticker')) {
        obj['etf_ticker'] = ApiClient.convertToType(data['etf_ticker'], 'String');
      }
      if (data.hasOwnProperty('etf_name')) {
        obj['etf_name'] = ApiClient.convertToType(data['etf_name'], 'String');
      }
      if (data.hasOwnProperty('holding_symbol')) {
        obj['holding_symbol'] = ApiClient.convertToType(data['holding_symbol'], 'String');
      }
      if (data.hasOwnProperty('holding_name')) {
        obj['holding_name'] = ApiClient.convertToType(data['holding_name'], 'String');
      }
      if (data.hasOwnProperty('date_of_holding')) {
        obj['date_of_holding'] = ApiClient.convertToType(data['date_of_holding'], 'Date');
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ETF's common ticker
   * @member {String} etf_ticker
   */
  exports.prototype['etf_ticker'] = undefined;
  /**
   * The ETF's name
   * @member {String} etf_name
   */
  exports.prototype['etf_name'] = undefined;
  /**
   * The holding's common ticker
   * @member {String} holding_symbol
   */
  exports.prototype['holding_symbol'] = undefined;
  /**
   * The holding's name
   * @member {String} holding_name
   */
  exports.prototype['holding_name'] = undefined;
  /**
   * The date of the holding
   * @member {Date} date_of_holding
   */
  exports.prototype['date_of_holding'] = undefined;
  /**
   * The number of shares
   * @member {Number} shares
   */
  exports.prototype['shares'] = undefined;
  /**
   * The weight of the holding
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;



  return exports;
}));


