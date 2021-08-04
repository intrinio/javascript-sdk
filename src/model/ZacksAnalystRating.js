/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.25.0
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
    define(['ApiClient', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksAnalystRating = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The ZacksAnalystRating model module.
   * @module model/ZacksAnalystRating
   * @version 5.14.0
   */

  /**
   * Constructs a new <code>ZacksAnalystRating</code>.
   * Buy, sell, and hold recommendations from analysts at brokerages for all companies in the Zacks universe. A rating includes data about mean, strong buys, buys, holds, sells, strong sells, and total. Each rating includes metadata about the corresponding Security.
   * @alias module:model/ZacksAnalystRating
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ZacksAnalystRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksAnalystRating} obj Optional instance to populate.
   * @return {module:model/ZacksAnalystRating} The populated <code>ZacksAnalystRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
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
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the record
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date of the Zacks Analyst Rating.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The mean (average) weighing of analyst recommendations, from 1 (strong buy) to 5 (strong sell).
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
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
   * The total number of analyst recommendations.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * The Security of the Zacks Analyst Rating
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


