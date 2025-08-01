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
    root.intrinioSDK.StockPriceInterval = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockPriceInterval model module.
   * @module model/StockPriceInterval
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>StockPriceInterval</code>.
   * Open, close, high, low, volume, average price, and change ratio for a particular interval
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
      if (data.hasOwnProperty('close_time')) {
        obj['close_time'] = ApiClient.convertToType(data['close_time'], 'Date');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('average')) {
        obj['average'] = ApiClient.convertToType(data['average'], 'Number');
      }
      if (data.hasOwnProperty('change')) {
        obj['change'] = ApiClient.convertToType(data['change'], 'Number');
      }
      if (data.hasOwnProperty('bid_high')) {
        obj['bid_high'] = ApiClient.convertToType(data['bid_high'], 'Number');
      }
      if (data.hasOwnProperty('bid_low')) {
        obj['bid_low'] = ApiClient.convertToType(data['bid_low'], 'Number');
      }
      if (data.hasOwnProperty('bid_close')) {
        obj['bid_close'] = ApiClient.convertToType(data['bid_close'], 'Number');
      }
      if (data.hasOwnProperty('bid_open')) {
        obj['bid_open'] = ApiClient.convertToType(data['bid_open'], 'Number');
      }
      if (data.hasOwnProperty('bid_first_time')) {
        obj['bid_first_time'] = ApiClient.convertToType(data['bid_first_time'], 'Date');
      }
      if (data.hasOwnProperty('bid_last_time')) {
        obj['bid_last_time'] = ApiClient.convertToType(data['bid_last_time'], 'Date');
      }
      if (data.hasOwnProperty('bid_change_percent')) {
        obj['bid_change_percent'] = ApiClient.convertToType(data['bid_change_percent'], 'Number');
      }
      if (data.hasOwnProperty('ask_high')) {
        obj['ask_high'] = ApiClient.convertToType(data['ask_high'], 'Number');
      }
      if (data.hasOwnProperty('ask_low')) {
        obj['ask_low'] = ApiClient.convertToType(data['ask_low'], 'Number');
      }
      if (data.hasOwnProperty('ask_close')) {
        obj['ask_close'] = ApiClient.convertToType(data['ask_close'], 'Number');
      }
      if (data.hasOwnProperty('ask_open')) {
        obj['ask_open'] = ApiClient.convertToType(data['ask_open'], 'Number');
      }
      if (data.hasOwnProperty('ask_first_time')) {
        obj['ask_first_time'] = ApiClient.convertToType(data['ask_first_time'], 'Date');
      }
      if (data.hasOwnProperty('ask_last_time')) {
        obj['ask_last_time'] = ApiClient.convertToType(data['ask_last_time'], 'Date');
      }
      if (data.hasOwnProperty('ask_change_percent')) {
        obj['ask_change_percent'] = ApiClient.convertToType(data['ask_change_percent'], 'Number');
      }
      if (data.hasOwnProperty('trade_count')) {
        obj['trade_count'] = ApiClient.convertToType(data['trade_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The timestamp that represents the start of the interval span.
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * The first traded price during the period
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The last traded price during the period
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
  /**
   * The timestamp that represents the end of the interval span.
   * @member {Date} close_time
   */
  exports.prototype['close_time'] = undefined;
  /**
   * The size of the interval.
   * @member {module:model/StockPriceInterval.IntervalEnum} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * The average trade price of an individual stock during the interval.
   * @member {Number} average
   */
  exports.prototype['average'] = undefined;
  /**
   * The change ratio from open to close.  ((Close - Open)/Open).
   * @member {Number} change
   */
  exports.prototype['change'] = undefined;
  /**
   * The highest bid price from the interval.
   * @member {Number} bid_high
   */
  exports.prototype['bid_high'] = undefined;
  /**
   * The lowest bid price from the interval.
   * @member {Number} bid_low
   */
  exports.prototype['bid_low'] = undefined;
  /**
   * The last bid price from the interval.
   * @member {Number} bid_close
   */
  exports.prototype['bid_close'] = undefined;
  /**
   * The first bid price from the interval.
   * @member {Number} bid_open
   */
  exports.prototype['bid_open'] = undefined;
  /**
   * The timestamp that represents the first bid time from the interval span.
   * @member {Date} bid_first_time
   */
  exports.prototype['bid_first_time'] = undefined;
  /**
   * The timestamp that represents the last bid time from the interval span.
   * @member {Date} bid_last_time
   */
  exports.prototype['bid_last_time'] = undefined;
  /**
   * The ratio of the close to open bid difference, in percent.
   * @member {Number} bid_change_percent
   */
  exports.prototype['bid_change_percent'] = undefined;
  /**
   * The highest ask price from the interval.
   * @member {Number} ask_high
   */
  exports.prototype['ask_high'] = undefined;
  /**
   * The lowest ask price from the interval.
   * @member {Number} ask_low
   */
  exports.prototype['ask_low'] = undefined;
  /**
   * The last ask price from the interval.
   * @member {Number} ask_close
   */
  exports.prototype['ask_close'] = undefined;
  /**
   * The first ask price from the interval.
   * @member {Number} ask_open
   */
  exports.prototype['ask_open'] = undefined;
  /**
   * The timestamp that represents the first ask time from the interval span.
   * @member {Date} ask_first_time
   */
  exports.prototype['ask_first_time'] = undefined;
  /**
   * The timestamp that represents the last ask time from the interval span.
   * @member {Date} ask_last_time
   */
  exports.prototype['ask_last_time'] = undefined;
  /**
   * The ratio of the close to open ask difference, in percent.
   * @member {Number} ask_change_percent
   */
  exports.prototype['ask_change_percent'] = undefined;
  /**
   * The number of qualified trades executed during the period
   * @member {Number} trade_count
   */
  exports.prototype['trade_count'] = undefined;


  /**
   * Allowed values for the <code>interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntervalEnum = {
    /**
     * value: "SixtyMinute"
     * @const
     */
    "SixtyMinute": "SixtyMinute",
    /**
     * value: "ThirtyMinute"
     * @const
     */
    "ThirtyMinute": "ThirtyMinute",
    /**
     * value: "FifteenMinute"
     * @const
     */
    "FifteenMinute": "FifteenMinute",
    /**
     * value: "TenMinute"
     * @const
     */
    "TenMinute": "TenMinute",
    /**
     * value: "FiveMinute"
     * @const
     */
    "FiveMinute": "FiveMinute",
    /**
     * value: "OneMinute"
     * @const
     */
    "OneMinute": "OneMinute"  };


  return exports;
}));


