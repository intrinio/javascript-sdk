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
    instance = new intrinioSDK.FundamentalSummary();
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

  describe('FundamentalSummary', function() {
    it('should create an instance of FundamentalSummary', function() {
      // uncomment below and update the code to test FundamentalSummary
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be.a(intrinioSDK.FundamentalSummary);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property statementCode (base name: "statement_code")', function() {
      // uncomment below and update the code to test the property statementCode
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear (base name: "fiscal_year")', function() {
      // uncomment below and update the code to test the property fiscalYear
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property fiscalPeriod (base name: "fiscal_period")', function() {
      // uncomment below and update the code to test the property fiscalPeriod
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property filingDate (base name: "filing_date")', function() {
      // uncomment below and update the code to test the property filingDate
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property isLatest (base name: "is_latest")', function() {
      // uncomment below and update the code to test the property isLatest
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new intrinioSDK.FundamentalSummary();
      //expect(instance).to.be();
    });

  });

}));
