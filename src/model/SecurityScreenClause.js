/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.8
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
    root.intrinioSDK.SecurityScreenClause = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityScreenClause model module.
   * @module model/SecurityScreenClause
   * @version 6.26.3
   */

  /**
   * Constructs a new <code>SecurityScreenClause</code>.
   * A conditional clause used tp screen securities
   * @alias module:model/SecurityScreenClause
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SecurityScreenClause</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityScreenClause} obj Optional instance to populate.
   * @return {module:model/SecurityScreenClause} The populated <code>SecurityScreenClause</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The field to use when screening, such as an Intrinio Data Tag
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * The logic operator to use when screening
   * @member {module:model/SecurityScreenClause.OperatorEnum} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * The value to screen by
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = {
    /**
     * value: "eq"
     * @const
     */
    "eq": "eq",
    /**
     * value: "gt"
     * @const
     */
    "gt": "gt",
    /**
     * value: "gte"
     * @const
     */
    "gte": "gte",
    /**
     * value: "lt"
     * @const
     */
    "lt": "lt",
    /**
     * value: "lte"
     * @const
     */
    "lte": "lte",
    /**
     * value: "contains"
     * @const
     */
    "contains": "contains"  };


  return exports;
}));


