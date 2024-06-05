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
    root.intrinioSDK.ForexPrice = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ForexPrice model module.
   * @module model/ForexPrice
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>ForexPrice</code>.
   * A Forex Price
   * @alias module:model/ForexPrice
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ForexPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForexPrice} obj Optional instance to populate.
   * @return {module:model/ForexPrice} The populated <code>ForexPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('occurred_at')) {
        obj['occurred_at'] = ApiClient.convertToType(data['occurred_at'], 'String');
      }
      if (data.hasOwnProperty('open_bid')) {
        obj['open_bid'] = ApiClient.convertToType(data['open_bid'], 'Number');
      }
      if (data.hasOwnProperty('high_bid')) {
        obj['high_bid'] = ApiClient.convertToType(data['high_bid'], 'Number');
      }
      if (data.hasOwnProperty('low_bid')) {
        obj['low_bid'] = ApiClient.convertToType(data['low_bid'], 'Number');
      }
      if (data.hasOwnProperty('close_bid')) {
        obj['close_bid'] = ApiClient.convertToType(data['close_bid'], 'Number');
      }
      if (data.hasOwnProperty('open_ask')) {
        obj['open_ask'] = ApiClient.convertToType(data['open_ask'], 'Number');
      }
      if (data.hasOwnProperty('high_ask')) {
        obj['high_ask'] = ApiClient.convertToType(data['high_ask'], 'Number');
      }
      if (data.hasOwnProperty('low_ask')) {
        obj['low_ask'] = ApiClient.convertToType(data['low_ask'], 'Number');
      }
      if (data.hasOwnProperty('close_ask')) {
        obj['close_ask'] = ApiClient.convertToType(data['close_ask'], 'Number');
      }
      if (data.hasOwnProperty('total_ticks')) {
        obj['total_ticks'] = ApiClient.convertToType(data['total_ticks'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The timestamp of the beginning of the timeframe. The open prices would be at this time, while close prices would be at this time plus the timeframe.
   * @member {String} occurred_at
   */
  exports.prototype['occurred_at'] = undefined;
  /**
   * Open bid
   * @member {Number} open_bid
   */
  exports.prototype['open_bid'] = undefined;
  /**
   * High bid
   * @member {Number} high_bid
   */
  exports.prototype['high_bid'] = undefined;
  /**
   * Low bid
   * @member {Number} low_bid
   */
  exports.prototype['low_bid'] = undefined;
  /**
   * Close bid
   * @member {Number} close_bid
   */
  exports.prototype['close_bid'] = undefined;
  /**
   * Open ask
   * @member {Number} open_ask
   */
  exports.prototype['open_ask'] = undefined;
  /**
   * High ask
   * @member {Number} high_ask
   */
  exports.prototype['high_ask'] = undefined;
  /**
   * Low ask
   * @member {Number} low_ask
   */
  exports.prototype['low_ask'] = undefined;
  /**
   * Close ask
   * @member {Number} close_ask
   */
  exports.prototype['close_ask'] = undefined;
  /**
   * Total ticks
   * @member {Number} total_ticks
   */
  exports.prototype['total_ticks'] = undefined;



  return exports;
}));


