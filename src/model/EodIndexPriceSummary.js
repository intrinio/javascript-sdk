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
    root.intrinioSDK.EodIndexPriceSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EodIndexPriceSummary model module.
   * @module model/EodIndexPriceSummary
   * @version 6.31.0
   */

  /**
   * Constructs a new <code>EodIndexPriceSummary</code>.
   * The end of day price of an index.
   * @alias module:model/EodIndexPriceSummary
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>EodIndexPriceSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EodIndexPriceSummary} obj Optional instance to populate.
   * @return {module:model/EodIndexPriceSummary} The populated <code>EodIndexPriceSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Number');
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
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The close price
   * @member {Number} close
   */
  exports.prototype['close'] = undefined;
  /**
   * The open price
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The high price
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The low price
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The volume
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The date of the pricing data.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;



  return exports;
}));


