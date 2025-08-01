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
    define(['ApiClient', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.DividendRecord = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The DividendRecord model module.
   * @module model/DividendRecord
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>DividendRecord</code>.
   * A dividend record for the identifier
   * @alias module:model/DividendRecord
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>DividendRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DividendRecord} obj Optional instance to populate.
   * @return {module:model/DividendRecord} The populated <code>DividendRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ex_dividend')) {
        obj['ex_dividend'] = ApiClient.convertToType(data['ex_dividend'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('announcement_date')) {
        obj['announcement_date'] = ApiClient.convertToType(data['announcement_date'], 'Date');
      }
      if (data.hasOwnProperty('record_date')) {
        obj['record_date'] = ApiClient.convertToType(data['record_date'], 'Date');
      }
      if (data.hasOwnProperty('pay_date')) {
        obj['pay_date'] = ApiClient.convertToType(data['pay_date'], 'Date');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('forward_yield')) {
        obj['forward_yield'] = ApiClient.convertToType(data['forward_yield'], 'Number');
      }
      if (data.hasOwnProperty('forward_rate')) {
        obj['forward_rate'] = ApiClient.convertToType(data['forward_rate'], 'Number');
      }
      if (data.hasOwnProperty('last_ex_dividend_date')) {
        obj['last_ex_dividend_date'] = ApiClient.convertToType(data['last_ex_dividend_date'], 'Date');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * Amount of dividend in US dollars
   * @member {Number} ex_dividend
   */
  exports.prototype['ex_dividend'] = undefined;
  /**
   * The 3-digit currency code the dividend amount was reported in
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Date dividend was announced
   * @member {Date} announcement_date
   */
  exports.prototype['announcement_date'] = undefined;
  /**
   * Date before which holders-of-record will receive the dividend
   * @member {Date} record_date
   */
  exports.prototype['record_date'] = undefined;
  /**
   * Date the divdiend was paid
   * @member {Date} pay_date
   */
  exports.prototype['pay_date'] = undefined;
  /**
   * Identifies payment frequency of announced dividend
   * @member {String} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * Status of the dividend
   * @member {module:model/DividendRecord.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The forward dividend yield
   * @member {Number} forward_yield
   */
  exports.prototype['forward_yield'] = undefined;
  /**
   * The forward dividend rate
   * @member {Number} forward_rate
   */
  exports.prototype['forward_rate'] = undefined;
  /**
   * The last reported day the stock starts trading without the value of its next dividend payment
   * @member {Date} last_ex_dividend_date
   */
  exports.prototype['last_ex_dividend_date'] = undefined;
  /**
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "X"
     * @const
     */
    "X": "X",
    /**
     * value: "S"
     * @const
     */
    "S": "S",
    /**
     * value: "R"
     * @const
     */
    "R": "R"  };


  return exports;
}));


