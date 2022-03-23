/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.27.5
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
    instance = new intrinioSDK.ZacksApi();
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

  describe('ZacksApi', function() {
    describe('getZacksAnalystRatings', function() {
      it('should call getZacksAnalystRatings successfully', function(done) {
        //uncomment below and update the code to test getZacksAnalystRatings
        //instance.getZacksAnalystRatings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksEpsEstimates', function() {
      it('should call getZacksEpsEstimates successfully', function(done) {
        //uncomment below and update the code to test getZacksEpsEstimates
        //instance.getZacksEpsEstimates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksEpsGrowthRates', function() {
      it('should call getZacksEpsGrowthRates successfully', function(done) {
        //uncomment below and update the code to test getZacksEpsGrowthRates
        //instance.getZacksEpsGrowthRates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksEpsSurprises', function() {
      it('should call getZacksEpsSurprises successfully', function(done) {
        //uncomment below and update the code to test getZacksEpsSurprises
        //instance.getZacksEpsSurprises(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksEtfHoldings', function() {
      it('should call getZacksEtfHoldings successfully', function(done) {
        //uncomment below and update the code to test getZacksEtfHoldings
        //instance.getZacksEtfHoldings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksInstitutionalHoldingCompanies', function() {
      it('should call getZacksInstitutionalHoldingCompanies successfully', function(done) {
        //uncomment below and update the code to test getZacksInstitutionalHoldingCompanies
        //instance.getZacksInstitutionalHoldingCompanies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksInstitutionalHoldingOwners', function() {
      it('should call getZacksInstitutionalHoldingOwners successfully', function(done) {
        //uncomment below and update the code to test getZacksInstitutionalHoldingOwners
        //instance.getZacksInstitutionalHoldingOwners(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksInstitutionalHoldings', function() {
      it('should call getZacksInstitutionalHoldings successfully', function(done) {
        //uncomment below and update the code to test getZacksInstitutionalHoldings
        //instance.getZacksInstitutionalHoldings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksLongTermGrowthRates', function() {
      it('should call getZacksLongTermGrowthRates successfully', function(done) {
        //uncomment below and update the code to test getZacksLongTermGrowthRates
        //instance.getZacksLongTermGrowthRates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksSalesSurprises', function() {
      it('should call getZacksSalesSurprises successfully', function(done) {
        //uncomment below and update the code to test getZacksSalesSurprises
        //instance.getZacksSalesSurprises(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZacksTargetPriceConsensuses', function() {
      it('should call getZacksTargetPriceConsensuses successfully', function(done) {
        //uncomment below and update the code to test getZacksTargetPriceConsensuses
        //instance.getZacksTargetPriceConsensuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
