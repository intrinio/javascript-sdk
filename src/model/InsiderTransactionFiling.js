/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
   * @version 5.13.0
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

      if (data.hasOwnProperty('filing_url')) {
        obj['filing_url'] = ApiClient.convertToType(data['filing_url'], 'String');
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
   * The URL of the filing with the SEC
   * @member {String} filing_url
   */
  exports.prototype['filing_url'] = undefined;
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

