/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.61.1
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
    instance = new intrinioSDK.OptionPriceRealtimeExtended();
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

  describe('OptionPriceRealtimeExtended', function() {
    it('should create an instance of OptionPriceRealtimeExtended', function() {
      // uncomment below and update the code to test OptionPriceRealtimeExtended
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be.a(intrinioSDK.OptionPriceRealtimeExtended);
    });

    it('should have the property bidOpen (base name: "bid_open")', function() {
      // uncomment below and update the code to test the property bidOpen
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property bidHigh (base name: "bid_high")', function() {
      // uncomment below and update the code to test the property bidHigh
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property bidLow (base name: "bid_low")', function() {
      // uncomment below and update the code to test the property bidLow
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property askOpen (base name: "ask_open")', function() {
      // uncomment below and update the code to test the property askOpen
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property askHigh (base name: "ask_high")', function() {
      // uncomment below and update the code to test the property askHigh
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property askLow (base name: "ask_low")', function() {
      // uncomment below and update the code to test the property askLow
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property tradeOpen (base name: "trade_open")', function() {
      // uncomment below and update the code to test the property tradeOpen
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property tradeHigh (base name: "trade_high")', function() {
      // uncomment below and update the code to test the property tradeHigh
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property tradeLow (base name: "trade_low")', function() {
      // uncomment below and update the code to test the property tradeLow
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property askClose (base name: "ask_close")', function() {
      // uncomment below and update the code to test the property askClose
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property bidClose (base name: "bid_close")', function() {
      // uncomment below and update the code to test the property bidClose
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property tradeClose (base name: "trade_close")', function() {
      // uncomment below and update the code to test the property tradeClose
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

    it('should have the property mark (base name: "mark")', function() {
      // uncomment below and update the code to test the property mark
      //var instane = new intrinioSDK.OptionPriceRealtimeExtended();
      //expect(instance).to.be();
    });

  });

}));
