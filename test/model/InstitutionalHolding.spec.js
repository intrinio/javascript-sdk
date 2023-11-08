/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.7
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
    instance = new intrinioSDK.InstitutionalHolding();
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

  describe('InstitutionalHolding', function() {
    it('should create an instance of InstitutionalHolding', function() {
      // uncomment below and update the code to test InstitutionalHolding
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be.a(intrinioSDK.InstitutionalHolding);
    });

    it('should have the property cusip (base name: "cusip")', function() {
      // uncomment below and update the code to test the property cusip
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property securityName (base name: "security_name")', function() {
      // uncomment below and update the code to test the property securityName
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property securityType (base name: "security_type")', function() {
      // uncomment below and update the code to test the property securityType
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property titleOfClass (base name: "title_of_class")', function() {
      // uncomment below and update the code to test the property titleOfClass
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property stockExchange (base name: "stock_exchange")', function() {
      // uncomment below and update the code to test the property stockExchange
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property periodEnded (base name: "period_ended")', function() {
      // uncomment below and update the code to test the property periodEnded
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property filingDate (base name: "filing_date")', function() {
      // uncomment below and update the code to test the property filingDate
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property investmentDiscretion (base name: "investment_discretion")', function() {
      // uncomment below and update the code to test the property investmentDiscretion
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property otherManager (base name: "other_manager")', function() {
      // uncomment below and update the code to test the property otherManager
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property soleVotingAuthority (base name: "sole_voting_authority")', function() {
      // uncomment below and update the code to test the property soleVotingAuthority
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property sharedVotingAuthority (base name: "shared_voting_authority")', function() {
      // uncomment below and update the code to test the property sharedVotingAuthority
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

    it('should have the property noVotingAuthority (base name: "no_voting_authority")', function() {
      // uncomment below and update the code to test the property noVotingAuthority
      //var instane = new intrinioSDK.InstitutionalHolding();
      //expect(instance).to.be();
    });

  });

}));
