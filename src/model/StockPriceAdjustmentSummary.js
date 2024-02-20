/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.5
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
    root.intrinioSDK.StockPriceAdjustmentSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockPriceAdjustmentSummary model module.
   * @module model/StockPriceAdjustmentSummary
   * @version 6.26.8
   */

  /**
   * Constructs a new <code>StockPriceAdjustmentSummary</code>.
   * A stock price adjustment for a security on a given day, most frequently representing a split and/or dividend.
   * @alias module:model/StockPriceAdjustmentSummary
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>StockPriceAdjustmentSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockPriceAdjustmentSummary} obj Optional instance to populate.
   * @return {module:model/StockPriceAdjustmentSummary} The populated <code>StockPriceAdjustmentSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('factor')) {
        obj['factor'] = ApiClient.convertToType(data['factor'], 'Number');
      }
      if (data.hasOwnProperty('dividend')) {
        obj['dividend'] = ApiClient.convertToType(data['dividend'], 'Number');
      }
      if (data.hasOwnProperty('dividend_currency')) {
        obj['dividend_currency'] = ApiClient.convertToType(data['dividend_currency'], 'String');
      }
      if (data.hasOwnProperty('split_ratio')) {
        obj['split_ratio'] = ApiClient.convertToType(data['split_ratio'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date on which the adjustment occurred. The adjustment should be applied to all stock prices before this date.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The factor by which to multiply stock prices before this date, in order to calculate historically-adjusted stock prices.
   * @member {Number} factor
   */
  exports.prototype['factor'] = undefined;
  /**
   * The dividend amount, if a dividend was paid.
   * @member {Number} dividend
   */
  exports.prototype['dividend'] = undefined;
  /**
   * The currency of the dividend, if known.
   * @member {String} dividend_currency
   */
  exports.prototype['dividend_currency'] = undefined;
  /**
   * The ratio of the stock split, if a stock split occurred.
   * @member {Number} split_ratio
   */
  exports.prototype['split_ratio'] = undefined;



  return exports;
}));


