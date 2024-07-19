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
    define(['ApiClient', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksTargetPriceConsensus = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The ZacksTargetPriceConsensus model module.
   * @module model/ZacksTargetPriceConsensus
   * @version 6.28.0
   */

  /**
   * Constructs a new <code>ZacksTargetPriceConsensus</code>.
   * Zacks target price consensus estimates from analysts for thousands of stocks. Zacks storied research team aggregates and validates the estimates.  Each Growth Rate includes metadata about the corresponding Company.
   * @alias module:model/ZacksTargetPriceConsensus
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ZacksTargetPriceConsensus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksTargetPriceConsensus} obj Optional instance to populate.
   * @return {module:model/ZacksTargetPriceConsensus} The populated <code>ZacksTargetPriceConsensus</code> instance.
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
      if (data.hasOwnProperty('industry_group_number')) {
        obj['industry_group_number'] = ApiClient.convertToType(data['industry_group_number'], 'String');
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
      if (data.hasOwnProperty('standard_deviation')) {
        obj['standard_deviation'] = ApiClient.convertToType(data['standard_deviation'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('most_recent_date')) {
        obj['most_recent_date'] = ApiClient.convertToType(data['most_recent_date'], 'Date');
      }
      if (data.hasOwnProperty('median')) {
        obj['median'] = ApiClient.convertToType(data['median'], 'Number');
      }
      if (data.hasOwnProperty('raised')) {
        obj['raised'] = ApiClient.convertToType(data['raised'], 'Number');
      }
      if (data.hasOwnProperty('lowered')) {
        obj['lowered'] = ApiClient.convertToType(data['lowered'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
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
   * The Zacks industry group number
   * @member {String} industry_group_number
   */
  exports.prototype['industry_group_number'] = undefined;
  /**
   * The high target price estimate
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * The low target price estimate
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * The mean target price estimate
   * @member {Number} mean
   */
  exports.prototype['mean'] = undefined;
  /**
   * The standard deviation of target price estimates
   * @member {Number} standard_deviation
   */
  exports.prototype['standard_deviation'] = undefined;
  /**
   * The number of target price estimates in consensus
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * The date of most recent estimate
   * @member {Date} most_recent_date
   */
  exports.prototype['most_recent_date'] = undefined;
  /**
   * The median target price estimate
   * @member {Number} median
   */
  exports.prototype['median'] = undefined;
  /**
   * The number of estimates raised
   * @member {Number} raised
   */
  exports.prototype['raised'] = undefined;
  /**
   * The number of estimates lowered
   * @member {Number} lowered
   */
  exports.prototype['lowered'] = undefined;
  /**
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


