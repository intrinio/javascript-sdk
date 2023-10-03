/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.47.3
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
    instance = new intrinioSDK.TechnicalApi();
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

  describe('TechnicalApi', function() {
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
  });

}));
