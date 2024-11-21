/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.75.0
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
    define(['ApiClient', 'model/ZacksLongTermGrowthRate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZacksLongTermGrowthRate'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseZacksLongTermGrowthRates = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ZacksLongTermGrowthRate);
  }
}(this, function(ApiClient, ZacksLongTermGrowthRate) {
  'use strict';




  /**
   * The ApiResponseZacksLongTermGrowthRates model module.
   * @module model/ApiResponseZacksLongTermGrowthRates
   * @version 6.33.0
   */

  /**
   * Constructs a new <code>ApiResponseZacksLongTermGrowthRates</code>.
   * @alias module:model/ApiResponseZacksLongTermGrowthRates
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseZacksLongTermGrowthRates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseZacksLongTermGrowthRates} obj Optional instance to populate.
   * @return {module:model/ApiResponseZacksLongTermGrowthRates} The populated <code>ApiResponseZacksLongTermGrowthRates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('long_term_growth_estimates')) {
        obj['long_term_growth_estimates'] = ApiClient.convertToType(data['long_term_growth_estimates'], [ZacksLongTermGrowthRate]);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * Zacks latest long term growth rates
   * @member {Array.<module:model/ZacksLongTermGrowthRate>} long_term_growth_estimates
   */
  exports.prototype['long_term_growth_estimates'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


