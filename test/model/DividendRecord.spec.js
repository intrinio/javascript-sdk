/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.0
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
    instance = new intrinioSDK.DividendRecord();
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

  describe('DividendRecord', function() {
    it('should create an instance of DividendRecord', function() {
      // uncomment below and update the code to test DividendRecord
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be.a(intrinioSDK.DividendRecord);
    });

    it('should have the property exDividend (base name: "ex_dividend")', function() {
      // uncomment below and update the code to test the property exDividend
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property announcementDate (base name: "announcement_date")', function() {
      // uncomment below and update the code to test the property announcementDate
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property recordDate (base name: "record_date")', function() {
      // uncomment below and update the code to test the property recordDate
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property payDate (base name: "pay_date")', function() {
      // uncomment below and update the code to test the property payDate
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property forwardYield (base name: "forward_yield")', function() {
      // uncomment below and update the code to test the property forwardYield
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property forwardRate (base name: "forward_rate")', function() {
      // uncomment below and update the code to test the property forwardRate
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property lastExDividendDate (base name: "last_ex_dividend_date")', function() {
      // uncomment below and update the code to test the property lastExDividendDate
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.DividendRecord();
      //expect(instance).to.be();
    });

  });

}));
