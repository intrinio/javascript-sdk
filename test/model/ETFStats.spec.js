/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.16.4
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
    instance = new intrinioSDK.ETFStats();
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

  describe('ETFStats', function() {
    it('should create an instance of ETFStats', function() {
      // uncomment below and update the code to test ETFStats
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be.a(intrinioSDK.ETFStats);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property netAssetValue (base name: "net_asset_value")', function() {
      // uncomment below and update the code to test the property netAssetValue
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property betaVsSpy (base name: "beta_vs_spy")', function() {
      // uncomment below and update the code to test the property betaVsSpy
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingOneMonthReturnSplitAndDividend (base name: "trailing_one_month_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property trailingOneMonthReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingOneMonthReturnSplitOnly (base name: "trailing_one_month_return_split_only")', function() {
      // uncomment below and update the code to test the property trailingOneMonthReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingOneYearReturnSplitAndDividend (base name: "trailing_one_year_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property trailingOneYearReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingOneYearReturnSplitOnly (base name: "trailing_one_year_return_split_only")', function() {
      // uncomment below and update the code to test the property trailingOneYearReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingOneYearVolatilityAnnualized (base name: "trailing_one_year_volatility_annualized")', function() {
      // uncomment below and update the code to test the property trailingOneYearVolatilityAnnualized
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingThreeYearAnnualizedReturnSplitAndDividend (base name: "trailing_three_year_annualized_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property trailingThreeYearAnnualizedReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingThreeYearAnnualizedReturnSplitOnly (base name: "trailing_three_year_annualized_return_split_only")', function() {
      // uncomment below and update the code to test the property trailingThreeYearAnnualizedReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingThreeYearVolatilityAnnualized (base name: "trailing_three_year_volatility_annualized")', function() {
      // uncomment below and update the code to test the property trailingThreeYearVolatilityAnnualized
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingFiveYearAnnualizedReturnSplitAndDividend (base name: "trailing_five_year_annualized_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property trailingFiveYearAnnualizedReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingFiveYearAnnualizedReturnSplitOnly (base name: "trailing_five_year_annualized_return_split_only")', function() {
      // uncomment below and update the code to test the property trailingFiveYearAnnualizedReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingFiveYearVolatilityAnnualized (base name: "trailing_five_year_volatility_annualized")', function() {
      // uncomment below and update the code to test the property trailingFiveYearVolatilityAnnualized
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingTenYearAnnualizedReturnSplitAndDividend (base name: "trailing_ten_year_annualized_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property trailingTenYearAnnualizedReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property trailingTenYearAnnualizedReturnSplitOnly (base name: "trailing_ten_year_annualized_return_split_only")', function() {
      // uncomment below and update the code to test the property trailingTenYearAnnualizedReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property inceptionAnnualizedReturnSplitAndDividend (base name: "inception_annualized_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property inceptionAnnualizedReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property inceptionAnnualizedReturnSplitOnly (base name: "inception_annualized_return_split_only")', function() {
      // uncomment below and update the code to test the property inceptionAnnualizedReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear5ReturnSplitAndDividend (base name: "calendar_year_5_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYear5ReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear5ReturnSplitOnly (base name: "calendar_year_5_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYear5ReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear4ReturnSplitAndDividend (base name: "calendar_year_4_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYear4ReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear4ReturnSplitOnly (base name: "calendar_year_4_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYear4ReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear3ReturnSplitAndDividend (base name: "calendar_year_3_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYear3ReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear3ReturnSplitOnly (base name: "calendar_year_3_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYear3ReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear2ReturnSplitAndDividend (base name: "calendar_year_2_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYear2ReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear2ReturnSplitOnly (base name: "calendar_year_2_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYear2ReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear1ReturnSplitAndDividend (base name: "calendar_year_1_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYear1ReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYear1ReturnSplitOnly (base name: "calendar_year_1_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYear1ReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYearToDateReturnSplitAndDividend (base name: "calendar_year_to_date_return_split_and_dividend")', function() {
      // uncomment below and update the code to test the property calendarYearToDateReturnSplitAndDividend
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property calendarYearToDateReturnSplitOnly (base name: "calendar_year_to_date_return_split_only")', function() {
      // uncomment below and update the code to test the property calendarYearToDateReturnSplitOnly
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

    it('should have the property etf (base name: "etf")', function() {
      // uncomment below and update the code to test the property etf
      //var instane = new intrinioSDK.ETFStats();
      //expect(instance).to.be();
    });

  });

}));
