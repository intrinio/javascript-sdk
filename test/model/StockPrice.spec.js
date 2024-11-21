/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.75.0
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
    instance = new intrinioSDK.StockPrice();
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

  describe('StockPrice', function() {
    it('should create an instance of StockPrice', function() {
      // uncomment below and update the code to test StockPrice
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be.a(intrinioSDK.StockPrice);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property intraperiod (base name: "intraperiod")', function() {
      // uncomment below and update the code to test the property intraperiod
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property close (base name: "close")', function() {
      // uncomment below and update the code to test the property close
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property adjOpen (base name: "adj_open")', function() {
      // uncomment below and update the code to test the property adjOpen
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property adjHigh (base name: "adj_high")', function() {
      // uncomment below and update the code to test the property adjHigh
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property adjLow (base name: "adj_low")', function() {
      // uncomment below and update the code to test the property adjLow
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property adjClose (base name: "adj_close")', function() {
      // uncomment below and update the code to test the property adjClose
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property adjVolume (base name: "adj_volume")', function() {
      // uncomment below and update the code to test the property adjVolume
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property factor (base name: "factor")', function() {
      // uncomment below and update the code to test the property factor
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property splitRatio (base name: "split_ratio")', function() {
      // uncomment below and update the code to test the property splitRatio
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property dividend (base name: "dividend")', function() {
      // uncomment below and update the code to test the property dividend
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "change")', function() {
      // uncomment below and update the code to test the property change
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property percentChange (base name: "percent_change")', function() {
      // uncomment below and update the code to test the property percentChange
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property fiftyTwoWeekHigh (base name: "fifty_two_week_high")', function() {
      // uncomment below and update the code to test the property fiftyTwoWeekHigh
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property fiftyTwoWeekLow (base name: "fifty_two_week_low")', function() {
      // uncomment below and update the code to test the property fiftyTwoWeekLow
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.StockPrice();
      //expect(instance).to.be();
    });

  });

}));
