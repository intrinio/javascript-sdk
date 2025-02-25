/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.91.1
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
    root.intrinioSDK.OptionTrades = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionTrades model module.
   * @module model/OptionTrades
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>OptionTrades</code>.
   * A trade.
   * @alias module:model/OptionTrades
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>OptionTrades</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionTrades} obj Optional instance to populate.
   * @return {module:model/OptionTrades} The populated <code>OptionTrades</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('underlying_symbol')) {
        obj['underlying_symbol'] = ApiClient.convertToType(data['underlying_symbol'], 'String');
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
      if (data.hasOwnProperty('ask_price_at_execution')) {
        obj['ask_price_at_execution'] = ApiClient.convertToType(data['ask_price_at_execution'], 'Number');
      }
      if (data.hasOwnProperty('bid_price_at_execution')) {
        obj['bid_price_at_execution'] = ApiClient.convertToType(data['bid_price_at_execution'], 'Number');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], 'String');
      }
      if (data.hasOwnProperty('sequence_id')) {
        obj['sequence_id'] = ApiClient.convertToType(data['sequence_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The option contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * The ticker symbol
   * @member {String} underlying_symbol
   */
  exports.prototype['underlying_symbol'] = undefined;
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
   * The price of ask quote at the time of the trade.
   * @member {Number} ask_price_at_execution
   */
  exports.prototype['ask_price_at_execution'] = undefined;
  /**
   * The price of bid quote at the time of the trade.
   * @member {Number} bid_price_at_execution
   */
  exports.prototype['bid_price_at_execution'] = undefined;
  /**
   * The exchange for the trade.
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The condition of the trade.
   * @member {String} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * The sequential ID for the trade, ordered as temporally received from the exchange.
   * @member {Number} sequence_id
   */
  exports.prototype['sequence_id'] = undefined;



  return exports;
}));


