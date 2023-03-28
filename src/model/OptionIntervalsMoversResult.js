/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.39.2
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
    define(['ApiClient', 'model/OptionIntervalMover'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionIntervalMover'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionIntervalsMoversResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionIntervalMover);
  }
}(this, function(ApiClient, OptionIntervalMover) {
  'use strict';




  /**
   * The OptionIntervalsMoversResult model module.
   * @module model/OptionIntervalsMoversResult
   * @version 6.23.1
   */

  /**
   * Constructs a new <code>OptionIntervalsMoversResult</code>.
   * An options intervals result contains all options intervals corresponding to the provided query.
   * @alias module:model/OptionIntervalsMoversResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OptionIntervalsMoversResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionIntervalsMoversResult} obj Optional instance to populate.
   * @return {module:model/OptionIntervalsMoversResult} The populated <code>OptionIntervalsMoversResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('open_time')) {
        obj['open_time'] = ApiClient.convertToType(data['open_time'], 'Date');
      }
      if (data.hasOwnProperty('close_time')) {
        obj['close_time'] = ApiClient.convertToType(data['close_time'], 'Date');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('intervals')) {
        obj['intervals'] = ApiClient.convertToType(data['intervals'], [OptionIntervalMover]);
      }
    }
    return obj;
  }

  /**
   * The UTC timestamp for the time this interval opened.
   * @member {Date} open_time
   */
  exports.prototype['open_time'] = undefined;
  /**
   * The UTC timestamp for the time this interval closed.
   * @member {Date} close_time
   */
  exports.prototype['close_time'] = undefined;
  /**
   * The size of the time span for the interval.
   * @member {module:model/OptionIntervalsMoversResult.SizeEnum} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Array of all the intervals in the result.
   * @member {Array.<module:model/OptionIntervalMover>} intervals
   */
  exports.prototype['intervals'] = undefined;


  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "SixtyMinute"
     * @const
     */
    "SixtyMinute": "SixtyMinute",
    /**
     * value: "ThirtyMinute"
     * @const
     */
    "ThirtyMinute": "ThirtyMinute",
    /**
     * value: "FifteenMinute"
     * @const
     */
    "FifteenMinute": "FifteenMinute",
    /**
     * value: "TenMinute"
     * @const
     */
    "TenMinute": "TenMinute",
    /**
     * value: "FiveMinute"
     * @const
     */
    "FiveMinute": "FiveMinute",
    /**
     * value: "OneMinute"
     * @const
     */
    "OneMinute": "OneMinute"  };


  return exports;
}));


