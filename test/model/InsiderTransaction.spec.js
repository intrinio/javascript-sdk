/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.91.1
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
    instance = new intrinioSDK.InsiderTransaction();
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

  describe('InsiderTransaction', function() {
    it('should create an instance of InsiderTransaction', function() {
      // uncomment below and update the code to test InsiderTransaction
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be.a(intrinioSDK.InsiderTransaction);
    });

    it('should have the property director (base name: "director")', function() {
      // uncomment below and update the code to test the property director
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property officer (base name: "officer")', function() {
      // uncomment below and update the code to test the property officer
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property tenPercentOwner (base name: "ten_percent_owner")', function() {
      // uncomment below and update the code to test the property tenPercentOwner
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property otherRelation (base name: "other_relation")', function() {
      // uncomment below and update the code to test the property otherRelation
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property officerTitle (base name: "officer_title")', function() {
      // uncomment below and update the code to test the property officerTitle
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property derivativeTransaction (base name: "derivative_transaction")', function() {
      // uncomment below and update the code to test the property derivativeTransaction
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property securityTitle (base name: "security_title")', function() {
      // uncomment below and update the code to test the property securityTitle
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property conversionExercisePrice (base name: "conversion_exercise_price")', function() {
      // uncomment below and update the code to test the property conversionExercisePrice
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionDate (base name: "transaction_date")', function() {
      // uncomment below and update the code to test the property transactionDate
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property deemedExecutionDate (base name: "deemed_execution_date")', function() {
      // uncomment below and update the code to test the property deemedExecutionDate
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionTypeCode (base name: "transaction_type_code")', function() {
      // uncomment below and update the code to test the property transactionTypeCode
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property acquisitionDispositionCode (base name: "acquisition_disposition_code")', function() {
      // uncomment below and update the code to test the property acquisitionDispositionCode
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property amountOfShares (base name: "amount_of_shares")', function() {
      // uncomment below and update the code to test the property amountOfShares
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property exerciseDate (base name: "exercise_date")', function() {
      // uncomment below and update the code to test the property exerciseDate
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expiration_date")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property underlyingSecurityTitle (base name: "underlying_security_title")', function() {
      // uncomment below and update the code to test the property underlyingSecurityTitle
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property underlyingShares (base name: "underlying_shares")', function() {
      // uncomment below and update the code to test the property underlyingShares
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionPrice (base name: "transaction_price")', function() {
      // uncomment below and update the code to test the property transactionPrice
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property totalSharesOwned (base name: "total_shares_owned")', function() {
      // uncomment below and update the code to test the property totalSharesOwned
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property ownershipTypeCode (base name: "ownership_type_code")', function() {
      // uncomment below and update the code to test the property ownershipTypeCode
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new intrinioSDK.InsiderTransaction();
      //expect(instance).to.be();
    });

  });

}));
