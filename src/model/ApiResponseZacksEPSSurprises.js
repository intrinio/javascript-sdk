/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.8
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
    define(['ApiClient', 'model/ZacksEPSSurprise'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZacksEPSSurprise'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseZacksEPSSurprises = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ZacksEPSSurprise);
  }
}(this, function(ApiClient, ZacksEPSSurprise) {
  'use strict';




  /**
   * The ApiResponseZacksEPSSurprises model module.
   * @module model/ApiResponseZacksEPSSurprises
   * @version 6.26.3
   */

  /**
   * Constructs a new <code>ApiResponseZacksEPSSurprises</code>.
   * @alias module:model/ApiResponseZacksEPSSurprises
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseZacksEPSSurprises</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseZacksEPSSurprises} obj Optional instance to populate.
   * @return {module:model/ApiResponseZacksEPSSurprises} The populated <code>ApiResponseZacksEPSSurprises</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eps_surprises')) {
        obj['eps_surprises'] = ApiClient.convertToType(data['eps_surprises'], [ZacksEPSSurprise]);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * Zacks EPS Surprise data for a Security in descending order by actual reported date
   * @member {Array.<module:model/ZacksEPSSurprise>} eps_surprises
   */
  exports.prototype['eps_surprises'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


