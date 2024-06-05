/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.61.1
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
    root.intrinioSDK.Security = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Security model module.
   * @module model/Security
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>Security</code>.
   * A financial instrument representing shares of ownership in a publicly-traded company
   * @alias module:model/Security
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>Security</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Security} obj Optional instance to populate.
   * @return {module:model/Security} The populated <code>Security</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('share_class')) {
        obj['share_class'] = ApiClient.convertToType(data['share_class'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('round_lot_size')) {
        obj['round_lot_size'] = ApiClient.convertToType(data['round_lot_size'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('exchange_ticker')) {
        obj['exchange_ticker'] = ApiClient.convertToType(data['exchange_ticker'], 'String');
      }
      if (data.hasOwnProperty('composite_ticker')) {
        obj['composite_ticker'] = ApiClient.convertToType(data['composite_ticker'], 'String');
      }
      if (data.hasOwnProperty('alternate_tickers')) {
        obj['alternate_tickers'] = ApiClient.convertToType(data['alternate_tickers'], ['String']);
      }
      if (data.hasOwnProperty('figi')) {
        obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
      }
      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
      if (data.hasOwnProperty('composite_figi')) {
        obj['composite_figi'] = ApiClient.convertToType(data['composite_figi'], 'String');
      }
      if (data.hasOwnProperty('share_class_figi')) {
        obj['share_class_figi'] = ApiClient.convertToType(data['share_class_figi'], 'String');
      }
      if (data.hasOwnProperty('figi_uniqueid')) {
        obj['figi_uniqueid'] = ApiClient.convertToType(data['figi_uniqueid'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('etf')) {
        obj['etf'] = ApiClient.convertToType(data['etf'], 'Boolean');
      }
      if (data.hasOwnProperty('delisted')) {
        obj['delisted'] = ApiClient.convertToType(data['delisted'], 'Boolean');
      }
      if (data.hasOwnProperty('primary_listing')) {
        obj['primary_listing'] = ApiClient.convertToType(data['primary_listing'], 'Boolean');
      }
      if (data.hasOwnProperty('primary_security')) {
        obj['primary_security'] = ApiClient.convertToType(data['primary_security'], 'Boolean');
      }
      if (data.hasOwnProperty('first_stock_price')) {
        obj['first_stock_price'] = ApiClient.convertToType(data['first_stock_price'], 'Date');
      }
      if (data.hasOwnProperty('last_stock_price')) {
        obj['last_stock_price'] = ApiClient.convertToType(data['last_stock_price'], 'Date');
      }
      if (data.hasOwnProperty('last_stock_price_adjustment')) {
        obj['last_stock_price_adjustment'] = ApiClient.convertToType(data['last_stock_price_adjustment'], 'Date');
      }
      if (data.hasOwnProperty('last_corporate_action')) {
        obj['last_corporate_action'] = ApiClient.convertToType(data['last_corporate_action'], 'Date');
      }
      if (data.hasOwnProperty('previous_tickers')) {
        obj['previous_tickers'] = ApiClient.convertToType(data['previous_tickers'], ['String']);
      }
      if (data.hasOwnProperty('listing_exchange_mic')) {
        obj['listing_exchange_mic'] = ApiClient.convertToType(data['listing_exchange_mic'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The Intrinio ID for the company for which the Security is issued
   * @member {String} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * The name of the Security
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Security's type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A 2-3 digit code classifying the Security (<a href=\"https://docs.intrinio.com/documentation/security_codes\" target=\"_blank\">reference</a>)
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The Security's share class (if applicable)
   * @member {String} share_class
   */
  exports.prototype['share_class'] = undefined;
  /**
   * The currency in which the Security is traded on the exchange
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The normal unit of trading
   * @member {Number} round_lot_size
   */
  exports.prototype['round_lot_size'] = undefined;
  /**
   * The common ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The exchange-level ticker
   * @member {String} exchange_ticker
   */
  exports.prototype['exchange_ticker'] = undefined;
  /**
   * The country-composite ticker
   * @member {String} composite_ticker
   */
  exports.prototype['composite_ticker'] = undefined;
  /**
   * Alternate formats of the common ticker
   * @member {Array.<String>} alternate_tickers
   */
  exports.prototype['alternate_tickers'] = undefined;
  /**
   * The exchange-level OpenFIGI identifier
   * @member {String} figi
   */
  exports.prototype['figi'] = undefined;
  /**
   * Central Index Key issued by the SEC, which is the unique identifier for all owner filings
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;
  /**
   * The country-composite OpenFIGI identifier
   * @member {String} composite_figi
   */
  exports.prototype['composite_figi'] = undefined;
  /**
   * The global-composite OpenFIGI identifier
   * @member {String} share_class_figi
   */
  exports.prototype['share_class_figi'] = undefined;
  /**
   * The OpenFIGI unique ID
   * @member {String} figi_uniqueid
   */
  exports.prototype['figi_uniqueid'] = undefined;
  /**
   * If true, the Security is active and has been recently traded
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * If true, this Security is an ETF
   * @member {Boolean} etf
   */
  exports.prototype['etf'] = undefined;
  /**
   * If true, the Security is no longer traded on the exchange
   * @member {Boolean} delisted
   */
  exports.prototype['delisted'] = undefined;
  /**
   * If true, the Security is the primary issue for the company, otherwise it is a secondary issue on a secondary stock exchange
   * @member {Boolean} primary_listing
   */
  exports.prototype['primary_listing'] = undefined;
  /**
   * If true, the Security is considered by Intrinio to be the primary Security for its company
   * @member {Boolean} primary_security
   */
  exports.prototype['primary_security'] = undefined;
  /**
   * The date of the first recorded stock price
   * @member {Date} first_stock_price
   */
  exports.prototype['first_stock_price'] = undefined;
  /**
   * The date of the last recorded stock price (or the most recent trading day)
   * @member {Date} last_stock_price
   */
  exports.prototype['last_stock_price'] = undefined;
  /**
   * The date of the last stock price adjustment (dividend, split, etc)
   * @member {Date} last_stock_price_adjustment
   */
  exports.prototype['last_stock_price_adjustment'] = undefined;
  /**
   * The date of the last corporate action
   * @member {Date} last_corporate_action
   */
  exports.prototype['last_corporate_action'] = undefined;
  /**
   * Previous tickers used by this security
   * @member {Array.<String>} previous_tickers
   */
  exports.prototype['previous_tickers'] = undefined;
  /**
   * The MIC code of the exchange on which this security primarily trades
   * @member {String} listing_exchange_mic
   */
  exports.prototype['listing_exchange_mic'] = undefined;



  return exports;
}));


