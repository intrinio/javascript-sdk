/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.18.0
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
    instance = new intrinioSDK.ZacksEPSGrowthRate();
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

  describe('ZacksEPSGrowthRate', function() {
    it('should create an instance of ZacksEPSGrowthRate', function() {
      // uncomment below and update the code to test ZacksEPSGrowthRate
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be.a(intrinioSDK.ZacksEPSGrowthRate);
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryGroupNumber (base name: "industry_group_number")', function() {
      // uncomment below and update the code to test the property industryGroupNumber
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryGroupName (base name: "industry_group_name")', function() {
      // uncomment below and update the code to test the property industryGroupName
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear0 (base name: "fiscal_year_0")', function() {
      // uncomment below and update the code to test the property fiscalYear0
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear1 (base name: "fiscal_year_1")', function() {
      // uncomment below and update the code to test the property fiscalYear1
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYear2 (base name: "fiscal_year_2")', function() {
      // uncomment below and update the code to test the property fiscalYear2
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyLast5YearActual (base name: "company_last_5_year_actual")', function() {
      // uncomment below and update the code to test the property companyLast5YearActual
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyFiscalYear1VsFiscalYear0 (base name: "company_fiscal_year_1_vs_fiscal_year_0")', function() {
      // uncomment below and update the code to test the property companyFiscalYear1VsFiscalYear0
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyFiscalYear2VsFiscalYear1 (base name: "company_fiscal_year_2_vs_fiscal_year_1")', function() {
      // uncomment below and update the code to test the property companyFiscalYear2VsFiscalYear1
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyLongTermGrowthMean (base name: "company_long_term_growth_mean")', function() {
      // uncomment below and update the code to test the property companyLongTermGrowthMean
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property companyFiscalYear1ForwardPriceToEarnings (base name: "company_fiscal_year_1_forward_price_to_earnings")', function() {
      // uncomment below and update the code to test the property companyFiscalYear1ForwardPriceToEarnings
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryLast5YearActual (base name: "industry_last_5_year_actual")', function() {
      // uncomment below and update the code to test the property industryLast5YearActual
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryFiscalYear1VsFiscalYear0 (base name: "industry_fiscal_year_1_vs_fiscal_year_0")', function() {
      // uncomment below and update the code to test the property industryFiscalYear1VsFiscalYear0
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryFiscalYear2VsFiscalYear1 (base name: "industry_fiscal_year_2_vs_fiscal_year_1")', function() {
      // uncomment below and update the code to test the property industryFiscalYear2VsFiscalYear1
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryLongTermGrowthMean (base name: "industry_long_term_growth_mean")', function() {
      // uncomment below and update the code to test the property industryLongTermGrowthMean
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property industryFiscalYear1ForwardPriceToEarnings (base name: "industry_fiscal_year_1_forward_price_to_earnings")', function() {
      // uncomment below and update the code to test the property industryFiscalYear1ForwardPriceToEarnings
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property sp500Last5YearActual (base name: "sp500_last_5_year_actual")', function() {
      // uncomment below and update the code to test the property sp500Last5YearActual
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property sp500FiscalYear1VsFiscalYear0 (base name: "sp500_fiscal_year_1_vs_fiscal_year_0")', function() {
      // uncomment below and update the code to test the property sp500FiscalYear1VsFiscalYear0
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property sp500FiscalYear2VsFiscalYear1 (base name: "sp500_fiscal_year_2_vs_fiscal_year_1")', function() {
      // uncomment below and update the code to test the property sp500FiscalYear2VsFiscalYear1
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property sp500LongTermGrowth (base name: "sp500_long_term_growth")', function() {
      // uncomment below and update the code to test the property sp500LongTermGrowth
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property sp500FiscalYear1PriceToEarnings (base name: "sp500_fiscal_year_1_price_to_earnings")', function() {
      // uncomment below and update the code to test the property sp500FiscalYear1PriceToEarnings
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ZacksEPSGrowthRate();
      //expect(instance).to.be();
    });

  });

}));
