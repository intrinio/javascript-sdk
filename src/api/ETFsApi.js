/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.2
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
   * @version 5.6.2
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



    /**
     * All ETFs
     * Returns a list of Exchange Traded Funds (ETFs) sourced from FirstBridge
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

      return this.apiClient.callApi(
        '/etfs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All ETFs
     * Returns a list of Exchange Traded Funds (ETFs) sourced from FirstBridge
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
     * Returns the Exchange Traded Fund (ETF) with the given identifier
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

      return this.apiClient.callApi(
        '/etfs/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup ETF
     * Returns the Exchange Traded Fund (ETF) with the given identifier
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
     * Returns analytics for the Exchange Traded Fund (ETF) including volume, market cap, 52 week high, and 52 week low
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

      return this.apiClient.callApi(
        '/etfs/{identifier}/analytics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ETF Analytics
     * Returns analytics for the Exchange Traded Fund (ETF) including volume, market cap, 52 week high, and 52 week low
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
     * Returns the holdings sorted by weight descending and the Exchange Traded Fund (ETF) summary
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

      return this.apiClient.callApi(
        '/etfs/{identifier}/holdings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ETF Holdings
     * Returns the holdings sorted by weight descending and the Exchange Traded Fund (ETF) summary
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
     * Returns daily stats for the Exchange Traded Fund (ETF) including net asset value, beta vs spy, returns, and volatility
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

      return this.apiClient.callApi(
        '/etfs/{identifier}/stats', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Exchange Traded Fund (ETF) stats
     * Returns daily stats for the Exchange Traded Fund (ETF) including net asset value, beta vs spy, returns, and volatility
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
     * Searches for Exchange Traded Funds (ETFs) matching the text &#x60;query&#x60;
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseETFs} and HTTP response
     */
    this.searchEtfsWithHttpInfo = function(query) {
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchEtfs");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
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

      return this.apiClient.callApi(
        '/etfs/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search ETFs
     * Searches for Exchange Traded Funds (ETFs) matching the text &#x60;query&#x60;
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseETFs}
     */
    this.searchEtfs = function(query) {
      return this.searchEtfsWithHttpInfo(query)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
