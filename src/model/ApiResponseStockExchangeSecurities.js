/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.15.3
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
    define(['ApiClient', 'model/SecuritySummary', 'model/StockExchange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'), require('./StockExchange'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseStockExchangeSecurities = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary, root.intrinioSDK.StockExchange);
  }
}(this, function(ApiClient, SecuritySummary, StockExchange) {
  'use strict';




  /**
   * The ApiResponseStockExchangeSecurities model module.
   * @module model/ApiResponseStockExchangeSecurities
   * @version 5.6.3
   */

  /**
   * Constructs a new <code>ApiResponseStockExchangeSecurities</code>.
   * @alias module:model/ApiResponseStockExchangeSecurities
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseStockExchangeSecurities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseStockExchangeSecurities} obj Optional instance to populate.
   * @return {module:model/ApiResponseStockExchangeSecurities} The populated <code>ApiResponseStockExchangeSecurities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('securities')) {
        obj['securities'] = ApiClient.convertToType(data['securities'], [SecuritySummary]);
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
   * The securities traded on the Stock Exchange
   * @member {Array.<module:model/SecuritySummary>} securities
   */
  exports.prototype['securities'] = undefined;
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


