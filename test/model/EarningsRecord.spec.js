/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.5
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinioSDK);
  }
}(this, function(expect, intrinioSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinioSDK.EarningsRecord();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EarningsRecord', function() {
    it('should create an instance of EarningsRecord', function() {
      // uncomment below and update the code to test EarningsRecord
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be.a(intrinioSDK.EarningsRecord);
    });

    it('should have the property quarter (base name: "quarter")', function() {
      // uncomment below and update the code to test the property quarter
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property timeOfDay (base name: "time_of_day")', function() {
      // uncomment below and update the code to test the property timeOfDay
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property broadcastUrl (base name: "broadcast_url")', function() {
      // uncomment below and update the code to test the property broadcastUrl
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property transcriptUrl (base name: "transcript_url")', function() {
      // uncomment below and update the code to test the property transcriptUrl
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property transcriptQuarter (base name: "transcript_quarter")', function() {
      // uncomment below and update the code to test the property transcriptQuarter
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property transcriptFiscalYear (base name: "transcript_fiscal_year")', function() {
      // uncomment below and update the code to test the property transcriptFiscalYear
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property conferenceCallDate (base name: "conference_call_date")', function() {
      // uncomment below and update the code to test the property conferenceCallDate
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property conferenceCallTime (base name: "conference_call_time")', function() {
      // uncomment below and update the code to test the property conferenceCallTime
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property conferenceCallPhoneNumber (base name: "conference_call_phone_number")', function() {
      // uncomment below and update the code to test the property conferenceCallPhoneNumber
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property conferenceCallPasscode (base name: "conference_call_passcode")', function() {
      // uncomment below and update the code to test the property conferenceCallPasscode
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property lastConfirmationDate (base name: "last_confirmation_date")', function() {
      // uncomment below and update the code to test the property lastConfirmationDate
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property boardOfDirectorsMeetingDate (base name: "board_of_directors_meeting_date")', function() {
      // uncomment below and update the code to test the property boardOfDirectorsMeetingDate
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property boardOfDirectorsMeetingType (base name: "board_of_directors_meeting_type")', function() {
      // uncomment below and update the code to test the property boardOfDirectorsMeetingType
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property companyWebsite (base name: "company_website")', function() {
      // uncomment below and update the code to test the property companyWebsite
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property q1Date (base name: "q1_date")', function() {
      // uncomment below and update the code to test the property q1Date
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property q2Date (base name: "q2_date")', function() {
      // uncomment below and update the code to test the property q2Date
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property q3Date (base name: "q3_date")', function() {
      // uncomment below and update the code to test the property q3Date
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property q4Date (base name: "q4_date")', function() {
      // uncomment below and update the code to test the property q4Date
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property nextEarningsDate (base name: "next_earnings_date")', function() {
      // uncomment below and update the code to test the property nextEarningsDate
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property nextEarningsQuarter (base name: "next_earnings_quarter")', function() {
      // uncomment below and update the code to test the property nextEarningsQuarter
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property nextEarningsFiscalYear (base name: "next_earnings_fiscal_year")', function() {
      // uncomment below and update the code to test the property nextEarningsFiscalYear
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property preliminaryEarningsDate (base name: "preliminary_earnings_date")', function() {
      // uncomment below and update the code to test the property preliminaryEarningsDate
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.EarningsRecord();
      //expect(instance).to.be();
    });

  });

}));
