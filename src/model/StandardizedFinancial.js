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
    define(['ApiClient', 'model/DataTagSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataTagSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.StandardizedFinancial = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.DataTagSummary);
  }
}(this, function(ApiClient, DataTagSummary) {
  'use strict';




  /**
   * The StandardizedFinancial model module.
   * @module model/StandardizedFinancial
   * @version 5.13.1
   */

  /**
   * Constructs a new <code>StandardizedFinancial</code>.
   * Professional-grade historical financial data for a Company. This data is standardized, cleansed and verified to ensure the highest quality data sourced directly from the XBRL financial statements. The primary purpose of standardized financials are to facilitate comparability across a single company’s fundamentals and across all companies fundamentals. For example, it is possible to compare total revenues between two companies as of a certain point in time, or within a single company across multiple time periods. This is not possible using the as-reported financial statements because of the inherent complexity of reporting standards.
   * @alias module:model/StandardizedFinancial
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StandardizedFinancial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardizedFinancial} obj Optional instance to populate.
   * @return {module:model/StandardizedFinancial} The populated <code>StandardizedFinancial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data_tag')) {
        obj['data_tag'] = DataTagSummary.constructFromObject(data['data_tag']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DataTagSummary} data_tag
   */
  exports.prototype['data_tag'] = undefined;
  /**
   * The value for the Data Tag within the scope of the Fundamental
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


