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
    instance = new intrinioSDK.CompanyInitialPublicOffering();
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

  describe('CompanyInitialPublicOffering', function() {
    it('should create an instance of CompanyInitialPublicOffering', function() {
      // uncomment below and update the code to test CompanyInitialPublicOffering
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be.a(intrinioSDK.CompanyInitialPublicOffering);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property offerAmount (base name: "offer_amount")', function() {
      // uncomment below and update the code to test the property offerAmount
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property sharePrice (base name: "share_price")', function() {
      // uncomment below and update the code to test the property sharePrice
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property sharePriceLowest (base name: "share_price_lowest")', function() {
      // uncomment below and update the code to test the property sharePriceLowest
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property sharePriceHighest (base name: "share_price_highest")', function() {
      // uncomment below and update the code to test the property sharePriceHighest
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property shareCount (base name: "share_count")', function() {
      // uncomment below and update the code to test the property shareCount
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property shareCountLowest (base name: "share_count_lowest")', function() {
      // uncomment below and update the code to test the property shareCountLowest
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property shareCountHighest (base name: "share_count_highest")', function() {
      // uncomment below and update the code to test the property shareCountHighest
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property announcementUrl (base name: "announcement_url")', function() {
      // uncomment below and update the code to test the property announcementUrl
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property secReportUrl (base name: "sec_report_url")', function() {
      // uncomment below and update the code to test the property secReportUrl
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property openPrice (base name: "open_price")', function() {
      // uncomment below and update the code to test the property openPrice
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property closePrice (base name: "close_price")', function() {
      // uncomment below and update the code to test the property closePrice
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property dayChange (base name: "day_change")', function() {
      // uncomment below and update the code to test the property dayChange
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property weekChange (base name: "week_change")', function() {
      // uncomment below and update the code to test the property weekChange
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property monthChange (base name: "month_change")', function() {
      // uncomment below and update the code to test the property monthChange
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.CompanyInitialPublicOffering();
      //expect(instance).to.be();
    });

  });

}));
