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
    define(['ApiClient', 'model/ApiResponseReportedFinancials', 'model/ApiResponseStandardizedFinancials', 'model/ApiResponseStandardizedFinancialsDimensions', 'model/Fundamental'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseReportedFinancials'), require('../model/ApiResponseStandardizedFinancials'), require('../model/ApiResponseStandardizedFinancialsDimensions'), require('../model/Fundamental'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.FundamentalsApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseReportedFinancials, root.intrinioSDK.ApiResponseStandardizedFinancials, root.intrinioSDK.ApiResponseStandardizedFinancialsDimensions, root.intrinioSDK.Fundamental);
  }
}(this, function(ApiClient, ApiResponseReportedFinancials, ApiResponseStandardizedFinancials, ApiResponseStandardizedFinancialsDimensions, Fundamental) {
  'use strict';

  /**
   * Fundamentals service.
   * @module api/FundamentalsApi
   * @version 6.40.0
   */

  /**
   * Constructs a new FundamentalsApi. 
   * @alias module:api/FundamentalsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    const MAX_RETRY_MILLISECONDS = 60000;
    


    /**
     * Filter Fundamental
     * Returns fundamentals that meet the set of filters specified in parameters.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filedAfter Only include fundamentals that were filed on or after this date.
     * @param {Date} opts.filedBefore Only include fundamentals that were filed on or before this date.
     * @param {Boolean} opts.reportedOnly Only as-reported fundamentals
     * @param {Number} opts.fiscalYear Only for the given fiscal year
     * @param {module:model/String} opts.statementCode Only of the given statement code
     * @param {module:model/String} opts.type Only of the given type
     * @param {module:model/String} opts.fiscalPeriod The fiscal period
     * @param {Date} opts.startDate Only include fundamentals where covered period is on or after this date.
     * @param {Date} opts.endDate Only include fundamentals where covered period is on or before this date.
     * @param {Date} opts.updatedAfter Only include fundamentals where it was updated after this date.
     * @param {Date} opts.updatedBefore Only include fundamentals where it was updated before this date.
     * @param {module:model/String} opts.template The financial statement template used by Intrinio to standardize the as reported data
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fundamental} and HTTP response
     */
    this.filterFundamentalWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filed_after': opts['filedAfter'],
        'filed_before': opts['filedBefore'],
        'reported_only': opts['reportedOnly'],
        'fiscal_year': opts['fiscalYear'],
        'statement_code': opts['statementCode'],
        'type': opts['type'],
        'fiscal_period': opts['fiscalPeriod'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'updated_after': opts['updatedAfter'],
        'updated_before': opts['updatedBefore'],
        'template': opts['template'],
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
      var returnType = Fundamental;
      var endpoint = '/fundamentals'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Filter Fundamental
     * Returns fundamentals that meet the set of filters specified in parameters.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filedAfter Only include fundamentals that were filed on or after this date.
     * @param {Date} opts.filedBefore Only include fundamentals that were filed on or before this date.
     * @param {Boolean} opts.reportedOnly Only as-reported fundamentals
     * @param {Number} opts.fiscalYear Only for the given fiscal year
     * @param {module:model/String} opts.statementCode Only of the given statement code
     * @param {module:model/String} opts.type Only of the given type
     * @param {module:model/String} opts.fiscalPeriod The fiscal period
     * @param {Date} opts.startDate Only include fundamentals where covered period is on or after this date.
     * @param {Date} opts.endDate Only include fundamentals where covered period is on or before this date.
     * @param {Date} opts.updatedAfter Only include fundamentals where it was updated after this date.
     * @param {Date} opts.updatedBefore Only include fundamentals where it was updated before this date.
     * @param {module:model/String} opts.template The financial statement template used by Intrinio to standardize the as reported data
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fundamental}
     */
    this.filterFundamental = function(opts) {
      return this.filterFundamentalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Fundamental by ID
     * Returns a specific fundamental associated with a particular unique fundamental ID. Useful for pulling reference data for a specific fundamental.
     * @param {String} id The Intrinio ID for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fundamental} and HTTP response
     */
    this.getFundamentalByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundamentalById");
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
      var returnType = Fundamental;
      var endpoint = '/fundamentals/{id}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Fundamental by ID
     * Returns a specific fundamental associated with a particular unique fundamental ID. Useful for pulling reference data for a specific fundamental.
     * @param {String} id The Intrinio ID for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fundamental}
     */
    this.getFundamentalById = function(id) {
      return this.getFundamentalByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Reported Financials
     * Returns as-reported financial statement data for income statement, balance sheet, and cash flow statement. Data for income statement and cash flow statement is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseReportedFinancials} and HTTP response
     */
    this.getFundamentalReportedFinancialsWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundamentalReportedFinancials");
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
      var returnType = ApiResponseReportedFinancials;
      var endpoint = '/fundamentals/{id}/reported_financials'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Reported Financials
     * Returns as-reported financial statement data for income statement, balance sheet, and cash flow statement. Data for income statement and cash flow statement is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseReportedFinancials}
     */
    this.getFundamentalReportedFinancials = function(id) {
      return this.getFundamentalReportedFinancialsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Standardized Financials
     * Returns standardized financial statement data for income statement, balance sheet, cash flow statement and over 100 associated calculations for a given company. Data for income statement, cash flow statement, and calculations is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStandardizedFinancials} and HTTP response
     */
    this.getFundamentalStandardizedFinancialsWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundamentalStandardizedFinancials");
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
      var returnType = ApiResponseStandardizedFinancials;
      var endpoint = '/fundamentals/{id}/standardized_financials'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Standardized Financials
     * Returns standardized financial statement data for income statement, balance sheet, cash flow statement and over 100 associated calculations for a given company. Data for income statement, cash flow statement, and calculations is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStandardizedFinancials}
     */
    this.getFundamentalStandardizedFinancials = function(id) {
      return this.getFundamentalStandardizedFinancialsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Standardized Financials Dimensions
     * Returns as reported dimensionality of a data tag
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseStandardizedFinancialsDimensions} and HTTP response
     */
    this.getFundamentalStandardizedFinancialsDimensionsWithHttpInfo = function(id, tag) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundamentalStandardizedFinancialsDimensions");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getFundamentalStandardizedFinancialsDimensions");
      }


      var pathParams = {
        'id': id,
        'tag': tag
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
      var returnType = ApiResponseStandardizedFinancialsDimensions;
      var endpoint = '/fundamentals/{id}/standardized_financials/dimensions/{tag}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Standardized Financials Dimensions
     * Returns as reported dimensionality of a data tag
     * @param {String} id The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseStandardizedFinancialsDimensions}
     */
    this.getFundamentalStandardizedFinancialsDimensions = function(id, tag) {
      return this.getFundamentalStandardizedFinancialsDimensionsWithHttpInfo(id, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }



    /**
     * Lookup Fundamental
     * Returns a specific fundamental with unique fundamental ID associated with a particular company, year, period and statement. Useful for pulling the unique fundamental ID and reference data for a specific fundamental.
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} statementCode The statement code
     * @param {Number} fiscalYear The fiscal year
     * @param {module:model/String} fiscalPeriod The fiscal period
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fundamental} and HTTP response
     */
    this.lookupFundamentalWithHttpInfo = function(identifier, statementCode, fiscalYear, fiscalPeriod) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling lookupFundamental");
      }

      // verify the required parameter 'statementCode' is set
      if (statementCode === undefined || statementCode === null) {
        throw new Error("Missing the required parameter 'statementCode' when calling lookupFundamental");
      }

      // verify the required parameter 'fiscalYear' is set
      if (fiscalYear === undefined || fiscalYear === null) {
        throw new Error("Missing the required parameter 'fiscalYear' when calling lookupFundamental");
      }

      // verify the required parameter 'fiscalPeriod' is set
      if (fiscalPeriod === undefined || fiscalPeriod === null) {
        throw new Error("Missing the required parameter 'fiscalPeriod' when calling lookupFundamental");
      }


      var pathParams = {
        'identifier': identifier,
        'statement_code': statementCode,
        'fiscal_year': fiscalYear,
        'fiscal_period': fiscalPeriod
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
      var returnType = Fundamental;
      var endpoint = '/fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period}'
      var method = 'GET'

      let requestParameters = { endpoint, method, pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType }
      
      return this.makeApiCall(requestParameters)
    }

    /**
     * Lookup Fundamental
     * Returns a specific fundamental with unique fundamental ID associated with a particular company, year, period and statement. Useful for pulling the unique fundamental ID and reference data for a specific fundamental.
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} statementCode The statement code
     * @param {Number} fiscalYear The fiscal year
     * @param {module:model/String} fiscalPeriod The fiscal period
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fundamental}
     */
    this.lookupFundamental = function(identifier, statementCode, fiscalYear, fiscalPeriod) {
      return this.lookupFundamentalWithHttpInfo(identifier, statementCode, fiscalYear, fiscalPeriod)
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
