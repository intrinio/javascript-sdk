/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.39.0
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
    define(['ApiClient', 'model/CompanySummary', 'model/OwnerSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanySummary'), require('./OwnerSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.InsiderTransaction = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanySummary, root.intrinioSDK.OwnerSummary);
  }
}(this, function(ApiClient, CompanySummary, OwnerSummary) {
  'use strict';




  /**
   * The InsiderTransaction model module.
   * @module model/InsiderTransaction
   * @version 6.23.0
   */

  /**
   * Constructs a new <code>InsiderTransaction</code>.
   * A transaction where the owner is considered an insider of that company. Criteria for being an insider include being a director, officer, or 10%+ owner in the company. Transactions are detailed for both non-derivative and derivative transactions by the insider.
   * @alias module:model/InsiderTransaction
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>InsiderTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsiderTransaction} obj Optional instance to populate.
   * @return {module:model/InsiderTransaction} The populated <code>InsiderTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('director')) {
        obj['director'] = ApiClient.convertToType(data['director'], 'Boolean');
      }
      if (data.hasOwnProperty('officer')) {
        obj['officer'] = ApiClient.convertToType(data['officer'], 'Boolean');
      }
      if (data.hasOwnProperty('ten_percent_owner')) {
        obj['ten_percent_owner'] = ApiClient.convertToType(data['ten_percent_owner'], 'Boolean');
      }
      if (data.hasOwnProperty('other_relation')) {
        obj['other_relation'] = ApiClient.convertToType(data['other_relation'], 'Boolean');
      }
      if (data.hasOwnProperty('officer_title')) {
        obj['officer_title'] = ApiClient.convertToType(data['officer_title'], 'String');
      }
      if (data.hasOwnProperty('derivative_transaction')) {
        obj['derivative_transaction'] = ApiClient.convertToType(data['derivative_transaction'], 'Boolean');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('security_title')) {
        obj['security_title'] = ApiClient.convertToType(data['security_title'], 'String');
      }
      if (data.hasOwnProperty('conversion_exercise_price')) {
        obj['conversion_exercise_price'] = ApiClient.convertToType(data['conversion_exercise_price'], 'Number');
      }
      if (data.hasOwnProperty('transaction_type_code')) {
        obj['transaction_type_code'] = ApiClient.convertToType(data['transaction_type_code'], 'String');
      }
      if (data.hasOwnProperty('acquisition_disposition_code')) {
        obj['acquisition_disposition_code'] = ApiClient.convertToType(data['acquisition_disposition_code'], 'String');
      }
      if (data.hasOwnProperty('amount_of_shares')) {
        obj['amount_of_shares'] = ApiClient.convertToType(data['amount_of_shares'], 'Number');
      }
      if (data.hasOwnProperty('underlying_security_title')) {
        obj['underlying_security_title'] = ApiClient.convertToType(data['underlying_security_title'], 'String');
      }
      if (data.hasOwnProperty('underlying_shares')) {
        obj['underlying_shares'] = ApiClient.convertToType(data['underlying_shares'], 'Number');
      }
      if (data.hasOwnProperty('transaction_price')) {
        obj['transaction_price'] = ApiClient.convertToType(data['transaction_price'], 'Number');
      }
      if (data.hasOwnProperty('total_shares_owned')) {
        obj['total_shares_owned'] = ApiClient.convertToType(data['total_shares_owned'], 'Number');
      }
      if (data.hasOwnProperty('ownership_type_code')) {
        obj['ownership_type_code'] = ApiClient.convertToType(data['ownership_type_code'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = CompanySummary.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = OwnerSummary.constructFromObject(data['owner']);
      }
    }
    return obj;
  }

  /**
   * (true/false) A boolean indicating whether or not the owner is a director in the company
   * @member {Boolean} director
   */
  exports.prototype['director'] = undefined;
  /**
   * (true/false) A boolean indicating whether or not the owner is a officer in the company
   * @member {Boolean} officer
   */
  exports.prototype['officer'] = undefined;
  /**
   * (true/false) A boolean indicating whether or not the owner has a ten percent or greater interest in the company
   * @member {Boolean} ten_percent_owner
   */
  exports.prototype['ten_percent_owner'] = undefined;
  /**
   * (true/false) A boolean indicating whether or not the owner has another relationship with the company beside, direct, officer, or significant owner in the company
   * @member {Boolean} other_relation
   */
  exports.prototype['other_relation'] = undefined;
  /**
   * The officer title of the owner in the company
   * @member {String} officer_title
   */
  exports.prototype['officer_title'] = undefined;
  /**
   * (true) A boolean indicating the transaction is a derivative transaction, which may or may not become common stock due to various possible exercise or conversion requirements
   * @member {Boolean} derivative_transaction
   */
  exports.prototype['derivative_transaction'] = undefined;
  /**
   * The ticker symbol for the company’s common stock
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The name of the derivative security transacted
   * @member {String} security_title
   */
  exports.prototype['security_title'] = undefined;
  /**
   * The conversion or exercise price of the derivative security transacted
   * @member {Number} conversion_exercise_price
   */
  exports.prototype['conversion_exercise_price'] = undefined;
  /**
   * A symbol representing the transaction type; P = Purchase | S = Sale | A  = Award | M = Conversion to Common | C = Conversion | X = Exercise of Derivative More Transaction Codes
   * @member {String} transaction_type_code
   */
  exports.prototype['transaction_type_code'] = undefined;
  /**
   * A symbol representing whether or not the derivative securities are Acquired or Disposed; A = Acquisition | D = Disposition
   * @member {String} acquisition_disposition_code
   */
  exports.prototype['acquisition_disposition_code'] = undefined;
  /**
   * The number of derivative securities involved in the subject transaction
   * @member {Number} amount_of_shares
   */
  exports.prototype['amount_of_shares'] = undefined;
  /**
   * The name of the underlying non-derivative security related to this derivative transaction
   * @member {String} underlying_security_title
   */
  exports.prototype['underlying_security_title'] = undefined;
  /**
   * The number of non-derivative shares involved in the subject transaction
   * @member {Number} underlying_shares
   */
  exports.prototype['underlying_shares'] = undefined;
  /**
   * The price of the derivative securities
   * @member {Number} transaction_price
   */
  exports.prototype['transaction_price'] = undefined;
  /**
   * The total number of derivative securities owned following the subject transaction
   * @member {Number} total_shares_owned
   */
  exports.prototype['total_shares_owned'] = undefined;
  /**
   * A symbol representing the ownership of the securities transacted; D = Direct Ownership | I = Indirect Ownership
   * @member {String} ownership_type_code
   */
  exports.prototype['ownership_type_code'] = undefined;
  /**
   * The company associated with the filing
   * @member {module:model/CompanySummary} company
   */
  exports.prototype['company'] = undefined;
  /**
   * The owner associated with the filing
   * @member {module:model/OwnerSummary} owner
   */
  exports.prototype['owner'] = undefined;



  return exports;
}));


