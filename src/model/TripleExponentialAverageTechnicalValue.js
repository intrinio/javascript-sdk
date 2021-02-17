/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.19.0
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
    root.intrinioSDK.TripleExponentialAverageTechnicalValue = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TripleExponentialAverageTechnicalValue model module.
   * @module model/TripleExponentialAverageTechnicalValue
   * @version 5.9.0
   */

  /**
   * Constructs a new <code>TripleExponentialAverageTechnicalValue</code>.
   * The date_time and trix values of a Triple Exponential Average technical indicator calculation
   * @alias module:model/TripleExponentialAverageTechnicalValue
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TripleExponentialAverageTechnicalValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripleExponentialAverageTechnicalValue} obj Optional instance to populate.
   * @return {module:model/TripleExponentialAverageTechnicalValue} The populated <code>TripleExponentialAverageTechnicalValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date_time')) {
        obj['date_time'] = ApiClient.convertToType(data['date_time'], 'Date');
      }
      if (data.hasOwnProperty('trix')) {
        obj['trix'] = ApiClient.convertToType(data['trix'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date_time of the observation
   * @member {Date} date_time
   */
  exports.prototype['date_time'] = undefined;
  /**
   * The Triple Exponential Average calculation value
   * @member {Number} trix
   */
  exports.prototype['trix'] = undefined;



  return exports;
}));


