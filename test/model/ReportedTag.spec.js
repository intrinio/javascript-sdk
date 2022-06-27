/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.28.0
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
    instance = new intrinioSDK.ReportedTag();
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

  describe('ReportedTag', function() {
    it('should create an instance of ReportedTag', function() {
      // uncomment below and update the code to test ReportedTag
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be.a(intrinioSDK.ReportedTag);
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property _abstract (base name: "abstract")', function() {
      // uncomment below and update the code to test the property _abstract
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

    it('should have the property depth (base name: "depth")', function() {
      // uncomment below and update the code to test the property depth
      //var instane = new intrinioSDK.ReportedTag();
      //expect(instance).to.be();
    });

  });

}));
