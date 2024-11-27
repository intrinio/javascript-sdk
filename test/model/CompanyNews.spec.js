/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.76.3
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
    instance = new intrinioSDK.CompanyNews();
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

  describe('CompanyNews', function() {
    it('should create an instance of CompanyNews', function() {
      // uncomment below and update the code to test CompanyNews
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be.a(intrinioSDK.CompanyNews);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property publicationDate (base name: "publication_date")', function() {
      // uncomment below and update the code to test the property publicationDate
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property topics (base name: "topics")', function() {
      // uncomment below and update the code to test the property topics
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property copyright (base name: "copyright")', function() {
      // uncomment below and update the code to test the property copyright
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property wordCount (base name: "word_count")', function() {
      // uncomment below and update the code to test the property wordCount
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property businessRelevance (base name: "business_relevance")', function() {
      // uncomment below and update the code to test the property businessRelevance
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property articleSentiment (base name: "article_sentiment")', function() {
      // uncomment below and update the code to test the property articleSentiment
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

    it('should have the property articleSentimentConfidence (base name: "article_sentiment_confidence")', function() {
      // uncomment below and update the code to test the property articleSentimentConfidence
      //var instane = new intrinioSDK.CompanyNews();
      //expect(instance).to.be();
    });

  });

}));
