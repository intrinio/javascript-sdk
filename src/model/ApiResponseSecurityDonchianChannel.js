/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.29.0
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
    define(['ApiClient', 'model/DonchianChannelTechnicalValue', 'model/SecuritySummary', 'model/TechnicalIndicator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DonchianChannelTechnicalValue'), require('./SecuritySummary'), require('./TechnicalIndicator'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSecurityDonchianChannel = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.DonchianChannelTechnicalValue, root.intrinioSDK.SecuritySummary, root.intrinioSDK.TechnicalIndicator);
  }
}(this, function(ApiClient, DonchianChannelTechnicalValue, SecuritySummary, TechnicalIndicator) {
  'use strict';




  /**
   * The ApiResponseSecurityDonchianChannel model module.
   * @module model/ApiResponseSecurityDonchianChannel
   * @version 6.21.1
   */

  /**
   * Constructs a new <code>ApiResponseSecurityDonchianChannel</code>.
   * The Donchian Channel calculations for the Stock Prices of the given Security
   * @alias module:model/ApiResponseSecurityDonchianChannel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ApiResponseSecurityDonchianChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSecurityDonchianChannel} obj Optional instance to populate.
   * @return {module:model/ApiResponseSecurityDonchianChannel} The populated <code>ApiResponseSecurityDonchianChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('technicals')) {
        obj['technicals'] = ApiClient.convertToType(data['technicals'], [DonchianChannelTechnicalValue]);
      }
      if (data.hasOwnProperty('indicator')) {
        obj['indicator'] = TechnicalIndicator.constructFromObject(data['indicator']);
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DonchianChannelTechnicalValue>} technicals
   */
  exports.prototype['technicals'] = undefined;
  /**
   * The name and symbol of the technical indicator
   * @member {module:model/TechnicalIndicator} indicator
   */
  exports.prototype['indicator'] = undefined;
  /**
   * The Security of the Stock Price
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


