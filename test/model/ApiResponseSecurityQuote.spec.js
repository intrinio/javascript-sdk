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
    instance = new intrinioSDK.ApiResponseSecurityQuote();
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

  describe('ApiResponseSecurityQuote', function() {
    it('should create an instance of ApiResponseSecurityQuote', function() {
      // uncomment below and update the code to test ApiResponseSecurityQuote
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be.a(intrinioSDK.ApiResponseSecurityQuote);
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property last (base name: "last")', function() {
      // uncomment below and update the code to test the property last
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property lastTime (base name: "last_time")', function() {
      // uncomment below and update the code to test the property lastTime
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property exchangeVolume (base name: "exchange_volume")', function() {
      // uncomment below and update the code to test the property exchangeVolume
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property marketVolume (base name: "market_volume")', function() {
      // uncomment below and update the code to test the property marketVolume
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property eodFiftyTwoWeekHigh (base name: "eod_fifty_two_week_high")', function() {
      // uncomment below and update the code to test the property eodFiftyTwoWeekHigh
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property eodFiftyTwoWeekLow (base name: "eod_fifty_two_week_low")', function() {
      // uncomment below and update the code to test the property eodFiftyTwoWeekLow
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property marketcap (base name: "marketcap")', function() {
      // uncomment below and update the code to test the property marketcap
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property pricetoearnings (base name: "pricetoearnings")', function() {
      // uncomment below and update the code to test the property pricetoearnings
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property previousClose (base name: "previous_close")', function() {
      // uncomment below and update the code to test the property previousClose
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property previousCloseDate (base name: "previous_close_date")', function() {
      // uncomment below and update the code to test the property previousCloseDate
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "change")', function() {
      // uncomment below and update the code to test the property change
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent (base name: "change_percent")', function() {
      // uncomment below and update the code to test the property changePercent
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property adjClose5DaysAgo (base name: "adj_close_5_days_ago")', function() {
      // uncomment below and update the code to test the property adjClose5DaysAgo
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property adjClose30DaysAgo (base name: "adj_close_30_days_ago")', function() {
      // uncomment below and update the code to test the property adjClose30DaysAgo
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property adjClose180DaysAgo (base name: "adj_close_180_days_ago")', function() {
      // uncomment below and update the code to test the property adjClose180DaysAgo
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property adjClose365DaysAgo (base name: "adj_close_365_days_ago")', function() {
      // uncomment below and update the code to test the property adjClose365DaysAgo
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property adjClose1825DaysAgo (base name: "adj_close_1825_days_ago")', function() {
      // uncomment below and update the code to test the property adjClose1825DaysAgo
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent5Days (base name: "change_percent_5_days")', function() {
      // uncomment below and update the code to test the property changePercent5Days
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent30Days (base name: "change_percent_30_days")', function() {
      // uncomment below and update the code to test the property changePercent30Days
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent180Days (base name: "change_percent_180_days")', function() {
      // uncomment below and update the code to test the property changePercent180Days
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent365Days (base name: "change_percent_365_days")', function() {
      // uncomment below and update the code to test the property changePercent365Days
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

    it('should have the property changePercent1825Days (base name: "change_percent_1825_days")', function() {
      // uncomment below and update the code to test the property changePercent1825Days
      //var instane = new intrinioSDK.ApiResponseSecurityQuote();
      //expect(instance).to.be();
    });

  });

}));
