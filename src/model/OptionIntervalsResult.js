/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.5
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
    define(['ApiClient', 'model/OptionInterval'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionInterval'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionIntervalsResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionInterval);
  }
}(this, function(ApiClient, OptionInterval) {
  'use strict';




  /**
   * The OptionIntervalsResult model module.
   * @module model/OptionIntervalsResult
   * @version 6.26.8
   */

  /**
   * Constructs a new <code>OptionIntervalsResult</code>.
   * An options intervals result contains all options intervals corresponding to the provided query.
   * @alias module:model/OptionIntervalsResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OptionIntervalsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionIntervalsResult} obj Optional instance to populate.
   * @return {module:model/OptionIntervalsResult} The populated <code>OptionIntervalsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('intervals')) {
        obj['intervals'] = ApiClient.convertToType(data['intervals'], [OptionInterval]);
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
    }
    return obj;
  }

  /**
   * Array of all the intervals in the result.
   * @member {Array.<module:model/OptionInterval>} intervals
   */
  exports.prototype['intervals'] = undefined;
  /**
   * The option contract for the intervals
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * The size of the time span for the interval.
   * @member {module:model/OptionIntervalsResult.SizeEnum} size
   */
  exports.prototype['size'] = undefined;


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


