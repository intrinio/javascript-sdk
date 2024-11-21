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
    instance = new intrinioSDK.StockExchange();
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

  describe('StockExchange', function() {
    it('should create an instance of StockExchange', function() {
      // uncomment below and update the code to test StockExchange
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be.a(intrinioSDK.StockExchange);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property mic (base name: "mic")', function() {
      // uncomment below and update the code to test the property mic
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property acronym (base name: "acronym")', function() {
      // uncomment below and update the code to test the property acronym
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property firstStockPriceDate (base name: "first_stock_price_date")', function() {
      // uncomment below and update the code to test the property firstStockPriceDate
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

    it('should have the property lastStockPriceDate (base name: "last_stock_price_date")', function() {
      // uncomment below and update the code to test the property lastStockPriceDate
      //var instane = new intrinioSDK.StockExchange();
      //expect(instance).to.be();
    });

  });

}));
