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
    root.intrinioSDK.ApiResponseSecurityQuote = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The ApiResponseSecurityQuote model module.
   * @module model/ApiResponseSecurityQuote
   * @version 6.31.0
   */

  /**
   * Constructs a new <code>ApiResponseSecurityQuote</code>.
   * A realtime price quote of a security.
   * @alias module:model/ApiResponseSecurityQuote
   * @class
   */
  var exports = function() {
    var _this = this;





































  };

  /**
   * Constructs a <code>ApiResponseSecurityQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityQuote} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityQuote} The populated <code>ApiResponseSecurityQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Number');
      }
      if (data.hasOwnProperty('last_time')) {
        obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('exchange_volume')) {
        obj['exchange_volume'] = ApiClient.convertToType(data['exchange_volume'], 'Number');
      }
      if (data.hasOwnProperty('market_volume')) {
        obj['market_volume'] = ApiClient.convertToType(data['market_volume'], 'Number');
      }
      if (data.hasOwnProperty('eod_fifty_two_week_high')) {
        obj['eod_fifty_two_week_high'] = ApiClient.convertToType(data['eod_fifty_two_week_high'], 'Number');
      }
      if (data.hasOwnProperty('eod_fifty_two_week_low')) {
        obj['eod_fifty_two_week_low'] = ApiClient.convertToType(data['eod_fifty_two_week_low'], 'Number');
      }
      if (data.hasOwnProperty('marketcap')) {
        obj['marketcap'] = ApiClient.convertToType(data['marketcap'], 'Number');
      }
      if (data.hasOwnProperty('pricetoearnings')) {
        obj['pricetoearnings'] = ApiClient.convertToType(data['pricetoearnings'], 'Number');
      }
      if (data.hasOwnProperty('previous_close')) {
        obj['previous_close'] = ApiClient.convertToType(data['previous_close'], 'Number');
      }
      if (data.hasOwnProperty('previous_close_date')) {
        obj['previous_close_date'] = ApiClient.convertToType(data['previous_close_date'], 'Date');
      }
      if (data.hasOwnProperty('change')) {
        obj['change'] = ApiClient.convertToType(data['change'], 'Number');
      }
      if (data.hasOwnProperty('change_percent')) {
        obj['change_percent'] = ApiClient.convertToType(data['change_percent'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_5_days_ago')) {
        obj['adj_close_5_days_ago'] = ApiClient.convertToType(data['adj_close_5_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_30_days_ago')) {
        obj['adj_close_30_days_ago'] = ApiClient.convertToType(data['adj_close_30_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_90_days_ago')) {
        obj['adj_close_90_days_ago'] = ApiClient.convertToType(data['adj_close_90_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_180_days_ago')) {
        obj['adj_close_180_days_ago'] = ApiClient.convertToType(data['adj_close_180_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_365_days_ago')) {
        obj['adj_close_365_days_ago'] = ApiClient.convertToType(data['adj_close_365_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_730_days_ago')) {
        obj['adj_close_730_days_ago'] = ApiClient.convertToType(data['adj_close_730_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_1825_days_ago')) {
        obj['adj_close_1825_days_ago'] = ApiClient.convertToType(data['adj_close_1825_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('adj_close_year_to_date')) {
        obj['adj_close_year_to_date'] = ApiClient.convertToType(data['adj_close_year_to_date'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_5_days')) {
        obj['change_percent_5_days'] = ApiClient.convertToType(data['change_percent_5_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_30_days')) {
        obj['change_percent_30_days'] = ApiClient.convertToType(data['change_percent_30_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_90_days')) {
        obj['change_percent_90_days'] = ApiClient.convertToType(data['change_percent_90_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_180_days')) {
        obj['change_percent_180_days'] = ApiClient.convertToType(data['change_percent_180_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_365_days')) {
        obj['change_percent_365_days'] = ApiClient.convertToType(data['change_percent_365_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_730_days_ago')) {
        obj['change_percent_730_days_ago'] = ApiClient.convertToType(data['change_percent_730_days_ago'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_1825_days')) {
        obj['change_percent_1825_days'] = ApiClient.convertToType(data['change_percent_1825_days'], 'Number');
      }
      if (data.hasOwnProperty('change_percent_year_to_date')) {
        obj['change_percent_year_to_date'] = ApiClient.convertToType(data['change_percent_year_to_date'], 'Number');
      }
      if (data.hasOwnProperty('extended_hours_last')) {
        obj['extended_hours_last'] = ApiClient.convertToType(data['extended_hours_last'], 'Number');
      }
      if (data.hasOwnProperty('extended_hours_change')) {
        obj['extended_hours_change'] = ApiClient.convertToType(data['extended_hours_change'], 'Number');
      }
      if (data.hasOwnProperty('extended_hours_change_percent')) {
        obj['extended_hours_change_percent'] = ApiClient.convertToType(data['extended_hours_change_percent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Security of the stock quote
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * The price of the latest trade
   * @member {Number} last
   */
  exports.prototype['last'] = undefined;
  /**
   * The date and time when the last trade occurred.
   * @member {Date} last_time
   */
  exports.prototype['last_time'] = undefined;
  /**
   * The source of the pricing data.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The open price from the latest day of trading.
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The highest price from the latest day of trading.
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The lowest price from the latest day of trading.
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The volume of the security from the source.
   * @member {Number} exchange_volume
   */
  exports.prototype['exchange_volume'] = undefined;
  /**
   * The volume of the security for the entire market.
   * @member {Number} market_volume
   */
  exports.prototype['market_volume'] = undefined;
  /**
   * The 52 week high price.
   * @member {Number} eod_fifty_two_week_high
   */
  exports.prototype['eod_fifty_two_week_high'] = undefined;
  /**
   * The 52 week low price.
   * @member {Number} eod_fifty_two_week_low
   */
  exports.prototype['eod_fifty_two_week_low'] = undefined;
  /**
   * The current market cap.
   * @member {Number} marketcap
   */
  exports.prototype['marketcap'] = undefined;
  /**
   * The current price to earnings.
   * @member {Number} pricetoearnings
   */
  exports.prototype['pricetoearnings'] = undefined;
  /**
   * The previous close price.
   * @member {Number} previous_close
   */
  exports.prototype['previous_close'] = undefined;
  /**
   * The date of the previous close.
   * @member {Date} previous_close_date
   */
  exports.prototype['previous_close_date'] = undefined;
  /**
   * The difference in last price from the last close price
   * @member {Number} change
   */
  exports.prototype['change'] = undefined;
  /**
   * The percent difference in last price from the last close price
   * @member {Number} change_percent
   */
  exports.prototype['change_percent'] = undefined;
  /**
   * The adjusted close price 5 days ago.
   * @member {Number} adj_close_5_days_ago
   */
  exports.prototype['adj_close_5_days_ago'] = undefined;
  /**
   * The adjusted close price 30 days ago.
   * @member {Number} adj_close_30_days_ago
   */
  exports.prototype['adj_close_30_days_ago'] = undefined;
  /**
   * The adjusted close price 90 days ago.
   * @member {Number} adj_close_90_days_ago
   */
  exports.prototype['adj_close_90_days_ago'] = undefined;
  /**
   * The adjusted close price 180 days ago.
   * @member {Number} adj_close_180_days_ago
   */
  exports.prototype['adj_close_180_days_ago'] = undefined;
  /**
   * The adjusted close price 365 days ago.
   * @member {Number} adj_close_365_days_ago
   */
  exports.prototype['adj_close_365_days_ago'] = undefined;
  /**
   * The adjusted close price 730 days ago.
   * @member {Number} adj_close_730_days_ago
   */
  exports.prototype['adj_close_730_days_ago'] = undefined;
  /**
   * The adjusted close price 1825 days ago.
   * @member {Number} adj_close_1825_days_ago
   */
  exports.prototype['adj_close_1825_days_ago'] = undefined;
  /**
   * The adjusted close price at the start of the calendar year.
   * @member {Number} adj_close_year_to_date
   */
  exports.prototype['adj_close_year_to_date'] = undefined;
  /**
   * The percent change from the adjusted price 5 days ago to now.
   * @member {Number} change_percent_5_days
   */
  exports.prototype['change_percent_5_days'] = undefined;
  /**
   * The percent change from the adjusted price 30 days ago to now.
   * @member {Number} change_percent_30_days
   */
  exports.prototype['change_percent_30_days'] = undefined;
  /**
   * The percent change from the adjusted price 90 days ago to now.
   * @member {Number} change_percent_90_days
   */
  exports.prototype['change_percent_90_days'] = undefined;
  /**
   * The percent change from the adjusted price 180 days ago to now.
   * @member {Number} change_percent_180_days
   */
  exports.prototype['change_percent_180_days'] = undefined;
  /**
   * The percent change from the adjusted price 365 days ago to now.
   * @member {Number} change_percent_365_days
   */
  exports.prototype['change_percent_365_days'] = undefined;
  /**
   * The percent change from the adjusted price 730 days ago to now.
   * @member {Number} change_percent_730_days_ago
   */
  exports.prototype['change_percent_730_days_ago'] = undefined;
  /**
   * The percent change from the adjusted price 1825 days ago to now.
   * @member {Number} change_percent_1825_days
   */
  exports.prototype['change_percent_1825_days'] = undefined;
  /**
   * The percent change from the adjusted price since the start of the calendar year to now.
   * @member {Number} change_percent_year_to_date
   */
  exports.prototype['change_percent_year_to_date'] = undefined;
  /**
   * The price of the latest trade in pre and post market trading.  Might be null during normal trading
   * @member {Number} extended_hours_last
   */
  exports.prototype['extended_hours_last'] = undefined;
  /**
   * The difference in extended_hours_last price from most recent official close price
   * @member {Number} extended_hours_change
   */
  exports.prototype['extended_hours_change'] = undefined;
  /**
   * The percent difference in extended_hours_last from the most recent official close price
   * @member {Number} extended_hours_change_percent
   */
  exports.prototype['extended_hours_change_percent'] = undefined;



  return exports;
}));


