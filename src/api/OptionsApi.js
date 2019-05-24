/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.6.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseOptionPrices', 'model/ApiResponseOptions', 'model/ApiResponseOptionsChain', 'model/ApiResponseOptionsExpirations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOptionPrices'), require('../model/ApiResponseOptions'), require('../model/ApiResponseOptionsChain'), require('../model/ApiResponseOptionsExpirations'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionsApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseOptionPrices, root.intrinioSDK.ApiResponseOptions, root.intrinioSDK.ApiResponseOptionsChain, root.intrinioSDK.ApiResponseOptionsExpirations);
  }
}(this, function(ApiClient, ApiResponseOptionPrices, ApiResponseOptions, ApiResponseOptionsChain, ApiResponseOptionsExpirations) {
  'use strict';

  /**
   * Options service.
   * @module api/OptionsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new OptionsApi. 
   * @alias module:api/OptionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Options
     * Returns the master list of option contracts for a given symbol.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The option contract type.
     * @param {Number} opts.strike The strike price of the option contract. This will return options contracts with strike price equal to this price.
     * @param {Number} opts.strikeGreaterThan The strike price of the option contract. This will return options contracts with strike prices greater than this price.
     * @param {Number} opts.strikeLessThan The strike price of the option contract. This will return options contracts with strike prices less than this price.
     * @param {String} opts.expiration The expiration date of the option contract. This will return options contracts with expiration dates on this date.
     * @param {String} opts.expirationAfter The expiration date of the option contract. This will return options contracts with expiration dates after this date.
     * @param {String} opts.expirationBefore The expiration date of the option contract. This will return options contracts with expiration dates before this date.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOptions} and HTTP response
     */
    this.getOptionsWithHttpInfo = function(symbol, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getOptions");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
        'type': opts['type'],
        'strike': opts['strike'],
        'strike_greater_than': opts['strikeGreaterThan'],
        'strike_less_than': opts['strikeLessThan'],
        'expiration': opts['expiration'],
        'expiration_after': opts['expirationAfter'],
        'expiration_before': opts['expirationBefore'],
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
      var returnType = ApiResponseOptions;

      return this.apiClient.callApi(
        '/options/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Options
     * Returns the master list of option contracts for a given symbol.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The option contract type.
     * @param {Number} opts.strike The strike price of the option contract. This will return options contracts with strike price equal to this price.
     * @param {Number} opts.strikeGreaterThan The strike price of the option contract. This will return options contracts with strike prices greater than this price.
     * @param {Number} opts.strikeLessThan The strike price of the option contract. This will return options contracts with strike prices less than this price.
     * @param {String} opts.expiration The expiration date of the option contract. This will return options contracts with expiration dates on this date.
     * @param {String} opts.expirationAfter The expiration date of the option contract. This will return options contracts with expiration dates after this date.
     * @param {String} opts.expirationBefore The expiration date of the option contract. This will return options contracts with expiration dates before this date.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOptions}
     */
    this.getOptions = function(symbol, opts) {
      return this.getOptionsWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Options Chain
     * Returns all options contracts and their prices for the given symbol and expiration date.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {String} expiration The expiration date of the options contract
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The option contract type.
     * @param {Number} opts.strike The strike price of the option contract. This will return options contracts with strike price equal to this price.
     * @param {Number} opts.strikeGreaterThan The strike price of the option contract. This will return options contracts with strike prices greater than this price.
     * @param {Number} opts.strikeLessThan The strike price of the option contract. This will return options contracts with strike prices less than this price.
     * @param {module:model/String} opts.moneyness The moneyness of the options contracts to return. &#39;all&#39; will return all options contracts. &#39;in_the_money&#39; will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). &#39;out_of_they_money&#39; will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). &#39;near_the_money&#39; will return options contracts that are $0.50 or less away from being in the money.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOptionsChain} and HTTP response
     */
    this.getOptionsChainWithHttpInfo = function(symbol, expiration, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getOptionsChain");
      }

      // verify the required parameter 'expiration' is set
      if (expiration === undefined || expiration === null) {
        throw new Error("Missing the required parameter 'expiration' when calling getOptionsChain");
      }


      var pathParams = {
        'symbol': symbol,
        'expiration': expiration
      };
      var queryParams = {
        'type': opts['type'],
        'strike': opts['strike'],
        'strike_greater_than': opts['strikeGreaterThan'],
        'strike_less_than': opts['strikeLessThan'],
        'moneyness': opts['moneyness'],
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
      var returnType = ApiResponseOptionsChain;

      return this.apiClient.callApi(
        '/options/chain/{symbol}/{expiration}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Options Chain
     * Returns all options contracts and their prices for the given symbol and expiration date.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {String} expiration The expiration date of the options contract
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The option contract type.
     * @param {Number} opts.strike The strike price of the option contract. This will return options contracts with strike price equal to this price.
     * @param {Number} opts.strikeGreaterThan The strike price of the option contract. This will return options contracts with strike prices greater than this price.
     * @param {Number} opts.strikeLessThan The strike price of the option contract. This will return options contracts with strike prices less than this price.
     * @param {module:model/String} opts.moneyness The moneyness of the options contracts to return. &#39;all&#39; will return all options contracts. &#39;in_the_money&#39; will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). &#39;out_of_they_money&#39; will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). &#39;near_the_money&#39; will return options contracts that are $0.50 or less away from being in the money.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOptionsChain}
     */
    this.getOptionsChain = function(symbol, expiration, opts) {
      return this.getOptionsChainWithHttpInfo(symbol, expiration, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Options Expirations
     * Returns all option contract expiration dates for a given symbol.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {Object} opts Optional parameters
     * @param {String} opts.after Return option contract expiration dates after this date.
     * @param {String} opts.before Return option contract expiration dates before this date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOptionsExpirations} and HTTP response
     */
    this.getOptionsExpirationsWithHttpInfo = function(symbol, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getOptionsExpirations");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
        'after': opts['after'],
        'before': opts['before'],
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
      var returnType = ApiResponseOptionsExpirations;

      return this.apiClient.callApi(
        '/options/expirations/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Options Expirations
     * Returns all option contract expiration dates for a given symbol.
     * @param {String} symbol The option symbol, corresponding to the underlying security.
     * @param {Object} opts Optional parameters
     * @param {String} opts.after Return option contract expiration dates after this date.
     * @param {String} opts.before Return option contract expiration dates before this date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOptionsExpirations}
     */
    this.getOptionsExpirations = function(symbol, opts) {
      return this.getOptionsExpirationsWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Option Prices
     * Returns all option prices for a given option contract identifier.
     * @param {String} identifier The Intrinio ID or code of the options contract to request prices for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Return option contract prices on or after this date.
     * @param {String} opts.endDate Return option contract prices on or before this date.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOptionPrices} and HTTP response
     */
    this.getOptionsPricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getOptionsPrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
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
      var returnType = ApiResponseOptionPrices;

      return this.apiClient.callApi(
        '/options/prices/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Option Prices
     * Returns all option prices for a given option contract identifier.
     * @param {String} identifier The Intrinio ID or code of the options contract to request prices for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Return option contract prices on or after this date.
     * @param {String} opts.endDate Return option contract prices on or before this date.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOptionPrices}
     */
    this.getOptionsPrices = function(identifier, opts) {
      return this.getOptionsPricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
