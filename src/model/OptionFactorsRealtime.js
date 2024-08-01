/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.6
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
    root.intrinioSDK.OptionFactorsRealtime = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionFactorsRealtime model module.
   * @module model/OptionFactorsRealtime
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>OptionFactorsRealtime</code>.
   * Realtime factors for calculating stats such as greeks and implied volatility for a specific options contract.
   * @alias module:model/OptionFactorsRealtime
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OptionFactorsRealtime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionFactorsRealtime} obj Optional instance to populate.
   * @return {module:model/OptionFactorsRealtime} The populated <code>OptionFactorsRealtime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('market_price')) {
        obj['market_price'] = ApiClient.convertToType(data['market_price'], 'Number');
      }
      if (data.hasOwnProperty('underlying_price')) {
        obj['underlying_price'] = ApiClient.convertToType(data['underlying_price'], 'Number');
      }
      if (data.hasOwnProperty('strike_price')) {
        obj['strike_price'] = ApiClient.convertToType(data['strike_price'], 'Number');
      }
      if (data.hasOwnProperty('days_to_expiration')) {
        obj['days_to_expiration'] = ApiClient.convertToType(data['days_to_expiration'], 'Number');
      }
      if (data.hasOwnProperty('risk_free_interest_rate')) {
        obj['risk_free_interest_rate'] = ApiClient.convertToType(data['risk_free_interest_rate'], 'Number');
      }
      if (data.hasOwnProperty('dividend_yield')) {
        obj['dividend_yield'] = ApiClient.convertToType(data['dividend_yield'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The market price of the options contract
   * @member {Number} market_price
   */
  exports.prototype['market_price'] = undefined;
  /**
   * The market price of the underlying asset
   * @member {Number} underlying_price
   */
  exports.prototype['underlying_price'] = undefined;
  /**
   * The strike price of the options contract
   * @member {Number} strike_price
   */
  exports.prototype['strike_price'] = undefined;
  /**
   * The number of days to expiration
   * @member {Number} days_to_expiration
   */
  exports.prototype['days_to_expiration'] = undefined;
  /**
   * The current risk-free interest rate, as measured by the 3-month Treasury Bill rate
   * @member {Number} risk_free_interest_rate
   */
  exports.prototype['risk_free_interest_rate'] = undefined;
  /**
   * The dividend yield of the underlying asset (if applicable)
   * @member {Number} dividend_yield
   */
  exports.prototype['dividend_yield'] = undefined;



  return exports;
}));


