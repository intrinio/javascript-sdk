/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.21.1
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
    instance = new intrinioSDK.OptionFactorsRealtime();
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

  describe('OptionFactorsRealtime', function() {
    it('should create an instance of OptionFactorsRealtime', function() {
      // uncomment below and update the code to test OptionFactorsRealtime
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be.a(intrinioSDK.OptionFactorsRealtime);
    });

    it('should have the property marketPrice (base name: "market_price")', function() {
      // uncomment below and update the code to test the property marketPrice
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property underlyingPrice (base name: "underlying_price")', function() {
      // uncomment below and update the code to test the property underlyingPrice
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property strikePrice (base name: "strike_price")', function() {
      // uncomment below and update the code to test the property strikePrice
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property daysToExpiration (base name: "days_to_expiration")', function() {
      // uncomment below and update the code to test the property daysToExpiration
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property riskFreeInterestRate (base name: "risk_free_interest_rate")', function() {
      // uncomment below and update the code to test the property riskFreeInterestRate
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

    it('should have the property dividendYield (base name: "dividend_yield")', function() {
      // uncomment below and update the code to test the property dividendYield
      //var instane = new intrinioSDK.OptionFactorsRealtime();
      //expect(instance).to.be();
    });

  });

}));
