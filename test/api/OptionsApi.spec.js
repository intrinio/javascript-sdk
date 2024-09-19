/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.70.0
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
    instance = new intrinioSDK.OptionsApi();
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

  describe('OptionsApi', function() {
    describe('getAllOptionsTickers', function() {
      it('should call getAllOptionsTickers successfully', function(done) {
        //uncomment below and update the code to test getAllOptionsTickers
        //instance.getAllOptionsTickers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionAggregates', function() {
      it('should call getOptionAggregates successfully', function(done) {
        //uncomment below and update the code to test getOptionAggregates
        //instance.getOptionAggregates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionExpirationsRealtime', function() {
      it('should call getOptionExpirationsRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionExpirationsRealtime
        //instance.getOptionExpirationsRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionStrikesRealtime', function() {
      it('should call getOptionStrikesRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionStrikesRealtime
        //instance.getOptionStrikesRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptions', function() {
      it('should call getOptions successfully', function(done) {
        //uncomment below and update the code to test getOptions
        //instance.getOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsBySymbolRealtime', function() {
      it('should call getOptionsBySymbolRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionsBySymbolRealtime
        //instance.getOptionsBySymbolRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsChain', function() {
      it('should call getOptionsChain successfully', function(done) {
        //uncomment below and update the code to test getOptionsChain
        //instance.getOptionsChain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsChainEod', function() {
      it('should call getOptionsChainEod successfully', function(done) {
        //uncomment below and update the code to test getOptionsChainEod
        //instance.getOptionsChainEod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsChainRealtime', function() {
      it('should call getOptionsChainRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionsChainRealtime
        //instance.getOptionsChainRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsExpirations', function() {
      it('should call getOptionsExpirations successfully', function(done) {
        //uncomment below and update the code to test getOptionsExpirations
        //instance.getOptionsExpirations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsExpirationsEod', function() {
      it('should call getOptionsExpirationsEod successfully', function(done) {
        //uncomment below and update the code to test getOptionsExpirationsEod
        //instance.getOptionsExpirationsEod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsIntervalByContract', function() {
      it('should call getOptionsIntervalByContract successfully', function(done) {
        //uncomment below and update the code to test getOptionsIntervalByContract
        //instance.getOptionsIntervalByContract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsIntervalMovers', function() {
      it('should call getOptionsIntervalMovers successfully', function(done) {
        //uncomment below and update the code to test getOptionsIntervalMovers
        //instance.getOptionsIntervalMovers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsIntervalMoversChange', function() {
      it('should call getOptionsIntervalMoversChange successfully', function(done) {
        //uncomment below and update the code to test getOptionsIntervalMoversChange
        //instance.getOptionsIntervalMoversChange(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsIntervalMoversVolume', function() {
      it('should call getOptionsIntervalMoversVolume successfully', function(done) {
        //uncomment below and update the code to test getOptionsIntervalMoversVolume
        //instance.getOptionsIntervalMoversVolume(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsPrices', function() {
      it('should call getOptionsPrices successfully', function(done) {
        //uncomment below and update the code to test getOptionsPrices
        //instance.getOptionsPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsPricesBatchRealtime', function() {
      it('should call getOptionsPricesBatchRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionsPricesBatchRealtime
        //instance.getOptionsPricesBatchRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsPricesEod', function() {
      it('should call getOptionsPricesEod successfully', function(done) {
        //uncomment below and update the code to test getOptionsPricesEod
        //instance.getOptionsPricesEod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsPricesRealtime', function() {
      it('should call getOptionsPricesRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionsPricesRealtime
        //instance.getOptionsPricesRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsPricesRealtimeByTicker', function() {
      it('should call getOptionsPricesRealtimeByTicker successfully', function(done) {
        //uncomment below and update the code to test getOptionsPricesRealtimeByTicker
        //instance.getOptionsPricesRealtimeByTicker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsSnapshots', function() {
      it('should call getOptionsSnapshots successfully', function(done) {
        //uncomment below and update the code to test getOptionsSnapshots
        //instance.getOptionsSnapshots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOptionsStatsRealtime', function() {
      it('should call getOptionsStatsRealtime successfully', function(done) {
        //uncomment below and update the code to test getOptionsStatsRealtime
        //instance.getOptionsStatsRealtime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnusualActivity', function() {
      it('should call getUnusualActivity successfully', function(done) {
        //uncomment below and update the code to test getUnusualActivity
        //instance.getUnusualActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnusualActivityIntraday', function() {
      it('should call getUnusualActivityIntraday successfully', function(done) {
        //uncomment below and update the code to test getUnusualActivityIntraday
        //instance.getUnusualActivityIntraday(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnusualActivityUniversal', function() {
      it('should call getUnusualActivityUniversal successfully', function(done) {
        //uncomment below and update the code to test getUnusualActivityUniversal
        //instance.getUnusualActivityUniversal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnusualActivityUniversalIntraday', function() {
      it('should call getUnusualActivityUniversalIntraday successfully', function(done) {
        //uncomment below and update the code to test getUnusualActivityUniversalIntraday
        //instance.getUnusualActivityUniversalIntraday(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
