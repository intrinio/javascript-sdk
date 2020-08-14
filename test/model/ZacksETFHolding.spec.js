/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.2
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
    instance = new intrinioSDK.ZacksETFHolding();
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

  describe('ZacksETFHolding', function() {
    it('should create an instance of ZacksETFHolding', function() {
      // uncomment below and update the code to test ZacksETFHolding
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be.a(intrinioSDK.ZacksETFHolding);
    });

    it('should have the property etfTicker (base name: "etf_ticker")', function() {
      // uncomment below and update the code to test the property etfTicker
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property etfName (base name: "etf_name")', function() {
      // uncomment below and update the code to test the property etfName
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property holdingSymbol (base name: "holding_symbol")', function() {
      // uncomment below and update the code to test the property holdingSymbol
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property holdingName (base name: "holding_name")', function() {
      // uncomment below and update the code to test the property holdingName
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property dateOfHolding (base name: "date_of_holding")', function() {
      // uncomment below and update the code to test the property dateOfHolding
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property shares (base name: "shares")', function() {
      // uncomment below and update the code to test the property shares
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new intrinioSDK.ZacksETFHolding();
      //expect(instance).to.be();
    });

  });

}));
