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
    define(['ApiClient', 'model/CompanySummary', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.CompanyInitialPublicOffering = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, CompanySummary, SecuritySummary) {
  'use strict';




  /**
   * The CompanyInitialPublicOffering model module.
   * @module model/CompanyInitialPublicOffering
   * @version 6.30.0
   */

  /**
   * Constructs a new <code>CompanyInitialPublicOffering</code>.
   * A record of a company&#39;s initial public offering (IPO). The act of \&quot;going public\&quot; is initiated by an IPO, at which point the company&#39;s stock trades on a major stock exchange (such as NYSE or NASDAQ)
   * @alias module:model/CompanyInitialPublicOffering
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>CompanyInitialPublicOffering</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanyInitialPublicOffering} obj Optional instance to populate.
   * @return {module:model/CompanyInitialPublicOffering} The populated <code>CompanyInitialPublicOffering</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('offer_amount')) {
        obj['offer_amount'] = ApiClient.convertToType(data['offer_amount'], 'Number');
      }
      if (data.hasOwnProperty('share_price')) {
        obj['share_price'] = ApiClient.convertToType(data['share_price'], 'Number');
      }
      if (data.hasOwnProperty('share_price_lowest')) {
        obj['share_price_lowest'] = ApiClient.convertToType(data['share_price_lowest'], 'Number');
      }
      if (data.hasOwnProperty('share_price_highest')) {
        obj['share_price_highest'] = ApiClient.convertToType(data['share_price_highest'], 'Number');
      }
      if (data.hasOwnProperty('share_count')) {
        obj['share_count'] = ApiClient.convertToType(data['share_count'], 'Number');
      }
      if (data.hasOwnProperty('share_count_lowest')) {
        obj['share_count_lowest'] = ApiClient.convertToType(data['share_count_lowest'], 'Number');
      }
      if (data.hasOwnProperty('share_count_highest')) {
        obj['share_count_highest'] = ApiClient.convertToType(data['share_count_highest'], 'Number');
      }
      if (data.hasOwnProperty('announcement_url')) {
        obj['announcement_url'] = ApiClient.convertToType(data['announcement_url'], 'String');
      }
      if (data.hasOwnProperty('sec_report_url')) {
        obj['sec_report_url'] = ApiClient.convertToType(data['sec_report_url'], 'String');
      }
      if (data.hasOwnProperty('open_price')) {
        obj['open_price'] = ApiClient.convertToType(data['open_price'], 'Number');
      }
      if (data.hasOwnProperty('close_price')) {
        obj['close_price'] = ApiClient.convertToType(data['close_price'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('day_change')) {
        obj['day_change'] = ApiClient.convertToType(data['day_change'], 'Number');
      }
      if (data.hasOwnProperty('week_change')) {
        obj['week_change'] = ApiClient.convertToType(data['week_change'], 'Number');
      }
      if (data.hasOwnProperty('month_change')) {
        obj['month_change'] = ApiClient.convertToType(data['month_change'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the IPO
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ticker under which the Company will be traded after the IPO takes place
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The date of the IPO, when the stock first trades on a major exchange
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The status of the IPO. Upcoming IPOs have not taken place yet but are expected to. Priced IPOs have taken place. Withdrawn IPOs were expected to take place, but were subsequently withdrawn and did not take place
   * @member {module:model/CompanyInitialPublicOffering.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The acronym of the stock exchange that the company is going to trade publicly on. Typically NYSE or NASDAQ
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The total dollar amount of shares offered in the IPO. Typically this is share price * share count
   * @member {Number} offer_amount
   */
  exports.prototype['offer_amount'] = undefined;
  /**
   * The price per share at which the IPO was offered
   * @member {Number} share_price
   */
  exports.prototype['share_price'] = undefined;
  /**
   * The expected lowest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs)
   * @member {Number} share_price_lowest
   */
  exports.prototype['share_price_lowest'] = undefined;
  /**
   * The expected highest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs)
   * @member {Number} share_price_highest
   */
  exports.prototype['share_price_highest'] = undefined;
  /**
   * The number of shares offered in the IPO
   * @member {Number} share_count
   */
  exports.prototype['share_count'] = undefined;
  /**
   * The expected lowest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs)
   * @member {Number} share_count_lowest
   */
  exports.prototype['share_count_lowest'] = undefined;
  /**
   * The expected highest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs)
   * @member {Number} share_count_highest
   */
  exports.prototype['share_count_highest'] = undefined;
  /**
   * The URL to the company's announcement of the IPO
   * @member {String} announcement_url
   */
  exports.prototype['announcement_url'] = undefined;
  /**
   * The IRL to the company's S-1, S-1/A, F-1, or F-1/A SEC filing, which is required to be filed before an IPO takes place.
   * @member {String} sec_report_url
   */
  exports.prototype['sec_report_url'] = undefined;
  /**
   * The opening price at the beginning of the first trading day (only available for priced IPOs)
   * @member {Number} open_price
   */
  exports.prototype['open_price'] = undefined;
  /**
   * The closing price at the end of the first trading day (only available for priced IPOs)
   * @member {Number} close_price
   */
  exports.prototype['close_price'] = undefined;
  /**
   * The volume at the end of the first trading day (only available for priced IPOs)
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The percentage change between the open price and the close price on the first trading day (only available for priced IPOs)
   * @member {Number} day_change
   */
  exports.prototype['day_change'] = undefined;
  /**
   * The percentage change between the open price on the first trading day and the close price approximately a week after the first trading day (only available for priced IPOs)
   * @member {Number} week_change
   */
  exports.prototype['week_change'] = undefined;
  /**
   * The percentage change between the open price on the first trading day and the close price approximately a month after the first trading day (only available for priced IPOs)
   * @member {Number} month_change
   */
  exports.prototype['month_change'] = undefined;
  /**
   * The Company that is going public via the IPO
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * The primary Security for the Company that is going public via the IPO
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "upcoming"
     * @const
     */
    "upcoming": "upcoming",
    /**
     * value: "priced"
     * @const
     */
    "priced": "priced",
    /**
     * value: "withdrawn"
     * @const
     */
    "withdrawn": "withdrawn"  };


  return exports;
}));


