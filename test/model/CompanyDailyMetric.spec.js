/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.52.1
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
    instance = new intrinioSDK.CompanyDailyMetric();
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

  describe('CompanyDailyMetric', function() {
    it('should create an instance of CompanyDailyMetric', function() {
      // uncomment below and update the code to test CompanyDailyMetric
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be.a(intrinioSDK.CompanyDailyMetric);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property enterpriseValue (base name: "enterprise_value")', function() {
      // uncomment below and update the code to test the property enterpriseValue
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToEbit (base name: "ev_to_ebit")', function() {
      // uncomment below and update the code to test the property evToEbit
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToEbitda (base name: "ev_to_ebitda")', function() {
      // uncomment below and update the code to test the property evToEbitda
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property marketCap (base name: "market_cap")', function() {
      // uncomment below and update the code to test the property marketCap
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property priceToBook (base name: "price_to_book")', function() {
      // uncomment below and update the code to test the property priceToBook
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property priceToEarnings (base name: "price_to_earnings")', function() {
      // uncomment below and update the code to test the property priceToEarnings
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property priceToRevenue (base name: "price_to_revenue")', function() {
      // uncomment below and update the code to test the property priceToRevenue
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property priceToTangibleBook (base name: "price_to_tangible_book")', function() {
      // uncomment below and update the code to test the property priceToTangibleBook
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property dividendYield (base name: "dividend_yield")', function() {
      // uncomment below and update the code to test the property dividendYield
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property earningsYield (base name: "earnings_yield")', function() {
      // uncomment below and update the code to test the property earningsYield
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToInvestedCapital (base name: "ev_to_invested_capital")', function() {
      // uncomment below and update the code to test the property evToInvestedCapital
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToRevenue (base name: "ev_to_revenue")', function() {
      // uncomment below and update the code to test the property evToRevenue
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToNopat (base name: "ev_to_nopat")', function() {
      // uncomment below and update the code to test the property evToNopat
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToOcf (base name: "ev_to_ocf")', function() {
      // uncomment below and update the code to test the property evToOcf
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property evToFcff (base name: "ev_to_fcff")', function() {
      // uncomment below and update the code to test the property evToFcff
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.CompanyDailyMetric();
      //expect(instance).to.be();
    });

  });

}));
