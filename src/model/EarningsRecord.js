/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.1
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
    define(['ApiClient', 'model/SecuritySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecuritySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.EarningsRecord = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecuritySummary);
  }
}(this, function(ApiClient, SecuritySummary) {
  'use strict';




  /**
   * The EarningsRecord model module.
   * @module model/EarningsRecord
   * @version 6.26.7
   */

  /**
   * Constructs a new <code>EarningsRecord</code>.
   * An earnings record for the identifier
   * @alias module:model/EarningsRecord
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>EarningsRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EarningsRecord} obj Optional instance to populate.
   * @return {module:model/EarningsRecord} The populated <code>EarningsRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('quarter')) {
        obj['quarter'] = ApiClient.convertToType(data['quarter'], 'String');
      }
      if (data.hasOwnProperty('time_of_day')) {
        obj['time_of_day'] = ApiClient.convertToType(data['time_of_day'], 'String');
      }
      if (data.hasOwnProperty('broadcast_url')) {
        obj['broadcast_url'] = ApiClient.convertToType(data['broadcast_url'], 'String');
      }
      if (data.hasOwnProperty('transcript_url')) {
        obj['transcript_url'] = ApiClient.convertToType(data['transcript_url'], 'String');
      }
      if (data.hasOwnProperty('transcript_quarter')) {
        obj['transcript_quarter'] = ApiClient.convertToType(data['transcript_quarter'], 'String');
      }
      if (data.hasOwnProperty('transcript_fiscal_year')) {
        obj['transcript_fiscal_year'] = ApiClient.convertToType(data['transcript_fiscal_year'], 'String');
      }
      if (data.hasOwnProperty('conference_call_date')) {
        obj['conference_call_date'] = ApiClient.convertToType(data['conference_call_date'], 'Date');
      }
      if (data.hasOwnProperty('conference_call_time')) {
        obj['conference_call_time'] = ApiClient.convertToType(data['conference_call_time'], 'String');
      }
      if (data.hasOwnProperty('conference_call_phone_number')) {
        obj['conference_call_phone_number'] = ApiClient.convertToType(data['conference_call_phone_number'], 'String');
      }
      if (data.hasOwnProperty('conference_call_passcode')) {
        obj['conference_call_passcode'] = ApiClient.convertToType(data['conference_call_passcode'], 'String');
      }
      if (data.hasOwnProperty('last_confirmation_date')) {
        obj['last_confirmation_date'] = ApiClient.convertToType(data['last_confirmation_date'], 'Date');
      }
      if (data.hasOwnProperty('board_of_directors_meeting_date')) {
        obj['board_of_directors_meeting_date'] = ApiClient.convertToType(data['board_of_directors_meeting_date'], 'Date');
      }
      if (data.hasOwnProperty('board_of_directors_meeting_type')) {
        obj['board_of_directors_meeting_type'] = ApiClient.convertToType(data['board_of_directors_meeting_type'], 'String');
      }
      if (data.hasOwnProperty('company_website')) {
        obj['company_website'] = ApiClient.convertToType(data['company_website'], 'String');
      }
      if (data.hasOwnProperty('q1_date')) {
        obj['q1_date'] = ApiClient.convertToType(data['q1_date'], 'Date');
      }
      if (data.hasOwnProperty('q2_date')) {
        obj['q2_date'] = ApiClient.convertToType(data['q2_date'], 'Date');
      }
      if (data.hasOwnProperty('q3_date')) {
        obj['q3_date'] = ApiClient.convertToType(data['q3_date'], 'Date');
      }
      if (data.hasOwnProperty('q4_date')) {
        obj['q4_date'] = ApiClient.convertToType(data['q4_date'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('next_earnings_date')) {
        obj['next_earnings_date'] = ApiClient.convertToType(data['next_earnings_date'], 'Date');
      }
      if (data.hasOwnProperty('next_earnings_quarter')) {
        obj['next_earnings_quarter'] = ApiClient.convertToType(data['next_earnings_quarter'], 'String');
      }
      if (data.hasOwnProperty('next_earnings_fiscal_year')) {
        obj['next_earnings_fiscal_year'] = ApiClient.convertToType(data['next_earnings_fiscal_year'], 'Number');
      }
      if (data.hasOwnProperty('preliminary_earnings_date')) {
        obj['preliminary_earnings_date'] = ApiClient.convertToType(data['preliminary_earnings_date'], 'Date');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = SecuritySummary.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The letter “Q” followed by the quarter number the earnings information applies to
   * @member {String} quarter
   */
  exports.prototype['quarter'] = undefined;
  /**
   * Indicates the time of the announcement
   * @member {module:model/EarningsRecord.TimeOfDayEnum} time_of_day
   */
  exports.prototype['time_of_day'] = undefined;
  /**
   * Link for Conference Call recording
   * @member {String} broadcast_url
   */
  exports.prototype['broadcast_url'] = undefined;
  /**
   * Link to the earnings release transcript
   * @member {String} transcript_url
   */
  exports.prototype['transcript_url'] = undefined;
  /**
   * The letter “Q” followed by the quarter number the earnings transcript applies to
   * @member {String} transcript_quarter
   */
  exports.prototype['transcript_quarter'] = undefined;
  /**
   * Fiscal year in YYYY format for the earnings transcript
   * @member {String} transcript_fiscal_year
   */
  exports.prototype['transcript_fiscal_year'] = undefined;
  /**
   * Date of the conference call
   * @member {Date} conference_call_date
   */
  exports.prototype['conference_call_date'] = undefined;
  /**
   * Published time of the conference call
   * @member {String} conference_call_time
   */
  exports.prototype['conference_call_time'] = undefined;
  /**
   * Publicly available phone number for replay conference call
   * @member {String} conference_call_phone_number
   */
  exports.prototype['conference_call_phone_number'] = undefined;
  /**
   * Passcode for replay conference call
   * @member {String} conference_call_passcode
   */
  exports.prototype['conference_call_passcode'] = undefined;
  /**
   * Date of last earnings date update by a WSH analyst
   * @member {Date} last_confirmation_date
   */
  exports.prototype['last_confirmation_date'] = undefined;
  /**
   * Date of Board/Shareholder Meeting
   * @member {Date} board_of_directors_meeting_date
   */
  exports.prototype['board_of_directors_meeting_date'] = undefined;
  /**
   * The type of meeting - \"B\" indicates a Board of Directors meeting and \"S\" indicates a Shareholder meeting
   * @member {module:model/EarningsRecord.BoardOfDirectorsMeetingTypeEnum} board_of_directors_meeting_type
   */
  exports.prototype['board_of_directors_meeting_type'] = undefined;
  /**
   * Website link for the company
   * @member {String} company_website
   */
  exports.prototype['company_website'] = undefined;
  /**
   * Earnings Date for 1st quarter
   * @member {Date} q1_date
   */
  exports.prototype['q1_date'] = undefined;
  /**
   * Earnings Date for 2nd quarter
   * @member {Date} q2_date
   */
  exports.prototype['q2_date'] = undefined;
  /**
   * Earnings Date for 3rd quarter
   * @member {Date} q3_date
   */
  exports.prototype['q3_date'] = undefined;
  /**
   * Earnings Date for 4th quarter
   * @member {Date} q4_date
   */
  exports.prototype['q4_date'] = undefined;
  /**
   * The nature of the next reported earnings date - \"V\" indicates a Verified date, \"T\" indicates that the date was gathered from the company, but is still considered Tentative, and \"I\" indicates that the date is forecased or Inferred
   * @member {module:model/EarningsRecord.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Next earnings date
   * @member {Date} next_earnings_date
   */
  exports.prototype['next_earnings_date'] = undefined;
  /**
   * The quarter of the next earnings release
   * @member {String} next_earnings_quarter
   */
  exports.prototype['next_earnings_quarter'] = undefined;
  /**
   * The fiscal year associated with next earnings date and next earnings quarter
   * @member {Number} next_earnings_fiscal_year
   */
  exports.prototype['next_earnings_fiscal_year'] = undefined;
  /**
   * The release date of a preliminary earnings report
   * @member {Date} preliminary_earnings_date
   */
  exports.prototype['preliminary_earnings_date'] = undefined;
  /**
   * @member {module:model/SecuritySummary} security
   */
  exports.prototype['security'] = undefined;


  /**
   * Allowed values for the <code>time_of_day</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TimeOfDayEnum = {
    /**
     * value: "Before Market"
     * @const
     */
    "Before Market": "Before Market",
    /**
     * value: "During Market"
     * @const
     */
    "During Market": "During Market",
    /**
     * value: "After Market"
     * @const
     */
    "After Market": "After Market",
    /**
     * value: "Unspecified"
     * @const
     */
    "Unspecified": "Unspecified"  };

  /**
   * Allowed values for the <code>board_of_directors_meeting_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BoardOfDirectorsMeetingTypeEnum = {
    /**
     * value: "B"
     * @const
     */
    "B": "B",
    /**
     * value: "S"
     * @const
     */
    "S": "S"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "V"
     * @const
     */
    "V": "V",
    /**
     * value: "T"
     * @const
     */
    "T": "T",
    /**
     * value: "I"
     * @const
     */
    "I": "I"  };


  return exports;
}));


