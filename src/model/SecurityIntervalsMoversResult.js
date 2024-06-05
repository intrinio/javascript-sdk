/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.61.1
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
    define(['ApiClient', 'model/SecurityIntervalMover'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecurityIntervalMover'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.SecurityIntervalsMoversResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecurityIntervalMover);
  }
}(this, function(ApiClient, SecurityIntervalMover) {
  'use strict';




  /**
   * The SecurityIntervalsMoversResult model module.
   * @module model/SecurityIntervalsMoversResult
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>SecurityIntervalsMoversResult</code>.
   * An security intervals result contains all security intervals corresponding to the provided query.
   * @alias module:model/SecurityIntervalsMoversResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SecurityIntervalsMoversResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityIntervalsMoversResult} obj Optional instance to populate.
   * @return {module:model/SecurityIntervalsMoversResult} The populated <code>SecurityIntervalsMoversResult</code> instance.
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
        obj['intervals'] = ApiClient.convertToType(data['intervals'], [SecurityIntervalMover]);
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
   * @member {module:model/SecurityIntervalsMoversResult.SizeEnum} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Array of all the intervals in the result.
   * @member {Array.<module:model/SecurityIntervalMover>} intervals
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


