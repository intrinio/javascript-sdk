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
    instance = new intrinioSDK.StockExchangeApi();
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

  describe('StockExchangeApi', function() {
    describe('getAllStockExchanges', function() {
      it('should call getAllStockExchanges successfully', function(done) {
        //uncomment below and update the code to test getAllStockExchanges
        //instance.getAllStockExchanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockExchangeById', function() {
      it('should call getStockExchangeById successfully', function(done) {
        //uncomment below and update the code to test getStockExchangeById
        //instance.getStockExchangeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockExchangePriceAdjustments', function() {
      it('should call getStockExchangePriceAdjustments successfully', function(done) {
        //uncomment below and update the code to test getStockExchangePriceAdjustments
        //instance.getStockExchangePriceAdjustments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockExchangePrices', function() {
      it('should call getStockExchangePrices successfully', function(done) {
        //uncomment below and update the code to test getStockExchangePrices
        //instance.getStockExchangePrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockExchangeRealtimePrices', function() {
      it('should call getStockExchangeRealtimePrices successfully', function(done) {
        //uncomment below and update the code to test getStockExchangeRealtimePrices
        //instance.getStockExchangeRealtimePrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockExchangeSecurities', function() {
      it('should call getStockExchangeSecurities successfully', function(done) {
        //uncomment below and update the code to test getStockExchangeSecurities
        //instance.getStockExchangeSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
