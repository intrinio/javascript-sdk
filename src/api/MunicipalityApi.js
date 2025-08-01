/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.107.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseMunicipalities', 'model/ApiResponseMunicipalitiyFinancials', 'model/Municipality'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseMunicipalities'), require('../model/ApiResponseMunicipalitiyFinancials'), require('../model/Municipality'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.MunicipalityApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseMunicipalities, root.intrinioSDK.ApiResponseMunicipalitiyFinancials, root.intrinioSDK.Municipality);
  }
}(this, function(ApiClient, ApiResponseMunicipalities, ApiResponseMunicipalitiyFinancials, Municipality) {
  'use strict';

  /**
   * Municipality service.
   * @module api/MunicipalityApi
   * @version 6.40.0
   */

  /**
   * Constructs a new MunicipalityApi. 
   * @alias module:api/MunicipalityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * All Municipalities
     * Returns all Municipalities. When parameters are specified, returns matching municipalities.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.hasFinancials Return municipalities with financials
     * @param {String} opts.governmentName Return municipalities with a government name matching the given query
     * @param {String} opts.governmentType Return municipalities with the given government type
     * @param {String} opts.areaName Return municipalities with an area name matching the given query
     * @param {module:model/String} opts.areaType Return municipalities with the given area type
     * @param {String} opts.city Return municipalities in the given city
     * @param {String} opts.state Return municipalities in the given state
     * @param {Number} opts.zipcode Return municipalities in the given zipcode
     * @param {Number} opts.populationGreaterThan Return municipalities with a population greater than the given number
     * @param {Number} opts.populationLessThan Return municipalities with a population less than the given number
     * @param {Number} opts.enrollmentGreaterThan Return municipalities with an enrollment greater than the given number
     * @param {Number} opts.enrollmentLessThan Return municipalities with an enrollment less than the given number
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseMunicipalities} and HTTP response
     */
    this.getAllMunicipalitiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'has_financials': opts['hasFinancials'],
        'government_name': opts['governmentName'],
        'government_type': opts['governmentType'],
        'area_name': opts['areaName'],
        'area_type': opts['areaType'],
        'city': opts['city'],
        'state': opts['state'],
        'zipcode': opts['zipcode'],
        'population_greater_than': opts['populationGreaterThan'],
        'population_less_than': opts['populationLessThan'],
        'enrollment_greater_than': opts['enrollmentGreaterThan'],
        'enrollment_less_than': opts['enrollmentLessThan'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseMunicipalities;
      var endpoint = '/municipalities'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * All Municipalities
     * Returns all Municipalities. When parameters are specified, returns matching municipalities.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.hasFinancials Return municipalities with financials
     * @param {String} opts.governmentName Return municipalities with a government name matching the given query
     * @param {String} opts.governmentType Return municipalities with the given government type
     * @param {String} opts.areaName Return municipalities with an area name matching the given query
     * @param {module:model/String} opts.areaType Return municipalities with the given area type
     * @param {String} opts.city Return municipalities in the given city
     * @param {String} opts.state Return municipalities in the given state
     * @param {Number} opts.zipcode Return municipalities in the given zipcode
     * @param {Number} opts.populationGreaterThan Return municipalities with a population greater than the given number
     * @param {Number} opts.populationLessThan Return municipalities with a population less than the given number
     * @param {Number} opts.enrollmentGreaterThan Return municipalities with an enrollment greater than the given number
     * @param {Number} opts.enrollmentLessThan Return municipalities with an enrollment less than the given number
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseMunicipalities}
     */
    this.getAllMunicipalities = function(opts) {
      return this.getAllMunicipalitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Municipality by ID
     * Returns the Municipality with the given ID
     * @param {String} id An Intrinio ID of a Municipality
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Municipality} and HTTP response
     */
    this.getMunicipalityByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMunicipalityById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Municipality;
      var endpoint = '/municipalities/{id}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Municipality by ID
     * Returns the Municipality with the given ID
     * @param {String} id An Intrinio ID of a Municipality
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Municipality}
     */
    this.getMunicipalityById = function(id) {
      return this.getMunicipalityByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Financials for a Municipality
     * Returns financial statement data for the Municipality with the given ID
     * @param {String} id An Intrinio ID of a Municipality
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear Return financials for the given fiscal year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseMunicipalitiyFinancials} and HTTP response
     */
    this.getMunicipalityFinancialsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMunicipalityFinancials");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'fiscal_year': opts['fiscalYear'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseMunicipalitiyFinancials;
      var endpoint = '/municipalities/{id}/financials'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Financials for a Municipality
     * Returns financial statement data for the Municipality with the given ID
     * @param {String} id An Intrinio ID of a Municipality
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fiscalYear Return financials for the given fiscal year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseMunicipalitiyFinancials}
     */
    this.getMunicipalityFinancials = function(id, opts) {
      return this.getMunicipalityFinancialsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    this.makeApiCall = function(parameters) {
      const retry = require('async-retry')
      
      const { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType } = parameters;
      
      async function makeApiRequest(intrinioSDK) {
        let response = intrinioSDK.apiClient.callApi(
          endpoint, method,
          pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
        );
        return response
      }
      
      var retryAmount = 0;
      if (this.apiClient.enableRetries == true) {
        retryAmount = 5;
      }
      
      return retry((bail, attempt) => {
          return new Promise((resolve, reject) => {
            var req = makeApiRequest(this, bail);
            
            req.then((response) => {
              resolve(response);
            })
            .catch((error) => {
              // OpenAPI parses the "less than" sign uniquely. Logic below is alternate logic to remedy this.
              var isClientError = error.status >= 400 && !(error.status >= 500);
              
              // Check for rate limit header. Bail if it is greater than the max allotted retry, otherwise run a loop until the rate limit resets 
              // Do not retry on all other 400 errors
              if (error.status == 429) {
                var rateLimitMilliSeconds = error.response.headers['retry-after'] * 1000;
                
                if (rateLimitMilliSeconds > MAX_RETRY_MILLISECONDS) {
                  resolve(bail(error));
                }
                
                setTimeout(() => {
                  reject(error);
                }, rateLimitMilliSeconds);
              } else if (isClientError) {
                resolve(bail(error));
              } else {
                reject(error);
              }
            });
            
          })
      }, {
        minTimeout: 1000,
        maxTimeout: MAX_RETRY_MILLISECONDS,
        randomize: true,
        retries: retryAmount,
        factor: 1
      }).then((response) => {
        return response;
      })
    }
  };
  
  return exports;
}));
