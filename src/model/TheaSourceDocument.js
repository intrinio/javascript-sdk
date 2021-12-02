/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.6
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
    root.intrinioSDK.TheaSourceDocument = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TheaSourceDocument model module.
   * @module model/TheaSourceDocument
   * @version 5.17.0
   */

  /**
   * Constructs a new <code>TheaSourceDocument</code>.
   * Document from which Thea answer data is sourced
   * @alias module:model/TheaSourceDocument
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TheaSourceDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TheaSourceDocument} obj Optional instance to populate.
   * @return {module:model/TheaSourceDocument} The populated <code>TheaSourceDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Object]);
      }
    }
    return obj;
  }

  /**
   * The unique id for the Thea source document
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Entity identifying tags associated with the source document
   * @member {Array.<Object>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));

