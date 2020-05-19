/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.0
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
    instance = new intrinioSDK.StockPriceSummary();
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

  describe('StockPriceSummary', function() {
    it('should create an instance of StockPriceSummary', function() {
      // uncomment below and update the code to test StockPriceSummary
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be.a(intrinioSDK.StockPriceSummary);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property intraperiod (base name: "intraperiod")', function() {
      // uncomment below and update the code to test the property intraperiod
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property close (base name: "close")', function() {
      // uncomment below and update the code to test the property close
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property adjOpen (base name: "adj_open")', function() {
      // uncomment below and update the code to test the property adjOpen
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property adjHigh (base name: "adj_high")', function() {
      // uncomment below and update the code to test the property adjHigh
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property adjLow (base name: "adj_low")', function() {
      // uncomment below and update the code to test the property adjLow
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property adjClose (base name: "adj_close")', function() {
      // uncomment below and update the code to test the property adjClose
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

    it('should have the property adjVolume (base name: "adj_volume")', function() {
      // uncomment below and update the code to test the property adjVolume
      //var instane = new intrinioSDK.StockPriceSummary();
      //expect(instance).to.be();
    });

  });

}));
