/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.2
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
    root.intrinioSDK.OptionSnapshotGroup = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionSnapshotGroup model module.
   * @module model/OptionSnapshotGroup
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>OptionSnapshotGroup</code>.
   * An options snapshot group contains all options snapshot parts for a given point in time.
   * @alias module:model/OptionSnapshotGroup
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OptionSnapshotGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionSnapshotGroup} obj Optional instance to populate.
   * @return {module:model/OptionSnapshotGroup} The populated <code>OptionSnapshotGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], [Object]);
      }
    }
    return obj;
  }

  /**
   * The UTC timestamp of this snapshot group.
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * List of all the snapshot parts of this group.
   * @member {Array.<Object>} files
   */
  exports.prototype['files'] = undefined;



  return exports;
}));


