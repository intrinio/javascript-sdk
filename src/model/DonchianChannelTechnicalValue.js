/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.0
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
    root.intrinioSDK.DonchianChannelTechnicalValue = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DonchianChannelTechnicalValue model module.
   * @module model/DonchianChannelTechnicalValue
   * @version 6.26.6
   */

  /**
   * Constructs a new <code>DonchianChannelTechnicalValue</code>.
   * The date_time, lower_bound, and uppoer_bound values of a Donchian Channel technical indicator calculation
   * @alias module:model/DonchianChannelTechnicalValue
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DonchianChannelTechnicalValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DonchianChannelTechnicalValue} obj Optional instance to populate.
   * @return {module:model/DonchianChannelTechnicalValue} The populated <code>DonchianChannelTechnicalValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date_time')) {
        obj['date_time'] = ApiClient.convertToType(data['date_time'], 'Date');
      }
      if (data.hasOwnProperty('lower_bound')) {
        obj['lower_bound'] = ApiClient.convertToType(data['lower_bound'], 'Number');
      }
      if (data.hasOwnProperty('upper_bound')) {
        obj['upper_bound'] = ApiClient.convertToType(data['upper_bound'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date_time of the observation
   * @member {Date} date_time
   */
  exports.prototype['date_time'] = undefined;
  /**
   * The lower bound value of the Donchian Channel calculation
   * @member {Number} lower_bound
   */
  exports.prototype['lower_bound'] = undefined;
  /**
   * The upper bound value of the Donchian Channel calculation
   * @member {Number} upper_bound
   */
  exports.prototype['upper_bound'] = undefined;



  return exports;
}));


