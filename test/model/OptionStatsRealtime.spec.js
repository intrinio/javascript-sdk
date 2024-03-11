/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.53.1
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
    instance = new intrinioSDK.OptionStatsRealtime();
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

  describe('OptionStatsRealtime', function() {
    it('should create an instance of OptionStatsRealtime', function() {
      // uncomment below and update the code to test OptionStatsRealtime
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be.a(intrinioSDK.OptionStatsRealtime);
    });

    it('should have the property impliedVolatility (base name: "implied_volatility")', function() {
      // uncomment below and update the code to test the property impliedVolatility
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property delta (base name: "delta")', function() {
      // uncomment below and update the code to test the property delta
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property gamma (base name: "gamma")', function() {
      // uncomment below and update the code to test the property gamma
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property theta (base name: "theta")', function() {
      // uncomment below and update the code to test the property theta
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property vega (base name: "vega")', function() {
      // uncomment below and update the code to test the property vega
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property underlyingPrice (base name: "underlying_price")', function() {
      // uncomment below and update the code to test the property underlyingPrice
      //var instane = new intrinioSDK.OptionStatsRealtime();
      //expect(instance).to.be();
    });

  });

}));
