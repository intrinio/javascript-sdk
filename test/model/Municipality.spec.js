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
    instance = new intrinioSDK.Municipality();
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

  describe('Municipality', function() {
    it('should create an instance of Municipality', function() {
      // uncomment below and update the code to test Municipality
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be.a(intrinioSDK.Municipality);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property censusId (base name: "census_id")', function() {
      // uncomment below and update the code to test the property censusId
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property governmentName (base name: "government_name")', function() {
      // uncomment below and update the code to test the property governmentName
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property governmentType (base name: "government_type")', function() {
      // uncomment below and update the code to test the property governmentType
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property primaryContactType (base name: "primary_contact_type")', function() {
      // uncomment below and update the code to test the property primaryContactType
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property webSite (base name: "web_site")', function() {
      // uncomment below and update the code to test the property webSite
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property population (base name: "population")', function() {
      // uncomment below and update the code to test the property population
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property populationAsOfYear (base name: "population_as_of_year")', function() {
      // uncomment below and update the code to test the property populationAsOfYear
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property enrollment (base name: "enrollment")', function() {
      // uncomment below and update the code to test the property enrollment
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property enrollmentAsOfYear (base name: "enrollment_as_of_year")', function() {
      // uncomment below and update the code to test the property enrollmentAsOfYear
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property areaName (base name: "area_name")', function() {
      // uncomment below and update the code to test the property areaName
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property areaType (base name: "area_type")', function() {
      // uncomment below and update the code to test the property areaType
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new intrinioSDK.Municipality();
      //expect(instance).to.be();
    });

  });

}));
