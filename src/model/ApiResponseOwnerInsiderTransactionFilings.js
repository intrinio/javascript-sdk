/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.20.0
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
    define(['ApiClient', 'model/InsiderTransactionFiling', 'model/OwnerSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InsiderTransactionFiling'), require('./OwnerSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOwnerInsiderTransactionFilings = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.InsiderTransactionFiling, root.intrinioSDK.OwnerSummary);
  }
}(this, function(ApiClient, InsiderTransactionFiling, OwnerSummary) {
  'use strict';




  /**
   * The ApiResponseOwnerInsiderTransactionFilings model module.
   * @module model/ApiResponseOwnerInsiderTransactionFilings
   * @version 5.10.0
   */

  /**
   * Constructs a new <code>ApiResponseOwnerInsiderTransactionFilings</code>.
   * @alias module:model/ApiResponseOwnerInsiderTransactionFilings
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseOwnerInsiderTransactionFilings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOwnerInsiderTransactionFilings} obj Optional instance to populate.
   * @return {module:model/ApiResponseOwnerInsiderTransactionFilings} The populated <code>ApiResponseOwnerInsiderTransactionFilings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transaction_filings')) {
        obj['transaction_filings'] = ApiClient.convertToType(data['transaction_filings'], [InsiderTransactionFiling]);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = OwnerSummary.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InsiderTransactionFiling>} transaction_filings
   */
  exports.prototype['transaction_filings'] = undefined;
  /**
   * The owner associated with the transaction filing
   * @member {module:model/OwnerSummary} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


