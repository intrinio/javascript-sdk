/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.34.0
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
    instance = new intrinioSDK.ApiResponseCompanyAnswers();
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

  describe('ApiResponseCompanyAnswers', function() {
    it('should create an instance of ApiResponseCompanyAnswers', function() {
      // uncomment below and update the code to test ApiResponseCompanyAnswers
      //var instane = new intrinioSDK.ApiResponseCompanyAnswers();
      //expect(instance).to.be.a(intrinioSDK.ApiResponseCompanyAnswers);
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new intrinioSDK.ApiResponseCompanyAnswers();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new intrinioSDK.ApiResponseCompanyAnswers();
      //expect(instance).to.be();
    });

    it('should have the property answers (base name: "answers")', function() {
      // uncomment below and update the code to test the property answers
      //var instane = new intrinioSDK.ApiResponseCompanyAnswers();
      //expect(instance).to.be();
    });

    it('should have the property companies (base name: "companies")', function() {
      // uncomment below and update the code to test the property companies
      //var instane = new intrinioSDK.ApiResponseCompanyAnswers();
      //expect(instance).to.be();
    });

  });

}));
