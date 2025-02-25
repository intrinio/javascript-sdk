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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseETFHoldings', 'model/ApiResponseETFs', 'model/ETF', 'model/ETFAnalytics', 'model/ETFStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseETFHoldings'), require('../model/ApiResponseETFs'), require('../model/ETF'), require('../model/ETFAnalytics'), require('../model/ETFStats'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ETFsApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseETFHoldings, root.intrinioSDK.ApiResponseETFs, root.intrinioSDK.ETF, root.intrinioSDK.ETFAnalytics, root.intrinioSDK.ETFStats);
  }
}(this, function(ApiClient, ApiResponseETFHoldings, ApiResponseETFs, ETF, ETFAnalytics, ETFStats) {
  'use strict';

  /**
   * ETFs service.
   * @module api/ETFsApi
   * @version 6.35.0
   */

  /**
   * Constructs a new ETFsApi. 
   * @alias module:api/ETFsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * All ETFs
     * Returns a list of all currently listed ETFs, with relevant identification information including the ETF Name, Ticker, FIGI Ticker, and Exchange MIC for further usage with our ETF Metadata, Holdings, Stats, and Analytics offerings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.exchange 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseETFs} and HTTP response
     */
    this.getAllEtfsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'exchange': opts['exchange'],
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
      var returnType = ApiResponseETFs;
      var endpoint = '/etfs'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * All ETFs
     * Returns a list of all currently listed ETFs, with relevant identification information including the ETF Name, Ticker, FIGI Ticker, and Exchange MIC for further usage with our ETF Metadata, Holdings, Stats, and Analytics offerings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.exchange 
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseETFs}
     */
    this.getAllEtfs = function(opts) {
      return this.getAllEtfsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Lookup ETF
     * Returns classifications and reference data which consists of ~90 columns that give detailed information about an ETF. These granular details include asset class, expense ratio, index name, index weighting scheme, smart beta type and specific investment objectives.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ETF} and HTTP response
     */
    this.getEtfWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEtf");
      }


      var pathParams = {
        'identifier': identifier
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
      var returnType = ETF;
      var endpoint = '/etfs/{identifier}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Lookup ETF
     * Returns classifications and reference data which consists of ~90 columns that give detailed information about an ETF. These granular details include asset class, expense ratio, index name, index weighting scheme, smart beta type and specific investment objectives.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ETF}
     */
    this.getEtf = function(identifier) {
      return this.getEtfWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ETF Analytics
     * Returns latest market analytics for a specified US ETF, including volume, trailing volume, market cap, 52 week high, and 52 week low.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ETFAnalytics} and HTTP response
     */
    this.getEtfAnalyticsWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEtfAnalytics");
      }


      var pathParams = {
        'identifier': identifier
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
      var returnType = ETFAnalytics;
      var endpoint = '/etfs/{identifier}/analytics'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ETF Analytics
     * Returns latest market analytics for a specified US ETF, including volume, trailing volume, market cap, 52 week high, and 52 week low.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ETFAnalytics}
     */
    this.getEtfAnalytics = function(identifier) {
      return this.getEtfAnalyticsWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * ETF Holdings
     * Returns holdings data that details all the constituent securities in each ETF with names, identifiers, and the weights for each security providing granular level transparency.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseETFHoldings} and HTTP response
     */
    this.getEtfHoldingsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEtfHoldings");
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
      var returnType = ApiResponseETFHoldings;
      var endpoint = '/etfs/{identifier}/holdings'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * ETF Holdings
     * Returns holdings data that details all the constituent securities in each ETF with names, identifiers, and the weights for each security providing granular level transparency.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseETFHoldings}
     */
    this.getEtfHoldings = function(identifier, opts) {
      return this.getEtfHoldingsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Exchange Traded Fund (ETF) stats
     * Returns comprehensive key US ETF performance statistics, including prices, NAVs, flows, returns, and much more for both trailing and calendar year periods.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ETFStats} and HTTP response
     */
    this.getEtfStatsWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getEtfStats");
      }


      var pathParams = {
        'identifier': identifier
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
      var returnType = ETFStats;
      var endpoint = '/etfs/{identifier}/stats'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Exchange Traded Fund (ETF) stats
     * Returns comprehensive key US ETF performance statistics, including prices, NAVs, flows, returns, and much more for both trailing and calendar year periods.
     * @param {String} identifier An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ETFStats}
     */
    this.getEtfStats = function(identifier) {
      return this.getEtfStatsWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Search ETFs
     * Accepts a string of keyword combinations, and searches across the ETF name and ticker and returns a list of ETFs with related keywords.
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.mode When set, changes search mode to the specified mode. Paging is not available in rank_order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseETFs} and HTTP response
     */
    this.searchEtfsWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchEtfs");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'mode': opts['mode'],
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
      var returnType = ApiResponseETFs;
      var endpoint = '/etfs/search'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Search ETFs
     * Accepts a string of keyword combinations, and searches across the ETF name and ticker and returns a list of ETFs with related keywords.
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.mode When set, changes search mode to the specified mode. Paging is not available in rank_order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseETFs}
     */
    this.searchEtfs = function(query, opts) {
      return this.searchEtfsWithHttpInfo(query, opts)
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
