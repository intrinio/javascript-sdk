/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.66.2
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
    root.intrinioSDK.ZacksSalesEstimate = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The ZacksSalesEstimate model module.
   * @module model/ZacksSalesEstimate
   * @version 6.30.0
   */

  /**
   * Constructs a new <code>ZacksSalesEstimate</code>.
   * Zacks consensus sales estimates from analysts for thousands of stocks.  Zacks storied research team aggregates and validates the estimates.  Each sales Estimate includes metadata about the corresponding Company.
   * @alias module:model/ZacksSalesEstimate
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>ZacksSalesEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksSalesEstimate} obj Optional instance to populate.
   * @return {module:model/ZacksSalesEstimate} The populated <code>ZacksSalesEstimate</code> instance.
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
      if (data.hasOwnProperty('fiscal_period')) {
        obj['fiscal_period'] = ApiClient.convertToType(data['fiscal_period'], 'String');
      }
      if (data.hasOwnProperty('calendar_year')) {
        obj['calendar_year'] = ApiClient.convertToType(data['calendar_year'], 'Number');
      }
      if (data.hasOwnProperty('calendar_period')) {
        obj['calendar_period'] = ApiClient.convertToType(data['calendar_period'], 'String');
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
      if (data.hasOwnProperty('analyst_revisions_percent_change_1w')) {
        obj['analyst_revisions_percent_change_1w'] = ApiClient.convertToType(data['analyst_revisions_percent_change_1w'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_up_1w')) {
        obj['analyst_revisions_up_1w'] = ApiClient.convertToType(data['analyst_revisions_up_1w'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_down_1w')) {
        obj['analyst_revisions_down_1w'] = ApiClient.convertToType(data['analyst_revisions_down_1w'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_percent_change_1m')) {
        obj['analyst_revisions_percent_change_1m'] = ApiClient.convertToType(data['analyst_revisions_percent_change_1m'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_up_1m')) {
        obj['analyst_revisions_up_1m'] = ApiClient.convertToType(data['analyst_revisions_up_1m'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_down_1m')) {
        obj['analyst_revisions_down_1m'] = ApiClient.convertToType(data['analyst_revisions_down_1m'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_percent_change_3m')) {
        obj['analyst_revisions_percent_change_3m'] = ApiClient.convertToType(data['analyst_revisions_percent_change_3m'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_up_3m')) {
        obj['analyst_revisions_up_3m'] = ApiClient.convertToType(data['analyst_revisions_up_3m'], 'Number');
      }
      if (data.hasOwnProperty('analyst_revisions_down_3m')) {
        obj['analyst_revisions_down_3m'] = ApiClient.convertToType(data['analyst_revisions_down_3m'], 'Number');
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
   * @member {String} fiscal_period
   */
  exports.prototype['fiscal_period'] = undefined;
  /**
   * The closest calendar year for the company’s fiscal year
   * @member {Number} calendar_year
   */
  exports.prototype['calendar_year'] = undefined;
  /**
   * The closest calendar quarter for the company’s fiscal year
   * @member {String} calendar_period
   */
  exports.prototype['calendar_period'] = undefined;
  /**
   * The number of estimates for the period
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The sales estimate mean estimate for the period
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The sales estimate median estimate for the period
   * @member {Number} median
   */
  exports.prototype['median'] = undefined;
  /**
   * The sales estimate high estimate for the period
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The sales estimate low estimate for the period
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The sales estimate standard deviation estimate for the period
   * @member {Number} standard_deviation
   */
  exports.prototype['standard_deviation'] = undefined;
  /**
   * The analyst revisions percent change in estimate for the period of 1 week.
   * @member {Number} analyst_revisions_percent_change_1w
   */
  exports.prototype['analyst_revisions_percent_change_1w'] = undefined;
  /**
   * The analyst revisions going up for the period of 1 week.
   * @member {Number} analyst_revisions_up_1w
   */
  exports.prototype['analyst_revisions_up_1w'] = undefined;
  /**
   * The analyst revisions going down for the period of 1 week.
   * @member {Number} analyst_revisions_down_1w
   */
  exports.prototype['analyst_revisions_down_1w'] = undefined;
  /**
   * The analyst revisions percent change in estimate for the period of 1 month.
   * @member {Number} analyst_revisions_percent_change_1m
   */
  exports.prototype['analyst_revisions_percent_change_1m'] = undefined;
  /**
   * The analyst revisions going up for the period of 1 month.
   * @member {Number} analyst_revisions_up_1m
   */
  exports.prototype['analyst_revisions_up_1m'] = undefined;
  /**
   * The analyst revisions going down for the period of 1 month.
   * @member {Number} analyst_revisions_down_1m
   */
  exports.prototype['analyst_revisions_down_1m'] = undefined;
  /**
   * The analyst revisions percent change in estimate for the period of 3 months.
   * @member {Number} analyst_revisions_percent_change_3m
   */
  exports.prototype['analyst_revisions_percent_change_3m'] = undefined;
  /**
   * The analyst revisions going up for the period of 3 months.
   * @member {Number} analyst_revisions_up_3m
   */
  exports.prototype['analyst_revisions_up_3m'] = undefined;
  /**
   * The analyst revisions going down for the period of 3 months.
   * @member {Number} analyst_revisions_down_3m
   */
  exports.prototype['analyst_revisions_down_3m'] = undefined;



  return exports;
}));


