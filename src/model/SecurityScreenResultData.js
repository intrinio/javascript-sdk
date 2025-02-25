/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.91.1
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
    root.intrinioSDK.SecurityScreenResultData = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityScreenResultData model module.
   * @module model/SecurityScreenResultData
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>SecurityScreenResultData</code>.
   * @alias module:model/SecurityScreenResultData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SecurityScreenResultData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityScreenResultData} obj Optional instance to populate.
   * @return {module:model/SecurityScreenResultData} The populated <code>SecurityScreenResultData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('number_value')) {
        obj['number_value'] = ApiClient.convertToType(data['number_value'], 'String');
      }
      if (data.hasOwnProperty('text_value')) {
        obj['text_value'] = ApiClient.convertToType(data['text_value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The data tag that was screened-for
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * The numeric value for the tag
   * @member {String} number_value
   */
  exports.prototype['number_value'] = undefined;
  /**
   * The text value for the tag
   * @member {String} text_value
   */
  exports.prototype['text_value'] = undefined;



  return exports;
}));


