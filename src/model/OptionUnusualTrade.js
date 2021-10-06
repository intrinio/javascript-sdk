/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionUnusualTrade = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionUnusualTrade model module.
   * @module model/OptionUnusualTrade
   * @version 5.16.0
   */

  /**
   * Constructs a new <code>OptionUnusualTrade</code>.
   * A large market order that is broken into a collection of smaller orders to take advantage of all contracts and prices offered across all exchanges.
   * @alias module:model/OptionUnusualTrade
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>OptionUnusualTrade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionUnusualTrade} obj Optional instance to populate.
   * @return {module:model/OptionUnusualTrade} The populated <code>OptionUnusualTrade</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('total_value')) {
        obj['total_value'] = ApiClient.convertToType(data['total_value'], 'Number');
      }
      if (data.hasOwnProperty('total_size')) {
        obj['total_size'] = ApiClient.convertToType(data['total_size'], 'Number');
      }
      if (data.hasOwnProperty('average_price')) {
        obj['average_price'] = ApiClient.convertToType(data['average_price'], 'Number');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
    }
    return obj;
  }

  /**
   * The underlying option security symbol for the trade
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * The UTC timestamp of order placement
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The type of unusual trade
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The aggregated value of all option contract premiums included in the trade\\
   * @member {Number} total_value
   */
  exports.prototype['total_value'] = undefined;
  /**
   * The total number of contracts involved in a single transaction
   * @member {Number} total_size
   */
  exports.prototype['total_size'] = undefined;
  /**
   * The average premium paid per option contract
   * @member {Number} average_price
   */
  exports.prototype['average_price'] = undefined;
  /**
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;



  return exports;
}));


