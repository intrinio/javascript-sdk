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
    define(['ApiClient', 'model/BulkDownloadLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkDownloadLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.BulkDownloadSummary = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.BulkDownloadLinks);
  }
}(this, function(ApiClient, BulkDownloadLinks) {
  'use strict';




  /**
   * The BulkDownloadSummary model module.
   * @module model/BulkDownloadSummary
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>BulkDownloadSummary</code>.
   * Information about bulk downloads with download links
   * @alias module:model/BulkDownloadSummary
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BulkDownloadSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkDownloadSummary} obj Optional instance to populate.
   * @return {module:model/BulkDownloadSummary} The populated <code>BulkDownloadSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('data_length_bytes')) {
        obj['data_length_bytes'] = ApiClient.convertToType(data['data_length_bytes'], 'String');
      }
      if (data.hasOwnProperty('update_frequency')) {
        obj['update_frequency'] = ApiClient.convertToType(data['update_frequency'], 'String');
      }
      if (data.hasOwnProperty('last_updated')) {
        obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'Date');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [BulkDownloadLinks]);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the bulk download
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the bulk download
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The file format of the bulk download
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * The total length of the bulk download data in bytes
   * @member {String} data_length_bytes
   */
  exports.prototype['data_length_bytes'] = undefined;
  /**
   * The update frequency for the bulk download
   * @member {String} update_frequency
   */
  exports.prototype['update_frequency'] = undefined;
  /**
   * The date on which the bulk download was last updated
   * @member {Date} last_updated
   */
  exports.prototype['last_updated'] = undefined;
  /**
   * Links to all of the files comprising the bulk download. Links expire in 24 hours.
   * @member {Array.<module:model/BulkDownloadLinks>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


