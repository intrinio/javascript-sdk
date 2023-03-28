/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.39.2
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
    root.intrinioSDK.ETFStats = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ETFSummary);
  }
}(this, function(ApiClient, ETFSummary) {
  'use strict';




  /**
   * The ETFStats model module.
   * @module model/ETFStats
   * @version 6.23.1
   */

  /**
   * Constructs a new <code>ETFStats</code>.
   * Daily stats for the Exchange Traded Fund (ETF) including net asset value, beta vs spy, returns, and volatility
   * @alias module:model/ETFStats
   * @class
   */
  var exports = function() {
    var _this = this;
































  };

  /**
   * Constructs a <code>ETFStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ETFStats} obj Optional instance to populate.
   * @return {module:model/ETFStats} The populated <code>ETFStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('net_asset_value')) {
        obj['net_asset_value'] = ApiClient.convertToType(data['net_asset_value'], 'Number');
      }
      if (data.hasOwnProperty('beta_vs_spy')) {
        obj['beta_vs_spy'] = ApiClient.convertToType(data['beta_vs_spy'], 'Number');
      }
      if (data.hasOwnProperty('trailing_one_month_return_split_and_dividend')) {
        obj['trailing_one_month_return_split_and_dividend'] = ApiClient.convertToType(data['trailing_one_month_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('trailing_one_month_return_split_only')) {
        obj['trailing_one_month_return_split_only'] = ApiClient.convertToType(data['trailing_one_month_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('trailing_one_year_return_split_and_dividend')) {
        obj['trailing_one_year_return_split_and_dividend'] = ApiClient.convertToType(data['trailing_one_year_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('trailing_one_year_return_split_only')) {
        obj['trailing_one_year_return_split_only'] = ApiClient.convertToType(data['trailing_one_year_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('trailing_one_year_volatility_annualized')) {
        obj['trailing_one_year_volatility_annualized'] = ApiClient.convertToType(data['trailing_one_year_volatility_annualized'], 'Number');
      }
      if (data.hasOwnProperty('trailing_three_year_annualized_return_split_and_dividend')) {
        obj['trailing_three_year_annualized_return_split_and_dividend'] = ApiClient.convertToType(data['trailing_three_year_annualized_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('trailing_three_year_annualized_return_split_only')) {
        obj['trailing_three_year_annualized_return_split_only'] = ApiClient.convertToType(data['trailing_three_year_annualized_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('trailing_three_year_volatility_annualized')) {
        obj['trailing_three_year_volatility_annualized'] = ApiClient.convertToType(data['trailing_three_year_volatility_annualized'], 'Number');
      }
      if (data.hasOwnProperty('trailing_five_year_annualized_return_split_and_dividend')) {
        obj['trailing_five_year_annualized_return_split_and_dividend'] = ApiClient.convertToType(data['trailing_five_year_annualized_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('trailing_five_year_annualized_return_split_only')) {
        obj['trailing_five_year_annualized_return_split_only'] = ApiClient.convertToType(data['trailing_five_year_annualized_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('trailing_five_year_volatility_annualized')) {
        obj['trailing_five_year_volatility_annualized'] = ApiClient.convertToType(data['trailing_five_year_volatility_annualized'], 'Number');
      }
      if (data.hasOwnProperty('trailing_ten_year_annualized_return_split_and_dividend')) {
        obj['trailing_ten_year_annualized_return_split_and_dividend'] = ApiClient.convertToType(data['trailing_ten_year_annualized_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('trailing_ten_year_annualized_return_split_only')) {
        obj['trailing_ten_year_annualized_return_split_only'] = ApiClient.convertToType(data['trailing_ten_year_annualized_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('inception_annualized_return_split_and_dividend')) {
        obj['inception_annualized_return_split_and_dividend'] = ApiClient.convertToType(data['inception_annualized_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('inception_annualized_return_split_only')) {
        obj['inception_annualized_return_split_only'] = ApiClient.convertToType(data['inception_annualized_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_5_return_split_and_dividend')) {
        obj['calendar_year_5_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_5_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_5_return_split_only')) {
        obj['calendar_year_5_return_split_only'] = ApiClient.convertToType(data['calendar_year_5_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_4_return_split_and_dividend')) {
        obj['calendar_year_4_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_4_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_4_return_split_only')) {
        obj['calendar_year_4_return_split_only'] = ApiClient.convertToType(data['calendar_year_4_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_3_return_split_and_dividend')) {
        obj['calendar_year_3_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_3_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_3_return_split_only')) {
        obj['calendar_year_3_return_split_only'] = ApiClient.convertToType(data['calendar_year_3_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_2_return_split_and_dividend')) {
        obj['calendar_year_2_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_2_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_2_return_split_only')) {
        obj['calendar_year_2_return_split_only'] = ApiClient.convertToType(data['calendar_year_2_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_1_return_split_and_dividend')) {
        obj['calendar_year_1_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_1_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_1_return_split_only')) {
        obj['calendar_year_1_return_split_only'] = ApiClient.convertToType(data['calendar_year_1_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_to_date_return_split_and_dividend')) {
        obj['calendar_year_to_date_return_split_and_dividend'] = ApiClient.convertToType(data['calendar_year_to_date_return_split_and_dividend'], 'Number');
      }
      if (data.hasOwnProperty('calendar_year_to_date_return_split_only')) {
        obj['calendar_year_to_date_return_split_only'] = ApiClient.convertToType(data['calendar_year_to_date_return_split_only'], 'Number');
      }
      if (data.hasOwnProperty('etf')) {
        obj['etf'] = ETFSummary.constructFromObject(data['etf']);
      }
    }
    return obj;
  }

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The net asset value (NAV = Total Assets - Total Liabilities)
   * @member {Number} net_asset_value
   */
  exports.prototype['net_asset_value'] = undefined;
  /**
   * Volatility this ETF is versus the SPY ETF
   * @member {Number} beta_vs_spy
   */
  exports.prototype['beta_vs_spy'] = undefined;
  /**
   * Trailing one month return including dividends
   * @member {Number} trailing_one_month_return_split_and_dividend
   */
  exports.prototype['trailing_one_month_return_split_and_dividend'] = undefined;
  /**
   * Trailing one month return excluding dividends
   * @member {Number} trailing_one_month_return_split_only
   */
  exports.prototype['trailing_one_month_return_split_only'] = undefined;
  /**
   * Trailing one year return including dividends
   * @member {Number} trailing_one_year_return_split_and_dividend
   */
  exports.prototype['trailing_one_year_return_split_and_dividend'] = undefined;
  /**
   * Trailing one year return excluding dividends
   * @member {Number} trailing_one_year_return_split_only
   */
  exports.prototype['trailing_one_year_return_split_only'] = undefined;
  /**
   * Annualized standard deviation of daily price returns over trailing 252 trading days
   * @member {Number} trailing_one_year_volatility_annualized
   */
  exports.prototype['trailing_one_year_volatility_annualized'] = undefined;
  /**
   * Trailing three year return including dividends
   * @member {Number} trailing_three_year_annualized_return_split_and_dividend
   */
  exports.prototype['trailing_three_year_annualized_return_split_and_dividend'] = undefined;
  /**
   * Trailing three year return excluding dividends
   * @member {Number} trailing_three_year_annualized_return_split_only
   */
  exports.prototype['trailing_three_year_annualized_return_split_only'] = undefined;
  /**
   * Annualized standard deviation of daily price returns over trailing 756 trading days
   * @member {Number} trailing_three_year_volatility_annualized
   */
  exports.prototype['trailing_three_year_volatility_annualized'] = undefined;
  /**
   * Trailing five year return including dividends
   * @member {Number} trailing_five_year_annualized_return_split_and_dividend
   */
  exports.prototype['trailing_five_year_annualized_return_split_and_dividend'] = undefined;
  /**
   * Trailing five year return excluding dividends
   * @member {Number} trailing_five_year_annualized_return_split_only
   */
  exports.prototype['trailing_five_year_annualized_return_split_only'] = undefined;
  /**
   * Annualized standard  deviation  of  daily  price  returns  over  trailing 1260 trading days
   * @member {Number} trailing_five_year_volatility_annualized
   */
  exports.prototype['trailing_five_year_volatility_annualized'] = undefined;
  /**
   * Trailing ten year return including dividends
   * @member {Number} trailing_ten_year_annualized_return_split_and_dividend
   */
  exports.prototype['trailing_ten_year_annualized_return_split_and_dividend'] = undefined;
  /**
   * Trailing ten year return excluding dividends
   * @member {Number} trailing_ten_year_annualized_return_split_only
   */
  exports.prototype['trailing_ten_year_annualized_return_split_only'] = undefined;
  /**
   * Annualized return including dividends since inception
   * @member {Number} inception_annualized_return_split_and_dividend
   */
  exports.prototype['inception_annualized_return_split_and_dividend'] = undefined;
  /**
   * Annualized return excluding dividends since inception
   * @member {Number} inception_annualized_return_split_only
   */
  exports.prototype['inception_annualized_return_split_only'] = undefined;
  /**
   * Five years ago calendar year return including dividends
   * @member {Number} calendar_year_5_return_split_and_dividend
   */
  exports.prototype['calendar_year_5_return_split_and_dividend'] = undefined;
  /**
   * Five years ago calendar year return excluding dividends
   * @member {Number} calendar_year_5_return_split_only
   */
  exports.prototype['calendar_year_5_return_split_only'] = undefined;
  /**
   * Four years ago calendar year return including dividends
   * @member {Number} calendar_year_4_return_split_and_dividend
   */
  exports.prototype['calendar_year_4_return_split_and_dividend'] = undefined;
  /**
   * Four years ago calendar year return excluding dividends
   * @member {Number} calendar_year_4_return_split_only
   */
  exports.prototype['calendar_year_4_return_split_only'] = undefined;
  /**
   * Three years ago calendar year return including dividends
   * @member {Number} calendar_year_3_return_split_and_dividend
   */
  exports.prototype['calendar_year_3_return_split_and_dividend'] = undefined;
  /**
   * Three years ago calendar year return excluding dividends
   * @member {Number} calendar_year_3_return_split_only
   */
  exports.prototype['calendar_year_3_return_split_only'] = undefined;
  /**
   * Two years ago calendar year return including dividends
   * @member {Number} calendar_year_2_return_split_and_dividend
   */
  exports.prototype['calendar_year_2_return_split_and_dividend'] = undefined;
  /**
   * Two years ago calendar year return excluding dividends
   * @member {Number} calendar_year_2_return_split_only
   */
  exports.prototype['calendar_year_2_return_split_only'] = undefined;
  /**
   * One year ago calendar year return including dividends
   * @member {Number} calendar_year_1_return_split_and_dividend
   */
  exports.prototype['calendar_year_1_return_split_and_dividend'] = undefined;
  /**
   * One year ago calendar year return excluding dividends
   * @member {Number} calendar_year_1_return_split_only
   */
  exports.prototype['calendar_year_1_return_split_only'] = undefined;
  /**
   * Calendar year to date (YTD) return including dividends
   * @member {Number} calendar_year_to_date_return_split_and_dividend
   */
  exports.prototype['calendar_year_to_date_return_split_and_dividend'] = undefined;
  /**
   * Calendar year to date (YTD) return excluding dividends
   * @member {Number} calendar_year_to_date_return_split_only
   */
  exports.prototype['calendar_year_to_date_return_split_only'] = undefined;
  /**
   * @member {module:model/ETFSummary} etf
   */
  exports.prototype['etf'] = undefined;



  return exports;
}));


