/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.18.0
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
    define(['ApiClient', 'model/ApiResponseForexCurrencies', 'model/ApiResponseForexPairs', 'model/ApiResponseForexPrices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseForexCurrencies'), require('../model/ApiResponseForexPairs'), require('../model/ApiResponseForexPrices'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ForexApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseForexCurrencies, root.intrinioSDK.ApiResponseForexPairs, root.intrinioSDK.ApiResponseForexPrices);
  }
}(this, function(ApiClient, ApiResponseForexCurrencies, ApiResponseForexPairs, ApiResponseForexPrices) {
  'use strict';

  /**
   * Forex service.
   * @module api/ForexApi
   * @version 5.8.0
   */

  /**
   * Constructs a new ForexApi. 
   * @alias module:api/ForexApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * Forex Currencies
     * Returns a list of forex currencies for which prices are available.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseForexCurrencies} and HTTP response
     */
    this.getForexCurrenciesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
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
      var returnType = ApiResponseForexCurrencies;
      var endpoint = '/forex/currencies'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Forex Currencies
     * Returns a list of forex currencies for which prices are available.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseForexCurrencies}
     */
    this.getForexCurrencies = function() {
      return this.getForexCurrenciesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Forex Currency Pairs
     * Returns a list of currency pairs used to request foreign exchange (forex) market price data. The currency that is used as the reference is called quote currency and the currency that is quoted in relation is called the base currency. For example, in the pair code “EURGBP” with a price of 0.88, one Euro (base currency) can be exchanged for 0.88 British Pounds (quote currency).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseForexPairs} and HTTP response
     */
    this.getForexPairsWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
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
      var returnType = ApiResponseForexPairs;
      var endpoint = '/forex/pairs'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Forex Currency Pairs
     * Returns a list of currency pairs used to request foreign exchange (forex) market price data. The currency that is used as the reference is called quote currency and the currency that is quoted in relation is called the base currency. For example, in the pair code “EURGBP” with a price of 0.88, one Euro (base currency) can be exchanged for 0.88 British Pounds (quote currency).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseForexPairs}
     */
    this.getForexPairs = function() {
      return this.getForexPairsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Forex Currency Prices
     * Provides a list of forex price quotes for a given forex currency pair and timeframe.
     * @param {String} pair The Forex Currency Pair code
     * @param {module:model/String} timeframe The time interval for the quotes
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.timezone Returns trading times in this timezone (default to UTC)
     * @param {Date} opts.startDate Return Forex Prices on or after this date
     * @param {String} opts.startTime Return Forex Prices at or after this time (24-hour in &#39;hh:mm&#39; format, UTC timezone)
     * @param {Date} opts.endDate Return Forex Prices on or before this date
     * @param {String} opts.endTime Return Forex Prices at or before this time (24-hour in &#39;hh:mm&#39; format, UTC timezone)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseForexPrices} and HTTP response
     */
    this.getForexPricesWithHttpInfo = function(pair, timeframe, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'pair' is set
      if (pair === undefined || pair === null) {
        throw new Error("Missing the required parameter 'pair' when calling getForexPrices");
      }

      // verify the required parameter 'timeframe' is set
      if (timeframe === undefined || timeframe === null) {
        throw new Error("Missing the required parameter 'timeframe' when calling getForexPrices");
      }


      var pathParams = {
        'pair': pair,
        'timeframe': timeframe
      };
      var queryParams = {
        'timezone': opts['timezone'],
        'start_date': opts['startDate'],
        'start_time': opts['startTime'],
        'end_date': opts['endDate'],
        'end_time': opts['endTime'],
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
      var returnType = ApiResponseForexPrices;
      var endpoint = '/forex/prices/{pair}/{timeframe}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Forex Currency Prices
     * Provides a list of forex price quotes for a given forex currency pair and timeframe.
     * @param {String} pair The Forex Currency Pair code
     * @param {module:model/String} timeframe The time interval for the quotes
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.timezone Returns trading times in this timezone (default to UTC)
     * @param {Date} opts.startDate Return Forex Prices on or after this date
     * @param {String} opts.startTime Return Forex Prices at or after this time (24-hour in &#39;hh:mm&#39; format, UTC timezone)
     * @param {Date} opts.endDate Return Forex Prices on or before this date
     * @param {String} opts.endTime Return Forex Prices at or before this time (24-hour in &#39;hh:mm&#39; format, UTC timezone)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseForexPrices}
     */
    this.getForexPrices = function(pair, timeframe, opts) {
      return this.getForexPricesWithHttpInfo(pair, timeframe, opts)
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
