/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.76.3
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
    define(['ApiClient', 'model/ZacksSalesSurprise'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZacksSalesSurprise'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseZacksSalesSurprises = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ZacksSalesSurprise);
  }
}(this, function(ApiClient, ZacksSalesSurprise) {
  'use strict';




  /**
   * The ApiResponseZacksSalesSurprises model module.
   * @module model/ApiResponseZacksSalesSurprises
   * @version 6.34.0
   */

  /**
   * Constructs a new <code>ApiResponseZacksSalesSurprises</code>.
   * @alias module:model/ApiResponseZacksSalesSurprises
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseZacksSalesSurprises</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseZacksSalesSurprises} obj Optional instance to populate.
   * @return {module:model/ApiResponseZacksSalesSurprises} The populated <code>ApiResponseZacksSalesSurprises</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sales_surprises')) {
        obj['sales_surprises'] = ApiClient.convertToType(data['sales_surprises'], [ZacksSalesSurprise]);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * Zacks Sales Surprise data for a Security in descending order by actual reported date
   * @member {Array.<module:model/ZacksSalesSurprise>} sales_surprises
   */
  exports.prototype['sales_surprises'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


