/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.25.0
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
    instance = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
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

  describe('ZacksInstitutionalHoldingCompanyDetail', function() {
    it('should create an instance of ZacksInstitutionalHoldingCompanyDetail', function() {
      // uncomment below and update the code to test ZacksInstitutionalHoldingCompanyDetail
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be.a(intrinioSDK.ZacksInstitutionalHoldingCompanyDetail);
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property sharesOutstanding (base name: "shares_outstanding")', function() {
      // uncomment below and update the code to test the property sharesOutstanding
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastClosePrice (base name: "last_close_price")', function() {
      // uncomment below and update the code to test the property lastClosePrice
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastCloseDate (base name: "last_close_date")', function() {
      // uncomment below and update the code to test the property lastCloseDate
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalSharesHeldPercent (base name: "institutional_shares_held_percent")', function() {
      // uncomment below and update the code to test the property institutionalSharesHeldPercent
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalSharesBuy (base name: "institutional_shares_buy")', function() {
      // uncomment below and update the code to test the property institutionalSharesBuy
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalSharesSell (base name: "institutional_shares_sell")', function() {
      // uncomment below and update the code to test the property institutionalSharesSell
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalPositionsIncrease (base name: "institutional_positions_increase")', function() {
      // uncomment below and update the code to test the property institutionalPositionsIncrease
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalPositionsDecrease (base name: "institutional_positions_decrease")', function() {
      // uncomment below and update the code to test the property institutionalPositionsDecrease
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalPositionsUnchanged (base name: "institutional_positions_unchanged")', function() {
      // uncomment below and update the code to test the property institutionalPositionsUnchanged
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

    it('should have the property institutionalPositionsTotal (base name: "institutional_positions_total")', function() {
      // uncomment below and update the code to test the property institutionalPositionsTotal
      //var instane = new intrinioSDK.ZacksInstitutionalHoldingCompanyDetail();
      //expect(instance).to.be();
    });

  });

}));
