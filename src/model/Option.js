/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.61.1
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
    root.intrinioSDK.Option = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Option model module.
   * @module model/Option
   * @version 6.27.2
   */

  /**
   * Constructs a new <code>Option</code>.
   * An option contract gives the buyer of a contract the right to buy or sell a particular asset at a later date at an agreed upon price.
   * @alias module:model/Option
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Option} obj Optional instance to populate.
   * @return {module:model/Option} The populated <code>Option</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
      }
      if (data.hasOwnProperty('strike')) {
        obj['strike'] = ApiClient.convertToType(data['strike'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Option.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The Intrinio Code for the Option.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The ticker symbol of the Security for the Option.
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The date on which the Option expires. The Option becomes invalid after this date and cannot be exercised.
   * @member {String} expiration
   */
  exports.prototype['expiration'] = undefined;
  /**
   * The strike price is the fixed price at which a derivative can be exercised, and refers to the price of the derivative’s underlying asset.  In a call option, the strike price is the price at which the option holder can purchase the underlying security.  For a put option, the strike price is the price at which the option holder can sell the underlying security.
   * @member {Number} strike
   */
  exports.prototype['strike'] = undefined;
  /**
   * The type of Option (put or call). A put option is an option contract giving the owner the right, but not the obligation, to sell a specified amount of an underlying asset at a specified price before the option's expiration date. A call option gives the holder the right to buy an underlying asset at a specified price, before the option's expiration date.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


