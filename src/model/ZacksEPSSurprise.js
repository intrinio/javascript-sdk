/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.70.0
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
    root.intrinioSDK.ZacksEPSSurprise = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The ZacksEPSSurprise model module.
   * @module model/ZacksEPSSurprise
   * @version 6.31.0
   */

  /**
   * Constructs a new <code>ZacksEPSSurprise</code>.
   * Zacks EPS Surprises are pre-earnings release consensus EPS estimates from analysts for thousands of stocks. Zack’s storied research team aggregates and validates the estimates and compares these estimates to non-GAAP EPS reported by the company, providing the amount and percent surprise on release. Each EPS Surprise includes metadata about the corresponding Security.
   * @alias module:model/ZacksEPSSurprise
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>ZacksEPSSurprise</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksEPSSurprise} obj Optional instance to populate.
   * @return {module:model/ZacksEPSSurprise} The populated <code>ZacksEPSSurprise</code> instance.
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
      if (data.hasOwnProperty('eps_actual')) {
        obj['eps_actual'] = ApiClient.convertToType(data['eps_actual'], 'Number');
      }
      if (data.hasOwnProperty('eps_actual_zacks_adj')) {
        obj['eps_actual_zacks_adj'] = ApiClient.convertToType(data['eps_actual_zacks_adj'], 'Number');
      }
      if (data.hasOwnProperty('eps_mean_estimate')) {
        obj['eps_mean_estimate'] = ApiClient.convertToType(data['eps_mean_estimate'], 'Number');
      }
      if (data.hasOwnProperty('eps_amount_diff')) {
        obj['eps_amount_diff'] = ApiClient.convertToType(data['eps_amount_diff'], 'Number');
      }
      if (data.hasOwnProperty('eps_percent_diff')) {
        obj['eps_percent_diff'] = ApiClient.convertToType(data['eps_percent_diff'], 'Number');
      }
      if (data.hasOwnProperty('eps_count_estimate')) {
        obj['eps_count_estimate'] = ApiClient.convertToType(data['eps_count_estimate'], 'Number');
      }
      if (data.hasOwnProperty('eps_std_dev_estimate')) {
        obj['eps_std_dev_estimate'] = ApiClient.convertToType(data['eps_std_dev_estimate'], 'Number');
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
   * The actual Non-GAAP EPS figure released by the company, interpreted by Zacks.
   * @member {Number} eps_actual
   */
  exports.prototype['eps_actual'] = undefined;
  /**
   * The adjustments Zacks made to get to Non-GAAP EPS to reconcile with GAAP EPS.
   * @member {Number} eps_actual_zacks_adj
   */
  exports.prototype['eps_actual_zacks_adj'] = undefined;
  /**
   * The pre-earnings release mean EPS estimate for the company
   * @member {Number} eps_mean_estimate
   */
  exports.prototype['eps_mean_estimate'] = undefined;
  /**
   * The EPS surprise amount difference
   * @member {Number} eps_amount_diff
   */
  exports.prototype['eps_amount_diff'] = undefined;
  /**
   * The EPS surprise percent difference
   * @member {Number} eps_percent_diff
   */
  exports.prototype['eps_percent_diff'] = undefined;
  /**
   * The pre-earnings release number of estimates by analysts
   * @member {Number} eps_count_estimate
   */
  exports.prototype['eps_count_estimate'] = undefined;
  /**
   * The pre-earnings release standard deviation of EPS estimates
   * @member {Number} eps_std_dev_estimate
   */
  exports.prototype['eps_std_dev_estimate'] = undefined;
  /**
   * The Security of the Zacks EPS Surprise
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


