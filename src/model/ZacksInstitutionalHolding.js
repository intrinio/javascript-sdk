/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.46.0
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
    define(['ApiClient', 'model/ZacksInstitutionalHoldingCompanySummary', 'model/ZacksInstitutionalHoldingHistoricalSummary', 'model/ZacksInstitutionalHoldingOwnerSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZacksInstitutionalHoldingCompanySummary'), require('./ZacksInstitutionalHoldingHistoricalSummary'), require('./ZacksInstitutionalHoldingOwnerSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ZacksInstitutionalHolding = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ZacksInstitutionalHoldingCompanySummary, root.intrinioSDK.ZacksInstitutionalHoldingHistoricalSummary, root.intrinioSDK.ZacksInstitutionalHoldingOwnerSummary);
  }
}(this, function(ApiClient, ZacksInstitutionalHoldingCompanySummary, ZacksInstitutionalHoldingHistoricalSummary, ZacksInstitutionalHoldingOwnerSummary) {
  'use strict';




  /**
   * The ZacksInstitutionalHolding model module.
   * @module model/ZacksInstitutionalHolding
   * @version 6.26.0
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHolding</code>.
   * Returns a list of all ownership interests and the value of their interests sourced from Zacks.
   * @alias module:model/ZacksInstitutionalHolding
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ZacksInstitutionalHolding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHolding} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHolding} The populated <code>ZacksInstitutionalHolding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = ZacksInstitutionalHoldingCompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ZacksInstitutionalHoldingOwnerSummary.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('as_of_date')) {
        obj['as_of_date'] = ApiClient.convertToType(data['as_of_date'], 'Date');
      }
      if (data.hasOwnProperty('shares_held')) {
        obj['shares_held'] = ApiClient.convertToType(data['shares_held'], 'Number');
      }
      if (data.hasOwnProperty('shared_held_percent')) {
        obj['shared_held_percent'] = ApiClient.convertToType(data['shared_held_percent'], 'Number');
      }
      if (data.hasOwnProperty('shares_change')) {
        obj['shares_change'] = ApiClient.convertToType(data['shares_change'], 'Number');
      }
      if (data.hasOwnProperty('shares_change_percent')) {
        obj['shares_change_percent'] = ApiClient.convertToType(data['shares_change_percent'], 'Number');
      }
      if (data.hasOwnProperty('market_value')) {
        obj['market_value'] = ApiClient.convertToType(data['market_value'], 'Number');
      }
      if (data.hasOwnProperty('market_value_change')) {
        obj['market_value_change'] = ApiClient.convertToType(data['market_value_change'], 'Number');
      }
      if (data.hasOwnProperty('last_sec_filing_type')) {
        obj['last_sec_filing_type'] = ApiClient.convertToType(data['last_sec_filing_type'], 'String');
      }
      if (data.hasOwnProperty('last_sec_filing_date')) {
        obj['last_sec_filing_date'] = ApiClient.convertToType(data['last_sec_filing_date'], 'Date');
      }
      if (data.hasOwnProperty('last_sec_filing_shares')) {
        obj['last_sec_filing_shares'] = ApiClient.convertToType(data['last_sec_filing_shares'], 'Number');
      }
      if (data.hasOwnProperty('historical_holdings')) {
        obj['historical_holdings'] = ApiClient.convertToType(data['historical_holdings'], [ZacksInstitutionalHoldingHistoricalSummary]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ZacksInstitutionalHoldingCompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {module:model/ZacksInstitutionalHoldingOwnerSummary} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Quarter end date listed in the most recent 13F report filed by the institution
   * @member {Date} as_of_date
   */
  exports.prototype['as_of_date'] = undefined;
  /**
   * Number of shares of the stock listed
   * @member {Number} shares_held
   */
  exports.prototype['shares_held'] = undefined;
  /**
   * Percent of shares outstanding held of the stock by the institution listed
   * @member {Number} shared_held_percent
   */
  exports.prototype['shared_held_percent'] = undefined;
  /**
   * Change in shares of the stock held by the institution listed
   * @member {Number} shares_change
   */
  exports.prototype['shares_change'] = undefined;
  /**
   * Percentage change in shares of the stock held by the institution listed
   * @member {Number} shares_change_percent
   */
  exports.prototype['shares_change_percent'] = undefined;
  /**
   * Market value of shares outstanding held of the stock listed
   * @member {Number} market_value
   */
  exports.prototype['market_value'] = undefined;
  /**
   * Change in market value shares of the stock listed
   * @member {Number} market_value_change
   */
  exports.prototype['market_value_change'] = undefined;
  /**
   * The report type of the latest SEC filing
   * @member {String} last_sec_filing_type
   */
  exports.prototype['last_sec_filing_type'] = undefined;
  /**
   * The date of the latest SEC filing
   * @member {Date} last_sec_filing_date
   */
  exports.prototype['last_sec_filing_date'] = undefined;
  /**
   * The
   * @member {Number} last_sec_filing_shares
   */
  exports.prototype['last_sec_filing_shares'] = undefined;
  /**
   * @member {Array.<module:model/ZacksInstitutionalHoldingHistoricalSummary>} historical_holdings
   */
  exports.prototype['historical_holdings'] = undefined;



  return exports;
}));


