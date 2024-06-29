/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.62.3
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
    root.intrinioSDK.CompanyPublicFloat = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompanyPublicFloat model module.
   * @module model/CompanyPublicFloat
   * @version 6.27.4
   */

  /**
   * Constructs a new <code>CompanyPublicFloat</code>.
   * A public float data point.
   * @alias module:model/CompanyPublicFloat
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CompanyPublicFloat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanyPublicFloat} obj Optional instance to populate.
   * @return {module:model/CompanyPublicFloat} The populated <code>CompanyPublicFloat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
      if (data.hasOwnProperty('public_float_value')) {
        obj['public_float_value'] = ApiClient.convertToType(data['public_float_value'], 'Number');
      }
      if (data.hasOwnProperty('public_float_shares')) {
        obj['public_float_shares'] = ApiClient.convertToType(data['public_float_shares'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date of the public float.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The filing date of the public float.
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;
  /**
   * The dollar value for company float.
   * @member {Number} public_float_value
   */
  exports.prototype['public_float_value'] = undefined;
  /**
   * The public shares for the company.
   * @member {Number} public_float_shares
   */
  exports.prototype['public_float_shares'] = undefined;



  return exports;
}));


