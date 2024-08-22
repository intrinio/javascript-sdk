/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.66.2
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
    define(['ApiClient', 'model/OptionUnusualTrade'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionUnusualTrade'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOptionsUnusualActivity = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionUnusualTrade);
  }
}(this, function(ApiClient, OptionUnusualTrade) {
  'use strict';




  /**
   * The ApiResponseOptionsUnusualActivity model module.
   * @module model/ApiResponseOptionsUnusualActivity
   * @version 6.30.0
   */

  /**
   * Constructs a new <code>ApiResponseOptionsUnusualActivity</code>.
   * @alias module:model/ApiResponseOptionsUnusualActivity
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseOptionsUnusualActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOptionsUnusualActivity} obj Optional instance to populate.
   * @return {module:model/ApiResponseOptionsUnusualActivity} The populated <code>ApiResponseOptionsUnusualActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trades')) {
        obj['trades'] = ApiClient.convertToType(data['trades'], [OptionUnusualTrade]);
      }
    }
    return obj;
  }

  /**
   * A list of unusual trades for a given company identifier
   * @member {Array.<module:model/OptionUnusualTrade>} trades
   */
  exports.prototype['trades'] = undefined;



  return exports;
}));


