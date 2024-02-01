/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.0
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
    root.intrinioSDK.ETFSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ETFSummary model module.
   * @module model/ETFSummary
   * @version 6.26.6
   */

  /**
   * Constructs a new <code>ETFSummary</code>.
   * Exchange Traded Fund (ETF) sourced from FirstBridge
   * @alias module:model/ETFSummary
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ETFSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ETFSummary} obj Optional instance to populate.
   * @return {module:model/ETFSummary} The populated <code>ETFSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('figi_ticker')) {
        obj['figi_ticker'] = ApiClient.convertToType(data['figi_ticker'], 'String');
      }
      if (data.hasOwnProperty('ric')) {
        obj['ric'] = ApiClient.convertToType(data['ric'], 'String');
      }
      if (data.hasOwnProperty('isin')) {
        obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
      }
      if (data.hasOwnProperty('sedol')) {
        obj['sedol'] = ApiClient.convertToType(data['sedol'], 'String');
      }
      if (data.hasOwnProperty('exchange_mic')) {
        obj['exchange_mic'] = ApiClient.convertToType(data['exchange_mic'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the ETF
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The common name of the ETF
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The common ticker symbol for the ETF
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The OpenFIGI ticker for the ETF
   * @member {String} figi_ticker
   */
  exports.prototype['figi_ticker'] = undefined;
  /**
   * Reuters Instrument Code (RIC) for the ETF
   * @member {String} ric
   */
  exports.prototype['ric'] = undefined;
  /**
   * International Securities Identification Number (ISIN) for the ETF
   * @member {String} isin
   */
  exports.prototype['isin'] = undefined;
  /**
   * Stock Exchange Daily Official List (SEDOL) for the ETF
   * @member {String} sedol
   */
  exports.prototype['sedol'] = undefined;
  /**
   * The exchange Market Identifier Code (MIC) from the International Standards Organization (ISO)
   * @member {String} exchange_mic
   */
  exports.prototype['exchange_mic'] = undefined;



  return exports;
}));


