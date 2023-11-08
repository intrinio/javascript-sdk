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
    instance = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
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

  describe('ZacksInstitutionalHoldingOwnerDetail', function() {
    it('should create an instance of ZacksInstitutionalHoldingOwnerDetail', function() {
      // uncomment below and update the code to test ZacksInstitutionalHoldingOwnerDetail
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be.a(intrinioSDK.ZacksInstitutionalHoldingOwnerDetail);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property cik (base name: "cik")', function() {
      // uncomment below and update the code to test the property cik
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property cityState (base name: "city_state")', function() {
      // uncomment below and update the code to test the property cityState
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property locationCode (base name: "location_code")', function() {
      // uncomment below and update the code to test the property locationCode
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property investmentStyle (base name: "investment_style")', function() {
      // uncomment below and update the code to test the property investmentStyle
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property numberOfHoldings (base name: "number_of_holdings")', function() {
      // uncomment below and update the code to test the property numberOfHoldings
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property totalHoldingsValue (base name: "total_holdings_value")', function() {
      // uncomment below and update the code to test the property totalHoldingsValue
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property portfolioTurnoverPercent (base name: "portfolio_turnover_percent")', function() {
      // uncomment below and update the code to test the property portfolioTurnoverPercent
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property isFund (base name: "is_fund")', function() {
      // uncomment below and update the code to test the property isFund
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property fundTicker (base name: "fund_ticker")', function() {
      // uncomment below and update the code to test the property fundTicker
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property hasFundManager (base name: "has_fund_manager")', function() {
      // uncomment below and update the code to test the property hasFundManager
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property fundManagerCity (base name: "fund_manager_city")', function() {
      // uncomment below and update the code to test the property fundManagerCity
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property fundManagerName (base name: "fund_manager_name")', function() {
      // uncomment below and update the code to test the property fundManagerName
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property fundManagerState (base name: "fund_manager_state")', function() {
      // uncomment below and update the code to test the property fundManagerState
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property files13f (base name: "files_13f")', function() {
      // uncomment below and update the code to test the property files13f
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property isEtf (base name: "is_etf")', function() {
      // uncomment below and update the code to test the property isEtf
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedOn (base name: "last_updated_on")', function() {
      // uncomment below and update the code to test the property lastUpdatedOn
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingOwnerDetail();
      //expect(instance).to.be();
    });

  });

}));
