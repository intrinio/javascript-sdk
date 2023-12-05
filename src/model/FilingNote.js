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
    define(['ApiClient', 'model/FilingNoteFiling'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FilingNoteFiling'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.FilingNote = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.FilingNoteFiling);
  }
}(this, function(ApiClient, FilingNoteFiling) {
  'use strict';




  /**
   * The FilingNote model module.
   * @module model/FilingNote
   * @version 6.26.3
   */

  /**
   * Constructs a new <code>FilingNote</code>.
   * A filing submitted to the SEC by a company
   * @alias module:model/FilingNote
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FilingNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilingNote} obj Optional instance to populate.
   * @return {module:model/FilingNote} The populated <code>FilingNote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('xbrl_tag')) {
        obj['xbrl_tag'] = ApiClient.convertToType(data['xbrl_tag'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('filing')) {
        obj['filing'] = FilingNoteFiling.constructFromObject(data['filing']);
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the note
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The XBRL Tag used for the note
   * @member {String} xbrl_tag
   */
  exports.prototype['xbrl_tag'] = undefined;
  /**
   * The plain text (after html has been removed) of the note, or text including html if the content_format parameter has been set to html
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {module:model/FilingNoteFiling} filing
   */
  exports.prototype['filing'] = undefined;



  return exports;
}));


