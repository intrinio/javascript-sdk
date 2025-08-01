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
    root.intrinioSDK.OptionPriceRealtime = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionPriceRealtime model module.
   * @module model/OptionPriceRealtime
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>OptionPriceRealtime</code>.
   * An option price contains price information for a specific options contract.
   * @alias module:model/OptionPriceRealtime
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>OptionPriceRealtime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionPriceRealtime} obj Optional instance to populate.
   * @return {module:model/OptionPriceRealtime} The populated <code>OptionPriceRealtime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Number');
      }
      if (data.hasOwnProperty('last_size')) {
        obj['last_size'] = ApiClient.convertToType(data['last_size'], 'Number');
      }
      if (data.hasOwnProperty('last_timestamp')) {
        obj['last_timestamp'] = ApiClient.convertToType(data['last_timestamp'], 'Date');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
      if (data.hasOwnProperty('ask')) {
        obj['ask'] = ApiClient.convertToType(data['ask'], 'Number');
      }
      if (data.hasOwnProperty('ask_size')) {
        obj['ask_size'] = ApiClient.convertToType(data['ask_size'], 'Number');
      }
      if (data.hasOwnProperty('ask_timestamp')) {
        obj['ask_timestamp'] = ApiClient.convertToType(data['ask_timestamp'], 'Date');
      }
      if (data.hasOwnProperty('bid')) {
        obj['bid'] = ApiClient.convertToType(data['bid'], 'Number');
      }
      if (data.hasOwnProperty('bid_size')) {
        obj['bid_size'] = ApiClient.convertToType(data['bid_size'], 'Number');
      }
      if (data.hasOwnProperty('bid_timestamp')) {
        obj['bid_timestamp'] = ApiClient.convertToType(data['bid_timestamp'], 'Date');
      }
      if (data.hasOwnProperty('open_interest')) {
        obj['open_interest'] = ApiClient.convertToType(data['open_interest'], 'Number');
      }
      if (data.hasOwnProperty('exercise_style')) {
        obj['exercise_style'] = ApiClient.convertToType(data['exercise_style'], 'String');
      }
    }
    return obj;
  }

  /**
   * The price of the last trade
   * @member {Number} last
   */
  exports.prototype['last'] = undefined;
  /**
   * The size of the last trade
   * @member {Number} last_size
   */
  exports.prototype['last_size'] = undefined;
  /**
   * The time of the last trade
   * @member {Date} last_timestamp
   */
  exports.prototype['last_timestamp'] = undefined;
  /**
   * The cumulative volume of this options contract that traded that day.
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * The price of the top ask order
   * @member {Number} ask
   */
  exports.prototype['ask'] = undefined;
  /**
   * The size of the top ask order
   * @member {Number} ask_size
   */
  exports.prototype['ask_size'] = undefined;
  /**
   * The timestamp of the top ask order
   * @member {Date} ask_timestamp
   */
  exports.prototype['ask_timestamp'] = undefined;
  /**
   * The price of the top bid order
   * @member {Number} bid
   */
  exports.prototype['bid'] = undefined;
  /**
   * The size of the top bid order
   * @member {Number} bid_size
   */
  exports.prototype['bid_size'] = undefined;
  /**
   * The time of the top bid order
   * @member {Date} bid_timestamp
   */
  exports.prototype['bid_timestamp'] = undefined;
  /**
   * The total number of this options contract that are still open.
   * @member {Number} open_interest
   */
  exports.prototype['open_interest'] = undefined;
  /**
   * The exercise style of the option.  (\"A\" = \"American\", \"E\" = \"European\")
   * @member {module:model/OptionPriceRealtime.ExerciseStyleEnum} exercise_style
   */
  exports.prototype['exercise_style'] = undefined;


  /**
   * Allowed values for the <code>exercise_style</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExerciseStyleEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "E"
     * @const
     */
    "E": "E"  };


  return exports;
}));


