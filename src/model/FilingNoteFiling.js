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
    root.intrinioSDK.FilingNoteFiling = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FilingNoteFiling model module.
   * @module model/FilingNoteFiling
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>FilingNoteFiling</code>.
   * A filing submitted to the SEC by a company
   * @alias module:model/FilingNoteFiling
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FilingNoteFiling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilingNoteFiling} obj Optional instance to populate.
   * @return {module:model/FilingNoteFiling} The populated <code>FilingNoteFiling</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
      if (data.hasOwnProperty('report_type')) {
        obj['report_type'] = ApiClient.convertToType(data['report_type'], 'String');
      }
      if (data.hasOwnProperty('period_end_date')) {
        obj['period_end_date'] = ApiClient.convertToType(data['period_end_date'], 'Date');
      }
      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The Central Index Key (CIK) assigned to the company
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;
  /**
   * The filing <a href=\"https://docs.intrinio.com/documentation/sec_filing_report_types\" target=\"_blank\">report type</a>
   * @member {String} report_type
   */
  exports.prototype['report_type'] = undefined;
  /**
   * The ending date of the fiscal period for the filing
   * @member {Date} period_end_date
   */
  exports.prototype['period_end_date'] = undefined;
  /**
   * The date the report was filed with the SEC
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;



  return exports;
}));


