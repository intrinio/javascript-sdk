/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.6
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
    root.intrinioSDK.OptionPriceRealtimeExtended = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionPriceRealtimeExtended model module.
   * @module model/OptionPriceRealtimeExtended
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>OptionPriceRealtimeExtended</code>.
   * An extended option price contains extended price information for a specific options contract.
   * @alias module:model/OptionPriceRealtimeExtended
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>OptionPriceRealtimeExtended</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionPriceRealtimeExtended} obj Optional instance to populate.
   * @return {module:model/OptionPriceRealtimeExtended} The populated <code>OptionPriceRealtimeExtended</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bid_open')) {
        obj['bid_open'] = ApiClient.convertToType(data['bid_open'], 'Number');
      }
      if (data.hasOwnProperty('bid_high')) {
        obj['bid_high'] = ApiClient.convertToType(data['bid_high'], 'Number');
      }
      if (data.hasOwnProperty('bid_low')) {
        obj['bid_low'] = ApiClient.convertToType(data['bid_low'], 'Number');
      }
      if (data.hasOwnProperty('ask_open')) {
        obj['ask_open'] = ApiClient.convertToType(data['ask_open'], 'Number');
      }
      if (data.hasOwnProperty('ask_high')) {
        obj['ask_high'] = ApiClient.convertToType(data['ask_high'], 'Number');
      }
      if (data.hasOwnProperty('ask_low')) {
        obj['ask_low'] = ApiClient.convertToType(data['ask_low'], 'Number');
      }
      if (data.hasOwnProperty('trade_open')) {
        obj['trade_open'] = ApiClient.convertToType(data['trade_open'], 'Number');
      }
      if (data.hasOwnProperty('trade_high')) {
        obj['trade_high'] = ApiClient.convertToType(data['trade_high'], 'Number');
      }
      if (data.hasOwnProperty('trade_low')) {
        obj['trade_low'] = ApiClient.convertToType(data['trade_low'], 'Number');
      }
      if (data.hasOwnProperty('ask_close')) {
        obj['ask_close'] = ApiClient.convertToType(data['ask_close'], 'Number');
      }
      if (data.hasOwnProperty('bid_close')) {
        obj['bid_close'] = ApiClient.convertToType(data['bid_close'], 'Number');
      }
      if (data.hasOwnProperty('trade_close')) {
        obj['trade_close'] = ApiClient.convertToType(data['trade_close'], 'Number');
      }
      if (data.hasOwnProperty('mark')) {
        obj['mark'] = ApiClient.convertToType(data['mark'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The price of the bid at open
   * @member {Number} bid_open
   */
  exports.prototype['bid_open'] = undefined;
  /**
   * The high bid so far today
   * @member {Number} bid_high
   */
  exports.prototype['bid_high'] = undefined;
  /**
   * The low bid so far today
   * @member {Number} bid_low
   */
  exports.prototype['bid_low'] = undefined;
  /**
   * The price of the ask at open
   * @member {Number} ask_open
   */
  exports.prototype['ask_open'] = undefined;
  /**
   * The high ask so far today
   * @member {Number} ask_high
   */
  exports.prototype['ask_high'] = undefined;
  /**
   * The low ask so far today
   * @member {Number} ask_low
   */
  exports.prototype['ask_low'] = undefined;
  /**
   * The price of the trade at open
   * @member {Number} trade_open
   */
  exports.prototype['trade_open'] = undefined;
  /**
   * The high trade so far today
   * @member {Number} trade_high
   */
  exports.prototype['trade_high'] = undefined;
  /**
   * The low trade so far today
   * @member {Number} trade_low
   */
  exports.prototype['trade_low'] = undefined;
  /**
   * The price of ask at close today
   * @member {Number} ask_close
   */
  exports.prototype['ask_close'] = undefined;
  /**
   * The price of bid at close today
   * @member {Number} bid_close
   */
  exports.prototype['bid_close'] = undefined;
  /**
   * The price of the last trade of the day
   * @member {Number} trade_close
   */
  exports.prototype['trade_close'] = undefined;
  /**
   * The mark price
   * @member {Number} mark
   */
  exports.prototype['mark'] = undefined;



  return exports;
}));


