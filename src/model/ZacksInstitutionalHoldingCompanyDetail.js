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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksInstitutionalHoldingCompanyDetail = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksInstitutionalHoldingCompanyDetail model module.
   * @module model/ZacksInstitutionalHoldingCompanyDetail
   * @version 6.35.0
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHoldingCompanyDetail</code>.
   * Returns a list of companies with its shares and positions sourced from Zacks.
   * @alias module:model/ZacksInstitutionalHoldingCompanyDetail
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ZacksInstitutionalHoldingCompanyDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHoldingCompanyDetail} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHoldingCompanyDetail} The populated <code>ZacksInstitutionalHoldingCompanyDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('shares_outstanding')) {
        obj['shares_outstanding'] = ApiClient.convertToType(data['shares_outstanding'], 'Number');
      }
      if (data.hasOwnProperty('last_close_price')) {
        obj['last_close_price'] = ApiClient.convertToType(data['last_close_price'], 'Number');
      }
      if (data.hasOwnProperty('last_close_date')) {
        obj['last_close_date'] = ApiClient.convertToType(data['last_close_date'], 'Date');
      }
      if (data.hasOwnProperty('institutional_shares_held_percent')) {
        obj['institutional_shares_held_percent'] = ApiClient.convertToType(data['institutional_shares_held_percent'], 'Number');
      }
      if (data.hasOwnProperty('institutional_shares_buy')) {
        obj['institutional_shares_buy'] = ApiClient.convertToType(data['institutional_shares_buy'], 'Number');
      }
      if (data.hasOwnProperty('institutional_shares_sell')) {
        obj['institutional_shares_sell'] = ApiClient.convertToType(data['institutional_shares_sell'], 'Number');
      }
      if (data.hasOwnProperty('institutional_positions_increase')) {
        obj['institutional_positions_increase'] = ApiClient.convertToType(data['institutional_positions_increase'], 'Number');
      }
      if (data.hasOwnProperty('institutional_positions_decrease')) {
        obj['institutional_positions_decrease'] = ApiClient.convertToType(data['institutional_positions_decrease'], 'Number');
      }
      if (data.hasOwnProperty('institutional_positions_unchanged')) {
        obj['institutional_positions_unchanged'] = ApiClient.convertToType(data['institutional_positions_unchanged'], 'Number');
      }
      if (data.hasOwnProperty('institutional_positions_total')) {
        obj['institutional_positions_total'] = ApiClient.convertToType(data['institutional_positions_total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Zacks common exchange ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company name of the stock listed
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Exhange where the stock is traded whose shares are held by the institution
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * The number of shares shares outstanding for the stock
   * @member {Number} shares_outstanding
   */
  exports.prototype['shares_outstanding'] = undefined;
  /**
   * The last close price of the stock listed
   * @member {Number} last_close_price
   */
  exports.prototype['last_close_price'] = undefined;
  /**
   * Last closing price of the stock listed
   * @member {Date} last_close_date
   */
  exports.prototype['last_close_date'] = undefined;
  /**
   * Percentage of shares outstanding held by institutions in the stock listed
   * @member {Number} institutional_shares_held_percent
   */
  exports.prototype['institutional_shares_held_percent'] = undefined;
  /**
   * Number of shares bought by institutions in the stock listed
   * @member {Number} institutional_shares_buy
   */
  exports.prototype['institutional_shares_buy'] = undefined;
  /**
   * Number of shares sold by institutions in the stock listed
   * @member {Number} institutional_shares_sell
   */
  exports.prototype['institutional_shares_sell'] = undefined;
  /**
   * Number of institutions who increased their shares held in the stock listed
   * @member {Number} institutional_positions_increase
   */
  exports.prototype['institutional_positions_increase'] = undefined;
  /**
   * Number of institutions who decrease their shares held in the stock listed
   * @member {Number} institutional_positions_decrease
   */
  exports.prototype['institutional_positions_decrease'] = undefined;
  /**
   * Number of institutions who did not change their shares held in the stock listed
   * @member {Number} institutional_positions_unchanged
   */
  exports.prototype['institutional_positions_unchanged'] = undefined;
  /**
   * Total number of institutions who hold shares in the stock listed
   * @member {Number} institutional_positions_total
   */
  exports.prototype['institutional_positions_total'] = undefined;



  return exports;
}));


