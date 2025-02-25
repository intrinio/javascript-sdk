/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.80.1
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
    root.intrinioSDK.CompanyDailyMetric = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The CompanyDailyMetric model module.
   * @module model/CompanyDailyMetric
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>CompanyDailyMetric</code>.
   * A news article about a company
   * @alias module:model/CompanyDailyMetric
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>CompanyDailyMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanyDailyMetric} obj Optional instance to populate.
   * @return {module:model/CompanyDailyMetric} The populated <code>CompanyDailyMetric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('enterprise_value')) {
        obj['enterprise_value'] = ApiClient.convertToType(data['enterprise_value'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_ebit')) {
        obj['ev_to_ebit'] = ApiClient.convertToType(data['ev_to_ebit'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_ebitda')) {
        obj['ev_to_ebitda'] = ApiClient.convertToType(data['ev_to_ebitda'], 'Number');
      }
      if (data.hasOwnProperty('market_cap')) {
        obj['market_cap'] = ApiClient.convertToType(data['market_cap'], 'Number');
      }
      if (data.hasOwnProperty('price_to_book')) {
        obj['price_to_book'] = ApiClient.convertToType(data['price_to_book'], 'Number');
      }
      if (data.hasOwnProperty('price_to_earnings')) {
        obj['price_to_earnings'] = ApiClient.convertToType(data['price_to_earnings'], 'Number');
      }
      if (data.hasOwnProperty('price_to_revenue')) {
        obj['price_to_revenue'] = ApiClient.convertToType(data['price_to_revenue'], 'Number');
      }
      if (data.hasOwnProperty('price_to_tangible_book')) {
        obj['price_to_tangible_book'] = ApiClient.convertToType(data['price_to_tangible_book'], 'Number');
      }
      if (data.hasOwnProperty('dividend_yield')) {
        obj['dividend_yield'] = ApiClient.convertToType(data['dividend_yield'], 'Number');
      }
      if (data.hasOwnProperty('earnings_yield')) {
        obj['earnings_yield'] = ApiClient.convertToType(data['earnings_yield'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_invested_capital')) {
        obj['ev_to_invested_capital'] = ApiClient.convertToType(data['ev_to_invested_capital'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_revenue')) {
        obj['ev_to_revenue'] = ApiClient.convertToType(data['ev_to_revenue'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_nopat')) {
        obj['ev_to_nopat'] = ApiClient.convertToType(data['ev_to_nopat'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_ocf')) {
        obj['ev_to_ocf'] = ApiClient.convertToType(data['ev_to_ocf'], 'Number');
      }
      if (data.hasOwnProperty('ev_to_fcff')) {
        obj['ev_to_fcff'] = ApiClient.convertToType(data['ev_to_fcff'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * The date of the metric
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The enterprise value.
   * @member {Number} enterprise_value
   */
  exports.prototype['enterprise_value'] = undefined;
  /**
   * The enterprise value to earnings before interest and taxes ratio.
   * @member {Number} ev_to_ebit
   */
  exports.prototype['ev_to_ebit'] = undefined;
  /**
   * The enterprise value to earnings before interest, taxes, depreciation, and amoritization ratio.
   * @member {Number} ev_to_ebitda
   */
  exports.prototype['ev_to_ebitda'] = undefined;
  /**
   * The market cap.
   * @member {Number} market_cap
   */
  exports.prototype['market_cap'] = undefined;
  /**
   * The price to book ratio.
   * @member {Number} price_to_book
   */
  exports.prototype['price_to_book'] = undefined;
  /**
   * The price to earnings ratio.
   * @member {Number} price_to_earnings
   */
  exports.prototype['price_to_earnings'] = undefined;
  /**
   * The price to revenue ratio.
   * @member {Number} price_to_revenue
   */
  exports.prototype['price_to_revenue'] = undefined;
  /**
   * The price to tangible book ratio.
   * @member {Number} price_to_tangible_book
   */
  exports.prototype['price_to_tangible_book'] = undefined;
  /**
   * The dividend yield.
   * @member {Number} dividend_yield
   */
  exports.prototype['dividend_yield'] = undefined;
  /**
   * The earnings yield.
   * @member {Number} earnings_yield
   */
  exports.prototype['earnings_yield'] = undefined;
  /**
   * The enterprise value to invested capital ratio.
   * @member {Number} ev_to_invested_capital
   */
  exports.prototype['ev_to_invested_capital'] = undefined;
  /**
   * The enterprise value to revenue ratio.
   * @member {Number} ev_to_revenue
   */
  exports.prototype['ev_to_revenue'] = undefined;
  /**
   * The enterprise value to normalized operating profit after tax ratio.
   * @member {Number} ev_to_nopat
   */
  exports.prototype['ev_to_nopat'] = undefined;
  /**
   * The enterprise value to operating cash flow ratio.
   * @member {Number} ev_to_ocf
   */
  exports.prototype['ev_to_ocf'] = undefined;
  /**
   * The enterprise value to free cash flow to the firm ratio.
   * @member {Number} ev_to_fcff
   */
  exports.prototype['ev_to_fcff'] = undefined;
  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


