/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.62.3
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
    instance = new intrinioSDK.ETFHolding();
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

  describe('ETFHolding', function() {
    it('should create an instance of ETFHolding', function() {
      // uncomment below and update the code to test ETFHolding
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be.a(intrinioSDK.ETFHolding);
    });

    it('should have the property asOfDate (base name: "as_of_date")', function() {
      // uncomment below and update the code to test the property asOfDate
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property compositeFigi (base name: "composite_figi")', function() {
      // uncomment below and update the code to test the property compositeFigi
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property shareClassFigi (base name: "share_class_figi")', function() {
      // uncomment below and update the code to test the property shareClassFigi
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property ric (base name: "ric")', function() {
      // uncomment below and update the code to test the property ric
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property sedol (base name: "sedol")', function() {
      // uncomment below and update the code to test the property sedol
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property face (base name: "face")', function() {
      // uncomment below and update the code to test the property face
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property coupon (base name: "coupon")', function() {
      // uncomment below and update the code to test the property coupon
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property marketValueHeld (base name: "market_value_held")', function() {
      // uncomment below and update the code to test the property marketValueHeld
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property notionalValue (base name: "notional_value")', function() {
      // uncomment below and update the code to test the property notionalValue
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property maturity (base name: "maturity")', function() {
      // uncomment below and update the code to test the property maturity
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property quantityHeld (base name: "quantity_held")', function() {
      // uncomment below and update the code to test the property quantityHeld
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property weighting (base name: "weighting")', function() {
      // uncomment below and update the code to test the property weighting
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property quantityUnits (base name: "quantity_units")', function() {
      // uncomment below and update the code to test the property quantityUnits
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property quantityPerShare (base name: "quantity_per_share")', function() {
      // uncomment below and update the code to test the property quantityPerShare
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

    it('should have the property contractExpiryDate (base name: "contract_expiry_date")', function() {
      // uncomment below and update the code to test the property contractExpiryDate
      //var instane = new intrinioSDK.ETFHolding();
      //expect(instance).to.be();
    });

  });

}));
