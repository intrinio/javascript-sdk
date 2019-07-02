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
    define(['ApiClient', 'model/CryptoExchangeSummary', 'model/CryptoPairSummary', 'model/RelativeStrengthIndexTechnicalValue', 'model/TechnicalIndicator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CryptoExchangeSummary'), require('./CryptoPairSummary'), require('./RelativeStrengthIndexTechnicalValue'), require('./TechnicalIndicator'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseCryptoRelativeStrengthIndex = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CryptoExchangeSummary, root.intrinioSDK.CryptoPairSummary, root.intrinioSDK.RelativeStrengthIndexTechnicalValue, root.intrinioSDK.TechnicalIndicator);
  }
}(this, function(ApiClient, CryptoExchangeSummary, CryptoPairSummary, RelativeStrengthIndexTechnicalValue, TechnicalIndicator) {
  'use strict';




  /**
   * The ApiResponseCryptoRelativeStrengthIndex model module.
   * @module model/ApiResponseCryptoRelativeStrengthIndex
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>ApiResponseCryptoRelativeStrengthIndex</code>.
   * The Relative Strength Index calculations for the prices of a Crypto Currency Pair
   * @alias module:model/ApiResponseCryptoRelativeStrengthIndex
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ApiResponseCryptoRelativeStrengthIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseCryptoRelativeStrengthIndex} obj Optional instance to populate.
   * @return {module:model/ApiResponseCryptoRelativeStrengthIndex} The populated <code>ApiResponseCryptoRelativeStrengthIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('technicals')) {
        obj['technicals'] = ApiClient.convertToType(data['technicals'], [RelativeStrengthIndexTechnicalValue]);
      }
      if (data.hasOwnProperty('indicator')) {
        obj['indicator'] = TechnicalIndicator.constructFromObject(data['indicator']);
      }
      if (data.hasOwnProperty('pair')) {
        obj['pair'] = CryptoPairSummary.constructFromObject(data['pair']);
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = CryptoExchangeSummary.constructFromObject(data['exchange']);
      }
      if (data.hasOwnProperty('timeframe')) {
        obj['timeframe'] = ApiClient.convertToType(data['timeframe'], 'String');
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RelativeStrengthIndexTechnicalValue>} technicals
   */
  exports.prototype['technicals'] = undefined;
  /**
   * The name and symbol of the technical indicator
   * @member {module:model/TechnicalIndicator} indicator
   */
  exports.prototype['indicator'] = undefined;
  /**
   * @member {module:model/CryptoPairSummary} pair
   */
  exports.prototype['pair'] = undefined;
  /**
   * @member {module:model/CryptoExchangeSummary} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The time interval for the crypto currency prices
   * @member {String} timeframe
   */
  exports.prototype['timeframe'] = undefined;
  /**
   * The token required to request the next page of the data
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


