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
    define(['ApiClient', 'model/OptionPriceRealtime', 'model/OptionRealtime', 'model/OptionStatsRealtime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionPriceRealtime'), require('./OptionRealtime'), require('./OptionStatsRealtime'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOptionsPriceRealtime = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionPriceRealtime, root.intrinioSDK.OptionRealtime, root.intrinioSDK.OptionStatsRealtime);
  }
}(this, function(ApiClient, OptionPriceRealtime, OptionRealtime, OptionStatsRealtime) {
  'use strict';




  /**
   * The ApiResponseOptionsPriceRealtime model module.
   * @module model/ApiResponseOptionsPriceRealtime
   * @version 5.20.0
   */

  /**
   * Constructs a new <code>ApiResponseOptionsPriceRealtime</code>.
   * @alias module:model/ApiResponseOptionsPriceRealtime
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseOptionsPriceRealtime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOptionsPriceRealtime} obj Optional instance to populate.
   * @return {module:model/ApiResponseOptionsPriceRealtime} The populated <code>ApiResponseOptionsPriceRealtime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('price')) {
        obj['price'] = OptionPriceRealtime.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = OptionStatsRealtime.constructFromObject(data['stats']);
      }
      if (data.hasOwnProperty('option')) {
        obj['option'] = OptionRealtime.constructFromObject(data['option']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OptionPriceRealtime} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {module:model/OptionStatsRealtime} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {module:model/OptionRealtime} option
   */
  exports.prototype['option'] = undefined;



  return exports;
}));


