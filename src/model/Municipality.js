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
    root.intrinioSDK.Municipality = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Municipality model module.
   * @module model/Municipality
   * @version 5.18.0
   */

  /**
   * Constructs a new <code>Municipality</code>.
   * A local Municipality
   * @alias module:model/Municipality
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Municipality</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Municipality} obj Optional instance to populate.
   * @return {module:model/Municipality} The populated <code>Municipality</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('census_id')) {
        obj['census_id'] = ApiClient.convertToType(data['census_id'], 'Number');
      }
      if (data.hasOwnProperty('government_name')) {
        obj['government_name'] = ApiClient.convertToType(data['government_name'], 'String');
      }
      if (data.hasOwnProperty('government_type')) {
        obj['government_type'] = ApiClient.convertToType(data['government_type'], 'String');
      }
      if (data.hasOwnProperty('primary_contact_type')) {
        obj['primary_contact_type'] = ApiClient.convertToType(data['primary_contact_type'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('web_site')) {
        obj['web_site'] = ApiClient.convertToType(data['web_site'], 'String');
      }
      if (data.hasOwnProperty('population')) {
        obj['population'] = ApiClient.convertToType(data['population'], 'Number');
      }
      if (data.hasOwnProperty('population_as_of_year')) {
        obj['population_as_of_year'] = ApiClient.convertToType(data['population_as_of_year'], 'Number');
      }
      if (data.hasOwnProperty('enrollment')) {
        obj['enrollment'] = ApiClient.convertToType(data['enrollment'], 'Number');
      }
      if (data.hasOwnProperty('enrollment_as_of_year')) {
        obj['enrollment_as_of_year'] = ApiClient.convertToType(data['enrollment_as_of_year'], 'Number');
      }
      if (data.hasOwnProperty('area_name')) {
        obj['area_name'] = ApiClient.convertToType(data['area_name'], 'String');
      }
      if (data.hasOwnProperty('area_type')) {
        obj['area_type'] = ApiClient.convertToType(data['area_type'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for Municipality
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ID for the census
   * @member {Number} census_id
   */
  exports.prototype['census_id'] = undefined;
  /**
   * The government name of the Municipality
   * @member {String} government_name
   */
  exports.prototype['government_name'] = undefined;
  /**
   * The type of government of the Municipality
   * @member {String} government_type
   */
  exports.prototype['government_type'] = undefined;
  /**
   * The primary contact type of the Municipality
   * @member {String} primary_contact_type
   */
  exports.prototype['primary_contact_type'] = undefined;
  /**
   * The first line of the address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * The second line of the address (i.e. suite number)
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The city in which the Municipality is located in
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The state in which the Municipality is located in
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The zip code in which the Municipality is located in
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * The web site of the Municipality
   * @member {String} web_site
   */
  exports.prototype['web_site'] = undefined;
  /**
   * The population of the Municipality
   * @member {Number} population
   */
  exports.prototype['population'] = undefined;
  /**
   * The year from which the population of the Municipality was measured
   * @member {Number} population_as_of_year
   */
  exports.prototype['population_as_of_year'] = undefined;
  /**
   * The enrollment of the Municipality
   * @member {Number} enrollment
   */
  exports.prototype['enrollment'] = undefined;
  /**
   * The year from which the enrollment of the Municipality was measured
   * @member {Number} enrollment_as_of_year
   */
  exports.prototype['enrollment_as_of_year'] = undefined;
  /**
   * The name of the area of the Municipality
   * @member {String} area_name
   */
  exports.prototype['area_name'] = undefined;
  /**
   * The type of area of the Municipality
   * @member {String} area_type
   */
  exports.prototype['area_type'] = undefined;
  /**
   * The latitude of the location of the Municipality
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * The longitude of the location of the Municipality
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;



  return exports;
}));


