/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.6.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    instance = new intrinioSDK.CryptoPair();
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

  describe('CryptoPair', function() {
    it('should create an instance of CryptoPair', function() {
      // uncomment below and update the code to test CryptoPair
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be.a(intrinioSDK.CryptoPair);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property firstPriceDate (base name: "first_price_date")', function() {
      // uncomment below and update the code to test the property firstPriceDate
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property lastPriceDate (base name: "last_price_date")', function() {
      // uncomment below and update the code to test the property lastPriceDate
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property bookDepthAvailable (base name: "book_depth_available")', function() {
      // uncomment below and update the code to test the property bookDepthAvailable
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property historyAvailable (base name: "history_available")', function() {
      // uncomment below and update the code to test the property historyAvailable
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property snapshotAvailable (base name: "snapshot_available")', function() {
      // uncomment below and update the code to test the property snapshotAvailable
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

    it('should have the property tradesAvailable (base name: "trades_available")', function() {
      // uncomment below and update the code to test the property tradesAvailable
      //var instane = new intrinioSDK.CryptoPair();
      //expect(instance).to.be();
    });

  });

}));
