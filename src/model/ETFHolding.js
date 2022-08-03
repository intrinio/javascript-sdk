/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.28.4
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
    root.intrinioSDK.ETFHolding = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ETFHolding model module.
   * @module model/ETFHolding
   * @version 6.21.0
   */

  /**
   * Constructs a new <code>ETFHolding</code>.
   * The Exchange Traded Fund (ETF) holding data
   * @alias module:model/ETFHolding
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>ETFHolding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ETFHolding} obj Optional instance to populate.
   * @return {module:model/ETFHolding} The populated <code>ETFHolding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('as_of_date')) {
        obj['as_of_date'] = ApiClient.convertToType(data['as_of_date'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('composite_figi')) {
        obj['composite_figi'] = ApiClient.convertToType(data['composite_figi'], 'String');
      }
      if (data.hasOwnProperty('isin')) {
        obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
      }
      if (data.hasOwnProperty('ric')) {
        obj['ric'] = ApiClient.convertToType(data['ric'], 'String');
      }
      if (data.hasOwnProperty('sedol')) {
        obj['sedol'] = ApiClient.convertToType(data['sedol'], 'String');
      }
      if (data.hasOwnProperty('face')) {
        obj['face'] = ApiClient.convertToType(data['face'], 'Number');
      }
      if (data.hasOwnProperty('coupon')) {
        obj['coupon'] = ApiClient.convertToType(data['coupon'], 'Number');
      }
      if (data.hasOwnProperty('market_value_held')) {
        obj['market_value_held'] = ApiClient.convertToType(data['market_value_held'], 'Number');
      }
      if (data.hasOwnProperty('notional_value')) {
        obj['notional_value'] = ApiClient.convertToType(data['notional_value'], 'Number');
      }
      if (data.hasOwnProperty('maturity')) {
        obj['maturity'] = ApiClient.convertToType(data['maturity'], 'Date');
      }
      if (data.hasOwnProperty('quantity_held')) {
        obj['quantity_held'] = ApiClient.convertToType(data['quantity_held'], 'Number');
      }
      if (data.hasOwnProperty('weighting')) {
        obj['weighting'] = ApiClient.convertToType(data['weighting'], 'Number');
      }
      if (data.hasOwnProperty('quantity_units')) {
        obj['quantity_units'] = ApiClient.convertToType(data['quantity_units'], 'Number');
      }
      if (data.hasOwnProperty('quantity_per_share')) {
        obj['quantity_per_share'] = ApiClient.convertToType(data['quantity_per_share'], 'Number');
      }
      if (data.hasOwnProperty('contract_expiry_date')) {
        obj['contract_expiry_date'] = ApiClient.convertToType(data['contract_expiry_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The date on which the holding and their weights correspond
   * @member {Date} as_of_date
   */
  exports.prototype['as_of_date'] = undefined;
  /**
   * The common name for the holding
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The common exchange ticker for the holding
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The type of instrument for this holding.  Examples (Bond = 'BOND', Equity = 'EQUI', Options = 'OPTN')
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The OpenFIGI ticker for the holding
   * @member {String} composite_figi
   */
  exports.prototype['composite_figi'] = undefined;
  /**
   * International Securities Identification Number (ISIN) for the holding
   * @member {String} isin
   */
  exports.prototype['isin'] = undefined;
  /**
   * Reuters Instrument Code (RIC) for the holding
   * @member {String} ric
   */
  exports.prototype['ric'] = undefined;
  /**
   * Stock Exchange Daily Official List (SEDOL) for the holding
   * @member {String} sedol
   */
  exports.prototype['sedol'] = undefined;
  /**
   * Face value of the debt security, if available
   * @member {Number} face
   */
  exports.prototype['face'] = undefined;
  /**
   * Coupon rate of the debt security, if available
   * @member {Number} coupon
   */
  exports.prototype['coupon'] = undefined;
  /**
   * The market value of this holding in the ETF as of the `as_of_date`
   * @member {Number} market_value_held
   */
  exports.prototype['market_value_held'] = undefined;
  /**
   * Notional value of derivatives contracts held in the Exchange Traded Fund (ETF) or Exchange Traded Note (ETN)
   * @member {Number} notional_value
   */
  exports.prototype['notional_value'] = undefined;
  /**
   * Maturity date for the debt security, if available
   * @member {Date} maturity
   */
  exports.prototype['maturity'] = undefined;
  /**
   * Number of units of the security held if available
   * @member {Number} quantity_held
   */
  exports.prototype['quantity_held'] = undefined;
  /**
   * Fraction of the funds market value held
   * @member {Number} weighting
   */
  exports.prototype['weighting'] = undefined;
  /**
   * The unit of the `quanity_held` field. Examples ('oz', 'shares', 'contracts')
   * @member {Number} quantity_units
   */
  exports.prototype['quantity_units'] = undefined;
  /**
   * Number of units of the security held per units of shares outstanding of the Exchange Traded Fund (ETF), if available
   * @member {Number} quantity_per_share
   */
  exports.prototype['quantity_per_share'] = undefined;
  /**
   * Expiry date for the futures contract held in the Exchange Traded Fund (ETF) or Exchange Traded Note (ETN)
   * @member {Date} contract_expiry_date
   */
  exports.prototype['contract_expiry_date'] = undefined;



  return exports;
}));


