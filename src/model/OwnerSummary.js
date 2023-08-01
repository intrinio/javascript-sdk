/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.45.0
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
    root.intrinioSDK.OwnerSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OwnerSummary model module.
   * @module model/OwnerSummary
   * @version 6.25.0
   */

  /**
   * Constructs a new <code>OwnerSummary</code>.
   * The summary of an insider and institutional owner of securities covered by Intrinio
   * @alias module:model/OwnerSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OwnerSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OwnerSummary} obj Optional instance to populate.
   * @return {module:model/OwnerSummary} The populated <code>OwnerSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owner_cik')) {
        obj['owner_cik'] = ApiClient.convertToType(data['owner_cik'], 'String');
      }
      if (data.hasOwnProperty('owner_name')) {
        obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Central Index Key issued by the SEC, which is the unique identifier all owner filings
   * @member {String} owner_cik
   */
  exports.prototype['owner_cik'] = undefined;
  /**
   * The name of the owner
   * @member {String} owner_name
   */
  exports.prototype['owner_name'] = undefined;



  return exports;
}));


