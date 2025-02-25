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
    define(['ApiClient', 'model/TheaSourceDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TheaSourceDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.TheaEntityAnswer = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.TheaSourceDocument);
  }
}(this, function(ApiClient, TheaSourceDocument) {
  'use strict';




  /**
   * The TheaEntityAnswer model module.
   * @module model/TheaEntityAnswer
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>TheaEntityAnswer</code>.
   * An answer object returned by Thea in response to a query about a specific entity
   * @alias module:model/TheaEntityAnswer
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TheaEntityAnswer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TheaEntityAnswer} obj Optional instance to populate.
   * @return {module:model/TheaEntityAnswer} The populated <code>TheaEntityAnswer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answer')) {
        obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('source_documents')) {
        obj['source_documents'] = ApiClient.convertToType(data['source_documents'], [TheaSourceDocument]);
      }
    }
    return obj;
  }

  /**
   * The summarized answer returned from Thea
   * @member {String} answer
   */
  exports.prototype['answer'] = undefined;
  /**
   * The underlying content the answer was sourced from
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The documents from which Thea answer data is sourced
   * @member {Array.<module:model/TheaSourceDocument>} source_documents
   */
  exports.prototype['source_documents'] = undefined;



  return exports;
}));


