/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
    define(['ApiClient', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksEPSEstimate = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The ZacksEPSEstimate model module.
   * @module model/ZacksEPSEstimate
   * @version 5.13.1
   */

  /**
   * Constructs a new <code>ZacksEPSEstimate</code>.
   * Zacks consensus earnings-per-share (EPS) estimates from analysts for thousands of stocks.  Zacks storied research team aggregates and validates the estimates.  Each EPS Estimate includes metadata about the corresponding Company.
   * @alias module:model/ZacksEPSEstimate
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>ZacksEPSEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksEPSEstimate} obj Optional instance to populate.
   * @return {module:model/ZacksEPSEstimate} The populated <code>ZacksEPSEstimate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('fiscal_year')) {
        obj['fiscal_year'] = ApiClient.convertToType(data['fiscal_year'], 'Number');
      }
      if (data.hasOwnProperty('fiscal_quarter')) {
        obj['fiscal_quarter'] = ApiClient.convertToType(data['fiscal_quarter'], 'String');
      }
      if (data.hasOwnProperty('calendar_year')) {
        obj['calendar_year'] = ApiClient.convertToType(data['calendar_year'], 'Number');
      }
      if (data.hasOwnProperty('calendar_quarter')) {
        obj['calendar_quarter'] = ApiClient.convertToType(data['calendar_quarter'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
      }
      if (data.hasOwnProperty('median')) {
        obj['median'] = ApiClient.convertToType(data['median'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('standard_deviation')) {
        obj['standard_deviation'] = ApiClient.convertToType(data['standard_deviation'], 'Number');
      }
      if (data.hasOwnProperty('percent_change')) {
        obj['percent_change'] = ApiClient.convertToType(data['percent_change'], 'Number');
      }
      if (data.hasOwnProperty('mean_7_days_ago')) {
        obj['mean_7_days_ago'] = ApiClient.convertToType(data['mean_7_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('mean_30_days_ago')) {
        obj['mean_30_days_ago'] = ApiClient.convertToType(data['mean_30_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('mean_60_days_ago')) {
        obj['mean_60_days_ago'] = ApiClient.convertToType(data['mean_60_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('mean_90_days_ago')) {
        obj['mean_90_days_ago'] = ApiClient.convertToType(data['mean_90_days_ago'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * The period end date
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The company’s fiscal year for the reported period
   * @member {Number} fiscal_year
   */
  exports.prototype['fiscal_year'] = undefined;
  /**
   * The company’s fiscal quarter for the reported period
   * @member {String} fiscal_quarter
   */
  exports.prototype['fiscal_quarter'] = undefined;
  /**
   * The closest calendar year for the company’s fiscal year
   * @member {Number} calendar_year
   */
  exports.prototype['calendar_year'] = undefined;
  /**
   * The closest calendar quarter for the company’s fiscal year
   * @member {String} calendar_quarter
   */
  exports.prototype['calendar_quarter'] = undefined;
  /**
   * The number of estimates for the period
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The earnings per share (EPS) mean estimate for the period
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The earnings per share (EPS) median estimate for the period
   * @member {Number} median
   */
  exports.prototype['median'] = undefined;
  /**
   * The earnings per share (EPS) high estimate for the period
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The earnings per share (EPS) low estimate for the period
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The earnings per share (EPS) standard deviation estimate for the period
   * @member {Number} standard_deviation
   */
  exports.prototype['standard_deviation'] = undefined;
  /**
   * The earnings per share (EPS) percent change in estimate for the period
   * @member {Number} percent_change
   */
  exports.prototype['percent_change'] = undefined;
  /**
   * The long term growth mean estimate - 7 Days Ago
   * @member {Number} mean_7_days_ago
   */
  exports.prototype['mean_7_days_ago'] = undefined;
  /**
   * The long term growth mean estimate - 30 Days Ago
   * @member {Number} mean_30_days_ago
   */
  exports.prototype['mean_30_days_ago'] = undefined;
  /**
   * The long term growth mean estimate - 60 Days Ago
   * @member {Number} mean_60_days_ago
   */
  exports.prototype['mean_60_days_ago'] = undefined;
  /**
   * The long term growth mean estimate - 90 Days Ago
   * @member {Number} mean_90_days_ago
   */
  exports.prototype['mean_90_days_ago'] = undefined;



  return exports;
}));


