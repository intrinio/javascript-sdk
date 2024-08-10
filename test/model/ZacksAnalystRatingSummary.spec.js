/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.1
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
    instance = new intrinioSDK.ZacksAnalystRatingSummary();
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

  describe('ZacksAnalystRatingSummary', function() {
    it('should create an instance of ZacksAnalystRatingSummary', function() {
      // uncomment below and update the code to test ZacksAnalystRatingSummary
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be.a(intrinioSDK.ZacksAnalystRatingSummary);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property mean (base name: "mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property strongBuys (base name: "strong_buys")', function() {
      // uncomment below and update the code to test the property strongBuys
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property buys (base name: "buys")', function() {
      // uncomment below and update the code to test the property buys
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property holds (base name: "holds")', function() {
      // uncomment below and update the code to test the property holds
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property sells (base name: "sells")', function() {
      // uncomment below and update the code to test the property sells
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property strongSells (base name: "strong_sells")', function() {
      // uncomment below and update the code to test the property strongSells
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new intrinioSDK.ZacksAnalystRatingSummary();
      //expect(instance).to.be();
    });

  });

}));
