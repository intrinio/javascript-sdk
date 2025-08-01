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
    root.intrinioSDK.ZacksSalesSurprise = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksSalesSurprise model module.
   * @module model/ZacksSalesSurprise
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ZacksSalesSurprise</code>.
   * Zacks Sales Surprises are pre-earnings release consensus sales estimates from analysts for thousands of stocks. Zack’s storied research team aggregates and validates the estimates and compares these estimates to non-GAAP sales reported by the company, providing the amount and percent surprise on release. Each Sales Surprise includes metadata about the corresponding Security.
   * @alias module:model/ZacksSalesSurprise
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>ZacksSalesSurprise</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksSalesSurprise} obj Optional instance to populate.
   * @return {module:model/ZacksSalesSurprise} The populated <code>ZacksSalesSurprise</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
      if (data.hasOwnProperty('actual_reported_date')) {
        obj['actual_reported_date'] = ApiClient.convertToType(data['actual_reported_date'], 'Date');
      }
      if (data.hasOwnProperty('actual_reported_time')) {
        obj['actual_reported_time'] = ApiClient.convertToType(data['actual_reported_time'], 'String');
      }
      if (data.hasOwnProperty('actual_reported_code')) {
        obj['actual_reported_code'] = ApiClient.convertToType(data['actual_reported_code'], 'String');
      }
      if (data.hasOwnProperty('actual_reported_desc')) {
        obj['actual_reported_desc'] = ApiClient.convertToType(data['actual_reported_desc'], 'String');
      }
      if (data.hasOwnProperty('last_rev_date')) {
        obj['last_rev_date'] = ApiClient.convertToType(data['last_rev_date'], 'Date');
      }
      if (data.hasOwnProperty('sales_actual')) {
        obj['sales_actual'] = ApiClient.convertToType(data['sales_actual'], 'Number');
      }
      if (data.hasOwnProperty('sales_actual_zacks_adj')) {
        obj['sales_actual_zacks_adj'] = ApiClient.convertToType(data['sales_actual_zacks_adj'], 'Number');
      }
      if (data.hasOwnProperty('sales_actual_gaap')) {
        obj['sales_actual_gaap'] = ApiClient.convertToType(data['sales_actual_gaap'], 'Number');
      }
      if (data.hasOwnProperty('sales_mean_estimate')) {
        obj['sales_mean_estimate'] = ApiClient.convertToType(data['sales_mean_estimate'], 'Number');
      }
      if (data.hasOwnProperty('sales_amount_diff')) {
        obj['sales_amount_diff'] = ApiClient.convertToType(data['sales_amount_diff'], 'Number');
      }
      if (data.hasOwnProperty('sales_percent_diff')) {
        obj['sales_percent_diff'] = ApiClient.convertToType(data['sales_percent_diff'], 'Number');
      }
      if (data.hasOwnProperty('sales_std_dev_estimate')) {
        obj['sales_std_dev_estimate'] = ApiClient.convertToType(data['sales_std_dev_estimate'], 'Number');
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
   * The actual report date for the earnings release
   * @member {Date} actual_reported_date
   */
  exports.prototype['actual_reported_date'] = undefined;
  /**
   * The actual report time for the earnings release
   * @member {String} actual_reported_time
   */
  exports.prototype['actual_reported_time'] = undefined;
  /**
   * The code cooresponding to the earnings release  BTO = BEFORE THE OPEN | DTM = DURING THE MARKET | AMC = AFTER MARKET CLOSE
   * @member {String} actual_reported_code
   */
  exports.prototype['actual_reported_code'] = undefined;
  /**
   * The description for the type of earnings release
   * @member {String} actual_reported_desc
   */
  exports.prototype['actual_reported_desc'] = undefined;
  /**
   * The last revision date for the analyst estimates
   * @member {Date} last_rev_date
   */
  exports.prototype['last_rev_date'] = undefined;
  /**
   * The actual Non-GAAP sales figure released by the company, interpreted by Zacks.
   * @member {Number} sales_actual
   */
  exports.prototype['sales_actual'] = undefined;
  /**
   * The adjustments Zacks made to get to Non-GAAP sales to reconcile with GAAP sales.
   * @member {Number} sales_actual_zacks_adj
   */
  exports.prototype['sales_actual_zacks_adj'] = undefined;
  /**
   * The actual GAAP sales figured released by the company
   * @member {Number} sales_actual_gaap
   */
  exports.prototype['sales_actual_gaap'] = undefined;
  /**
   * The pre-earnings release mean sales estimate for the company sales_count_estimate; the pre-earnings release number of estimates by analysts
   * @member {Number} sales_mean_estimate
   */
  exports.prototype['sales_mean_estimate'] = undefined;
  /**
   * The sales surprise amount difference
   * @member {Number} sales_amount_diff
   */
  exports.prototype['sales_amount_diff'] = undefined;
  /**
   * The sales surprise percent difference
   * @member {Number} sales_percent_diff
   */
  exports.prototype['sales_percent_diff'] = undefined;
  /**
   * The pre-earnings release standard deviation of sales estimates
   * @member {Number} sales_std_dev_estimate
   */
  exports.prototype['sales_std_dev_estimate'] = undefined;



  return exports;
}));


