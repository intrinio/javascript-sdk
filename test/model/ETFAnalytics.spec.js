/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.17.0
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
    instance = new intrinioSDK.ETFAnalytics();
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

  describe('ETFAnalytics', function() {
    it('should create an instance of ETFAnalytics', function() {
      // uncomment below and update the code to test ETFAnalytics
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be.a(intrinioSDK.ETFAnalytics);
    });

    it('should have the property fiftyTwoWeekHigh (base name: "fifty_two_week_high")', function() {
      // uncomment below and update the code to test the property fiftyTwoWeekHigh
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property fiftyTwoWeekLow (base name: "fifty_two_week_low")', function() {
      // uncomment below and update the code to test the property fiftyTwoWeekLow
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property volumeTraded (base name: "volume_traded")', function() {
      // uncomment below and update the code to test the property volumeTraded
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property averageDailyVolumeOneMonth (base name: "average_daily_volume_one_month")', function() {
      // uncomment below and update the code to test the property averageDailyVolumeOneMonth
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property averageDailyVolumeThreeMonth (base name: "average_daily_volume_three_month")', function() {
      // uncomment below and update the code to test the property averageDailyVolumeThreeMonth
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property averageDailyVolumeSixMonth (base name: "average_daily_volume_six_month")', function() {
      // uncomment below and update the code to test the property averageDailyVolumeSixMonth
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property marketCap (base name: "market_cap")', function() {
      // uncomment below and update the code to test the property marketCap
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property sharesOutstanding (base name: "shares_outstanding")', function() {
      // uncomment below and update the code to test the property sharesOutstanding
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property etf (base name: "etf")', function() {
      // uncomment below and update the code to test the property etf
      //var instane = new intrinioSDK.ETFAnalytics();
      //expect(instance).to.be();
    });

  });

}));
