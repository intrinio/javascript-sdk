/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
    root.intrinioSDK.ZacksInstitutionalHoldingOwnerDetail = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZacksInstitutionalHoldingOwnerDetail model module.
   * @module model/ZacksInstitutionalHoldingOwnerDetail
   * @version 5.13.1
   */

  /**
   * Constructs a new <code>ZacksInstitutionalHoldingOwnerDetail</code>.
   * Returns a list of institutional owners and the value of their interests sourced from Zacks.
   * @alias module:model/ZacksInstitutionalHoldingOwnerDetail
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>ZacksInstitutionalHoldingOwnerDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZacksInstitutionalHoldingOwnerDetail} obj Optional instance to populate.
   * @return {module:model/ZacksInstitutionalHoldingOwnerDetail} The populated <code>ZacksInstitutionalHoldingOwnerDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('city_state')) {
        obj['city_state'] = ApiClient.convertToType(data['city_state'], 'String');
      }
      if (data.hasOwnProperty('location_code')) {
        obj['location_code'] = ApiClient.convertToType(data['location_code'], 'String');
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('investment_style')) {
        obj['investment_style'] = ApiClient.convertToType(data['investment_style'], 'String');
      }
      if (data.hasOwnProperty('number_of_holdings')) {
        obj['number_of_holdings'] = ApiClient.convertToType(data['number_of_holdings'], 'Number');
      }
      if (data.hasOwnProperty('total_holdings_value')) {
        obj['total_holdings_value'] = ApiClient.convertToType(data['total_holdings_value'], 'Number');
      }
      if (data.hasOwnProperty('portfolio_turnover_percent')) {
        obj['portfolio_turnover_percent'] = ApiClient.convertToType(data['portfolio_turnover_percent'], 'Number');
      }
      if (data.hasOwnProperty('is_fund')) {
        obj['is_fund'] = ApiClient.convertToType(data['is_fund'], 'String');
      }
      if (data.hasOwnProperty('fund_ticker')) {
        obj['fund_ticker'] = ApiClient.convertToType(data['fund_ticker'], 'String');
      }
      if (data.hasOwnProperty('has_fund_manager')) {
        obj['has_fund_manager'] = ApiClient.convertToType(data['has_fund_manager'], 'String');
      }
      if (data.hasOwnProperty('fund_manager_city')) {
        obj['fund_manager_city'] = ApiClient.convertToType(data['fund_manager_city'], 'String');
      }
      if (data.hasOwnProperty('fund_manager_name')) {
        obj['fund_manager_name'] = ApiClient.convertToType(data['fund_manager_name'], 'String');
      }
      if (data.hasOwnProperty('fund_manager_state')) {
        obj['fund_manager_state'] = ApiClient.convertToType(data['fund_manager_state'], 'String');
      }
      if (data.hasOwnProperty('files_13f')) {
        obj['files_13f'] = ApiClient.convertToType(data['files_13f'], 'String');
      }
      if (data.hasOwnProperty('is_etf')) {
        obj['is_etf'] = ApiClient.convertToType(data['is_etf'], 'String');
      }
      if (data.hasOwnProperty('last_updated_on')) {
        obj['last_updated_on'] = ApiClient.convertToType(data['last_updated_on'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The owner's name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Central Index Key (CIK) assigned to the company by the SEC as a unique identifier, used in SEC filings
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;
  /**
   * The owner's address
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The owner's city and state (City, ST)
   * @member {String} city_state
   */
  exports.prototype['city_state'] = undefined;
  /**
   * The owner's location code. ('D' = Domestic, 'C' = Canadian, 'F' = Foreign)
   * @member {String} location_code
   */
  exports.prototype['location_code'] = undefined;
  /**
   * The owner's phone number
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * The owner's postal code
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The owner's website url
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The owner's investment style ('I' = Income, 'V' = Value, 'G' = Growth, 'B' =  Growth at a Reasonable Price, 'A' = Aggressive Growth, 'P' = Passive/Index, 'D' = Deep Value)
   * @member {String} investment_style
   */
  exports.prototype['investment_style'] = undefined;
  /**
   * Count of equity holdings only, doesn't include bonds or other funds held
   * @member {Number} number_of_holdings
   */
  exports.prototype['number_of_holdings'] = undefined;
  /**
   * Market value of equity holdings in 1,000s. Sum of shares held times last close price.
   * @member {Number} total_holdings_value
   */
  exports.prototype['total_holdings_value'] = undefined;
  /**
   * Annual portfolio turnover in terms of percentage of total value.
   * @member {Number} portfolio_turnover_percent
   */
  exports.prototype['portfolio_turnover_percent'] = undefined;
  /**
   * If 'Y', the owner is a fund? ('Y' = Yes, 'N' = No)
   * @member {String} is_fund
   */
  exports.prototype['is_fund'] = undefined;
  /**
   * Fund ticker if the institution is a fund
   * @member {String} fund_ticker
   */
  exports.prototype['fund_ticker'] = undefined;
  /**
   * Does the fund have a manager. ('Y' = Yes, 'N' = No)
   * @member {String} has_fund_manager
   */
  exports.prototype['has_fund_manager'] = undefined;
  /**
   * The fund manager's city
   * @member {String} fund_manager_city
   */
  exports.prototype['fund_manager_city'] = undefined;
  /**
   * The fund manager's name
   * @member {String} fund_manager_name
   */
  exports.prototype['fund_manager_name'] = undefined;
  /**
   * The fund manager's state
   * @member {String} fund_manager_state
   */
  exports.prototype['fund_manager_state'] = undefined;
  /**
   * If 'Y', the company files the SEC 13F report. ('Y' = Yes, 'N' = No)
   * @member {String} files_13f
   */
  exports.prototype['files_13f'] = undefined;
  /**
   * If 'Y', the owner is an ETF. ('Y' = Yes, 'N' = No)
   * @member {String} is_etf
   */
  exports.prototype['is_etf'] = undefined;
  /**
   * The the last updated date
   * @member {Date} last_updated_on
   */
  exports.prototype['last_updated_on'] = undefined;



  return exports;
}));


