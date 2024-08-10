/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.1
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
   * @version 6.29.1
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
   * Indicates the date on which the ESG Rating was calculated.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The Community Category reflects a company's citizenship, charitable giving, and volunteerism. This category covers the company's human rights record and treatment of its supply chain. It also covers the environmental and social impacts of the company's products and services, and the development of sustainable products, processes and technologies.
   * @member {Number} community_rating
   */
  exports.prototype['community_rating'] = undefined;
  /**
   * The Employees category includes disclosure of policies, programs, and performance in diversity, labor relations and labor rights. The evaluation focuses on the quality of policies and programs, compliance with national laws and regulations, and proactive management initiatives. The category includes evaluation of inclusive diversity policies, fair treatment of all employees, robust diversity (EEO-1) programs and training.
   * @member {Number} employee_rating
   */
  exports.prototype['employee_rating'] = undefined;
  /**
   * The Environment category data covers a company's interactions with the environment at large, including use of natural resources. The category evaluates corporate environmental performance, compliance with environmental regulations, and mitigation of environmental footprint. It also includes leadership in addressing climate change through appropriate policies and strategies.
   * @member {Number} environment_rating
   */
  exports.prototype['environment_rating'] = undefined;
  /**
   * Corporate governance refers to leadership structure and the values that determine corporate direction, ethics and performance. The Governance category covers disclosure of policies and procedures, board independence and diversity, executive compensation, attention to stakeholder concerns, and evaluation of a companys culture of ethical leadership and compliance.
   * @member {Number} governance_rating
   */
  exports.prototype['governance_rating'] = undefined;



  return exports;
}));


