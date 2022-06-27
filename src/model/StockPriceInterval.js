/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.28.0
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
    root.intrinioSDK.StockPriceInterval = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockPriceInterval model module.
   * @module model/StockPriceInterval
   * @version 5.21.0
   */

  /**
   * Constructs a new <code>StockPriceInterval</code>.
   * Open, High, Low, Close, and Volume for a particular interval
   * @alias module:model/StockPriceInterval
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>StockPriceInterval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockPriceInterval} obj Optional instance to populate.
   * @return {module:model/StockPriceInterval} The populated <code>StockPriceInterval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The timestamp that the `last_price` represents.
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * The price at the beginning of the period
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The price at the end of the period
   * @member {Number} close
   */
  exports.prototype['close'] = undefined;
  /**
   * The highest price over the span of the period
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The lowest price over the span of the period
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The number of shares exchanged during the period
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;



  return exports;
}));


