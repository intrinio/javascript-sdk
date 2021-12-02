/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.6
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
    root.intrinioSDK.OptionStatsRealtime = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionStatsRealtime model module.
   * @module model/OptionStatsRealtime
   * @version 5.17.0
   */

  /**
   * Constructs a new <code>OptionStatsRealtime</code>.
   * Realtime stats such as greeks and implied volatility for a specific options contract.
   * @alias module:model/OptionStatsRealtime
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OptionStatsRealtime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionStatsRealtime} obj Optional instance to populate.
   * @return {module:model/OptionStatsRealtime} The populated <code>OptionStatsRealtime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
    }
    return obj;
  }

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



  return exports;
}));


