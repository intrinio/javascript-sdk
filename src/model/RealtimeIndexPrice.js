/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.72.2
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
    define(['ApiClient', 'model/RealtimeIndexPriceIndex'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeIndexPriceIndex'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.RealtimeIndexPrice = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.RealtimeIndexPriceIndex);
  }
}(this, function(ApiClient, RealtimeIndexPriceIndex) {
  'use strict';




  /**
   * The RealtimeIndexPrice model module.
   * @module model/RealtimeIndexPrice
   * @version 6.32.0
   */

  /**
   * Constructs a new <code>RealtimeIndexPrice</code>.
   * The realtime price of an index.
   * @alias module:model/RealtimeIndexPrice
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RealtimeIndexPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeIndexPrice} obj Optional instance to populate.
   * @return {module:model/RealtimeIndexPrice} The populated <code>RealtimeIndexPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'Number');
      }
      if (data.hasOwnProperty('last_time')) {
        obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = RealtimeIndexPriceIndex.constructFromObject(data['index']);
      }
    }
    return obj;
  }

  /**
   * The last price
   * @member {Number} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * The timestamp of the last price
   * @member {Date} last_time
   */
  exports.prototype['last_time'] = undefined;
  /**
   * @member {module:model/RealtimeIndexPriceIndex} index
   */
  exports.prototype['index'] = undefined;



  return exports;
}));


