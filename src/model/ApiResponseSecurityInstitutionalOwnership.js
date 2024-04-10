/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.6
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
    define(['ApiClient', 'model/InstitutionalOwnership'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstitutionalOwnership'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSecurityInstitutionalOwnership = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.InstitutionalOwnership);
  }
}(this, function(ApiClient, InstitutionalOwnership) {
  'use strict';




  /**
   * The ApiResponseSecurityInstitutionalOwnership model module.
   * @module model/ApiResponseSecurityInstitutionalOwnership
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>ApiResponseSecurityInstitutionalOwnership</code>.
   * @alias module:model/ApiResponseSecurityInstitutionalOwnership
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseSecurityInstitutionalOwnership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityInstitutionalOwnership} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityInstitutionalOwnership} The populated <code>ApiResponseSecurityInstitutionalOwnership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ownership')) {
        obj['ownership'] = ApiClient.convertToType(data['ownership'], [InstitutionalOwnership]);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InstitutionalOwnership>} ownership
   */
  exports.prototype['ownership'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


