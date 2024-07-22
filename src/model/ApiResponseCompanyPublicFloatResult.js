/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.2
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
    define(['ApiClient', 'model/CompanyPublicFloat', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanyPublicFloat'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCompanyPublicFloatResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanyPublicFloat, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanyPublicFloat, CompanySummary) {
  'use strict';




  /**
   * The ApiResponseCompanyPublicFloatResult model module.
   * @module model/ApiResponseCompanyPublicFloatResult
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>ApiResponseCompanyPublicFloatResult</code>.
   * An company public floats result contains all public floats corresponding to the provided query.
   * @alias module:model/ApiResponseCompanyPublicFloatResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseCompanyPublicFloatResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCompanyPublicFloatResult} obj Optional instance to populate.
   * @return {module:model/ApiResponseCompanyPublicFloatResult} The populated <code>ApiResponseCompanyPublicFloatResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('public_floats')) {
        obj['public_floats'] = ApiClient.convertToType(data['public_floats'], [CompanyPublicFloat]);
      }
    }
    return obj;
  }

  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;
  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Array of all the public floats in this page of the result.
   * @member {Array.<module:model/CompanyPublicFloat>} public_floats
   */
  exports.prototype['public_floats'] = undefined;



  return exports;
}));


