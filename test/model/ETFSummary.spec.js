/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
    instance = new intrinioSDK.ETFSummary();
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

  describe('ETFSummary', function() {
    it('should create an instance of ETFSummary', function() {
      // uncomment below and update the code to test ETFSummary
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be.a(intrinioSDK.ETFSummary);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property figiTicker (base name: "figi_ticker")', function() {
      // uncomment below and update the code to test the property figiTicker
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property ric (base name: "ric")', function() {
      // uncomment below and update the code to test the property ric
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property sedol (base name: "sedol")', function() {
      // uncomment below and update the code to test the property sedol
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

    it('should have the property exchangeMic (base name: "exchange_mic")', function() {
      // uncomment below and update the code to test the property exchangeMic
      //var instane = new intrinioSDK.ETFSummary();
      //expect(instance).to.be();
    });

  });

}));