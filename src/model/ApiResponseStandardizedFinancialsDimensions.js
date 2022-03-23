/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.27.5
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
    define(['ApiClient', 'model/DataTagSummary', 'model/Fundamental', 'model/StandardizedFinancialsDimension'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataTagSummary'), require('./Fundamental'), require('./StandardizedFinancialsDimension'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseStandardizedFinancialsDimensions = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.DataTagSummary, root.intrinioSDK.Fundamental, root.intrinioSDK.StandardizedFinancialsDimension);
  }
}(this, function(ApiClient, DataTagSummary, Fundamental, StandardizedFinancialsDimension) {
  'use strict';




  /**
   * The ApiResponseStandardizedFinancialsDimensions model module.
   * @module model/ApiResponseStandardizedFinancialsDimensions
   * @version 5.20.0
   */

  /**
   * Constructs a new <code>ApiResponseStandardizedFinancialsDimensions</code>.
   * @alias module:model/ApiResponseStandardizedFinancialsDimensions
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseStandardizedFinancialsDimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseStandardizedFinancialsDimensions} obj Optional instance to populate.
   * @return {module:model/ApiResponseStandardizedFinancialsDimensions} The populated <code>ApiResponseStandardizedFinancialsDimensions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], [StandardizedFinancialsDimension]);
      }
      if (data.hasOwnProperty('data_tag')) {
        obj['data_tag'] = DataTagSummary.constructFromObject(data['data_tag']);
      }
      if (data.hasOwnProperty('fundamental')) {
        obj['fundamental'] = Fundamental.constructFromObject(data['fundamental']);
      }
    }
    return obj;
  }

  /**
   * The combination of XBRL axis and members that defines the dimensionalization of this fact (if any)
   * @member {Array.<module:model/StandardizedFinancialsDimension>} dimensions
   */
  exports.prototype['dimensions'] = undefined;
  /**
   * @member {module:model/DataTagSummary} data_tag
   */
  exports.prototype['data_tag'] = undefined;
  /**
   * @member {module:model/Fundamental} fundamental
   */
  exports.prototype['fundamental'] = undefined;



  return exports;
}));


