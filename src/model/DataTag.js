/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.12
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
    root.intrinioSDK.DataTag = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataTag model module.
   * @module model/DataTag
   * @version 5.18.0
   */

  /**
   * Constructs a new <code>DataTag</code>.
   * @alias module:model/DataTag
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>DataTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataTag} obj Optional instance to populate.
   * @return {module:model/DataTag} The populated <code>DataTag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('statement_code')) {
        obj['statement_code'] = ApiClient.convertToType(data['statement_code'], 'String');
      }
      if (data.hasOwnProperty('statement_type')) {
        obj['statement_type'] = ApiClient.convertToType(data['statement_type'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
      if (data.hasOwnProperty('factor')) {
        obj['factor'] = ApiClient.convertToType(data['factor'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Data Tag
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The readable name of the Data Tag
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The code-name of the Data Tag
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * The code of the financial statement to which this Data Tag belongs
   * @member {String} statement_code
   */
  exports.prototype['statement_code'] = undefined;
  /**
   * The format of the financial statment to which this Data Tag belongs
   * @member {module:model/DataTag.StatementTypeEnum} statement_type
   */
  exports.prototype['statement_type'] = undefined;
  /**
   * The parent Data Tag forming the statement relationship with the factor
   * @member {String} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * The order in which the Data Tag appears in its logical group (such as a financial statement)
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * The operator forming the statement relationship between the child Data Tag (or Data Tags) and the parent Data Tag
   * @member {String} factor
   */
  exports.prototype['factor'] = undefined;
  /**
   * Whether the Data Tag represents a credit or debit
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * The nature of the Data Tag, operating or nonoperating
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The unit of the Data Tag
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;


  /**
   * Allowed values for the <code>statement_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatementTypeEnum = {
    /**
     * value: "financial"
     * @const
     */
    "financial": "financial",
    /**
     * value: "industrial"
     * @const
     */
    "industrial": "industrial"  };


  return exports;
}));


