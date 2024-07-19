/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.1
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
    root.intrinioSDK.ZacksForwardPE = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksForwardPE model module.
   * @module model/ZacksForwardPE
   * @version 6.28.0
   */

  /**
   * Constructs a new <code>ZacksForwardPE</code>.
   * Zacks Forward PE Estimates
   * @alias module:model/ZacksForwardPE
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ZacksForwardPE</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksForwardPE} obj Optional instance to populate.
   * @return {module:model/ZacksForwardPE} The populated <code>ZacksForwardPE</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('forward_pe_year1')) {
        obj['forward_pe_year1'] = ApiClient.convertToType(data['forward_pe_year1'], 'Number');
      }
      if (data.hasOwnProperty('forward_pe_year2')) {
        obj['forward_pe_year2'] = ApiClient.convertToType(data['forward_pe_year2'], 'Number');
      }
      if (data.hasOwnProperty('forward_pe_year3')) {
        obj['forward_pe_year3'] = ApiClient.convertToType(data['forward_pe_year3'], 'Number');
      }
      if (data.hasOwnProperty('forward_pe_year4')) {
        obj['forward_pe_year4'] = ApiClient.convertToType(data['forward_pe_year4'], 'Number');
      }
      if (data.hasOwnProperty('forward_pe_year5')) {
        obj['forward_pe_year5'] = ApiClient.convertToType(data['forward_pe_year5'], 'Number');
      }
      if (data.hasOwnProperty('forward_peg_ratio_year1')) {
        obj['forward_peg_ratio_year1'] = ApiClient.convertToType(data['forward_peg_ratio_year1'], 'Number');
      }
      if (data.hasOwnProperty('last_ttm_eps')) {
        obj['last_ttm_eps'] = ApiClient.convertToType(data['last_ttm_eps'], 'Number');
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
   * The company name
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * The forward PE estimate for the first year
   * @member {Number} forward_pe_year1
   */
  exports.prototype['forward_pe_year1'] = undefined;
  /**
   * The forward PE estimate for the second year
   * @member {Number} forward_pe_year2
   */
  exports.prototype['forward_pe_year2'] = undefined;
  /**
   * The forward PE estimate for the third year
   * @member {Number} forward_pe_year3
   */
  exports.prototype['forward_pe_year3'] = undefined;
  /**
   * The forward PE estimate for the fourth year
   * @member {Number} forward_pe_year4
   */
  exports.prototype['forward_pe_year4'] = undefined;
  /**
   * The forward PE estimate for the fifth year
   * @member {Number} forward_pe_year5
   */
  exports.prototype['forward_pe_year5'] = undefined;
  /**
   * The forward PEG ratio for the first year
   * @member {Number} forward_peg_ratio_year1
   */
  exports.prototype['forward_peg_ratio_year1'] = undefined;
  /**
   * Trailing twelve months earnings per share
   * @member {Number} last_ttm_eps
   */
  exports.prototype['last_ttm_eps'] = undefined;



  return exports;
}));


