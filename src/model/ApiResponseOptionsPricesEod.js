/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.30.0
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
    define(['ApiClient', 'model/OptionEod', 'model/OptionPriceEod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionEod'), require('./OptionPriceEod'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOptionsPricesEod = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionEod, root.intrinioSDK.OptionPriceEod);
  }
}(this, function(ApiClient, OptionEod, OptionPriceEod) {
  'use strict';




  /**
   * The ApiResponseOptionsPricesEod model module.
   * @module model/ApiResponseOptionsPricesEod
   * @version 6.22.2
   */

  /**
   * Constructs a new <code>ApiResponseOptionsPricesEod</code>.
   * @alias module:model/ApiResponseOptionsPricesEod
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseOptionsPricesEod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOptionsPricesEod} obj Optional instance to populate.
   * @return {module:model/ApiResponseOptionsPricesEod} The populated <code>ApiResponseOptionsPricesEod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [OptionPriceEod]);
      }
      if (data.hasOwnProperty('option')) {
        obj['option'] = OptionEod.constructFromObject(data['option']);
      }
    }
    return obj;
  }

  /**
   * A list of options prices with the given symbol
   * @member {Array.<module:model/OptionPriceEod>} prices
   */
  exports.prototype['prices'] = undefined;
  /**
   * @member {module:model/OptionEod} option
   */
  exports.prototype['option'] = undefined;



  return exports;
}));


