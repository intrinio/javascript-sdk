/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.15.3
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
    instance = new intrinioSDK.ZacksEPSEstimate();
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

  describe('ZacksEPSEstimate', function() {
    it('should create an instance of ZacksEPSEstimate', function() {
      // uncomment below and update the code to test ZacksEPSEstimate
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be.a(intrinioSDK.ZacksEPSEstimate);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear (base name: "fiscal_year")', function() {
      // uncomment below and update the code to test the property fiscalYear
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalQuarter (base name: "fiscal_quarter")', function() {
      // uncomment below and update the code to test the property fiscalQuarter
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear (base name: "calendar_year")', function() {
      // uncomment below and update the code to test the property calendarYear
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property calendarQuarter (base name: "calendar_quarter")', function() {
      // uncomment below and update the code to test the property calendarQuarter
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean (base name: "mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property median (base name: "median")', function() {
      // uncomment below and update the code to test the property median
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property standardDeviation (base name: "standard_deviation")', function() {
      // uncomment below and update the code to test the property standardDeviation
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property percentChange (base name: "percent_change")', function() {
      // uncomment below and update the code to test the property percentChange
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean7DaysAgo (base name: "mean_7_days_ago")', function() {
      // uncomment below and update the code to test the property mean7DaysAgo
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean30DaysAgo (base name: "mean_30_days_ago")', function() {
      // uncomment below and update the code to test the property mean30DaysAgo
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean60DaysAgo (base name: "mean_60_days_ago")', function() {
      // uncomment below and update the code to test the property mean60DaysAgo
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

    it('should have the property mean90DaysAgo (base name: "mean_90_days_ago")', function() {
      // uncomment below and update the code to test the property mean90DaysAgo
      //var instane = new intrinioSDK.ZacksEPSEstimate();
      //expect(instance).to.be();
    });

  });

}));
