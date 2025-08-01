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
    root.intrinioSDK.SecuritySummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecuritySummary model module.
   * @module model/SecuritySummary
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>SecuritySummary</code>.
   * The summary of a financial instrument representing shares of ownership in a publicly-traded company
   * @alias module:model/SecuritySummary
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>SecuritySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecuritySummary} obj Optional instance to populate.
   * @return {module:model/SecuritySummary} The populated <code>SecuritySummary</code> instance.
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
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('exchange_mic')) {
        obj['exchange_mic'] = ApiClient.convertToType(data['exchange_mic'], 'String');
      }
      if (data.hasOwnProperty('stock_exchange_id')) {
        obj['stock_exchange_id'] = ApiClient.convertToType(data['stock_exchange_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('composite_ticker')) {
        obj['composite_ticker'] = ApiClient.convertToType(data['composite_ticker'], 'String');
      }
      if (data.hasOwnProperty('figi')) {
        obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
      }
      if (data.hasOwnProperty('composite_figi')) {
        obj['composite_figi'] = ApiClient.convertToType(data['composite_figi'], 'String');
      }
      if (data.hasOwnProperty('share_class_figi')) {
        obj['share_class_figi'] = ApiClient.convertToType(data['share_class_figi'], 'String');
      }
      if (data.hasOwnProperty('primary_listing')) {
        obj['primary_listing'] = ApiClient.convertToType(data['primary_listing'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for Security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The Intrinio ID for the Company for which the Security is issued
   * @member {String} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * The exchange's MIC
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The security's exchange MIC
   * @member {String} exchange_mic
   */
  exports.prototype['exchange_mic'] = undefined;
  /**
   * The exchange's Intrinio ID
   * @member {String} stock_exchange_id
   */
  exports.prototype['stock_exchange_id'] = undefined;
  /**
   * The name of the Security
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A 2-3 digit code classifying the Security (<a href=\"https://docs.intrinio.com/documentation/security_codes\" target=\"_blank\">reference</a>)
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The currency in which the Security is traded on the exchange
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The common/local ticker of the Security
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The country-composite ticker of the Security
   * @member {String} composite_ticker
   */
  exports.prototype['composite_ticker'] = undefined;
  /**
   * The OpenFIGI identifier
   * @member {String} figi
   */
  exports.prototype['figi'] = undefined;
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
   * If true, the Security is the primary issue for the company, otherwise it is a secondary issue on a secondary stock exchange
   * @member {Boolean} primary_listing
   */
  exports.prototype['primary_listing'] = undefined;



  return exports;
}));


