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
    root.intrinioSDK.SecurityHistory = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityHistory model module.
   * @module model/SecurityHistory
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>SecurityHistory</code>.
   * A security ticker name history.
   * @alias module:model/SecurityHistory
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SecurityHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityHistory} obj Optional instance to populate.
   * @return {module:model/SecurityHistory} The populated <code>SecurityHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('security_code')) {
        obj['security_code'] = ApiClient.convertToType(data['security_code'], 'String');
      }
      if (data.hasOwnProperty('figi')) {
        obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
      }
      if (data.hasOwnProperty('composite_figi')) {
        obj['composite_figi'] = ApiClient.convertToType(data['composite_figi'], 'String');
      }
      if (data.hasOwnProperty('first_price_date')) {
        obj['first_price_date'] = ApiClient.convertToType(data['first_price_date'], 'Date');
      }
      if (data.hasOwnProperty('last_price_date')) {
        obj['last_price_date'] = ApiClient.convertToType(data['last_price_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The common ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The name of the Security
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A 2-3 digit code classifying the Security (<a href=\"https://docs.intrinio.com/documentation/security_codes\" target=\"_blank\">reference</a>)
   * @member {String} security_code
   */
  exports.prototype['security_code'] = undefined;
  /**
   * The exchange-level OpenFIGI identifier
   * @member {String} figi
   */
  exports.prototype['figi'] = undefined;
  /**
   * The country-composite OpenFIGI identifier
   * @member {String} composite_figi
   */
  exports.prototype['composite_figi'] = undefined;
  /**
   * The date of the first recorded stock price
   * @member {Date} first_price_date
   */
  exports.prototype['first_price_date'] = undefined;
  /**
   * The date of the last recorded stock price (or the most recent trading day)
   * @member {Date} last_price_date
   */
  exports.prototype['last_price_date'] = undefined;



  return exports;
}));


