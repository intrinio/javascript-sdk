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
    define(['ApiClient', 'model/CompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.Fundamental = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary);
  }
}(this, function(ApiClient, CompanySummary) {
  'use strict';




  /**
   * The Fundamental model module.
   * @module model/Fundamental
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>Fundamental</code>.
   * @alias module:model/Fundamental
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Fundamental</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fundamental} obj Optional instance to populate.
   * @return {module:model/Fundamental} The populated <code>Fundamental</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('statement_code')) {
        obj['statement_code'] = ApiClient.convertToType(data['statement_code'], 'String');
      }
      if (data.hasOwnProperty('fiscal_year')) {
        obj['fiscal_year'] = ApiClient.convertToType(data['fiscal_year'], 'Number');
      }
      if (data.hasOwnProperty('fiscal_period')) {
        obj['fiscal_period'] = ApiClient.convertToType(data['fiscal_period'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
      if (data.hasOwnProperty('is_latest')) {
        obj['is_latest'] = ApiClient.convertToType(data['is_latest'], 'Boolean');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Date');
      }
      if (data.hasOwnProperty('first_calculable')) {
        obj['first_calculable'] = ApiClient.convertToType(data['first_calculable'], 'Date');
      }
      if (data.hasOwnProperty('earnings_disclosed_at')) {
        obj['earnings_disclosed_at'] = ApiClient.convertToType(data['earnings_disclosed_at'], 'Date');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the Fundamental
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The code of the financial statement that the Fundamental represents
   * @member {String} statement_code
   */
  exports.prototype['statement_code'] = undefined;
  /**
   * The fiscal year
   * @member {Number} fiscal_year
   */
  exports.prototype['fiscal_year'] = undefined;
  /**
   * The fiscal period
   * @member {String} fiscal_period
   */
  exports.prototype['fiscal_period'] = undefined;
  /**
   * The type of Fundamental
   * @member {module:model/Fundamental.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The period start date
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The period start date
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The date and time when the Fundamental was filed with the SEC
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;
  /**
   * Is this the latest fundamental available based on the company's most recent filings? Use the Lookup Fundamental endpoint to find the latest fundamental (<a href=\"https://docs.intrinio.com/documentation/web_api/lookup_fundamental_v2\" target=\"_blank\">reference</a>)
   * @member {Boolean} is_latest
   */
  exports.prototype['is_latest'] = undefined;
  /**
   * The date and time when the fundamental was last updated
   * @member {Date} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The date and time when the fundamental was first calculable
   * @member {Date} first_calculable
   */
  exports.prototype['first_calculable'] = undefined;
  /**
   * The date and time when the earnings information was first disclosed via 8-K filing
   * @member {Date} earnings_disclosed_at
   */
  exports.prototype['earnings_disclosed_at'] = undefined;
  /**
   * The Company that the Fundamental was belongs to
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "reported"
     * @const
     */
    "reported": "reported",
    /**
     * value: "restated"
     * @const
     */
    "restated": "restated",
    /**
     * value: "calculated"
     * @const
     */
    "calculated": "calculated"  };


  return exports;
}));


