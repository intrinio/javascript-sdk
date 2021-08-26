/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.25.6
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
    define(['ApiClient', 'model/CompanySummary', 'model/TheaEntityAnswer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'), require('./TheaEntityAnswer'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCompanyAnswers = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary, root.intrinioSDK.TheaEntityAnswer);
  }
}(this, function(ApiClient, CompanySummary, TheaEntityAnswer) {
  'use strict';




  /**
   * The ApiResponseCompanyAnswers model module.
   * @module model/ApiResponseCompanyAnswers
   * @version 5.15.0
   */

  /**
   * Constructs a new <code>ApiResponseCompanyAnswers</code>.
   * @alias module:model/ApiResponseCompanyAnswers
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ApiResponseCompanyAnswers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCompanyAnswers} obj Optional instance to populate.
   * @return {module:model/ApiResponseCompanyAnswers} The populated <code>ApiResponseCompanyAnswers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('answers')) {
        obj['answers'] = ApiClient.convertToType(data['answers'], [TheaEntityAnswer]);
      }
      if (data.hasOwnProperty('companies')) {
        obj['companies'] = ApiClient.convertToType(data['companies'], [CompanySummary]);
      }
    }
    return obj;
  }

  /**
   * The organziation the answer data was sourced from
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The query posed to the Thea API
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {Array.<module:model/TheaEntityAnswer>} answers
   */
  exports.prototype['answers'] = undefined;
  /**
   * @member {Array.<module:model/CompanySummary>} companies
   */
  exports.prototype['companies'] = undefined;



  return exports;
}));


