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
    define(['ApiClient', 'model/ApiResponseSecurityQuote', 'model/StockExchange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiResponseSecurityQuote'), require('./StockExchange'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseStockExchangeQuote = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseSecurityQuote, root.intrinioSDK.StockExchange);
  }
}(this, function(ApiClient, ApiResponseSecurityQuote, StockExchange) {
  'use strict';




  /**
   * The ApiResponseStockExchangeQuote model module.
   * @module model/ApiResponseStockExchangeQuote
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>ApiResponseStockExchangeQuote</code>.
   * @alias module:model/ApiResponseStockExchangeQuote
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseStockExchangeQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseStockExchangeQuote} obj Optional instance to populate.
   * @return {module:model/ApiResponseStockExchangeQuote} The populated <code>ApiResponseStockExchangeQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('quotes')) {
        obj['quotes'] = ApiClient.convertToType(data['quotes'], [ApiResponseSecurityQuote]);
      }
      if (data.hasOwnProperty('stock_exchange')) {
        obj['stock_exchange'] = StockExchange.constructFromObject(data['stock_exchange']);
      }
    }
    return obj;
  }

  /**
   * The realtime stock prices for all Securities traded on the Stock Exchange
   * @member {Array.<module:model/ApiResponseSecurityQuote>} quotes
   */
  exports.prototype['quotes'] = undefined;
  /**
   * The Stock Exchange resolved from the given identifier
   * @member {module:model/StockExchange} stock_exchange
   */
  exports.prototype['stock_exchange'] = undefined;



  return exports;
}));


