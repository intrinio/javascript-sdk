/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.2
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
    instance = new intrinioSDK.ZacksSalesSurprise();
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

  describe('ZacksSalesSurprise', function() {
    it('should create an instance of ZacksSalesSurprise', function() {
      // uncomment below and update the code to test ZacksSalesSurprise
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be.a(intrinioSDK.ZacksSalesSurprise);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear (base name: "fiscal_year")', function() {
      // uncomment below and update the code to test the property fiscalYear
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property fiscalQuarter (base name: "fiscal_quarter")', function() {
      // uncomment below and update the code to test the property fiscalQuarter
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear (base name: "calendar_year")', function() {
      // uncomment below and update the code to test the property calendarYear
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property calendarQuarter (base name: "calendar_quarter")', function() {
      // uncomment below and update the code to test the property calendarQuarter
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property actualReportedDate (base name: "actual_reported_date")', function() {
      // uncomment below and update the code to test the property actualReportedDate
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property actualReportedTime (base name: "actual_reported_time")', function() {
      // uncomment below and update the code to test the property actualReportedTime
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property actualReportedCode (base name: "actual_reported_code")', function() {
      // uncomment below and update the code to test the property actualReportedCode
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property actualReportedDesc (base name: "actual_reported_desc")', function() {
      // uncomment below and update the code to test the property actualReportedDesc
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property lastRevDate (base name: "last_rev_date")', function() {
      // uncomment below and update the code to test the property lastRevDate
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesActual (base name: "sales_actual")', function() {
      // uncomment below and update the code to test the property salesActual
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesActualZacksAdj (base name: "sales_actual_zacks_adj")', function() {
      // uncomment below and update the code to test the property salesActualZacksAdj
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesActualGaap (base name: "sales_actual_gaap")', function() {
      // uncomment below and update the code to test the property salesActualGaap
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesMeanEstimate (base name: "sales_mean_estimate")', function() {
      // uncomment below and update the code to test the property salesMeanEstimate
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesAmountDiff (base name: "sales_amount_diff")', function() {
      // uncomment below and update the code to test the property salesAmountDiff
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesPercentDiff (base name: "sales_percent_diff")', function() {
      // uncomment below and update the code to test the property salesPercentDiff
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

    it('should have the property salesStdDevEstimate (base name: "sales_std_dev_estimate")', function() {
      // uncomment below and update the code to test the property salesStdDevEstimate
      //var instane = new intrinioSDK.ZacksSalesSurprise();
      //expect(instance).to.be();
    });

  });

}));
