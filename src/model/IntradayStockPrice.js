/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.29.0
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
    root.intrinioSDK.IntradayStockPrice = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntradayStockPrice model module.
   * @module model/IntradayStockPrice
   * @version 6.21.1
   */

  /**
   * Constructs a new <code>IntradayStockPrice</code>.
   * An intraday stock price for a Security.
   * @alias module:model/IntradayStockPrice
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>IntradayStockPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntradayStockPrice} obj Optional instance to populate.
   * @return {module:model/IntradayStockPrice} The populated <code>IntradayStockPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'Number');
      }
      if (data.hasOwnProperty('ask_price')) {
        obj['ask_price'] = ApiClient.convertToType(data['ask_price'], 'Number');
      }
      if (data.hasOwnProperty('ask_size')) {
        obj['ask_size'] = ApiClient.convertToType(data['ask_size'], 'Number');
      }
      if (data.hasOwnProperty('bid_price')) {
        obj['bid_price'] = ApiClient.convertToType(data['bid_price'], 'Number');
      }
      if (data.hasOwnProperty('bid_size')) {
        obj['bid_size'] = ApiClient.convertToType(data['bid_size'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
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
   * The price of the last trade.
   * @member {Number} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * The price of the top ask order.
   * @member {Number} ask_price
   */
  exports.prototype['ask_price'] = undefined;
  /**
   * The size of the top ask order.
   * @member {Number} ask_size
   */
  exports.prototype['ask_size'] = undefined;
  /**
   * The price of the top bid order.
   * @member {Number} bid_price
   */
  exports.prototype['bid_price'] = undefined;
  /**
   * The size of the top bid order.
   * @member {Number} bid_size
   */
  exports.prototype['bid_size'] = undefined;
  /**
   * The number of shares exchanged during the trading day on the exchange.
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The source of the data.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


