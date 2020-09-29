/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.15.3
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
    instance = new intrinioSDK.MunicipalityFinancial();
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

  describe('MunicipalityFinancial', function() {
    it('should create an instance of MunicipalityFinancial', function() {
      // uncomment below and update the code to test MunicipalityFinancial
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be.a(intrinioSDK.MunicipalityFinancial);
    });

    it('should have the property fiscalYear (base name: "fiscal_year")', function() {
      // uncomment below and update the code to test the property fiscalYear
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property currentAssets (base name: "current_assets")', function() {
      // uncomment below and update the code to test the property currentAssets
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property nonCurrentAssets (base name: "non_current_assets")', function() {
      // uncomment below and update the code to test the property nonCurrentAssets
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property deferredOutflows (base name: "deferred_outflows")', function() {
      // uncomment below and update the code to test the property deferredOutflows
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalAssets (base name: "total_assets")', function() {
      // uncomment below and update the code to test the property totalAssets
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalAssetsPlusDeferredOutflows (base name: "total_assets_plus_deferred_outflows")', function() {
      // uncomment below and update the code to test the property totalAssetsPlusDeferredOutflows
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property currentLiabilities (base name: "current_liabilities")', function() {
      // uncomment below and update the code to test the property currentLiabilities
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property currentPortionOfLongTermDebt (base name: "current_portion_of_long_term_debt")', function() {
      // uncomment below and update the code to test the property currentPortionOfLongTermDebt
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property netPensionLiability (base name: "net_pension_liability")', function() {
      // uncomment below and update the code to test the property netPensionLiability
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property netOpebLiability (base name: "net_opeb_liability")', function() {
      // uncomment below and update the code to test the property netOpebLiability
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property allOtherLongTermDebt (base name: "all_other_long_term_debt")', function() {
      // uncomment below and update the code to test the property allOtherLongTermDebt
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalLiabilities (base name: "total_liabilities")', function() {
      // uncomment below and update the code to test the property totalLiabilities
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property deferredInflows (base name: "deferred_inflows")', function() {
      // uncomment below and update the code to test the property deferredInflows
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalLiabilitiesPlusDeferredInflows (base name: "total_liabilities_plus_deferred_inflows")', function() {
      // uncomment below and update the code to test the property totalLiabilitiesPlusDeferredInflows
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalNetPosition (base name: "total_net_position")', function() {
      // uncomment below and update the code to test the property totalNetPosition
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalUnrestrictedNetPosition (base name: "total_unrestricted_net_position")', function() {
      // uncomment below and update the code to test the property totalUnrestrictedNetPosition
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalExpenses (base name: "total_expenses")', function() {
      // uncomment below and update the code to test the property totalExpenses
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property chargesForServices (base name: "charges_for_services")', function() {
      // uncomment below and update the code to test the property chargesForServices
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property operatingGrantsAndContributions (base name: "operating_grants_and_contributions")', function() {
      // uncomment below and update the code to test the property operatingGrantsAndContributions
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property capitalGrantsAndContributions (base name: "capital_grants_and_contributions")', function() {
      // uncomment below and update the code to test the property capitalGrantsAndContributions
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property generalRevenues (base name: "general_revenues")', function() {
      // uncomment below and update the code to test the property generalRevenues
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property otherRevenues (base name: "other_revenues")', function() {
      // uncomment below and update the code to test the property otherRevenues
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalRevenues (base name: "total_revenues")', function() {
      // uncomment below and update the code to test the property totalRevenues
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property changeInNetAssets (base name: "change_in_net_assets")', function() {
      // uncomment below and update the code to test the property changeInNetAssets
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property nonSpendableGeneralFundBalance (base name: "non_spendable_general_fund_balance")', function() {
      // uncomment below and update the code to test the property nonSpendableGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property restrictedGeneralFundBalance (base name: "restricted_general_fund_balance")', function() {
      // uncomment below and update the code to test the property restrictedGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property committedGeneralFundBalance (base name: "committed_general_fund_balance")', function() {
      // uncomment below and update the code to test the property committedGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property unassignedGeneralFundBalance (base name: "unassigned_general_fund_balance")', function() {
      // uncomment below and update the code to test the property unassignedGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property assignedGeneralFundBalance (base name: "assigned_general_fund_balance")', function() {
      // uncomment below and update the code to test the property assignedGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalGeneralFundBalance (base name: "total_general_fund_balance")', function() {
      // uncomment below and update the code to test the property totalGeneralFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property nonSpendableGovernmentalFundBalance (base name: "non_spendable_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property nonSpendableGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property restrictedGovernmentalFundBalance (base name: "restricted_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property restrictedGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property committedGovernmentalFundBalance (base name: "committed_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property committedGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property unassignedGovernmentalFundBalance (base name: "unassigned_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property unassignedGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property assignedGovernmentalFundBalance (base name: "assigned_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property assignedGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property totalGovernmentalFundBalance (base name: "total_governmental_fund_balance")', function() {
      // uncomment below and update the code to test the property totalGovernmentalFundBalance
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property generalFundRevenues (base name: "general_fund_revenues")', function() {
      // uncomment below and update the code to test the property generalFundRevenues
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property generalFundExpenditures (base name: "general_fund_expenditures")', function() {
      // uncomment below and update the code to test the property generalFundExpenditures
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property generalFundRevenuesOverUnderExpenditure (base name: "general_fund_revenues_over_under_expenditure")', function() {
      // uncomment below and update the code to test the property generalFundRevenuesOverUnderExpenditure
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property governmentalFundRevenues (base name: "governmental_fund_revenues")', function() {
      // uncomment below and update the code to test the property governmentalFundRevenues
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property governmentalFundExpenditures (base name: "governmental_fund_expenditures")', function() {
      // uncomment below and update the code to test the property governmentalFundExpenditures
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

    it('should have the property governmentalFundRevenuesOverUnderExpenditure (base name: "governmental_fund_revenues_over_under_expenditure")', function() {
      // uncomment below and update the code to test the property governmentalFundRevenuesOverUnderExpenditure
      //var instane = new intrinioSDK.MunicipalityFinancial();
      //expect(instance).to.be();
    });

  });

}));
