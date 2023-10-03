/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.3
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
    instance = new intrinioSDK.ESGComprehensiveRatingWithCompany();
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

  describe('ESGComprehensiveRatingWithCompany', function() {
    it('should create an instance of ESGComprehensiveRatingWithCompany', function() {
      // uncomment below and update the code to test ESGComprehensiveRatingWithCompany
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be.a(intrinioSDK.ESGComprehensiveRatingWithCompany);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property countryAverageRating (base name: "country_average_rating")', function() {
      // uncomment below and update the code to test the property countryAverageRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property industryAverageRating (base name: "industry_average_rating")', function() {
      // uncomment below and update the code to test the property industryAverageRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property overallRating (base name: "overall_rating")', function() {
      // uncomment below and update the code to test the property overallRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property communityRating (base name: "community_rating")', function() {
      // uncomment below and update the code to test the property communityRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property employeeRating (base name: "employee_rating")', function() {
      // uncomment below and update the code to test the property employeeRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property environmentRating (base name: "environment_rating")', function() {
      // uncomment below and update the code to test the property environmentRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property governanceRating (base name: "governance_rating")', function() {
      // uncomment below and update the code to test the property governanceRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property humanRightsAndSupplyChainRating (base name: "human_rights_and_supply_chain_rating")', function() {
      // uncomment below and update the code to test the property humanRightsAndSupplyChainRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property communityDevAndPhilanthropyRating (base name: "community_dev_and_philanthropy_rating")', function() {
      // uncomment below and update the code to test the property communityDevAndPhilanthropyRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property productRating (base name: "product_rating")', function() {
      // uncomment below and update the code to test the property productRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property compensationAndBenefitsRating (base name: "compensation_and_benefits_rating")', function() {
      // uncomment below and update the code to test the property compensationAndBenefitsRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property diversityAndLaborRightsRating (base name: "diversity_and_labor_rights_rating")', function() {
      // uncomment below and update the code to test the property diversityAndLaborRightsRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property trainingHealthAndSafetyRating (base name: "training_health_and_safety_rating")', function() {
      // uncomment below and update the code to test the property trainingHealthAndSafetyRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property energyClimateChangeRating (base name: "energy_climate_change_rating")', function() {
      // uncomment below and update the code to test the property energyClimateChangeRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property environmentPolicyAndReportingRating (base name: "environment_policy_and_reporting_rating")', function() {
      // uncomment below and update the code to test the property environmentPolicyAndReportingRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property resourceManagementRating (base name: "resource_management_rating")', function() {
      // uncomment below and update the code to test the property resourceManagementRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property boardRating (base name: "board_rating")', function() {
      // uncomment below and update the code to test the property boardRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property leadershipEthicsRating (base name: "leadership_ethics_rating")', function() {
      // uncomment below and update the code to test the property leadershipEthicsRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property transparencyReportingRating (base name: "transparency_reporting_rating")', function() {
      // uncomment below and update the code to test the property transparencyReportingRating
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property countryPercentileRank (base name: "country_percentile_rank")', function() {
      // uncomment below and update the code to test the property countryPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property industryPercentileRank (base name: "industry_percentile_rank")', function() {
      // uncomment below and update the code to test the property industryPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property overallPercentileRank (base name: "overall_percentile_rank")', function() {
      // uncomment below and update the code to test the property overallPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property communityPercentileRank (base name: "community_percentile_rank")', function() {
      // uncomment below and update the code to test the property communityPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property employeePercentileRank (base name: "employee_percentile_rank")', function() {
      // uncomment below and update the code to test the property employeePercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property environmentPercentileRank (base name: "environment_percentile_rank")', function() {
      // uncomment below and update the code to test the property environmentPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property governancePercentileRank (base name: "governance_percentile_rank")', function() {
      // uncomment below and update the code to test the property governancePercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property humanRightsAndSupplyChainPercentileRank (base name: "human_rights_and_supply_chain_percentile_rank")', function() {
      // uncomment below and update the code to test the property humanRightsAndSupplyChainPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property communityDevAndPhilanthropyPercentileRank (base name: "community_dev_and_philanthropy_percentile_rank")', function() {
      // uncomment below and update the code to test the property communityDevAndPhilanthropyPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property productPercentileRank (base name: "product_percentile_rank")', function() {
      // uncomment below and update the code to test the property productPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property compensationAndBenefitsPercentileRank (base name: "compensation_and_benefits_percentile_rank")', function() {
      // uncomment below and update the code to test the property compensationAndBenefitsPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property diversityAndLaborRightsPercentileRank (base name: "diversity_and_labor_rights_percentile_rank")', function() {
      // uncomment below and update the code to test the property diversityAndLaborRightsPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property trainingHealthAndSafetyPercentileRank (base name: "training_health_and_safety_percentile_rank")', function() {
      // uncomment below and update the code to test the property trainingHealthAndSafetyPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property energyClimateChangePercentileRank (base name: "energy_climate_change_percentile_rank")', function() {
      // uncomment below and update the code to test the property energyClimateChangePercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property environmentPolicyAndReportingPercentileRank (base name: "environment_policy_and_reporting_percentile_rank")', function() {
      // uncomment below and update the code to test the property environmentPolicyAndReportingPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property resourceManagementPercentileRank (base name: "resource_management_percentile_rank")', function() {
      // uncomment below and update the code to test the property resourceManagementPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property boardPercentileRank (base name: "board_percentile_rank")', function() {
      // uncomment below and update the code to test the property boardPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property leadershipEthicsPercentileRank (base name: "leadership_ethics_percentile_rank")', function() {
      // uncomment below and update the code to test the property leadershipEthicsPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property transparencyReportingPercentileRank (base name: "transparency_reporting_percentile_rank")', function() {
      // uncomment below and update the code to test the property transparencyReportingPercentileRank
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ESGComprehensiveRatingWithCompany();
      //expect(instance).to.be();
    });

  });

}));
