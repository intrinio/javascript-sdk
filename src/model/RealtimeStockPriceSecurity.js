/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.6
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
    root.intrinioSDK.RealtimeStockPriceSecurity = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RealtimeStockPriceSecurity model module.
   * @module model/RealtimeStockPriceSecurity
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>RealtimeStockPriceSecurity</code>.
   * The Security of the stock price
   * @alias module:model/RealtimeStockPriceSecurity
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RealtimeStockPriceSecurity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeStockPriceSecurity} obj Optional instance to populate.
   * @return {module:model/RealtimeStockPriceSecurity} The populated <code>RealtimeStockPriceSecurity</code> instance.
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
      if (data.hasOwnProperty('exchange_ticker')) {
        obj['exchange_ticker'] = ApiClient.convertToType(data['exchange_ticker'], 'String');
      }
      if (data.hasOwnProperty('figi')) {
        obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
      }
      if (data.hasOwnProperty('composite_figi')) {
        obj['composite_figi'] = ApiClient.convertToType(data['composite_figi'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for Security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The common/local ticker of the Security
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The exchange-level ticker
   * @member {String} exchange_ticker
   */
  exports.prototype['exchange_ticker'] = undefined;
  /**
   * The OpenFIGI identifier
   * @member {String} figi
   */
  exports.prototype['figi'] = undefined;
  /**
   * The country-composite OpenFIGI identifier
   * @member {String} composite_figi
   */
  exports.prototype['composite_figi'] = undefined;



  return exports;
}));


