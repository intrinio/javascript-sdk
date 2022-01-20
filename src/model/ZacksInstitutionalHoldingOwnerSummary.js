/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.12
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
    root.intrinioSDK.ZacksInstitutionalHoldingOwnerSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksInstitutionalHoldingOwnerSummary model module.
   * @module model/ZacksInstitutionalHoldingOwnerSummary
   * @version 5.18.0
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHoldingOwnerSummary</code>.
   * The summary of a institutional owner
   * @alias module:model/ZacksInstitutionalHoldingOwnerSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ZacksInstitutionalHoldingOwnerSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHoldingOwnerSummary} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHoldingOwnerSummary} The populated <code>ZacksInstitutionalHoldingOwnerSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
    }
    return obj;
  }

  /**
   * The owner's name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Central Index Key (CIK) assigned to the company by the SEC as a unique identifier, used in SEC filings
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;



  return exports;
}));


