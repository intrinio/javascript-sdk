/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.30.0
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
    root.intrinioSDK.InstitutionalHolding = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InstitutionalHolding model module.
   * @module model/InstitutionalHolding
   * @version 6.21.2
   */

  /**
   * Constructs a new <code>InstitutionalHolding</code>.
   * A single institutional holding for an owner.
   * @alias module:model/InstitutionalHolding
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>InstitutionalHolding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstitutionalHolding} obj Optional instance to populate.
   * @return {module:model/InstitutionalHolding} The populated <code>InstitutionalHolding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cusip')) {
        obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('security_name')) {
        obj['security_name'] = ApiClient.convertToType(data['security_name'], 'String');
      }
      if (data.hasOwnProperty('security_type')) {
        obj['security_type'] = ApiClient.convertToType(data['security_type'], 'String');
      }
      if (data.hasOwnProperty('title_of_class')) {
        obj['title_of_class'] = ApiClient.convertToType(data['title_of_class'], 'String');
      }
      if (data.hasOwnProperty('stock_exchange')) {
        obj['stock_exchange'] = ApiClient.convertToType(data['stock_exchange'], 'String');
      }
      if (data.hasOwnProperty('filing_date')) {
        obj['filing_date'] = ApiClient.convertToType(data['filing_date'], 'Date');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('investment_discretion')) {
        obj['investment_discretion'] = ApiClient.convertToType(data['investment_discretion'], 'String');
      }
      if (data.hasOwnProperty('other_manager')) {
        obj['other_manager'] = ApiClient.convertToType(data['other_manager'], 'String');
      }
      if (data.hasOwnProperty('sole_voting_authority')) {
        obj['sole_voting_authority'] = ApiClient.convertToType(data['sole_voting_authority'], 'Number');
      }
      if (data.hasOwnProperty('shared_voting_authority')) {
        obj['shared_voting_authority'] = ApiClient.convertToType(data['shared_voting_authority'], 'Number');
      }
      if (data.hasOwnProperty('no_voting_authority')) {
        obj['no_voting_authority'] = ApiClient.convertToType(data['no_voting_authority'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The CUSIP number for the security report by the Institutional Owner
   * @member {String} cusip
   */
  exports.prototype['cusip'] = undefined;
  /**
   * The ticker symbol for the security
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The name of the security
   * @member {String} security_name
   */
  exports.prototype['security_name'] = undefined;
  /**
   * The type of the security
   * @member {String} security_type
   */
  exports.prototype['security_type'] = undefined;
  /**
   * The class of stock held
   * @member {String} title_of_class
   */
  exports.prototype['title_of_class'] = undefined;
  /**
   * The stock exchange where the security is traded
   * @member {String} stock_exchange
   */
  exports.prototype['stock_exchange'] = undefined;
  /**
   * The date when the filing was submitted to the SEC by the company
   * @member {Date} filing_date
   */
  exports.prototype['filing_date'] = undefined;
  /**
   * The market value in amount of dollars of the holding in the listed security
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The number of shares held in the listed security
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Shares
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Segregate the holdings of securities of a class according to the nature of the investment discretion held by the Manager.
   * @member {String} investment_discretion
   */
  exports.prototype['investment_discretion'] = undefined;
  /**
   * A code for other managerial authority of the securities listed
   * @member {String} other_manager
   */
  exports.prototype['other_manager'] = undefined;
  /**
   * The number of shares where the insitutional holder has sole voting authority
   * @member {Number} sole_voting_authority
   */
  exports.prototype['sole_voting_authority'] = undefined;
  /**
   * The number of shares where the insitutional holder has shared voting authority
   * @member {Number} shared_voting_authority
   */
  exports.prototype['shared_voting_authority'] = undefined;
  /**
   * The number of shares where the insitutional holder has no voting authority
   * @member {Number} no_voting_authority
   */
  exports.prototype['no_voting_authority'] = undefined;



  return exports;
}));


