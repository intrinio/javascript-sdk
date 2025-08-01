/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    root.intrinioSDK.OptionsAggregate = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptionsAggregate model module.
   * @module model/OptionsAggregate
   * @version 6.40.0
   */

  /**
   * Constructs a new <code>OptionsAggregate</code>.
   * Total aggregated open interest and volume for the ticker
   * @alias module:model/OptionsAggregate
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>OptionsAggregate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionsAggregate} obj Optional instance to populate.
   * @return {module:model/OptionsAggregate} The populated <code>OptionsAggregate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('total_open_interest')) {
        obj['total_open_interest'] = ApiClient.convertToType(data['total_open_interest'], 'Number');
      }
      if (data.hasOwnProperty('total_volume')) {
        obj['total_volume'] = ApiClient.convertToType(data['total_volume'], 'Number');
      }
      if (data.hasOwnProperty('total_put_volume')) {
        obj['total_put_volume'] = ApiClient.convertToType(data['total_put_volume'], 'Number');
      }
      if (data.hasOwnProperty('total_call_volume')) {
        obj['total_call_volume'] = ApiClient.convertToType(data['total_call_volume'], 'Number');
      }
      if (data.hasOwnProperty('put_call_volume_ratio')) {
        obj['put_call_volume_ratio'] = ApiClient.convertToType(data['put_call_volume_ratio'], 'Number');
      }
      if (data.hasOwnProperty('contract_count')) {
        obj['contract_count'] = ApiClient.convertToType(data['contract_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ticker symbol of the Security for the Option.
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The date of the data.
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Total open interest for the ticker
   * @member {Number} total_open_interest
   */
  exports.prototype['total_open_interest'] = undefined;
  /**
   * Total volume for the ticker
   * @member {Number} total_volume
   */
  exports.prototype['total_volume'] = undefined;
  /**
   * Total put volume for the ticker
   * @member {Number} total_put_volume
   */
  exports.prototype['total_put_volume'] = undefined;
  /**
   * Total call volume for the ticker
   * @member {Number} total_call_volume
   */
  exports.prototype['total_call_volume'] = undefined;
  /**
   * Total put volume to total call volume ratio for the ticker
   * @member {Number} put_call_volume_ratio
   */
  exports.prototype['put_call_volume_ratio'] = undefined;
  /**
   * Total number of active contracts for the ticker
   * @member {Number} contract_count
   */
  exports.prototype['contract_count'] = undefined;



  return exports;
}));


