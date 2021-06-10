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
    define(['ApiClient', 'model/SecurityScreenResultData', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecurityScreenResultData'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.SecurityScreenResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecurityScreenResultData, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecurityScreenResultData, SecuritySummary) {
  'use strict';




  /**
   * The SecurityScreenResult model module.
   * @module model/SecurityScreenResult
   * @version 5.13.1
   */

  /**
   * Constructs a new <code>SecurityScreenResult</code>.
   * A security that matches the screen and its corresponding screened properties
   * @alias module:model/SecurityScreenResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SecurityScreenResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityScreenResult} obj Optional instance to populate.
   * @return {module:model/SecurityScreenResult} The populated <code>SecurityScreenResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SecurityScreenResultData]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * @member {Array.<module:model/SecurityScreenResultData>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


