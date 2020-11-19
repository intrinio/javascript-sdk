/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.16.4
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
    define(['ApiClient', 'model/ForexCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForexCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseForexCurrencies = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ForexCurrency);
  }
}(this, function(ApiClient, ForexCurrency) {
  'use strict';




  /**
   * The ApiResponseForexCurrencies model module.
   * @module model/ApiResponseForexCurrencies
   * @version 5.6.4
   */

  /**
   * Constructs a new <code>ApiResponseForexCurrencies</code>.
   * @alias module:model/ApiResponseForexCurrencies
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseForexCurrencies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseForexCurrencies} obj Optional instance to populate.
   * @return {module:model/ApiResponseForexCurrencies} The populated <code>ApiResponseForexCurrencies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], [ForexCurrency]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ForexCurrency>} currencies
   */
  exports.prototype['currencies'] = undefined;



  return exports;
}));


