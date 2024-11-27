/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.76.3
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
    define(['ApiClient', 'model/ETFSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ETFSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ETFAnalytics = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ETFSummary);
  }
}(this, function(ApiClient, ETFSummary) {
  'use strict';




  /**
   * The ETFAnalytics model module.
   * @module model/ETFAnalytics
   * @version 6.34.0
   */

  /**
   * Constructs a new <code>ETFAnalytics</code>.
   * Provides analytics for the Exchange Traded Fund (ETF) including volume, market cap, 52 week high, and 52 week low
   * @alias module:model/ETFAnalytics
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ETFAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ETFAnalytics} obj Optional instance to populate.
   * @return {module:model/ETFAnalytics} The populated <code>ETFAnalytics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('fifty_two_week_high')) {
        obj['fifty_two_week_high'] = ApiClient.convertToType(data['fifty_two_week_high'], 'Number');
      }
      if (data.hasOwnProperty('fifty_two_week_low')) {
        obj['fifty_two_week_low'] = ApiClient.convertToType(data['fifty_two_week_low'], 'Number');
      }
      if (data.hasOwnProperty('volume_traded')) {
        obj['volume_traded'] = ApiClient.convertToType(data['volume_traded'], 'Number');
      }
      if (data.hasOwnProperty('average_daily_volume_one_month')) {
        obj['average_daily_volume_one_month'] = ApiClient.convertToType(data['average_daily_volume_one_month'], 'Number');
      }
      if (data.hasOwnProperty('average_daily_volume_three_month')) {
        obj['average_daily_volume_three_month'] = ApiClient.convertToType(data['average_daily_volume_three_month'], 'Number');
      }
      if (data.hasOwnProperty('average_daily_volume_six_month')) {
        obj['average_daily_volume_six_month'] = ApiClient.convertToType(data['average_daily_volume_six_month'], 'Number');
      }
      if (data.hasOwnProperty('market_cap')) {
        obj['market_cap'] = ApiClient.convertToType(data['market_cap'], 'Number');
      }
      if (data.hasOwnProperty('shares_outstanding')) {
        obj['shares_outstanding'] = ApiClient.convertToType(data['shares_outstanding'], 'Number');
      }
      if (data.hasOwnProperty('etf')) {
        obj['etf'] = ETFSummary.constructFromObject(data['etf']);
      }
    }
    return obj;
  }

  /**
   * The calendar date these analytics represent.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Highest trading price for the security in the preceding 52 weeks
   * @member {Number} fifty_two_week_high
   */
  exports.prototype['fifty_two_week_high'] = undefined;
  /**
   * Lowest trading price for the security in the preceding 52 weeks
   * @member {Number} fifty_two_week_low
   */
  exports.prototype['fifty_two_week_low'] = undefined;
  /**
   * The total quantity of shares traded on the latest trading day
   * @member {Number} volume_traded
   */
  exports.prototype['volume_traded'] = undefined;
  /**
   * The average quantity of shares traded per day for the last month
   * @member {Number} average_daily_volume_one_month
   */
  exports.prototype['average_daily_volume_one_month'] = undefined;
  /**
   * The average quantity of shares traded per day for the last three months
   * @member {Number} average_daily_volume_three_month
   */
  exports.prototype['average_daily_volume_three_month'] = undefined;
  /**
   * The average quantity of shares traded per day for the last six months
   * @member {Number} average_daily_volume_six_month
   */
  exports.prototype['average_daily_volume_six_month'] = undefined;
  /**
   * The market capitalization for the Exchange Traded Fund (ETF)
   * @member {Number} market_cap
   */
  exports.prototype['market_cap'] = undefined;
  /**
   * The number of shares outstanding for the Exchange Traded Fund (ETF)
   * @member {Number} shares_outstanding
   */
  exports.prototype['shares_outstanding'] = undefined;
  /**
   * @member {module:model/ETFSummary} etf
   */
  exports.prototype['etf'] = undefined;



  return exports;
}));


