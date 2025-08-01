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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.StockExchangeMover = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockExchangeMover model module.
   * @module model/StockExchangeMover
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>StockExchangeMover</code>.
   * An security intervals result contains all security intervals corresponding to the provided query.
   * @alias module:model/StockExchangeMover
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>StockExchangeMover</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockExchangeMover} obj Optional instance to populate.
   * @return {module:model/StockExchangeMover} The populated <code>StockExchangeMover</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'Number');
      }
      if (data.hasOwnProperty('change')) {
        obj['change'] = ApiClient.convertToType(data['change'], 'Number');
      }
      if (data.hasOwnProperty('percent_change')) {
        obj['percent_change'] = ApiClient.convertToType(data['percent_change'], 'Number');
      }
      if (data.hasOwnProperty('market_volume')) {
        obj['market_volume'] = ApiClient.convertToType(data['market_volume'], 'Number');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio Identifier for this security.
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * The ticker symbol for this security.
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The last price of the last trade.
   * @member {Number} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * The raw change in price.
   * @member {Number} change
   */
  exports.prototype['change'] = undefined;
  /**
   * The percent change in price.
   * @member {Number} percent_change
   */
  exports.prototype['percent_change'] = undefined;
  /**
   * The market volume for the most recent (today) trading day.
   * @member {Number} market_volume
   */
  exports.prototype['market_volume'] = undefined;
  /**
   * The source of the data.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


