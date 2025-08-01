/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    define(['ApiClient', 'model/ReportedFinancialDimension', 'model/ReportedTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportedFinancialDimension'), require('./ReportedTag'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ReportedFinancial = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ReportedFinancialDimension, root.intrinioSDK.ReportedTag);
  }
}(this, function(ApiClient, ReportedFinancialDimension, ReportedTag) {
  'use strict';




  /**
   * The ReportedFinancial model module.
   * @module model/ReportedFinancial
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ReportedFinancial</code>.
   * A financial statement fact as-reported, directly from the financial statements of the XBRL filings from the company.
   * @alias module:model/ReportedFinancial
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ReportedFinancial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportedFinancial} obj Optional instance to populate.
   * @return {module:model/ReportedFinancial} The populated <code>ReportedFinancial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xbrl_tag')) {
        obj['xbrl_tag'] = ReportedTag.constructFromObject(data['xbrl_tag']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], [ReportedFinancialDimension]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReportedTag} xbrl_tag
   */
  exports.prototype['xbrl_tag'] = undefined;
  /**
   * The value reported for the XBRL Tag within the scope of the Fundamental
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The combination of XBRL axis and members that defines the dimensionalization of this fact (if any)
   * @member {Array.<module:model/ReportedFinancialDimension>} dimensions
   */
  exports.prototype['dimensions'] = undefined;



  return exports;
}));


