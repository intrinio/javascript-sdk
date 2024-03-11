/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.53.1
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
    instance = new intrinioSDK.RealtimeStockPrice();
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

  describe('RealtimeStockPrice', function() {
    it('should create an instance of RealtimeStockPrice', function() {
      // uncomment below and update the code to test RealtimeStockPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be.a(intrinioSDK.RealtimeStockPrice);
    });

    it('should have the property lastPrice (base name: "last_price")', function() {
      // uncomment below and update the code to test the property lastPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property lastTime (base name: "last_time")', function() {
      // uncomment below and update the code to test the property lastTime
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property lastSize (base name: "last_size")', function() {
      // uncomment below and update the code to test the property lastSize
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property bidPrice (base name: "bid_price")', function() {
      // uncomment below and update the code to test the property bidPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property bidSize (base name: "bid_size")', function() {
      // uncomment below and update the code to test the property bidSize
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property askPrice (base name: "ask_price")', function() {
      // uncomment below and update the code to test the property askPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property askSize (base name: "ask_size")', function() {
      // uncomment below and update the code to test the property askSize
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property openPrice (base name: "open_price")', function() {
      // uncomment below and update the code to test the property openPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property closePrice (base name: "close_price")', function() {
      // uncomment below and update the code to test the property closePrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property highPrice (base name: "high_price")', function() {
      // uncomment below and update the code to test the property highPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property lowPrice (base name: "low_price")', function() {
      // uncomment below and update the code to test the property lowPrice
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property exchangeVolume (base name: "exchange_volume")', function() {
      // uncomment below and update the code to test the property exchangeVolume
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property marketVolume (base name: "market_volume")', function() {
      // uncomment below and update the code to test the property marketVolume
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updated_on")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property listingVenue (base name: "listing_venue")', function() {
      // uncomment below and update the code to test the property listingVenue
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property salesConditions (base name: "sales_conditions")', function() {
      // uncomment below and update the code to test the property salesConditions
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property quoteConditions (base name: "quote_conditions")', function() {
      // uncomment below and update the code to test the property quoteConditions
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property marketCenterCode (base name: "market_center_code")', function() {
      // uncomment below and update the code to test the property marketCenterCode
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property isDarkpool (base name: "is_darkpool")', function() {
      // uncomment below and update the code to test the property isDarkpool
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instane = new intrinioSDK.RealtimeStockPrice();
      //expect(instance).to.be();
    });

  });

}));
