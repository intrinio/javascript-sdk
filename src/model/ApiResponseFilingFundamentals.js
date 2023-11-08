/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.7
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
    define(['ApiClient', 'model/FilingSummary', 'model/FundamentalSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FilingSummary'), require('./FundamentalSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseFilingFundamentals = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.FilingSummary, root.intrinioSDK.FundamentalSummary);
  }
}(this, function(ApiClient, FilingSummary, FundamentalSummary) {
  'use strict';




  /**
   * The ApiResponseFilingFundamentals model module.
   * @module model/ApiResponseFilingFundamentals
   * @version 6.26.2
   */

  /**
   * Constructs a new <code>ApiResponseFilingFundamentals</code>.
   * @alias module:model/ApiResponseFilingFundamentals
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseFilingFundamentals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseFilingFundamentals} obj Optional instance to populate.
   * @return {module:model/ApiResponseFilingFundamentals} The populated <code>ApiResponseFilingFundamentals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fundamentals')) {
        obj['fundamentals'] = ApiClient.convertToType(data['fundamentals'], [FundamentalSummary]);
      }
      if (data.hasOwnProperty('filing')) {
        obj['filing'] = FilingSummary.constructFromObject(data['filing']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FundamentalSummary>} fundamentals
   */
  exports.prototype['fundamentals'] = undefined;
  /**
   * @member {module:model/FilingSummary} filing
   */
  exports.prototype['filing'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


