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
    root.intrinioSDK.ZacksEBITDAConsensus = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksEBITDAConsensus model module.
   * @module model/ZacksEBITDAConsensus
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>ZacksEBITDAConsensus</code>.
   * Zacks estimates for EBITDA, EBITDA margin, EBIT, Enterprise Value, Cash Flow Per Share, and Pretax Income
   * @alias module:model/ZacksEBITDAConsensus
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ZacksEBITDAConsensus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksEBITDAConsensus} obj Optional instance to populate.
   * @return {module:model/ZacksEBITDAConsensus} The populated <code>ZacksEBITDAConsensus</code> instance.
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
      if (data.hasOwnProperty('estimate_year')) {
        obj['estimate_year'] = ApiClient.convertToType(data['estimate_year'], 'Number');
      }
      if (data.hasOwnProperty('estimate_month')) {
        obj['estimate_month'] = ApiClient.convertToType(data['estimate_month'], 'Number');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('consensus_type')) {
        obj['consensus_type'] = ApiClient.convertToType(data['consensus_type'], 'String');
      }
      if (data.hasOwnProperty('estimate_count')) {
        obj['estimate_count'] = ApiClient.convertToType(data['estimate_count'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
      }
      if (data.hasOwnProperty('std_dev')) {
        obj['std_dev'] = ApiClient.convertToType(data['std_dev'], 'Number');
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
   * Fiscal year of the estimate
   * @member {Number} estimate_year
   */
  exports.prototype['estimate_year'] = undefined;
  /**
   * Fiscal month of the estimate
   * @member {Number} estimate_month
   */
  exports.prototype['estimate_month'] = undefined;
  /**
   * Whether the estimate year and month are fiscal year (fy) or quarter (fq)
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * The type of estimate (ebitda, ebitda, ebit, enterprise_value, cash_flow_per_share, pretax_income)
   * @member {String} consensus_type
   */
  exports.prototype['consensus_type'] = undefined;
  /**
   * The number of estimates
   * @member {Number} estimate_count
   */
  exports.prototype['estimate_count'] = undefined;
  /**
   * The highest estimate
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The lowest estimate
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The mean value of all estimates
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The standard deviation of all estimates
   * @member {Number} std_dev
   */
  exports.prototype['std_dev'] = undefined;



  return exports;
}));


