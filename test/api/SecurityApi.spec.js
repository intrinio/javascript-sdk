/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.30.0
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
    instance = new intrinioSDK.SecurityApi();
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

  describe('SecurityApi', function() {
    describe('getAllSecurities', function() {
      it('should call getAllSecurities successfully', function(done) {
        //uncomment below and update the code to test getAllSecurities
        //instance.getAllSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityById', function() {
      it('should call getSecurityById successfully', function(done) {
        //uncomment below and update the code to test getSecurityById
        //instance.getSecurityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityDataPointNumber', function() {
      it('should call getSecurityDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getSecurityDataPointNumber
        //instance.getSecurityDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityDataPointText', function() {
      it('should call getSecurityDataPointText successfully', function(done) {
        //uncomment below and update the code to test getSecurityDataPointText
        //instance.getSecurityDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityHistoricalData', function() {
      it('should call getSecurityHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getSecurityHistoricalData
        //instance.getSecurityHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityInsiderOwnership', function() {
      it('should call getSecurityInsiderOwnership successfully', function(done) {
        //uncomment below and update the code to test getSecurityInsiderOwnership
        //instance.getSecurityInsiderOwnership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityIntervalPrices', function() {
      it('should call getSecurityIntervalPrices successfully', function(done) {
        //uncomment below and update the code to test getSecurityIntervalPrices
        //instance.getSecurityIntervalPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityIntradayPrices', function() {
      it('should call getSecurityIntradayPrices successfully', function(done) {
        //uncomment below and update the code to test getSecurityIntradayPrices
        //instance.getSecurityIntradayPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityLatestDividendRecord', function() {
      it('should call getSecurityLatestDividendRecord successfully', function(done) {
        //uncomment below and update the code to test getSecurityLatestDividendRecord
        //instance.getSecurityLatestDividendRecord(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityLatestEarningsRecord', function() {
      it('should call getSecurityLatestEarningsRecord successfully', function(done) {
        //uncomment below and update the code to test getSecurityLatestEarningsRecord
        //instance.getSecurityLatestEarningsRecord(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsAdi', function() {
      it('should call getSecurityPriceTechnicalsAdi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsAdi
        //instance.getSecurityPriceTechnicalsAdi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsAdtv', function() {
      it('should call getSecurityPriceTechnicalsAdtv successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsAdtv
        //instance.getSecurityPriceTechnicalsAdtv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsAdx', function() {
      it('should call getSecurityPriceTechnicalsAdx successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsAdx
        //instance.getSecurityPriceTechnicalsAdx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsAo', function() {
      it('should call getSecurityPriceTechnicalsAo successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsAo
        //instance.getSecurityPriceTechnicalsAo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsAtr', function() {
      it('should call getSecurityPriceTechnicalsAtr successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsAtr
        //instance.getSecurityPriceTechnicalsAtr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsBb', function() {
      it('should call getSecurityPriceTechnicalsBb successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsBb
        //instance.getSecurityPriceTechnicalsBb(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsCci', function() {
      it('should call getSecurityPriceTechnicalsCci successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsCci
        //instance.getSecurityPriceTechnicalsCci(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsCmf', function() {
      it('should call getSecurityPriceTechnicalsCmf successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsCmf
        //instance.getSecurityPriceTechnicalsCmf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsDc', function() {
      it('should call getSecurityPriceTechnicalsDc successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsDc
        //instance.getSecurityPriceTechnicalsDc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsDpo', function() {
      it('should call getSecurityPriceTechnicalsDpo successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsDpo
        //instance.getSecurityPriceTechnicalsDpo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsEom', function() {
      it('should call getSecurityPriceTechnicalsEom successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsEom
        //instance.getSecurityPriceTechnicalsEom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsFi', function() {
      it('should call getSecurityPriceTechnicalsFi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsFi
        //instance.getSecurityPriceTechnicalsFi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsIchimoku', function() {
      it('should call getSecurityPriceTechnicalsIchimoku successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsIchimoku
        //instance.getSecurityPriceTechnicalsIchimoku(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsKc', function() {
      it('should call getSecurityPriceTechnicalsKc successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsKc
        //instance.getSecurityPriceTechnicalsKc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsKst', function() {
      it('should call getSecurityPriceTechnicalsKst successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsKst
        //instance.getSecurityPriceTechnicalsKst(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsMacd', function() {
      it('should call getSecurityPriceTechnicalsMacd successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsMacd
        //instance.getSecurityPriceTechnicalsMacd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsMfi', function() {
      it('should call getSecurityPriceTechnicalsMfi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsMfi
        //instance.getSecurityPriceTechnicalsMfi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsMi', function() {
      it('should call getSecurityPriceTechnicalsMi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsMi
        //instance.getSecurityPriceTechnicalsMi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsNvi', function() {
      it('should call getSecurityPriceTechnicalsNvi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsNvi
        //instance.getSecurityPriceTechnicalsNvi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsObv', function() {
      it('should call getSecurityPriceTechnicalsObv successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsObv
        //instance.getSecurityPriceTechnicalsObv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsObvMean', function() {
      it('should call getSecurityPriceTechnicalsObvMean successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsObvMean
        //instance.getSecurityPriceTechnicalsObvMean(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsRsi', function() {
      it('should call getSecurityPriceTechnicalsRsi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsRsi
        //instance.getSecurityPriceTechnicalsRsi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsSma', function() {
      it('should call getSecurityPriceTechnicalsSma successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsSma
        //instance.getSecurityPriceTechnicalsSma(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsSr', function() {
      it('should call getSecurityPriceTechnicalsSr successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsSr
        //instance.getSecurityPriceTechnicalsSr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsTrix', function() {
      it('should call getSecurityPriceTechnicalsTrix successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsTrix
        //instance.getSecurityPriceTechnicalsTrix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsTsi', function() {
      it('should call getSecurityPriceTechnicalsTsi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsTsi
        //instance.getSecurityPriceTechnicalsTsi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsUo', function() {
      it('should call getSecurityPriceTechnicalsUo successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsUo
        //instance.getSecurityPriceTechnicalsUo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsVi', function() {
      it('should call getSecurityPriceTechnicalsVi successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsVi
        //instance.getSecurityPriceTechnicalsVi(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsVpt', function() {
      it('should call getSecurityPriceTechnicalsVpt successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsVpt
        //instance.getSecurityPriceTechnicalsVpt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsVwap', function() {
      it('should call getSecurityPriceTechnicalsVwap successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsVwap
        //instance.getSecurityPriceTechnicalsVwap(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityPriceTechnicalsWr', function() {
      it('should call getSecurityPriceTechnicalsWr successfully', function(done) {
        //uncomment below and update the code to test getSecurityPriceTechnicalsWr
        //instance.getSecurityPriceTechnicalsWr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityRealtimePrice', function() {
      it('should call getSecurityRealtimePrice successfully', function(done) {
        //uncomment below and update the code to test getSecurityRealtimePrice
        //instance.getSecurityRealtimePrice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecuritySnapshots', function() {
      it('should call getSecuritySnapshots successfully', function(done) {
        //uncomment below and update the code to test getSecuritySnapshots
        //instance.getSecuritySnapshots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityStockPriceAdjustments', function() {
      it('should call getSecurityStockPriceAdjustments successfully', function(done) {
        //uncomment below and update the code to test getSecurityStockPriceAdjustments
        //instance.getSecurityStockPriceAdjustments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityStockPrices', function() {
      it('should call getSecurityStockPrices successfully', function(done) {
        //uncomment below and update the code to test getSecurityStockPrices
        //instance.getSecurityStockPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityZacksAnalystRatings', function() {
      it('should call getSecurityZacksAnalystRatings successfully', function(done) {
        //uncomment below and update the code to test getSecurityZacksAnalystRatings
        //instance.getSecurityZacksAnalystRatings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityZacksAnalystRatingsSnapshot', function() {
      it('should call getSecurityZacksAnalystRatingsSnapshot successfully', function(done) {
        //uncomment below and update the code to test getSecurityZacksAnalystRatingsSnapshot
        //instance.getSecurityZacksAnalystRatingsSnapshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityZacksEpsSurprises', function() {
      it('should call getSecurityZacksEpsSurprises successfully', function(done) {
        //uncomment below and update the code to test getSecurityZacksEpsSurprises
        //instance.getSecurityZacksEpsSurprises(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityZacksSalesSurprises', function() {
      it('should call getSecurityZacksSalesSurprises successfully', function(done) {
        //uncomment below and update the code to test getSecurityZacksSalesSurprises
        //instance.getSecurityZacksSalesSurprises(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('screenSecurities', function() {
      it('should call screenSecurities successfully', function(done) {
        //uncomment below and update the code to test screenSecurities
        //instance.screenSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSecurities', function() {
      it('should call searchSecurities successfully', function(done) {
        //uncomment below and update the code to test searchSecurities
        //instance.searchSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
