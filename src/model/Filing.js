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
    define(['ApiClient', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.Filing = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The Filing model module.
   * @module model/Filing
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>Filing</code>.
   * A filing submitted to the SEC by a company
   * @alias module:model/Filing
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>Filing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filing} obj Optional instance to populate.
   * @return {module:model/Filing} The populated <code>Filing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
      if (data.hasOwnProperty('accepted_date')) {
        obj['accepted_date'] = ApiClient.convertToType(data['accepted_date'], 'Date');
      }
      if (data.hasOwnProperty('period_end_date')) {
        obj['period_end_date'] = ApiClient.convertToType(data['period_end_date'], 'Date');
      }
      if (data.hasOwnProperty('report_type')) {
        obj['report_type'] = ApiClient.convertToType(data['report_type'], 'String');
      }
      if (data.hasOwnProperty('sec_unique_id')) {
        obj['sec_unique_id'] = ApiClient.convertToType(data['sec_unique_id'], 'String');
      }
      if (data.hasOwnProperty('filing_url')) {
        obj['filing_url'] = ApiClient.convertToType(data['filing_url'], 'String');
      }
      if (data.hasOwnProperty('report_url')) {
        obj['report_url'] = ApiClient.convertToType(data['report_url'], 'String');
      }
      if (data.hasOwnProperty('instance_url')) {
        obj['instance_url'] = ApiClient.convertToType(data['instance_url'], 'String');
      }
      if (data.hasOwnProperty('industry_category')) {
        obj['industry_category'] = ApiClient.convertToType(data['industry_category'], 'String');
      }
      if (data.hasOwnProperty('industry_group')) {
        obj['industry_group'] = ApiClient.convertToType(data['industry_group'], 'String');
      }
      if (data.hasOwnProperty('word_count')) {
        obj['word_count'] = ApiClient.convertToType(data['word_count'], 'Number');
      }
      if (data.hasOwnProperty('earnings_disclosed_at')) {
        obj['earnings_disclosed_at'] = ApiClient.convertToType(data['earnings_disclosed_at'], 'Date');
      }
      if (data.hasOwnProperty('earnings_disclosed_8k_id')) {
        obj['earnings_disclosed_8k_id'] = ApiClient.convertToType(data['earnings_disclosed_8k_id'], 'String');
      }
      if (data.hasOwnProperty('earnings_8k_url')) {
        obj['earnings_8k_url'] = ApiClient.convertToType(data['earnings_8k_url'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the Filing
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date when the filing was submitted to the SEC by the company
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;
  /**
   * The date and time when the filing was accepted by SEC
   * @member {Date} accepted_date
   */
  exports.prototype['accepted_date'] = undefined;
  /**
   * The ending date of the fiscal period for the filing
   * @member {Date} period_end_date
   */
  exports.prototype['period_end_date'] = undefined;
  /**
   * The filing <a href=\"https://docs.intrinio.com/documentation/sec_filing_report_types\" target=\"_blank\">report type</a>
   * @member {String} report_type
   */
  exports.prototype['report_type'] = undefined;
  /**
   * A unique identifier for the filing provided by the SEC
   * @member {String} sec_unique_id
   */
  exports.prototype['sec_unique_id'] = undefined;
  /**
   * The URL to the filing page on the SEC site
   * @member {String} filing_url
   */
  exports.prototype['filing_url'] = undefined;
  /**
   * The URL to the actual report on the SEC site
   * @member {String} report_url
   */
  exports.prototype['report_url'] = undefined;
  /**
   * The URL for the XBRL filing for the report
   * @member {String} instance_url
   */
  exports.prototype['instance_url'] = undefined;
  /**
   * The company's operating industry category
   * @member {String} industry_category
   */
  exports.prototype['industry_category'] = undefined;
  /**
   * The company's operating industry group
   * @member {String} industry_group
   */
  exports.prototype['industry_group'] = undefined;
  /**
   * The number of words in the filing
   * @member {Number} word_count
   */
  exports.prototype['word_count'] = undefined;
  /**
   * The date and time when the earnings information was first disclosed via 8-K filing
   * @member {Date} earnings_disclosed_at
   */
  exports.prototype['earnings_disclosed_at'] = undefined;
  /**
   * The Intrinio ID of the 8-K filing where earnings were first disclosed
   * @member {String} earnings_disclosed_8k_id
   */
  exports.prototype['earnings_disclosed_8k_id'] = undefined;
  /**
   * The URL to the 8-K filing page on the SEC site where earnings were first disclosed
   * @member {String} earnings_8k_url
   */
  exports.prototype['earnings_8k_url'] = undefined;
  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


