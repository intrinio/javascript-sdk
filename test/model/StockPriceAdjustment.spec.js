/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    instance = new intrinioSDK.StockPriceAdjustment();
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

  describe('StockPriceAdjustment', function() {
    it('should create an instance of StockPriceAdjustment', function() {
      // uncomment below and update the code to test StockPriceAdjustment
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be.a(intrinioSDK.StockPriceAdjustment);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

    it('should have the property factor (base name: "factor")', function() {
      // uncomment below and update the code to test the property factor
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

    it('should have the property dividend (base name: "dividend")', function() {
      // uncomment below and update the code to test the property dividend
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

    it('should have the property dividendCurrency (base name: "dividend_currency")', function() {
      // uncomment below and update the code to test the property dividendCurrency
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

    it('should have the property splitRatio (base name: "split_ratio")', function() {
      // uncomment below and update the code to test the property splitRatio
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.StockPriceAdjustment();
      //expect(instance).to.be();
    });

  });

}));
