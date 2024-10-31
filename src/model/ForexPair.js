/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.72.2
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
    root.intrinioSDK.ForexPair = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ForexPair model module.
   * @module model/ForexPair
   * @version 6.32.0
   */

  /**
   * Constructs a new <code>ForexPair</code>.
   * A Forex Currency Pair
   * @alias module:model/ForexPair
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ForexPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForexPair} obj Optional instance to populate.
   * @return {module:model/ForexPair} The populated <code>ForexPair</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('base_currency')) {
        obj['base_currency'] = ApiClient.convertToType(data['base_currency'], 'String');
      }
      if (data.hasOwnProperty('quote_currency')) {
        obj['quote_currency'] = ApiClient.convertToType(data['quote_currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * The common code of the currency pair
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The ISO 4217 currency code of the base currency
   * @member {String} base_currency
   */
  exports.prototype['base_currency'] = undefined;
  /**
   * The ISO 4217 currency code of the quote currency
   * @member {String} quote_currency
   */
  exports.prototype['quote_currency'] = undefined;



  return exports;
}));


