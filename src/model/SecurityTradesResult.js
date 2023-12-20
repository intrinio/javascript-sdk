/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.48.1
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
    define(['ApiClient', 'model/SecurityTrades'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecurityTrades'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.SecurityTradesResult = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecurityTrades);
  }
}(this, function(ApiClient, SecurityTrades) {
  'use strict';




  /**
   * The SecurityTradesResult model module.
   * @module model/SecurityTradesResult
   * @version 6.26.5
   */

  /**
   * Constructs a new <code>SecurityTradesResult</code>.
   * An security trades result contains all trades corresponding to the provided query.
   * @alias module:model/SecurityTradesResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SecurityTradesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityTradesResult} obj Optional instance to populate.
   * @return {module:model/SecurityTradesResult} The populated <code>SecurityTradesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('trades')) {
        obj['trades'] = ApiClient.convertToType(data['trades'], [SecurityTrades]);
      }
    }
    return obj;
  }

  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;
  /**
   * The source of the trades.
   * @member {module:model/SecurityTradesResult.SourceEnum} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Array of all the trades in this page of the result.
   * @member {Array.<module:model/SecurityTrades>} trades
   */
  exports.prototype['trades'] = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "iex"
     * @const
     */
    "iex": "iex",
    /**
     * value: "utp_delayed"
     * @const
     */
    "utp_delayed": "utp_delayed",
    /**
     * value: "cta_a_delayed"
     * @const
     */
    "cta_a_delayed": "cta_a_delayed",
    /**
     * value: "cta_b_delayed"
     * @const
     */
    "cta_b_delayed": "cta_b_delayed",
    /**
     * value: "otc_delayed"
     * @const
     */
    "otc_delayed": "otc_delayed",
    /**
     * value: "nasdaq_basic"
     * @const
     */
    "nasdaq_basic": "nasdaq_basic"  };


  return exports;
}));


