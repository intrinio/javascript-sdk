/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.76.3
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
    root.intrinioSDK.ReportedFinancialDimension = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportedFinancialDimension model module.
   * @module model/ReportedFinancialDimension
   * @version 6.34.0
   */

  /**
   * Constructs a new <code>ReportedFinancialDimension</code>.
   * An axis-member combination related to a reported XBRL fact, which denotes a facet of an XBRL dimension.
   * @alias module:model/ReportedFinancialDimension
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReportedFinancialDimension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportedFinancialDimension} obj Optional instance to populate.
   * @return {module:model/ReportedFinancialDimension} The populated <code>ReportedFinancialDimension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('axis')) {
        obj['axis'] = ApiClient.convertToType(data['axis'], 'String');
      }
      if (data.hasOwnProperty('member')) {
        obj['member'] = ApiClient.convertToType(data['member'], 'String');
      }
    }
    return obj;
  }

  /**
   * The axis of the dimension
   * @member {String} axis
   */
  exports.prototype['axis'] = undefined;
  /**
   * The member of the axis
   * @member {String} member
   */
  exports.prototype['member'] = undefined;



  return exports;
}));


