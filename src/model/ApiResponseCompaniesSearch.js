/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.75.0
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
    define(['ApiClient', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCompaniesSearch = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The ApiResponseCompaniesSearch model module.
   * @module model/ApiResponseCompaniesSearch
   * @version 6.33.0
   */

  /**
   * Constructs a new <code>ApiResponseCompaniesSearch</code>.
   * @alias module:model/ApiResponseCompaniesSearch
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseCompaniesSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCompaniesSearch} obj Optional instance to populate.
   * @return {module:model/ApiResponseCompaniesSearch} The populated <code>ApiResponseCompaniesSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companies')) {
        obj['companies'] = ApiClient.convertToType(data['companies'], [CompanySummary]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CompanySummary>} companies
   */
  exports.prototype['companies'] = undefined;



  return exports;
}));


