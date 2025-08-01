/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    root.intrinioSDK.ZacksInstitutionalHoldingCompanySummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksInstitutionalHoldingCompanySummary model module.
   * @module model/ZacksInstitutionalHoldingCompanySummary
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHoldingCompanySummary</code>.
   * The summary of a company instutionally owned sourced from Zacks.
   * @alias module:model/ZacksInstitutionalHoldingCompanySummary
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ZacksInstitutionalHoldingCompanySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHoldingCompanySummary} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHoldingCompanySummary} The populated <code>ZacksInstitutionalHoldingCompanySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Zacks common exchange ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company name of the stock listed
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Exhange where the stock is traded whose shares are held by the institution
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;



  return exports;
}));


