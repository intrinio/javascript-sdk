/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.66.2
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
    instance = new intrinioSDK.ZacksInstitutionalHolding();
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

  describe('ZacksInstitutionalHolding', function() {
    it('should create an instance of ZacksInstitutionalHolding', function() {
      // uncomment below and update the code to test ZacksInstitutionalHolding
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be.a(intrinioSDK.ZacksInstitutionalHolding);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property asOfDate (base name: "as_of_date")', function() {
      // uncomment below and update the code to test the property asOfDate
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property sharesHeld (base name: "shares_held")', function() {
      // uncomment below and update the code to test the property sharesHeld
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property sharedHeldPercent (base name: "shared_held_percent")', function() {
      // uncomment below and update the code to test the property sharedHeldPercent
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property sharesChange (base name: "shares_change")', function() {
      // uncomment below and update the code to test the property sharesChange
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property sharesChangePercent (base name: "shares_change_percent")', function() {
      // uncomment below and update the code to test the property sharesChangePercent
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property marketValue (base name: "market_value")', function() {
      // uncomment below and update the code to test the property marketValue
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property marketValueChange (base name: "market_value_change")', function() {
      // uncomment below and update the code to test the property marketValueChange
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property lastSecFilingType (base name: "last_sec_filing_type")', function() {
      // uncomment below and update the code to test the property lastSecFilingType
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property lastSecFilingDate (base name: "last_sec_filing_date")', function() {
      // uncomment below and update the code to test the property lastSecFilingDate
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property lastSecFilingShares (base name: "last_sec_filing_shares")', function() {
      // uncomment below and update the code to test the property lastSecFilingShares
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property historicalHoldings (base name: "historical_holdings")', function() {
      // uncomment below and update the code to test the property historicalHoldings
      //var instane = new intrinioSDK.ZacksInstitutionalHolding();
      //expect(instance).to.be();
    });

  });

}));
