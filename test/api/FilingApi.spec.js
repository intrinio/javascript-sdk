/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.23.0
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
    instance = new intrinioSDK.FilingApi();
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

  describe('FilingApi', function() {
    describe('getAllFilings', function() {
      it('should call getAllFilings successfully', function(done) {
        //uncomment below and update the code to test getAllFilings
        //instance.getAllFilings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllNotes', function() {
      it('should call getAllNotes successfully', function(done) {
        //uncomment below and update the code to test getAllNotes
        //instance.getAllNotes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilingById', function() {
      it('should call getFilingById successfully', function(done) {
        //uncomment below and update the code to test getFilingById
        //instance.getFilingById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilingFundamentals', function() {
      it('should call getFilingFundamentals successfully', function(done) {
        //uncomment below and update the code to test getFilingFundamentals
        //instance.getFilingFundamentals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilingHtml', function() {
      it('should call getFilingHtml successfully', function(done) {
        //uncomment below and update the code to test getFilingHtml
        //instance.getFilingHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilingText', function() {
      it('should call getFilingText successfully', function(done) {
        //uncomment below and update the code to test getFilingText
        //instance.getFilingText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNote', function() {
      it('should call getNote successfully', function(done) {
        //uncomment below and update the code to test getNote
        //instance.getNote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNoteHtml', function() {
      it('should call getNoteHtml successfully', function(done) {
        //uncomment below and update the code to test getNoteHtml
        //instance.getNoteHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNoteText', function() {
      it('should call getNoteText successfully', function(done) {
        //uncomment below and update the code to test getNoteText
        //instance.getNoteText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchNotes', function() {
      it('should call searchNotes successfully', function(done) {
        //uncomment below and update the code to test searchNotes
        //instance.searchNotes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
