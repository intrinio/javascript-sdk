/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.28.0
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
    root.intrinioSDK.ESGRating = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ESGRating model module.
   * @module model/ESGRating
   * @version 5.21.0
   */

  /**
   * Constructs a new <code>ESGRating</code>.
   * @alias module:model/ESGRating
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ESGRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESGRating} obj Optional instance to populate.
   * @return {module:model/ESGRating} The populated <code>ESGRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('community_rating')) {
        obj['community_rating'] = ApiClient.convertToType(data['community_rating'], 'Number');
      }
      if (data.hasOwnProperty('employee_rating')) {
        obj['employee_rating'] = ApiClient.convertToType(data['employee_rating'], 'Number');
      }
      if (data.hasOwnProperty('environment_rating')) {
        obj['environment_rating'] = ApiClient.convertToType(data['environment_rating'], 'Number');
      }
      if (data.hasOwnProperty('governance_rating')) {
        obj['governance_rating'] = ApiClient.convertToType(data['governance_rating'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} community_rating
   */
  exports.prototype['community_rating'] = undefined;
  /**
   * @member {Number} employee_rating
   */
  exports.prototype['employee_rating'] = undefined;
  /**
   * @member {Number} environment_rating
   */
  exports.prototype['environment_rating'] = undefined;
  /**
   * @member {Number} governance_rating
   */
  exports.prototype['governance_rating'] = undefined;



  return exports;
}));


