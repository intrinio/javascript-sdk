/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.53.1
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
    root.intrinioSDK.ZacksEPSGrowthRate = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The ZacksEPSGrowthRate model module.
   * @module model/ZacksEPSGrowthRate
   * @version 6.27.0
   */

  /**
   * Constructs a new <code>ZacksEPSGrowthRate</code>.
   * Zacks earnings-per-share (EPS) growth rates from analysts for thousands of stocks.  Zacks storied research team aggregates and validates the estimates.  Each Growth Rate includes metadata about the corresponding Company.
   * @alias module:model/ZacksEPSGrowthRate
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>ZacksEPSGrowthRate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksEPSGrowthRate} obj Optional instance to populate.
   * @return {module:model/ZacksEPSGrowthRate} The populated <code>ZacksEPSGrowthRate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('industry_group_number')) {
        obj['industry_group_number'] = ApiClient.convertToType(data['industry_group_number'], 'String');
      }
      if (data.hasOwnProperty('industry_group_name')) {
        obj['industry_group_name'] = ApiClient.convertToType(data['industry_group_name'], 'String');
      }
      if (data.hasOwnProperty('fiscal_year_0')) {
        obj['fiscal_year_0'] = ApiClient.convertToType(data['fiscal_year_0'], 'Number');
      }
      if (data.hasOwnProperty('fiscal_year_1')) {
        obj['fiscal_year_1'] = ApiClient.convertToType(data['fiscal_year_1'], 'Number');
      }
      if (data.hasOwnProperty('fiscal_year_2')) {
        obj['fiscal_year_2'] = ApiClient.convertToType(data['fiscal_year_2'], 'Number');
      }
      if (data.hasOwnProperty('company_last_5_year_actual')) {
        obj['company_last_5_year_actual'] = ApiClient.convertToType(data['company_last_5_year_actual'], 'Number');
      }
      if (data.hasOwnProperty('company_fiscal_year_1_vs_fiscal_year_0')) {
        obj['company_fiscal_year_1_vs_fiscal_year_0'] = ApiClient.convertToType(data['company_fiscal_year_1_vs_fiscal_year_0'], 'Number');
      }
      if (data.hasOwnProperty('company_fiscal_year_2_vs_fiscal_year_1')) {
        obj['company_fiscal_year_2_vs_fiscal_year_1'] = ApiClient.convertToType(data['company_fiscal_year_2_vs_fiscal_year_1'], 'Number');
      }
      if (data.hasOwnProperty('company_long_term_growth_mean')) {
        obj['company_long_term_growth_mean'] = ApiClient.convertToType(data['company_long_term_growth_mean'], 'Number');
      }
      if (data.hasOwnProperty('company_fiscal_year_1_forward_price_to_earnings')) {
        obj['company_fiscal_year_1_forward_price_to_earnings'] = ApiClient.convertToType(data['company_fiscal_year_1_forward_price_to_earnings'], 'Number');
      }
      if (data.hasOwnProperty('industry_last_5_year_actual')) {
        obj['industry_last_5_year_actual'] = ApiClient.convertToType(data['industry_last_5_year_actual'], 'Number');
      }
      if (data.hasOwnProperty('industry_fiscal_year_1_vs_fiscal_year_0')) {
        obj['industry_fiscal_year_1_vs_fiscal_year_0'] = ApiClient.convertToType(data['industry_fiscal_year_1_vs_fiscal_year_0'], 'Number');
      }
      if (data.hasOwnProperty('industry_fiscal_year_2_vs_fiscal_year_1')) {
        obj['industry_fiscal_year_2_vs_fiscal_year_1'] = ApiClient.convertToType(data['industry_fiscal_year_2_vs_fiscal_year_1'], 'Number');
      }
      if (data.hasOwnProperty('industry_long_term_growth_mean')) {
        obj['industry_long_term_growth_mean'] = ApiClient.convertToType(data['industry_long_term_growth_mean'], 'Number');
      }
      if (data.hasOwnProperty('industry_fiscal_year_1_forward_price_to_earnings')) {
        obj['industry_fiscal_year_1_forward_price_to_earnings'] = ApiClient.convertToType(data['industry_fiscal_year_1_forward_price_to_earnings'], 'Number');
      }
      if (data.hasOwnProperty('sp500_last_5_year_actual')) {
        obj['sp500_last_5_year_actual'] = ApiClient.convertToType(data['sp500_last_5_year_actual'], 'Number');
      }
      if (data.hasOwnProperty('sp500_fiscal_year_1_vs_fiscal_year_0')) {
        obj['sp500_fiscal_year_1_vs_fiscal_year_0'] = ApiClient.convertToType(data['sp500_fiscal_year_1_vs_fiscal_year_0'], 'Number');
      }
      if (data.hasOwnProperty('sp500_fiscal_year_2_vs_fiscal_year_1')) {
        obj['sp500_fiscal_year_2_vs_fiscal_year_1'] = ApiClient.convertToType(data['sp500_fiscal_year_2_vs_fiscal_year_1'], 'Number');
      }
      if (data.hasOwnProperty('sp500_long_term_growth')) {
        obj['sp500_long_term_growth'] = ApiClient.convertToType(data['sp500_long_term_growth'], 'Number');
      }
      if (data.hasOwnProperty('sp500_fiscal_year_1_price_to_earnings')) {
        obj['sp500_fiscal_year_1_price_to_earnings'] = ApiClient.convertToType(data['sp500_fiscal_year_1_price_to_earnings'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * The Zacks common exchange ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company name
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * The Zacks industry group number
   * @member {String} industry_group_number
   */
  exports.prototype['industry_group_number'] = undefined;
  /**
   * The Zacks industry group name
   * @member {String} industry_group_name
   */
  exports.prototype['industry_group_name'] = undefined;
  /**
   * The current fiscal year
   * @member {Number} fiscal_year_0
   */
  exports.prototype['fiscal_year_0'] = undefined;
  /**
   * The next fiscal year
   * @member {Number} fiscal_year_1
   */
  exports.prototype['fiscal_year_1'] = undefined;
  /**
   * The fiscal year after the next fiscal year
   * @member {Number} fiscal_year_2
   */
  exports.prototype['fiscal_year_2'] = undefined;
  /**
   * The company's last 5 year actual percentage earnings-per-share (EPS) growth rate
   * @member {Number} company_last_5_year_actual
   */
  exports.prototype['company_last_5_year_actual'] = undefined;
  /**
   * The company's current fiscal year / last fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} company_fiscal_year_1_vs_fiscal_year_0
   */
  exports.prototype['company_fiscal_year_1_vs_fiscal_year_0'] = undefined;
  /**
   * The company's next fiscal year / current fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} company_fiscal_year_2_vs_fiscal_year_1
   */
  exports.prototype['company_fiscal_year_2_vs_fiscal_year_1'] = undefined;
  /**
   * The company's long term growth rate mean estimate
   * @member {Number} company_long_term_growth_mean
   */
  exports.prototype['company_long_term_growth_mean'] = undefined;
  /**
   * The company's forward (current fiscal year) price-to-earnings (P/E) ratio
   * @member {Number} company_fiscal_year_1_forward_price_to_earnings
   */
  exports.prototype['company_fiscal_year_1_forward_price_to_earnings'] = undefined;
  /**
   * The industry's last 5 year actual percentage earnings-per-share (EPS) growth rate
   * @member {Number} industry_last_5_year_actual
   */
  exports.prototype['industry_last_5_year_actual'] = undefined;
  /**
   * The industry's current fiscal year / last fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} industry_fiscal_year_1_vs_fiscal_year_0
   */
  exports.prototype['industry_fiscal_year_1_vs_fiscal_year_0'] = undefined;
  /**
   * The industry's next fiscal year / current fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} industry_fiscal_year_2_vs_fiscal_year_1
   */
  exports.prototype['industry_fiscal_year_2_vs_fiscal_year_1'] = undefined;
  /**
   * The industry's long term growth rate mean estimate
   * @member {Number} industry_long_term_growth_mean
   */
  exports.prototype['industry_long_term_growth_mean'] = undefined;
  /**
   * The industry's forward (current fiscal year) price-to-earnings (P/E) ratio
   * @member {Number} industry_fiscal_year_1_forward_price_to_earnings
   */
  exports.prototype['industry_fiscal_year_1_forward_price_to_earnings'] = undefined;
  /**
   * The S&P 500's last 5 year actual percentage earnings-per-share (EPS) growth rate
   * @member {Number} sp500_last_5_year_actual
   */
  exports.prototype['sp500_last_5_year_actual'] = undefined;
  /**
   * The S&P 500's current fiscal year / last fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} sp500_fiscal_year_1_vs_fiscal_year_0
   */
  exports.prototype['sp500_fiscal_year_1_vs_fiscal_year_0'] = undefined;
  /**
   * The S&P 500's next fiscal year / current fiscal year percentage earnings-per-share (EPS) growth rate
   * @member {Number} sp500_fiscal_year_2_vs_fiscal_year_1
   */
  exports.prototype['sp500_fiscal_year_2_vs_fiscal_year_1'] = undefined;
  /**
   * The S&P 500's long term growth rate mean estimate
   * @member {Number} sp500_long_term_growth
   */
  exports.prototype['sp500_long_term_growth'] = undefined;
  /**
   * The S&P 500's forward (current fiscal year) price-to-earnings (P/E) ratio
   * @member {Number} sp500_fiscal_year_1_price_to_earnings
   */
  exports.prototype['sp500_fiscal_year_1_price_to_earnings'] = undefined;
  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


