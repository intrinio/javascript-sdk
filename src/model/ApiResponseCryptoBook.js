/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.8.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CryptoBookEntry', 'model/CryptoExchangeSummary', 'model/CryptoPairSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CryptoBookEntry'), require('./CryptoExchangeSummary'), require('./CryptoPairSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCryptoBook = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CryptoBookEntry, root.intrinioSDK.CryptoExchangeSummary, root.intrinioSDK.CryptoPairSummary);
  }
}(this, function(ApiClient, CryptoBookEntry, CryptoExchangeSummary, CryptoPairSummary) {
  'use strict';




  /**
   * The ApiResponseCryptoBook model module.
   * @module model/ApiResponseCryptoBook
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>ApiResponseCryptoBook</code>.
   * @alias module:model/ApiResponseCryptoBook
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ApiResponseCryptoBook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCryptoBook} obj Optional instance to populate.
   * @return {module:model/ApiResponseCryptoBook} The populated <code>ApiResponseCryptoBook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bids')) {
        obj['bids'] = ApiClient.convertToType(data['bids'], [CryptoBookEntry]);
      }
      if (data.hasOwnProperty('asks')) {
        obj['asks'] = ApiClient.convertToType(data['asks'], [CryptoBookEntry]);
      }
      if (data.hasOwnProperty('pair')) {
        obj['pair'] = CryptoPairSummary.constructFromObject(data['pair']);
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = CryptoExchangeSummary.constructFromObject(data['exchange']);
      }
      if (data.hasOwnProperty('last_updated')) {
        obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'String');
      }
    }
    return obj;
  }

  /**
   * The bid prices and their respective sizes, in descending order of price.
   * @member {Array.<module:model/CryptoBookEntry>} bids
   */
  exports.prototype['bids'] = undefined;
  /**
   * The ask prices and their respective sizes, in ascending order of price.
   * @member {Array.<module:model/CryptoBookEntry>} asks
   */
  exports.prototype['asks'] = undefined;
  /**
   * @member {module:model/CryptoPairSummary} pair
   */
  exports.prototype['pair'] = undefined;
  /**
   * @member {module:model/CryptoExchangeSummary} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The UTC timestamp of when the order book was last updated.
   * @member {String} last_updated
   */
  exports.prototype['last_updated'] = undefined;



  return exports;
}));


