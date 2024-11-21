/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.75.0
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
    define(['ApiClient', 'model/BulkDownloadSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkDownloadSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseBulkDownloadLinks = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.BulkDownloadSummary);
  }
}(this, function(ApiClient, BulkDownloadSummary) {
  'use strict';




  /**
   * The ApiResponseBulkDownloadLinks model module.
   * @module model/ApiResponseBulkDownloadLinks
   * @version 6.33.0
   */

  /**
   * Constructs a new <code>ApiResponseBulkDownloadLinks</code>.
   * @alias module:model/ApiResponseBulkDownloadLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseBulkDownloadLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseBulkDownloadLinks} obj Optional instance to populate.
   * @return {module:model/ApiResponseBulkDownloadLinks} The populated <code>ApiResponseBulkDownloadLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulk_downloads')) {
        obj['bulk_downloads'] = ApiClient.convertToType(data['bulk_downloads'], [BulkDownloadSummary]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BulkDownloadSummary>} bulk_downloads
   */
  exports.prototype['bulk_downloads'] = undefined;



  return exports;
}));


