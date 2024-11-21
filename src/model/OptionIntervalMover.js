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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionIntervalMover = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionIntervalMover model module.
   * @module model/OptionIntervalMover
   * @version 6.33.0
   */

  /**
   * Constructs a new <code>OptionIntervalMover</code>.
   * An options interval data point.
   * @alias module:model/OptionIntervalMover
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>OptionIntervalMover</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionIntervalMover} obj Optional instance to populate.
   * @return {module:model/OptionIntervalMover} The populated <code>OptionIntervalMover</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('change')) {
        obj['change'] = ApiClient.convertToType(data['change'], 'Number');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('average')) {
        obj['average'] = ApiClient.convertToType(data['average'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The option contract for the intervals
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * The ratio of Close minus Open to Open.
   * @member {Number} change
   */
  exports.prototype['change'] = undefined;
  /**
   * The first traded contract price in this interval.
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The highest traded contract price in this interval.
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The lowest traded contract price in this interval.
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The last traded contract price in this interval.
   * @member {Number} close
   */
  exports.prototype['close'] = undefined;
  /**
   * The volume of contract trades in this interval.
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The volume weighted average price of contract trades in this interval.
   * @member {Number} average
   */
  exports.prototype['average'] = undefined;



  return exports;
}));


