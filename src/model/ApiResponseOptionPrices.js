/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
    define(['ApiClient', 'model/Option', 'model/OptionPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Option'), require('./OptionPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseOptionPrices = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.Option, root.intrinioSDK.OptionPrice);
  }
}(this, function(ApiClient, Option, OptionPrice) {
  'use strict';




  /**
   * The ApiResponseOptionPrices model module.
   * @module model/ApiResponseOptionPrices
   * @version 5.13.0
   */

  /**
   * Constructs a new <code>ApiResponseOptionPrices</code>.
   * @alias module:model/ApiResponseOptionPrices
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseOptionPrices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOptionPrices} obj Optional instance to populate.
   * @return {module:model/ApiResponseOptionPrices} The populated <code>ApiResponseOptionPrices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [OptionPrice]);
      }
      if (data.hasOwnProperty('option')) {
        obj['option'] = Option.constructFromObject(data['option']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * A list of option prices in descending order by date
   * @member {Array.<module:model/OptionPrice>} prices
   */
  exports.prototype['prices'] = undefined;
  /**
   * @member {module:model/Option} option
   */
  exports.prototype['option'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


