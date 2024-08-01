/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.0
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
    instance = new intrinioSDK.ZacksLongTermGrowthRate();
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

  describe('ZacksLongTermGrowthRate', function() {
    it('should create an instance of ZacksLongTermGrowthRate', function() {
      // uncomment below and update the code to test ZacksLongTermGrowthRate
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be.a(intrinioSDK.ZacksLongTermGrowthRate);
    });

    it('should have the property mean (base name: "mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property median (base name: "median")', function() {
      // uncomment below and update the code to test the property median
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property stdDev (base name: "std_dev")', function() {
      // uncomment below and update the code to test the property stdDev
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpward (base name: "revisions_upward")', function() {
      // uncomment below and update the code to test the property revisionsUpward
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownward (base name: "revisions_downward")', function() {
      // uncomment below and update the code to test the property revisionsDownward
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property mean7DaysAgo (base name: "mean_7_days_ago")', function() {
      // uncomment below and update the code to test the property mean7DaysAgo
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property mean30DaysAgo (base name: "mean_30_days_ago")', function() {
      // uncomment below and update the code to test the property mean30DaysAgo
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property mean60DaysAgo (base name: "mean_60_days_ago")', function() {
      // uncomment below and update the code to test the property mean60DaysAgo
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property mean90DaysAgo (base name: "mean_90_days_ago")', function() {
      // uncomment below and update the code to test the property mean90DaysAgo
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast7Days (base name: "revisions_upward_last_7_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast7Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast7Days (base name: "revisions_downward_last_7_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast7Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast30Days (base name: "revisions_upward_last_30_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast30Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast30Days (base name: "revisions_downward_last_30_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast30Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast60Days (base name: "revisions_upward_last_60_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast60Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast60Days (base name: "revisions_downward_last_60_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast60Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast90Days (base name: "revisions_upward_last_90_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast90Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast90Days (base name: "revisions_downward_last_90_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast90Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast120Days (base name: "revisions_upward_last_120_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast120Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast120Days (base name: "revisions_downward_last_120_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast120Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsUpwardLast150Days (base name: "revisions_upward_last_150_days")', function() {
      // uncomment below and update the code to test the property revisionsUpwardLast150Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property revisionsDownwardLast150Days (base name: "revisions_downward_last_150_days")', function() {
      // uncomment below and update the code to test the property revisionsDownwardLast150Days
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.ZacksLongTermGrowthRate();
      //expect(instance).to.be();
    });

  });

}));
