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
    define(['ApiClient', 'model/StockExchange', 'model/StockPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StockExchange'), require('./StockPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseStockExchangeStockPrices = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.StockExchange, root.intrinioSDK.StockPrice);
  }
}(this, function(ApiClient, StockExchange, StockPrice) {
  'use strict';




  /**
   * The ApiResponseStockExchangeStockPrices model module.
   * @module model/ApiResponseStockExchangeStockPrices
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ApiResponseStockExchangeStockPrices</code>.
   * @alias module:model/ApiResponseStockExchangeStockPrices
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseStockExchangeStockPrices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseStockExchangeStockPrices} obj Optional instance to populate.
   * @return {module:model/ApiResponseStockExchangeStockPrices} The populated <code>ApiResponseStockExchangeStockPrices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stock_prices')) {
        obj['stock_prices'] = ApiClient.convertToType(data['stock_prices'], [StockPrice]);
      }
      if (data.hasOwnProperty('stock_exchange')) {
        obj['stock_exchange'] = StockExchange.constructFromObject(data['stock_exchange']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * The stock prices for all Securities traded on the Stock Exchange on the given date
   * @member {Array.<module:model/StockPrice>} stock_prices
   */
  exports.prototype['stock_prices'] = undefined;
  /**
   * The Stock Exchange resolved from the given identifier
   * @member {module:model/StockExchange} stock_exchange
   */
  exports.prototype['stock_exchange'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


