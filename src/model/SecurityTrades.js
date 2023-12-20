/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.48.1
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
    root.intrinioSDK.SecurityTrades = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityTrades model module.
   * @module model/SecurityTrades
   * @version 6.26.5
   */

  /**
   * Constructs a new <code>SecurityTrades</code>.
   * A trade.
   * @alias module:model/SecurityTrades
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SecurityTrades</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityTrades} obj Optional instance to populate.
   * @return {module:model/SecurityTrades} The populated <code>SecurityTrades</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('total_volume')) {
        obj['total_volume'] = ApiClient.convertToType(data['total_volume'], 'Number');
      }
      if (data.hasOwnProperty('market_center')) {
        obj['market_center'] = ApiClient.convertToType(data['market_center'], 'String');
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ticker symbol
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * The UTC timestamp at the time of the trade.
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The price of the trade.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The size of the trade.
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * The total volume of the symbol for the day up to the timestamp point in time.
   * @member {Number} total_volume
   */
  exports.prototype['total_volume'] = undefined;
  /**
   * The market center for the trade.
   * @member {String} market_center
   */
  exports.prototype['market_center'] = undefined;
  /**
   * The condition of the trade.
   * @member {String} condition
   */
  exports.prototype['condition'] = undefined;



  return exports;
}));


