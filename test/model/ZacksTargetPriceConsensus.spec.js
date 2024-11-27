/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.76.3
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
    instance = new intrinioSDK.ZacksTargetPriceConsensus();
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

  describe('ZacksTargetPriceConsensus', function() {
    it('should create an instance of ZacksTargetPriceConsensus', function() {
      // uncomment below and update the code to test ZacksTargetPriceConsensus
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be.a(intrinioSDK.ZacksTargetPriceConsensus);
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property industryGroupNumber (base name: "industry_group_number")', function() {
      // uncomment below and update the code to test the property industryGroupNumber
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property mean (base name: "mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property standardDeviation (base name: "standard_deviation")', function() {
      // uncomment below and update the code to test the property standardDeviation
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property mostRecentDate (base name: "most_recent_date")', function() {
      // uncomment below and update the code to test the property mostRecentDate
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property median (base name: "median")', function() {
      // uncomment below and update the code to test the property median
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property raised (base name: "raised")', function() {
      // uncomment below and update the code to test the property raised
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property lowered (base name: "lowered")', function() {
      // uncomment below and update the code to test the property lowered
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ZacksTargetPriceConsensus();
      //expect(instance).to.be();
    });

  });

}));
