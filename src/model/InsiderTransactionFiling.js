/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.6
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
    define(['ApiClient', 'model/CompanySummary', 'model/InsiderTransaction', 'model/OwnerSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'), require('./InsiderTransaction'), require('./OwnerSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.InsiderTransactionFiling = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary, root.intrinioSDK.InsiderTransaction, root.intrinioSDK.OwnerSummary);
  }
}(this, function(ApiClient, CompanySummary, InsiderTransaction, OwnerSummary) {
  'use strict';




  /**
   * The InsiderTransactionFiling model module.
   * @module model/InsiderTransactionFiling
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>InsiderTransactionFiling</code>.
   * An insider transaction SEC filing and its associated transactions
   * @alias module:model/InsiderTransactionFiling
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InsiderTransactionFiling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsiderTransactionFiling} obj Optional instance to populate.
   * @return {module:model/InsiderTransactionFiling} The populated <code>InsiderTransactionFiling</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
      if (data.hasOwnProperty('filing_url')) {
        obj['filing_url'] = ApiClient.convertToType(data['filing_url'], 'String');
      }
      if (data.hasOwnProperty('issuer_ticker')) {
        obj['issuer_ticker'] = ApiClient.convertToType(data['issuer_ticker'], 'String');
      }
      if (data.hasOwnProperty('issuer_cik')) {
        obj['issuer_cik'] = ApiClient.convertToType(data['issuer_cik'], 'String');
      }
      if (data.hasOwnProperty('issuer_company')) {
        obj['issuer_company'] = ApiClient.convertToType(data['issuer_company'], 'String');
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [InsiderTransaction]);
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = OwnerSummary.constructFromObject(data['owner']);
      }
    }
    return obj;
  }

  /**
   * The date of the filing with the SEC made by the owner
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;
  /**
   * The URL of the filing with the SEC
   * @member {String} filing_url
   */
  exports.prototype['filing_url'] = undefined;
  /**
   * The ticker of the issuing company.
   * @member {String} issuer_ticker
   */
  exports.prototype['issuer_ticker'] = undefined;
  /**
   * The Central Index Key (CIK) of the issuing company.
   * @member {String} issuer_cik
   */
  exports.prototype['issuer_cik'] = undefined;
  /**
   * The name of the issuing company.
   * @member {String} issuer_company
   */
  exports.prototype['issuer_company'] = undefined;
  /**
   * The insider transactions associated with the filing
   * @member {Array.<module:model/InsiderTransaction>} transactions
   */
  exports.prototype['transactions'] = undefined;
  /**
   * The company associated with the filing
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * The owner associated with the filing
   * @member {module:model/OwnerSummary} owner
   */
  exports.prototype['owner'] = undefined;



  return exports;
}));


