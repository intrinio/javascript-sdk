/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.0
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
    root.intrinioSDK.IchimokuKinkoHyoTechnicalValue = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IchimokuKinkoHyoTechnicalValue model module.
   * @module model/IchimokuKinkoHyoTechnicalValue
   * @version 6.29.0
   */

  /**
   * Constructs a new <code>IchimokuKinkoHyoTechnicalValue</code>.
   * The date_time, chikou_span, kijun_sen, senkou_span_a, senkou_span_b, and tenkan_sen values of a Ichimoku Kinko Hyo technical indicator calculation
   * @alias module:model/IchimokuKinkoHyoTechnicalValue
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>IchimokuKinkoHyoTechnicalValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IchimokuKinkoHyoTechnicalValue} obj Optional instance to populate.
   * @return {module:model/IchimokuKinkoHyoTechnicalValue} The populated <code>IchimokuKinkoHyoTechnicalValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date_time')) {
        obj['date_time'] = ApiClient.convertToType(data['date_time'], 'Date');
      }
      if (data.hasOwnProperty('chikou_span')) {
        obj['chikou_span'] = ApiClient.convertToType(data['chikou_span'], 'Number');
      }
      if (data.hasOwnProperty('kijun_sen')) {
        obj['kijun_sen'] = ApiClient.convertToType(data['kijun_sen'], 'Number');
      }
      if (data.hasOwnProperty('senkou_span_a')) {
        obj['senkou_span_a'] = ApiClient.convertToType(data['senkou_span_a'], 'Number');
      }
      if (data.hasOwnProperty('senkou_span_b')) {
        obj['senkou_span_b'] = ApiClient.convertToType(data['senkou_span_b'], 'Number');
      }
      if (data.hasOwnProperty('tenkan_sen')) {
        obj['tenkan_sen'] = ApiClient.convertToType(data['tenkan_sen'], 'Number');
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
   * The Chikou Span (Lagging Span) value of the Ichimoku Kinko Hyo calculation
   * @member {Number} chikou_span
   */
  exports.prototype['chikou_span'] = undefined;
  /**
   * The Kijun-sen (Base Line) value of the Ichimoku Kinko Hyo calculation
   * @member {Number} kijun_sen
   */
  exports.prototype['kijun_sen'] = undefined;
  /**
   * The Senkou Span A (Leading Span A) value of the Ichimoku Kinko Hyo calculation
   * @member {Number} senkou_span_a
   */
  exports.prototype['senkou_span_a'] = undefined;
  /**
   * The Senkou Span B (Leading Span B) value of the Ichimoku Kinko Hyo calculation
   * @member {Number} senkou_span_b
   */
  exports.prototype['senkou_span_b'] = undefined;
  /**
   * The Tenskan-sen (Conversion Line) value of the Ichimoku Kinko Hyo calculation
   * @member {Number} tenkan_sen
   */
  exports.prototype['tenkan_sen'] = undefined;



  return exports;
}));


