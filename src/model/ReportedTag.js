/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.42.0
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
    root.intrinioSDK.ReportedTag = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportedTag model module.
   * @module model/ReportedTag
   * @version 6.24.0
   */

  /**
   * Constructs a new <code>ReportedTag</code>.
   * An XBRL tag as-reported by the company on the as-reported financial statement
   * @alias module:model/ReportedTag
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ReportedTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportedTag} obj Optional instance to populate.
   * @return {module:model/ReportedTag} The populated <code>ReportedTag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('abstract')) {
        obj['abstract'] = ApiClient.convertToType(data['abstract'], 'Boolean');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
      if (data.hasOwnProperty('depth')) {
        obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The tag code
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * The tag name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether the tag represents a credit or debit
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * The unit of the tag
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * If true, the tag is an abstract and does not represent a nominal value
   * @member {Boolean} abstract
   */
  exports.prototype['abstract'] = undefined;
  /**
   * The vertical sequence of the tag when displayed in the financial statement
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * The horizontal depth of the tag when displayed in the financial statement
   * @member {Number} depth
   */
  exports.prototype['depth'] = undefined;



  return exports;
}));


