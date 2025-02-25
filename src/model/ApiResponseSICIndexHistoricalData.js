/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.80.1
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
    define(['ApiClient', 'model/HistoricalData', 'model/SICIndex'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HistoricalData'), require('./SICIndex'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseSICIndexHistoricalData = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.HistoricalData, root.intrinioSDK.SICIndex);
  }
}(this, function(ApiClient, HistoricalData, SICIndex) {
  'use strict';




  /**
   * The ApiResponseSICIndexHistoricalData model module.
   * @module model/ApiResponseSICIndexHistoricalData
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>ApiResponseSICIndexHistoricalData</code>.
   * @alias module:model/ApiResponseSICIndexHistoricalData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseSICIndexHistoricalData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseSICIndexHistoricalData} obj Optional instance to populate.
   * @return {module:model/ApiResponseSICIndexHistoricalData} The populated <code>ApiResponseSICIndexHistoricalData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('historical_data')) {
        obj['historical_data'] = ApiClient.convertToType(data['historical_data'], [HistoricalData]);
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = SICIndex.constructFromObject(data['index']);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/HistoricalData>} historical_data
   */
  exports.prototype['historical_data'] = undefined;
  /**
   * @member {module:model/SICIndex} index
   */
  exports.prototype['index'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


