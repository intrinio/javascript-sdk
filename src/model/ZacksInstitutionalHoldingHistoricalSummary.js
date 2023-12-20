/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.48.1
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
    root.intrinioSDK.ZacksInstitutionalHoldingHistoricalSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksInstitutionalHoldingHistoricalSummary model module.
   * @module model/ZacksInstitutionalHoldingHistoricalSummary
   * @version 6.26.4
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHoldingHistoricalSummary</code>.
   * Returns number of shares held in previous quarters
   * @alias module:model/ZacksInstitutionalHoldingHistoricalSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ZacksInstitutionalHoldingHistoricalSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHoldingHistoricalSummary} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHoldingHistoricalSummary} The populated <code>ZacksInstitutionalHoldingHistoricalSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('as_of_date')) {
        obj['as_of_date'] = ApiClient.convertToType(data['as_of_date'], 'Date');
      }
      if (data.hasOwnProperty('shares_held')) {
        obj['shares_held'] = ApiClient.convertToType(data['shares_held'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date of the institutional holding
   * @member {Date} as_of_date
   */
  exports.prototype['as_of_date'] = undefined;
  /**
   * The number of shares held
   * @member {Number} shares_held
   */
  exports.prototype['shares_held'] = undefined;



  return exports;
}));


