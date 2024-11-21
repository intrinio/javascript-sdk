/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.75.0
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
    define(['ApiClient', 'model/ApiResponseESGCompanies', 'model/ApiResponseESGCompanyComprehensiveRatingHistory', 'model/ApiResponseESGCompanyRatingHistory', 'model/ApiResponseESGLatest', 'model/ApiResponseESGLatestComprehensive'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseESGCompanies'), require('../model/ApiResponseESGCompanyComprehensiveRatingHistory'), require('../model/ApiResponseESGCompanyRatingHistory'), require('../model/ApiResponseESGLatest'), require('../model/ApiResponseESGLatestComprehensive'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ESGApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseESGCompanies, root.intrinioSDK.ApiResponseESGCompanyComprehensiveRatingHistory, root.intrinioSDK.ApiResponseESGCompanyRatingHistory, root.intrinioSDK.ApiResponseESGLatest, root.intrinioSDK.ApiResponseESGLatestComprehensive);
  }
}(this, function(ApiClient, ApiResponseESGCompanies, ApiResponseESGCompanyComprehensiveRatingHistory, ApiResponseESGCompanyRatingHistory, ApiResponseESGLatest, ApiResponseESGLatestComprehensive) {
  'use strict';

  /**
   * ESG service.
   * @module api/ESGApi
   * @version 6.33.0
   */

  /**
   * Constructs a new ESGApi. 
   * @alias module:api/ESGApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * ESG Companies
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {String} opts.industry 
     * @param {String} opts.ticker 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseESGCompanies} and HTTP response
     */
    this.getEsgCompaniesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'country': opts['country'],
        'industry': opts['industry'],
        'ticker': opts['ticker'],
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseESGCompanies;
      var endpoint = '/esg/companies'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ESG Companies
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {String} opts.industry 
     * @param {String} opts.ticker 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseESGCompanies}
     */
    this.getEsgCompanies = function(opts) {
      return this.getEsgCompaniesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ESG Company Comprehensive Ratings History
     * @param {String} identifier ISIN, Intrinio ID, or Ticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseESGCompanyComprehensiveRatingHistory} and HTTP response
     */
    this.getEsgCompanyComprehensiveRatingsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEsgCompanyComprehensiveRatings");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseESGCompanyComprehensiveRatingHistory;
      var endpoint = '/esg/{identifier}/comprehensive'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ESG Company Comprehensive Ratings History
     * @param {String} identifier ISIN, Intrinio ID, or Ticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseESGCompanyComprehensiveRatingHistory}
     */
    this.getEsgCompanyComprehensiveRatings = function(identifier, opts) {
      return this.getEsgCompanyComprehensiveRatingsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ESG Company Ratings History
     * @param {String} identifier ISIN, Intrinio ID, or Ticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseESGCompanyRatingHistory} and HTTP response
     */
    this.getEsgCompanyRatingsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEsgCompanyRatings");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseESGCompanyRatingHistory;
      var endpoint = '/esg/{identifier}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ESG Company Ratings History
     * @param {String} identifier ISIN, Intrinio ID, or Ticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseESGCompanyRatingHistory}
     */
    this.getEsgCompanyRatings = function(identifier, opts) {
      return this.getEsgCompanyRatingsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ESG Latest
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseESGLatest} and HTTP response
     */
    this.getEsgLatestWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'country': opts['country'],
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseESGLatest;
      var endpoint = '/esg'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ESG Latest
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseESGLatest}
     */
    this.getEsgLatest = function(opts) {
      return this.getEsgLatestWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ESG Latest Comprehensive
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseESGLatestComprehensive} and HTTP response
     */
    this.getEsgLatestComprehensiveWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'country': opts['country'],
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseESGLatestComprehensive;
      var endpoint = '/esg/comprehensive'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ESG Latest Comprehensive
     * @param {Object} opts Optional parameters
     * @param {String} opts.country 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseESGLatestComprehensive}
     */
    this.getEsgLatestComprehensive = function(opts) {
      return this.getEsgLatestComprehensiveWithHttpInfo(opts)
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
