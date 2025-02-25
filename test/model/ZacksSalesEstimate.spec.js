/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.91.1
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
    instance = new intrinioSDK.ZacksSalesEstimate();
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

  describe('ZacksSalesEstimate', function() {
    it('should create an instance of ZacksSalesEstimate', function() {
      // uncomment below and update the code to test ZacksSalesEstimate
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be.a(intrinioSDK.ZacksSalesEstimate);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear (base name: "fiscal_year")', function() {
      // uncomment below and update the code to test the property fiscalYear
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalPeriod (base name: "fiscal_period")', function() {
      // uncomment below and update the code to test the property fiscalPeriod
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear (base name: "calendar_year")', function() {
      // uncomment below and update the code to test the property calendarYear
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property calendarPeriod (base name: "calendar_period")', function() {
      // uncomment below and update the code to test the property calendarPeriod
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean (base name: "mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property median (base name: "median")', function() {
      // uncomment below and update the code to test the property median
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property standardDeviation (base name: "standard_deviation")', function() {
      // uncomment below and update the code to test the property standardDeviation
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsPercentChange1w (base name: "analyst_revisions_percent_change_1w")', function() {
      // uncomment below and update the code to test the property analystRevisionsPercentChange1w
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsUp1w (base name: "analyst_revisions_up_1w")', function() {
      // uncomment below and update the code to test the property analystRevisionsUp1w
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsDown1w (base name: "analyst_revisions_down_1w")', function() {
      // uncomment below and update the code to test the property analystRevisionsDown1w
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsPercentChange1m (base name: "analyst_revisions_percent_change_1m")', function() {
      // uncomment below and update the code to test the property analystRevisionsPercentChange1m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsUp1m (base name: "analyst_revisions_up_1m")', function() {
      // uncomment below and update the code to test the property analystRevisionsUp1m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsDown1m (base name: "analyst_revisions_down_1m")', function() {
      // uncomment below and update the code to test the property analystRevisionsDown1m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsPercentChange3m (base name: "analyst_revisions_percent_change_3m")', function() {
      // uncomment below and update the code to test the property analystRevisionsPercentChange3m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsUp3m (base name: "analyst_revisions_up_3m")', function() {
      // uncomment below and update the code to test the property analystRevisionsUp3m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

    it('should have the property analystRevisionsDown3m (base name: "analyst_revisions_down_3m")', function() {
      // uncomment below and update the code to test the property analystRevisionsDown3m
      //var instane = new intrinioSDK.ZacksSalesEstimate();
      //expect(instance).to.be();
    });

  });

}));
