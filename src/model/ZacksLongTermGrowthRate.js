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
    define(['ApiClient', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksLongTermGrowthRate = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The ZacksLongTermGrowthRate model module.
   * @module model/ZacksLongTermGrowthRate
   * @version 5.6.3
   */

  /**
   * Constructs a new <code>ZacksLongTermGrowthRate</code>.
   * Zacks long term growth rates from analysts for thousands of stocks.  Zacks storied research team aggregates and validates the estimates.  Each Growth Rate includes metadata about the corresponding Security.
   * @alias module:model/ZacksLongTermGrowthRate
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>ZacksLongTermGrowthRate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksLongTermGrowthRate} obj Optional instance to populate.
   * @return {module:model/ZacksLongTermGrowthRate} The populated <code>ZacksLongTermGrowthRate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
      }
      if (data.hasOwnProperty('median')) {
        obj['median'] = ApiClient.convertToType(data['median'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('std_dev')) {
        obj['std_dev'] = ApiClient.convertToType(data['std_dev'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward')) {
        obj['revisions_upward'] = ApiClient.convertToType(data['revisions_upward'], 'Number');
      }
      if (data.hasOwnProperty('revisions_downward')) {
        obj['revisions_downward'] = ApiClient.convertToType(data['revisions_downward'], 'Number');
      }
      if (data.hasOwnProperty('mean_7_days_ago')) {
        obj['mean_7_days_ago'] = ApiClient.convertToType(data['mean_7_days_ago'], 'String');
      }
      if (data.hasOwnProperty('mean_30_days_ago')) {
        obj['mean_30_days_ago'] = ApiClient.convertToType(data['mean_30_days_ago'], 'String');
      }
      if (data.hasOwnProperty('mean_60_days_ago')) {
        obj['mean_60_days_ago'] = ApiClient.convertToType(data['mean_60_days_ago'], 'String');
      }
      if (data.hasOwnProperty('mean_90_days_ago')) {
        obj['mean_90_days_ago'] = ApiClient.convertToType(data['mean_90_days_ago'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_7_days')) {
        obj['revisions_upward_last_7_days'] = ApiClient.convertToType(data['revisions_upward_last_7_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_7_days')) {
        obj['revisions_downward_last_7_days'] = ApiClient.convertToType(data['revisions_downward_last_7_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_30_days')) {
        obj['revisions_upward_last_30_days'] = ApiClient.convertToType(data['revisions_upward_last_30_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_30_days')) {
        obj['revisions_downward_last_30_days'] = ApiClient.convertToType(data['revisions_downward_last_30_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_60_days')) {
        obj['revisions_upward_last_60_days'] = ApiClient.convertToType(data['revisions_upward_last_60_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_60_days')) {
        obj['revisions_downward_last_60_days'] = ApiClient.convertToType(data['revisions_downward_last_60_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_90_days')) {
        obj['revisions_upward_last_90_days'] = ApiClient.convertToType(data['revisions_upward_last_90_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_90_days')) {
        obj['revisions_downward_last_90_days'] = ApiClient.convertToType(data['revisions_downward_last_90_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_120_days')) {
        obj['revisions_upward_last_120_days'] = ApiClient.convertToType(data['revisions_upward_last_120_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_120_days')) {
        obj['revisions_downward_last_120_days'] = ApiClient.convertToType(data['revisions_downward_last_120_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_upward_last_150_days')) {
        obj['revisions_upward_last_150_days'] = ApiClient.convertToType(data['revisions_upward_last_150_days'], 'String');
      }
      if (data.hasOwnProperty('revisions_downward_last_150_days')) {
        obj['revisions_downward_last_150_days'] = ApiClient.convertToType(data['revisions_downward_last_150_days'], 'String');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The mean long term growth estimate
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The median long term growth estimate
   * @member {Number} median
   */
  exports.prototype['median'] = undefined;
  /**
   * The number of long term growth estimates
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The high long term growth estimate
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The low long term growth estimate
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The standard deviation long term growth estimate
   * @member {String} std_dev
   */
  exports.prototype['std_dev'] = undefined;
  /**
   * The number of long term growth estimate revisions upward
   * @member {Number} revisions_upward
   */
  exports.prototype['revisions_upward'] = undefined;
  /**
   * The number of long term growth estimate revisions downward
   * @member {Number} revisions_downward
   */
  exports.prototype['revisions_downward'] = undefined;
  /**
   * The mean long term growth estimate 7 days ago
   * @member {String} mean_7_days_ago
   */
  exports.prototype['mean_7_days_ago'] = undefined;
  /**
   * The mean long term growth estimate 30 days ago
   * @member {String} mean_30_days_ago
   */
  exports.prototype['mean_30_days_ago'] = undefined;
  /**
   * The mean long term growth estimate 60 days ago
   * @member {String} mean_60_days_ago
   */
  exports.prototype['mean_60_days_ago'] = undefined;
  /**
   * The mean long term growth estimate 90 days ago
   * @member {String} mean_90_days_ago
   */
  exports.prototype['mean_90_days_ago'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 7 days
   * @member {String} revisions_upward_last_7_days
   */
  exports.prototype['revisions_upward_last_7_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 7 days
   * @member {String} revisions_downward_last_7_days
   */
  exports.prototype['revisions_downward_last_7_days'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 30 days
   * @member {String} revisions_upward_last_30_days
   */
  exports.prototype['revisions_upward_last_30_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 30 days
   * @member {String} revisions_downward_last_30_days
   */
  exports.prototype['revisions_downward_last_30_days'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 60 days
   * @member {String} revisions_upward_last_60_days
   */
  exports.prototype['revisions_upward_last_60_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 60 days
   * @member {String} revisions_downward_last_60_days
   */
  exports.prototype['revisions_downward_last_60_days'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 90 days
   * @member {String} revisions_upward_last_90_days
   */
  exports.prototype['revisions_upward_last_90_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 90 days
   * @member {String} revisions_downward_last_90_days
   */
  exports.prototype['revisions_downward_last_90_days'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 120 days
   * @member {String} revisions_upward_last_120_days
   */
  exports.prototype['revisions_upward_last_120_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 120 days
   * @member {String} revisions_downward_last_120_days
   */
  exports.prototype['revisions_downward_last_120_days'] = undefined;
  /**
   * The number of long term growth estimate revisions upward in the last 150 days
   * @member {String} revisions_upward_last_150_days
   */
  exports.prototype['revisions_upward_last_150_days'] = undefined;
  /**
   * The number of long term growth estimate revisions downward in the last 150 days
   * @member {String} revisions_downward_last_150_days
   */
  exports.prototype['revisions_downward_last_150_days'] = undefined;
  /**
   * The Security of the Zacks long term growth estimate
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


