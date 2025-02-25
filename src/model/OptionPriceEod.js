/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.80.1
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
    root.intrinioSDK.OptionPriceEod = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionPriceEod model module.
   * @module model/OptionPriceEod
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>OptionPriceEod</code>.
   * An option price contains price information for a specific options contract.
   * @alias module:model/OptionPriceEod
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>OptionPriceEod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionPriceEod} obj Optional instance to populate.
   * @return {module:model/OptionPriceEod} The populated <code>OptionPriceEod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Number');
      }
      if (data.hasOwnProperty('close_bid')) {
        obj['close_bid'] = ApiClient.convertToType(data['close_bid'], 'Number');
      }
      if (data.hasOwnProperty('close_ask')) {
        obj['close_ask'] = ApiClient.convertToType(data['close_ask'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('open_ask')) {
        obj['open_ask'] = ApiClient.convertToType(data['open_ask'], 'Number');
      }
      if (data.hasOwnProperty('open_bid')) {
        obj['open_bid'] = ApiClient.convertToType(data['open_bid'], 'Number');
      }
      if (data.hasOwnProperty('open_interest')) {
        obj['open_interest'] = ApiClient.convertToType(data['open_interest'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('mark')) {
        obj['mark'] = ApiClient.convertToType(data['mark'], 'Number');
      }
      if (data.hasOwnProperty('ask_high')) {
        obj['ask_high'] = ApiClient.convertToType(data['ask_high'], 'Number');
      }
      if (data.hasOwnProperty('ask_low')) {
        obj['ask_low'] = ApiClient.convertToType(data['ask_low'], 'Number');
      }
      if (data.hasOwnProperty('bid_high')) {
        obj['bid_high'] = ApiClient.convertToType(data['bid_high'], 'Number');
      }
      if (data.hasOwnProperty('bid_low')) {
        obj['bid_low'] = ApiClient.convertToType(data['bid_low'], 'Number');
      }
      if (data.hasOwnProperty('implied_volatility')) {
        obj['implied_volatility'] = ApiClient.convertToType(data['implied_volatility'], 'Number');
      }
      if (data.hasOwnProperty('delta')) {
        obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
      }
      if (data.hasOwnProperty('gamma')) {
        obj['gamma'] = ApiClient.convertToType(data['gamma'], 'Number');
      }
      if (data.hasOwnProperty('theta')) {
        obj['theta'] = ApiClient.convertToType(data['theta'], 'Number');
      }
      if (data.hasOwnProperty('vega')) {
        obj['vega'] = ApiClient.convertToType(data['vega'], 'Number');
      }
      if (data.hasOwnProperty('close_time')) {
        obj['close_time'] = ApiClient.convertToType(data['close_time'], 'Date');
      }
      if (data.hasOwnProperty('close_size')) {
        obj['close_size'] = ApiClient.convertToType(data['close_size'], 'Number');
      }
      if (data.hasOwnProperty('close_bid_time')) {
        obj['close_bid_time'] = ApiClient.convertToType(data['close_bid_time'], 'Date');
      }
      if (data.hasOwnProperty('close_bid_size')) {
        obj['close_bid_size'] = ApiClient.convertToType(data['close_bid_size'], 'Number');
      }
      if (data.hasOwnProperty('close_ask_time')) {
        obj['close_ask_time'] = ApiClient.convertToType(data['close_ask_time'], 'Date');
      }
      if (data.hasOwnProperty('close_ask_size')) {
        obj['close_ask_size'] = ApiClient.convertToType(data['close_ask_size'], 'Number');
      }
      if (data.hasOwnProperty('exercise_style')) {
        obj['exercise_style'] = ApiClient.convertToType(data['exercise_style'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date of the price, in the format YYYY-MM-DD
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The closing price of the options contract.
   * @member {Number} close
   */
  exports.prototype['close'] = undefined;
  /**
   * The closing bid price of the options contract.
   * @member {Number} close_bid
   */
  exports.prototype['close_bid'] = undefined;
  /**
   * The closing ask price of the options contract.
   * @member {Number} close_ask
   */
  exports.prototype['close_ask'] = undefined;
  /**
   * The cumulative volume of this options contract that traded that day.
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The price at the beginning of the period
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The ask at the beginning of the period
   * @member {Number} open_ask
   */
  exports.prototype['open_ask'] = undefined;
  /**
   * The bid at the beginning of the period
   * @member {Number} open_bid
   */
  exports.prototype['open_bid'] = undefined;
  /**
   * The total number of this options contract that are still open.
   * @member {Number} open_interest
   */
  exports.prototype['open_interest'] = undefined;
  /**
   * The highest price over the span of the period
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The highest price over the span of the period
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The mid price between the latest bid and ask spread
   * @member {Number} mark
   */
  exports.prototype['mark'] = undefined;
  /**
   * The highest ask over the span of the period
   * @member {Number} ask_high
   */
  exports.prototype['ask_high'] = undefined;
  /**
   * The lowest ask over the span of the period
   * @member {Number} ask_low
   */
  exports.prototype['ask_low'] = undefined;
  /**
   * The highest bid over the span of the period
   * @member {Number} bid_high
   */
  exports.prototype['bid_high'] = undefined;
  /**
   * The lowest bid over the span of the period
   * @member {Number} bid_low
   */
  exports.prototype['bid_low'] = undefined;
  /**
   * The implied volatility of the contract calculated using the Black-Scholes Model.
   * @member {Number} implied_volatility
   */
  exports.prototype['implied_volatility'] = undefined;
  /**
   * Delta represents the rate of change between the option's price and a $1 change in the underlying asset's price.
   * @member {Number} delta
   */
  exports.prototype['delta'] = undefined;
  /**
   * Gamma represents the rate of change between an option's delta and the underlying asset's price.
   * @member {Number} gamma
   */
  exports.prototype['gamma'] = undefined;
  /**
   * Theta represents the rate of change between the option price and time, or time sensitivity - sometimes known as an option's time decay.
   * @member {Number} theta
   */
  exports.prototype['theta'] = undefined;
  /**
   * Vega represents the rate of change between an option's value and the underlying asset's implied volatility.
   * @member {Number} vega
   */
  exports.prototype['vega'] = undefined;
  /**
   * The time of the last trade before close.
   * @member {Date} close_time
   */
  exports.prototype['close_time'] = undefined;
  /**
   * The size of the last trade before close.
   * @member {Number} close_size
   */
  exports.prototype['close_size'] = undefined;
  /**
   * The time of the last bid before close.
   * @member {Date} close_bid_time
   */
  exports.prototype['close_bid_time'] = undefined;
  /**
   * The size of the last bid before close.
   * @member {Number} close_bid_size
   */
  exports.prototype['close_bid_size'] = undefined;
  /**
   * The time of the last ask before close.
   * @member {Date} close_ask_time
   */
  exports.prototype['close_ask_time'] = undefined;
  /**
   * The size of the last ask before close.
   * @member {Number} close_ask_size
   */
  exports.prototype['close_ask_size'] = undefined;
  /**
   * The exercise style.
   * @member {String} exercise_style
   */
  exports.prototype['exercise_style'] = undefined;



  return exports;
}));


