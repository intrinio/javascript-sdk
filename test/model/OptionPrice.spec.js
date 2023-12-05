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
    instance = new intrinioSDK.OptionPrice();
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

  describe('OptionPrice', function() {
    it('should create an instance of OptionPrice', function() {
      // uncomment below and update the code to test OptionPrice
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be.a(intrinioSDK.OptionPrice);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property close (base name: "close")', function() {
      // uncomment below and update the code to test the property close
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property closeBid (base name: "close_bid")', function() {
      // uncomment below and update the code to test the property closeBid
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property closeAsk (base name: "close_ask")', function() {
      // uncomment below and update the code to test the property closeAsk
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property volumeBid (base name: "volume_bid")', function() {
      // uncomment below and update the code to test the property volumeBid
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property volumeAsk (base name: "volume_ask")', function() {
      // uncomment below and update the code to test the property volumeAsk
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property trades (base name: "trades")', function() {
      // uncomment below and update the code to test the property trades
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property openInterest (base name: "open_interest")', function() {
      // uncomment below and update the code to test the property openInterest
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property openInterestChange (base name: "open_interest_change")', function() {
      // uncomment below and update the code to test the property openInterestChange
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property nextDayOpenInterest (base name: "next_day_open_interest")', function() {
      // uncomment below and update the code to test the property nextDayOpenInterest
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property impliedVolatility (base name: "implied_volatility")', function() {
      // uncomment below and update the code to test the property impliedVolatility
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property impliedVolatilityChange (base name: "implied_volatility_change")', function() {
      // uncomment below and update the code to test the property impliedVolatilityChange
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

    it('should have the property delta (base name: "delta")', function() {
      // uncomment below and update the code to test the property delta
      //var instane = new intrinioSDK.OptionPrice();
      //expect(instance).to.be();
    });

  });

}));
