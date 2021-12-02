/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.6
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
    instance = new intrinioSDK.Owner();
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

  describe('Owner', function() {
    it('should create an instance of Owner', function() {
      // uncomment below and update the code to test Owner
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be.a(intrinioSDK.Owner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property ownerCik (base name: "owner_cik")', function() {
      // uncomment below and update the code to test the property ownerCik
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property stateInc (base name: "state_inc")', function() {
      // uncomment below and update the code to test the property stateInc
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property countryInc (base name: "country_inc")', function() {
      // uncomment below and update the code to test the property countryInc
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property businessAddress (base name: "business_address")', function() {
      // uncomment below and update the code to test the property businessAddress
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property businessPhoneNo (base name: "business_phone_no")', function() {
      // uncomment below and update the code to test the property businessPhoneNo
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property mailingAddress (base name: "mailing_address")', function() {
      // uncomment below and update the code to test the property mailingAddress
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property institutional (base name: "institutional")', function() {
      // uncomment below and update the code to test the property institutional
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updated_on")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "created_on")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new intrinioSDK.Owner();
      //expect(instance).to.be();
    });

  });

}));
