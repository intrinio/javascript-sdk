/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.48.1
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
    define(['ApiClient', 'model/ApiResponseOwnerInsiderTransactionFilings', 'model/ApiResponseOwnerInstitutionalHoldings', 'model/ApiResponseOwners', 'model/Owner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOwnerInsiderTransactionFilings'), require('../model/ApiResponseOwnerInstitutionalHoldings'), require('../model/ApiResponseOwners'), require('../model/Owner'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OwnersApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseOwnerInsiderTransactionFilings, root.intrinioSDK.ApiResponseOwnerInstitutionalHoldings, root.intrinioSDK.ApiResponseOwners, root.intrinioSDK.Owner);
  }
}(this, function(ApiClient, ApiResponseOwnerInsiderTransactionFilings, ApiResponseOwnerInstitutionalHoldings, ApiResponseOwners, Owner) {
  'use strict';

  /**
   * Owners service.
   * @module api/OwnersApi
   * @version 6.26.5
   */

  /**
   * Constructs a new OwnersApi. 
   * @alias module:api/OwnersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * All Owners
     * Returns all owners and information for all insider and institutional owners of securities covered by Intrinio.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.institutional Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOwners} and HTTP response
     */
    this.getAllOwnersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'institutional': opts['institutional'],
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
      var returnType = ApiResponseOwners;
      var endpoint = '/owners'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * All Owners
     * Returns all owners and information for all insider and institutional owners of securities covered by Intrinio.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.institutional Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOwners}
     */
    this.getAllOwners = function(opts) {
      return this.getAllOwnersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Owner by ID
     * Returns the Owner with the given ID
     * @param {String} identifier An Intrinio ID or CIK of an Owner
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Owner} and HTTP response
     */
    this.getOwnerByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getOwnerById");
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
      var returnType = Owner;
      var endpoint = '/owners/{identifier}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Owner by ID
     * Returns the Owner with the given ID
     * @param {String} identifier An Intrinio ID or CIK of an Owner
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Owner}
     */
    this.getOwnerById = function(identifier) {
      return this.getOwnerByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Insider Transaction Filings by Owner
     * Returns a list of all insider transaction filings by an owner in as many companies as the owner may be considered an insider. Criteria for being an insider include being a director, officer, or 10%+ owner in the company. Transactions are detailed for both non-derivative and derivative transactions by the insider.
     * @param {String} identifier The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return Owner&#39;s insider transaction filings on or after this date
     * @param {Date} opts.endDate Return Owner&#39;s insider transaction filings on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOwnerInsiderTransactionFilings} and HTTP response
     */
    this.insiderTransactionFilingsByOwnerWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling insiderTransactionFilingsByOwner");
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
      var returnType = ApiResponseOwnerInsiderTransactionFilings;
      var endpoint = '/owners/{identifier}/insider_transaction_filings'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Insider Transaction Filings by Owner
     * Returns a list of all insider transaction filings by an owner in as many companies as the owner may be considered an insider. Criteria for being an insider include being a director, officer, or 10%+ owner in the company. Transactions are detailed for both non-derivative and derivative transactions by the insider.
     * @param {String} identifier The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return Owner&#39;s insider transaction filings on or after this date
     * @param {Date} opts.endDate Return Owner&#39;s insider transaction filings on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOwnerInsiderTransactionFilings}
     */
    this.insiderTransactionFilingsByOwner = function(identifier, opts) {
      return this.insiderTransactionFilingsByOwnerWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Institutional Holdings by Owner
     * Returns a list of all ownership interests and the value of their interests by a single institutional owner.
     * @param {String} identifier The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {Date} opts.asOfDate Return only holdings filed before this date.
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOwnerInstitutionalHoldings} and HTTP response
     */
    this.institutionalHoldingsByOwnerWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling institutionalHoldingsByOwner");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'page_size': opts['pageSize'],
        'as_of_date': opts['asOfDate'],
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
      var returnType = ApiResponseOwnerInstitutionalHoldings;
      var endpoint = '/owners/{identifier}/institutional_holdings'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Institutional Holdings by Owner
     * Returns a list of all ownership interests and the value of their interests by a single institutional owner.
     * @param {String} identifier The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {Date} opts.asOfDate Return only holdings filed before this date.
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOwnerInstitutionalHoldings}
     */
    this.institutionalHoldingsByOwner = function(identifier, opts) {
      return this.institutionalHoldingsByOwnerWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Search Owners
     * Searches for Owners matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.institutional Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseOwners} and HTTP response
     */
    this.searchOwnersWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchOwners");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'institutional': opts['institutional'],
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
      var returnType = ApiResponseOwners;
      var endpoint = '/owners/search'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Search Owners
     * Searches for Owners matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.institutional Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both.
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseOwners}
     */
    this.searchOwners = function(query, opts) {
      return this.searchOwnersWithHttpInfo(query, opts)
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
