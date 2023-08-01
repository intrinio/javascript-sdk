/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.45.0
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
    define(['ApiClient', 'model/ApiResponseStockExchangeRealtimeStockPrices', 'model/ApiResponseStockExchangeSecurities', 'model/ApiResponseStockExchangeStockPriceAdjustments', 'model/ApiResponseStockExchangeStockPrices', 'model/ApiResponseStockExchanges', 'model/StockExchange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseStockExchangeRealtimeStockPrices'), require('../model/ApiResponseStockExchangeSecurities'), require('../model/ApiResponseStockExchangeStockPriceAdjustments'), require('../model/ApiResponseStockExchangeStockPrices'), require('../model/ApiResponseStockExchanges'), require('../model/StockExchange'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.StockExchangeApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseStockExchangeRealtimeStockPrices, root.intrinioSDK.ApiResponseStockExchangeSecurities, root.intrinioSDK.ApiResponseStockExchangeStockPriceAdjustments, root.intrinioSDK.ApiResponseStockExchangeStockPrices, root.intrinioSDK.ApiResponseStockExchanges, root.intrinioSDK.StockExchange);
  }
}(this, function(ApiClient, ApiResponseStockExchangeRealtimeStockPrices, ApiResponseStockExchangeSecurities, ApiResponseStockExchangeStockPriceAdjustments, ApiResponseStockExchangeStockPrices, ApiResponseStockExchanges, StockExchange) {
  'use strict';

  /**
   * StockExchange service.
   * @module api/StockExchangeApi
   * @version 6.25.0
   */

  /**
   * Constructs a new StockExchangeApi. 
   * @alias module:api/StockExchangeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * All Stock Exchanges
     * Returns all Stock Exchanges matching the specified parameters
     * @param {Object} opts Optional parameters
     * @param {String} opts.city Filter by city
     * @param {String} opts.country Filter by country
     * @param {String} opts.countryCode Filter by ISO country code
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStockExchanges} and HTTP response
     */
    this.getAllStockExchangesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'city': opts['city'],
        'country': opts['country'],
        'country_code': opts['countryCode'],
        'page_size': opts['pageSize'],
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
      var returnType = ApiResponseStockExchanges;
      var endpoint = '/stock_exchanges'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * All Stock Exchanges
     * Returns all Stock Exchanges matching the specified parameters
     * @param {Object} opts Optional parameters
     * @param {String} opts.city Filter by city
     * @param {String} opts.country Filter by country
     * @param {String} opts.countryCode Filter by ISO country code
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStockExchanges}
     */
    this.getAllStockExchanges = function(opts) {
      return this.getAllStockExchangesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Lookup Stock Exchange
     * Returns the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StockExchange} and HTTP response
     */
    this.getStockExchangeByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangeById");
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
      var returnType = StockExchange;
      var endpoint = '/stock_exchanges/{identifier}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Lookup Stock Exchange
     * Returns the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StockExchange}
     */
    this.getStockExchangeById = function(identifier) {
      return this.getStockExchangeByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Stock Price Adjustments by Exchange
     * Returns stock price adjustments for the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.date The date for which to return price adjustments
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStockExchangeStockPriceAdjustments} and HTTP response
     */
    this.getStockExchangePriceAdjustmentsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangePriceAdjustments");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'date': opts['date'],
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
      var returnType = ApiResponseStockExchangeStockPriceAdjustments;
      var endpoint = '/stock_exchanges/{identifier}/prices/adjustments'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Stock Price Adjustments by Exchange
     * Returns stock price adjustments for the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.date The date for which to return price adjustments
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStockExchangeStockPriceAdjustments}
     */
    this.getStockExchangePriceAdjustments = function(identifier, opts) {
      return this.getStockExchangePriceAdjustmentsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Stock Prices by Exchange
     * Returns end-of-day stock prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.date The date for which to return prices
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStockExchangeStockPrices} and HTTP response
     */
    this.getStockExchangePricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangePrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'date': opts['date'],
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
      var returnType = ApiResponseStockExchangeStockPrices;
      var endpoint = '/stock_exchanges/{identifier}/prices'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Stock Prices by Exchange
     * Returns end-of-day stock prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.date The date for which to return prices
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStockExchangeStockPrices}
     */
    this.getStockExchangePrices = function(identifier, opts) {
      return this.getStockExchangePricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Realtime Stock Prices by Exchange
     * Returns realtime stock prices for the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return realtime prices from the specified data source. If no source is specified, all sources are used.
     * @param {Boolean} opts.activeOnly Returns prices only from the most recent trading day.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStockExchangeRealtimeStockPrices} and HTTP response
     */
    this.getStockExchangeRealtimePricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangeRealtimePrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'source': opts['source'],
        'active_only': opts['activeOnly'],
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
      var returnType = ApiResponseStockExchangeRealtimeStockPrices;
      var endpoint = '/stock_exchanges/{identifier}/prices/realtime'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Realtime Stock Prices by Exchange
     * Returns realtime stock prices for the Stock Exchange with the given &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.source Return realtime prices from the specified data source. If no source is specified, all sources are used.
     * @param {Boolean} opts.activeOnly Returns prices only from the most recent trading day.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStockExchangeRealtimeStockPrices}
     */
    this.getStockExchangeRealtimePrices = function(identifier, opts) {
      return this.getStockExchangeRealtimePricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Securities by Exchange
     * Returns Securities traded on the Stock Exchange with &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStockExchangeSecurities} and HTTP response
     */
    this.getStockExchangeSecuritiesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangeSecurities");
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
      var returnType = ApiResponseStockExchangeSecurities;
      var endpoint = '/stock_exchanges/{identifier}/securities'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Securities by Exchange
     * Returns Securities traded on the Stock Exchange with &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStockExchangeSecurities}
     */
    this.getStockExchangeSecurities = function(identifier, opts) {
      return this.getStockExchangeSecuritiesWithHttpInfo(identifier, opts)
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
