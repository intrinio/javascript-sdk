/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.29.0
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
    instance = new intrinioSDK.OptionPriceRealtime();
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

  describe('OptionPriceRealtime', function() {
    it('should create an instance of OptionPriceRealtime', function() {
      // uncomment below and update the code to test OptionPriceRealtime
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be.a(intrinioSDK.OptionPriceRealtime);
    });

    it('should have the property last (base name: "last")', function() {
      // uncomment below and update the code to test the property last
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property lastSize (base name: "last_size")', function() {
      // uncomment below and update the code to test the property lastSize
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property lastTimestamp (base name: "last_timestamp")', function() {
      // uncomment below and update the code to test the property lastTimestamp
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property ask (base name: "ask")', function() {
      // uncomment below and update the code to test the property ask
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property askSize (base name: "ask_size")', function() {
      // uncomment below and update the code to test the property askSize
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property askTimestamp (base name: "ask_timestamp")', function() {
      // uncomment below and update the code to test the property askTimestamp
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property bid (base name: "bid")', function() {
      // uncomment below and update the code to test the property bid
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property bidSize (base name: "bid_size")', function() {
      // uncomment below and update the code to test the property bidSize
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property bidTimestamp (base name: "bid_timestamp")', function() {
      // uncomment below and update the code to test the property bidTimestamp
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property openInterest (base name: "open_interest")', function() {
      // uncomment below and update the code to test the property openInterest
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

    it('should have the property exerciseStyle (base name: "exercise_style")', function() {
      // uncomment below and update the code to test the property exerciseStyle
      //var instane = new intrinioSDK.OptionPriceRealtime();
      //expect(instance).to.be();
    });

  });

}));
