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
    define(['ApiClient', 'model/OptionEod', 'model/OptionPriceEod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionEod'), require('./OptionPriceEod'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionChainEod = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionEod, root.intrinioSDK.OptionPriceEod);
  }
}(this, function(ApiClient, OptionEod, OptionPriceEod) {
  'use strict';




  /**
   * The OptionChainEod model module.
   * @module model/OptionChainEod
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>OptionChainEod</code>.
   * An realtime option chain contains an options contract and corresponding price data for that contract on a given date.
   * @alias module:model/OptionChainEod
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OptionChainEod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionChainEod} obj Optional instance to populate.
   * @return {module:model/OptionChainEod} The populated <code>OptionChainEod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = OptionEod.constructFromObject(data['option']);
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = OptionPriceEod.constructFromObject(data['prices']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OptionEod} option
   */
  exports.prototype['option'] = undefined;
  /**
   * @member {module:model/OptionPriceEod} prices
   */
  exports.prototype['prices'] = undefined;



  return exports;
}));


