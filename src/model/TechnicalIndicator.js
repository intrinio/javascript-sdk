/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.70.0
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
    root.intrinioSDK.TechnicalIndicator = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TechnicalIndicator model module.
   * @module model/TechnicalIndicator
   * @version 6.31.0
   */

  /**
   * Constructs a new <code>TechnicalIndicator</code>.
   * The name and symbol of the Technical Indicator
   * @alias module:model/TechnicalIndicator
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TechnicalIndicator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TechnicalIndicator} obj Optional instance to populate.
   * @return {module:model/TechnicalIndicator} The populated <code>TechnicalIndicator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the Technical Indicator
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The symbol of the Technical Indicator
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;



  return exports;
}));


