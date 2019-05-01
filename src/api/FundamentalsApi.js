/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.6.0
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
    define(['ApiClient', 'model/ApiResponseReportedFinancials', 'model/ApiResponseStandardizedFinancials', 'model/Fundamental'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseReportedFinancials'), require('../model/ApiResponseStandardizedFinancials'), require('../model/Fundamental'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.FundamentalsApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseReportedFinancials, root.intrinioSDK.ApiResponseStandardizedFinancials, root.intrinioSDK.Fundamental);
  }
}(this, function(ApiClient, ApiResponseReportedFinancials, ApiResponseStandardizedFinancials, Fundamental) {
  'use strict';

  /**
   * Fundamentals service.
   * @module api/FundamentalsApi
   * @version 2.3.0
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



    /**
     * Fundamental by ID
     * Returns detailed fundamental data for the given &#x60;id&#x60;.
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

      return this.apiClient.callApi(
        '/fundamentals/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fundamental by ID
     * Returns detailed fundamental data for the given &#x60;id&#x60;.
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
     * Returns the As-Reported Financials directly from the financial statements of the XBRL filings from the company
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

      return this.apiClient.callApi(
        '/fundamentals/{id}/reported_financials', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reported Financials
     * Returns the As-Reported Financials directly from the financial statements of the XBRL filings from the company
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
     * Returns professional-grade historical financial data. This data is standardized, cleansed and verified to ensure the highest quality data sourced directly from the XBRL financial statements. The primary purpose of standardized financials are to facilitate comparability across a single company’s fundamentals and across all companies fundamentals. For example, it is possible to compare total revenues between two companies as of a certain point in time, or within a single company across multiple time periods. This is not possible using the as reported financial statements because of the inherent complexity of reporting standards.
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

      return this.apiClient.callApi(
        '/fundamentals/{id}/standardized_financials', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Standardized Financials
     * Returns professional-grade historical financial data. This data is standardized, cleansed and verified to ensure the highest quality data sourced directly from the XBRL financial statements. The primary purpose of standardized financials are to facilitate comparability across a single company’s fundamentals and across all companies fundamentals. For example, it is possible to compare total revenues between two companies as of a certain point in time, or within a single company across multiple time periods. This is not possible using the as reported financial statements because of the inherent complexity of reporting standards.
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
     * Lookup Fundamental
     * Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters
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

      return this.apiClient.callApi(
        '/fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup Fundamental
     * Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters
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
  };

  return exports;
}));
