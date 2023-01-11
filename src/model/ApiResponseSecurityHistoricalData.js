/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.34.0
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
    define(['ApiClient', 'model/HistoricalData', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HistoricalData'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSecurityHistoricalData = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.HistoricalData, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, HistoricalData, SecuritySummary) {
  'use strict';




  /**
   * The ApiResponseSecurityHistoricalData model module.
   * @module model/ApiResponseSecurityHistoricalData
   * @version 6.22.3
   */

  /**
   * Constructs a new <code>ApiResponseSecurityHistoricalData</code>.
   * @alias module:model/ApiResponseSecurityHistoricalData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseSecurityHistoricalData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityHistoricalData} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityHistoricalData} The populated <code>ApiResponseSecurityHistoricalData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('historical_data')) {
        obj['historical_data'] = ApiClient.convertToType(data['historical_data'], [HistoricalData]);
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/HistoricalData>} historical_data
   */
  exports.prototype['historical_data'] = undefined;
  /**
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


