/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.1
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
    root.intrinioSDK.InstitutionalOwnership = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InstitutionalOwnership model module.
   * @module model/InstitutionalOwnership
   * @version 6.28.0
   */

  /**
   * Constructs a new <code>InstitutionalOwnership</code>.
   * The amount of a company&#39;s available stock owned by mutual or pension funds, insurance companies, investment firms, private foundations, endowments or other large entities that manage funds on behalf of others.
   * @alias module:model/InstitutionalOwnership
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>InstitutionalOwnership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstitutionalOwnership} obj Optional instance to populate.
   * @return {module:model/InstitutionalOwnership} The populated <code>InstitutionalOwnership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owner_cik')) {
        obj['owner_cik'] = ApiClient.convertToType(data['owner_cik'], 'String');
      }
      if (data.hasOwnProperty('owner_name')) {
        obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
      }
      if (data.hasOwnProperty('period_ended')) {
        obj['period_ended'] = ApiClient.convertToType(data['period_ended'], 'Date');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
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
      if (data.hasOwnProperty('previous_amount')) {
        obj['previous_amount'] = ApiClient.convertToType(data['previous_amount'], 'Number');
      }
      if (data.hasOwnProperty('amount_change')) {
        obj['amount_change'] = ApiClient.convertToType(data['amount_change'], 'Number');
      }
      if (data.hasOwnProperty('amount_percent_change')) {
        obj['amount_percent_change'] = ApiClient.convertToType(data['amount_percent_change'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Central Index Key issued by the SEC, which is the unique identifier all owner filings
   * @member {String} owner_cik
   */
  exports.prototype['owner_cik'] = undefined;
  /**
   * The name of the institutional owner
   * @member {String} owner_name
   */
  exports.prototype['owner_name'] = undefined;
  /**
   * The date of the latest 13-F filing on record with the SEC.
   * @member {Date} period_ended
   */
  exports.prototype['period_ended'] = undefined;
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
  /**
   * The prior quarter number of shares held by the owner
   * @member {Number} previous_amount
   */
  exports.prototype['previous_amount'] = undefined;
  /**
   * The change in number of shares held from the prior quarter
   * @member {Number} amount_change
   */
  exports.prototype['amount_change'] = undefined;
  /**
   * The percentage change in the number of shares held from the prior quarter
   * @member {Number} amount_percent_change
   */
  exports.prototype['amount_percent_change'] = undefined;



  return exports;
}));


