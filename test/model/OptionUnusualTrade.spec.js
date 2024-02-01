/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.0
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
    instance = new intrinioSDK.OptionUnusualTrade();
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

  describe('OptionUnusualTrade', function() {
    it('should create an instance of OptionUnusualTrade', function() {
      // uncomment below and update the code to test OptionUnusualTrade
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be.a(intrinioSDK.OptionUnusualTrade);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property totalValue (base name: "total_value")', function() {
      // uncomment below and update the code to test the property totalValue
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property totalSize (base name: "total_size")', function() {
      // uncomment below and update the code to test the property totalSize
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property averagePrice (base name: "average_price")', function() {
      // uncomment below and update the code to test the property averagePrice
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property contract (base name: "contract")', function() {
      // uncomment below and update the code to test the property contract
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property askAtExecution (base name: "ask_at_execution")', function() {
      // uncomment below and update the code to test the property askAtExecution
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property bidAtExecution (base name: "bid_at_execution")', function() {
      // uncomment below and update the code to test the property bidAtExecution
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property sentiment (base name: "sentiment")', function() {
      // uncomment below and update the code to test the property sentiment
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

    it('should have the property underlyingPriceAtExecution (base name: "underlying_price_at_execution")', function() {
      // uncomment below and update the code to test the property underlyingPriceAtExecution
      //var instane = new intrinioSDK.OptionUnusualTrade();
      //expect(instance).to.be();
    });

  });

}));
