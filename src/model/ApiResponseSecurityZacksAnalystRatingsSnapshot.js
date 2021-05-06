/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.21.1
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
    define(['ApiClient', 'model/SecuritySummary', 'model/ZacksAnalystRatingSnapshot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'), require('./ZacksAnalystRatingSnapshot'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSecurityZacksAnalystRatingsSnapshot = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary, root.intrinioSDK.ZacksAnalystRatingSnapshot);
  }
}(this, function(ApiClient, SecuritySummary, ZacksAnalystRatingSnapshot) {
  'use strict';




  /**
   * The ApiResponseSecurityZacksAnalystRatingsSnapshot model module.
   * @module model/ApiResponseSecurityZacksAnalystRatingsSnapshot
   * @version 5.11.0
   */

  /**
   * Constructs a new <code>ApiResponseSecurityZacksAnalystRatingsSnapshot</code>.
   * @alias module:model/ApiResponseSecurityZacksAnalystRatingsSnapshot
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseSecurityZacksAnalystRatingsSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityZacksAnalystRatingsSnapshot} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityZacksAnalystRatingsSnapshot} The populated <code>ApiResponseSecurityZacksAnalystRatingsSnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('snapshots')) {
        obj['snapshots'] = ApiClient.convertToType(data['snapshots'], [ZacksAnalystRatingSnapshot]);
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ZacksAnalystRatingSnapshot>} snapshots
   */
  exports.prototype['snapshots'] = undefined;
  /**
   * The Security resolved from the given identifier
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


