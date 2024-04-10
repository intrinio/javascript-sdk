/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.5
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
    root.intrinioSDK.OptionUnusualTrade = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionUnusualTrade model module.
   * @module model/OptionUnusualTrade
   * @version 6.27.1
   */

  /**
   * Constructs a new <code>OptionUnusualTrade</code>.
   * A large market order that is broken into a collection of smaller orders to take advantage of all contracts and prices offered across all exchanges.
   * @alias module:model/OptionUnusualTrade
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>OptionUnusualTrade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionUnusualTrade} obj Optional instance to populate.
   * @return {module:model/OptionUnusualTrade} The populated <code>OptionUnusualTrade</code> instance.
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
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('total_value')) {
        obj['total_value'] = ApiClient.convertToType(data['total_value'], 'Number');
      }
      if (data.hasOwnProperty('total_size')) {
        obj['total_size'] = ApiClient.convertToType(data['total_size'], 'Number');
      }
      if (data.hasOwnProperty('average_price')) {
        obj['average_price'] = ApiClient.convertToType(data['average_price'], 'Number');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('ask_at_execution')) {
        obj['ask_at_execution'] = ApiClient.convertToType(data['ask_at_execution'], 'Number');
      }
      if (data.hasOwnProperty('bid_at_execution')) {
        obj['bid_at_execution'] = ApiClient.convertToType(data['bid_at_execution'], 'Number');
      }
      if (data.hasOwnProperty('sentiment')) {
        obj['sentiment'] = ApiClient.convertToType(data['sentiment'], 'String');
      }
      if (data.hasOwnProperty('underlying_price_at_execution')) {
        obj['underlying_price_at_execution'] = ApiClient.convertToType(data['underlying_price_at_execution'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The underlying option security symbol for the trade
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * The UTC timestamp of order placement
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The type of unusual trade
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The aggregated value of all option contract premiums included in the trade
   * @member {Number} total_value
   */
  exports.prototype['total_value'] = undefined;
  /**
   * The total number of contracts involved in a single transaction
   * @member {Number} total_size
   */
  exports.prototype['total_size'] = undefined;
  /**
   * The average premium paid per option contract
   * @member {Number} average_price
   */
  exports.prototype['average_price'] = undefined;
  /**
   * The option contract symbol
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Ask price at execution
   * @member {Number} ask_at_execution
   */
  exports.prototype['ask_at_execution'] = undefined;
  /**
   * Bid price at execution
   * @member {Number} bid_at_execution
   */
  exports.prototype['bid_at_execution'] = undefined;
  /**
   * Bullish, Bearish, or Neutral Sentiment is estimated based on whether the trade was executed at the bid, ask, or mark price.
   * @member {module:model/OptionUnusualTrade.SentimentEnum} sentiment
   */
  exports.prototype['sentiment'] = undefined;
  /**
   * Price of the underlying security at execution of trade
   * @member {Number} underlying_price_at_execution
   */
  exports.prototype['underlying_price_at_execution'] = undefined;


  /**
   * Allowed values for the <code>sentiment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SentimentEnum = {
    /**
     * value: "bullish"
     * @const
     */
    "bullish": "bullish",
    /**
     * value: "bearish"
     * @const
     */
    "bearish": "bearish",
    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral"  };


  return exports;
}));


