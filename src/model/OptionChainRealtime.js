/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.48.1
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
    define(['ApiClient', 'model/OptionPriceRealtime', 'model/OptionPriceRealtimeExtended', 'model/OptionRealtime', 'model/OptionStatsRealtime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionPriceRealtime'), require('./OptionPriceRealtimeExtended'), require('./OptionRealtime'), require('./OptionStatsRealtime'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionChainRealtime = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionPriceRealtime, root.intrinioSDK.OptionPriceRealtimeExtended, root.intrinioSDK.OptionRealtime, root.intrinioSDK.OptionStatsRealtime);
  }
}(this, function(ApiClient, OptionPriceRealtime, OptionPriceRealtimeExtended, OptionRealtime, OptionStatsRealtime) {
  'use strict';




  /**
   * The OptionChainRealtime model module.
   * @module model/OptionChainRealtime
   * @version 6.26.5
   */

  /**
   * Constructs a new <code>OptionChainRealtime</code>.
   * An realtime option chain contains an options contract and corresponding price data for that contract on a given date.
   * @alias module:model/OptionChainRealtime
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OptionChainRealtime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionChainRealtime} obj Optional instance to populate.
   * @return {module:model/OptionChainRealtime} The populated <code>OptionChainRealtime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = OptionRealtime.constructFromObject(data['option']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = OptionPriceRealtime.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = OptionStatsRealtime.constructFromObject(data['stats']);
      }
      if (data.hasOwnProperty('extended_price')) {
        obj['extended_price'] = OptionPriceRealtimeExtended.constructFromObject(data['extended_price']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OptionRealtime} option
   */
  exports.prototype['option'] = undefined;
  /**
   * @member {module:model/OptionPriceRealtime} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {module:model/OptionStatsRealtime} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {module:model/OptionPriceRealtimeExtended} extended_price
   */
  exports.prototype['extended_price'] = undefined;



  return exports;
}));


