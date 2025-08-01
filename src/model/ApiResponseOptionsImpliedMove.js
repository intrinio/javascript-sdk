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
    define(['ApiClient', 'model/OptionImpliedMoveData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OptionImpliedMoveData'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOptionsImpliedMove = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.OptionImpliedMoveData);
  }
}(this, function(ApiClient, OptionImpliedMoveData) {
  'use strict';




  /**
   * The ApiResponseOptionsImpliedMove model module.
   * @module model/ApiResponseOptionsImpliedMove
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>ApiResponseOptionsImpliedMove</code>.
   * @alias module:model/ApiResponseOptionsImpliedMove
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ApiResponseOptionsImpliedMove</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOptionsImpliedMove} obj Optional instance to populate.
   * @return {module:model/ApiResponseOptionsImpliedMove} The populated <code>ApiResponseOptionsImpliedMove</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('implied_move')) {
        obj['implied_move'] = OptionImpliedMoveData.constructFromObject(data['implied_move']);
      }
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], ['String']);
      }
      if (data.hasOwnProperty('underlying_price')) {
        obj['underlying_price'] = ApiClient.convertToType(data['underlying_price'], 'Number');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
      }
      if (data.hasOwnProperty('atm_strike')) {
        obj['atm_strike'] = ApiClient.convertToType(data['atm_strike'], 'Number');
      }
      if (data.hasOwnProperty('straddle_price')) {
        obj['straddle_price'] = ApiClient.convertToType(data['straddle_price'], 'Number');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
    }
    return obj;
  }

  /**
   * The data pertaining to the implied move.
   * @member {module:model/OptionImpliedMoveData} implied_move
   */
  exports.prototype['implied_move'] = undefined;
  /**
   * Any messages or warnings about the data
   * @member {Array.<String>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * The price of the underlying instrument.
   * @member {Number} underlying_price
   */
  exports.prototype['underlying_price'] = undefined;
  /**
   * The date on which the Option expires. The Option becomes invalid after this date and cannot be exercised.
   * @member {String} expiration
   */
  exports.prototype['expiration'] = undefined;
  /**
   * The at-the-money strike price for the implied move calculation.
   * @member {Number} atm_strike
   */
  exports.prototype['atm_strike'] = undefined;
  /**
   * The straddle price for the implied move calculation.
   * @member {Number} straddle_price
   */
  exports.prototype['straddle_price'] = undefined;
  /**
   * The symbol for the underlying instrument.
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;



  return exports;
}));


