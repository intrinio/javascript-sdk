/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.72.2
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
    instance = new intrinioSDK.ESGRatingWithCompany();
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

  describe('ESGRatingWithCompany', function() {
    it('should create an instance of ESGRatingWithCompany', function() {
      // uncomment below and update the code to test ESGRatingWithCompany
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be.a(intrinioSDK.ESGRatingWithCompany);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property communityRating (base name: "community_rating")', function() {
      // uncomment below and update the code to test the property communityRating
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property employeeRating (base name: "employee_rating")', function() {
      // uncomment below and update the code to test the property employeeRating
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property environmentRating (base name: "environment_rating")', function() {
      // uncomment below and update the code to test the property environmentRating
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property governanceRating (base name: "governance_rating")', function() {
      // uncomment below and update the code to test the property governanceRating
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.ESGRatingWithCompany();
      //expect(instance).to.be();
    });

  });

}));
