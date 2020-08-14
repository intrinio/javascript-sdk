/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.2
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
    define(['ApiClient', 'model/IntradayStockPrice', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntradayStockPrice'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSecurityIntradayPrices = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.IntradayStockPrice, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, IntradayStockPrice, SecuritySummary) {
  'use strict';




  /**
   * The ApiResponseSecurityIntradayPrices model module.
   * @module model/ApiResponseSecurityIntradayPrices
   * @version 5.6.2
   */

  /**
   * Constructs a new <code>ApiResponseSecurityIntradayPrices</code>.
   * @alias module:model/ApiResponseSecurityIntradayPrices
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ApiResponseSecurityIntradayPrices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityIntradayPrices} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityIntradayPrices} The populated <code>ApiResponseSecurityIntradayPrices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('intraday_prices')) {
        obj['intraday_prices'] = ApiClient.convertToType(data['intraday_prices'], [IntradayStockPrice]);
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * The intraday stock prices for the Security
   * @member {Array.<module:model/IntradayStockPrice>} intraday_prices
   */
  exports.prototype['intraday_prices'] = undefined;
  /**
   * The Security resolved from the given identifier
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * The source of the data
   * @member {module:model/ApiResponseSecurityIntradayPrices.SourceEnum} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "iex"
     * @const
     */
    "iex": "iex",
    /**
     * value: "bats"
     * @const
     */
    "bats": "bats"  };


  return exports;
}));


