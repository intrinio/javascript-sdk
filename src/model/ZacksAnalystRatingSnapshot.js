/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.6
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
    root.intrinioSDK.ZacksAnalystRatingSnapshot = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksAnalystRatingSnapshot model module.
   * @module model/ZacksAnalystRatingSnapshot
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>ZacksAnalystRatingSnapshot</code>.
   * A snapshot of ratings data compared with previous timeframes. This includes mean percentiles for comparing one security to the universe of securities covered by Zacks analyst ratings, at a specific point in time.
   * @alias module:model/ZacksAnalystRatingSnapshot
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ZacksAnalystRatingSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksAnalystRatingSnapshot} obj Optional instance to populate.
   * @return {module:model/ZacksAnalystRatingSnapshot} The populated <code>ZacksAnalystRatingSnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('snapshot_date')) {
        obj['snapshot_date'] = ApiClient.convertToType(data['snapshot_date'], 'Date');
      }
      if (data.hasOwnProperty('rating_date')) {
        obj['rating_date'] = ApiClient.convertToType(data['rating_date'], 'Date');
      }
      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
      }
      if (data.hasOwnProperty('percentile')) {
        obj['percentile'] = ApiClient.convertToType(data['percentile'], 'Number');
      }
      if (data.hasOwnProperty('strong_buys')) {
        obj['strong_buys'] = ApiClient.convertToType(data['strong_buys'], 'Number');
      }
      if (data.hasOwnProperty('buys')) {
        obj['buys'] = ApiClient.convertToType(data['buys'], 'Number');
      }
      if (data.hasOwnProperty('holds')) {
        obj['holds'] = ApiClient.convertToType(data['holds'], 'Number');
      }
      if (data.hasOwnProperty('sells')) {
        obj['sells'] = ApiClient.convertToType(data['sells'], 'Number');
      }
      if (data.hasOwnProperty('strong_sells')) {
        obj['strong_sells'] = ApiClient.convertToType(data['strong_sells'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The snapshot type, signifying the age of the ratings data from the snapshot date.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The date of the snapshot, when data was recorded.
   * @member {Date} snapshot_date
   */
  exports.prototype['snapshot_date'] = undefined;
  /**
   * The date of the latest rating for the snapshot timeframe. This is the effective date of the ratings data.
   * @member {Date} rating_date
   */
  exports.prototype['rating_date'] = undefined;
  /**
   * The mean (average) weighing of analyst recommendations, from 1 (strong buy) to 5 (strong sell).
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The percentile of the mean, derived by comparing to all securities rated by analysts as of the rating date, ranging 0.0 (strong buy) to 1.0 (strong sell).
   * @member {Number} percentile
   */
  exports.prototype['percentile'] = undefined;
  /**
   * The number of analysts recommending Strong Buy.
   * @member {Number} strong_buys
   */
  exports.prototype['strong_buys'] = undefined;
  /**
   * The number of analysts recommending Buy.
   * @member {Number} buys
   */
  exports.prototype['buys'] = undefined;
  /**
   * The number of analysts recommending Hold.
   * @member {Number} holds
   */
  exports.prototype['holds'] = undefined;
  /**
   * The number of analysts recommending Sell.
   * @member {Number} sells
   */
  exports.prototype['sells'] = undefined;
  /**
   * The number of analysts recommending Strong Sell.
   * @member {Number} strong_sells
   */
  exports.prototype['strong_sells'] = undefined;
  /**
   * The total number of analysts recommendations.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


