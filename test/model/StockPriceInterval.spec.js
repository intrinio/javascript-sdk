/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.2
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
    instance = new intrinioSDK.StockPriceInterval();
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

  describe('StockPriceInterval', function() {
    it('should create an instance of StockPriceInterval', function() {
      // uncomment below and update the code to test StockPriceInterval
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be.a(intrinioSDK.StockPriceInterval);
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property close (base name: "close")', function() {
      // uncomment below and update the code to test the property close
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property closeTime (base name: "close_time")', function() {
      // uncomment below and update the code to test the property closeTime
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property average (base name: "average")', function() {
      // uncomment below and update the code to test the property average
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "change")', function() {
      // uncomment below and update the code to test the property change
      //var instane = new intrinioSDK.StockPriceInterval();
      //expect(instance).to.be();
    });

  });

}));
