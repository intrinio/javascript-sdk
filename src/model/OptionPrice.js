/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.27.2
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
    root.intrinioSDK.OptionPrice = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionPrice model module.
   * @module model/OptionPrice
   * @version 5.19.0
   */

  /**
   * Constructs a new <code>OptionPrice</code>.
   * An option price contains price information for a specific options contract.
   * @alias module:model/OptionPrice
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>OptionPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionPrice} obj Optional instance to populate.
   * @return {module:model/OptionPrice} The populated <code>OptionPrice</code> instance.
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
      if (data.hasOwnProperty('volume_bid')) {
        obj['volume_bid'] = ApiClient.convertToType(data['volume_bid'], 'Number');
      }
      if (data.hasOwnProperty('volume_ask')) {
        obj['volume_ask'] = ApiClient.convertToType(data['volume_ask'], 'Number');
      }
      if (data.hasOwnProperty('trades')) {
        obj['trades'] = ApiClient.convertToType(data['trades'], 'Number');
      }
      if (data.hasOwnProperty('open_interest')) {
        obj['open_interest'] = ApiClient.convertToType(data['open_interest'], 'Number');
      }
      if (data.hasOwnProperty('open_interest_change')) {
        obj['open_interest_change'] = ApiClient.convertToType(data['open_interest_change'], 'Number');
      }
      if (data.hasOwnProperty('next_day_open_interest')) {
        obj['next_day_open_interest'] = ApiClient.convertToType(data['next_day_open_interest'], 'Number');
      }
      if (data.hasOwnProperty('implied_volatility')) {
        obj['implied_volatility'] = ApiClient.convertToType(data['implied_volatility'], 'Number');
      }
      if (data.hasOwnProperty('implied_volatility_change')) {
        obj['implied_volatility_change'] = ApiClient.convertToType(data['implied_volatility_change'], 'Number');
      }
      if (data.hasOwnProperty('delta')) {
        obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
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
   * The cumulative volume of this options contract that traded on the bid price that day.
   * @member {Number} volume_bid
   */
  exports.prototype['volume_bid'] = undefined;
  /**
   * The cumulative volume of this options contract that traded on the ask price that day.
   * @member {Number} volume_ask
   */
  exports.prototype['volume_ask'] = undefined;
  /**
   * The number of trades executed that for this options contract on that day.
   * @member {Number} trades
   */
  exports.prototype['trades'] = undefined;
  /**
   * The total number of this options contract that are still open.
   * @member {Number} open_interest
   */
  exports.prototype['open_interest'] = undefined;
  /**
   * The change in the total number of this options contract that are still open from the previous day.
   * @member {Number} open_interest_change
   */
  exports.prototype['open_interest_change'] = undefined;
  /**
   * The total number of this options contract that are still open at the start of the next day.
   * @member {Number} next_day_open_interest
   */
  exports.prototype['next_day_open_interest'] = undefined;
  /**
   * The estimated volatility of the Security's price. Volatility is a statistical measure of dispersion of returns for the Security. Standard deviation of a Security's returns and a market index is an example of a measurement of volatility. Implied volatility approximates the future value of an option, and the option's current value takes this into consideration.
   * @member {Number} implied_volatility
   */
  exports.prototype['implied_volatility'] = undefined;
  /**
   * The change in implied volatility for that day.
   * @member {Number} implied_volatility_change
   */
  exports.prototype['implied_volatility_change'] = undefined;
  /**
   * Delta measures the degree to which an options contract is exposed to shifts in the price of the underlying Security. Values of delta range from 0.0 to 1.0 for call options and -1.0 to 0.0 for put options. For example, if a put option has a delta of -0.50, if the price of the underlying Security increases by $1, the price of the put option will decrease by $0.50.
   * @member {Number} delta
   */
  exports.prototype['delta'] = undefined;



  return exports;
}));


