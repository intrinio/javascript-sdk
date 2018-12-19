# intrinio-sdk.FundamentalsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFundamentalById**](FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Get a Fundamental by ID
[**getFundamentalReportedFinancials**](FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Get Reported Financials for a Fundamental
[**getFundamentalStandardizedFinancials**](FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Get Standardized Financials for a Fundamental
[**lookupFundamental**](FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental


<a name="getFundamentalById"></a>
# **getFundamentalById**
> Fundamental getFundamentalById(id)

Get a Fundamental by ID

Retrieves detailed fundamental data for the given &#x60;fundamental_id&#x60;.

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var fundamentals_api = new intrinio-sdk.FundamentalsApi();

var id = "fun_ge9LlE"; // String | The Intrinio ID for the Fundamental


fundamentals_api.getFundamentalById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID for the Fundamental | 

### Return type

[**Fundamental**](Fundamental.md)

<a name="getFundamentalReportedFinancials"></a>
# **getFundamentalReportedFinancials**
> ApiResponseReportedFinancials getFundamentalReportedFinancials(id)

Get Reported Financials for a Fundamental

Returns the As-Reported Financials directly from the financial statements of the XBRL filings from the company

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var fundamentals_api = new intrinio-sdk.FundamentalsApi();

var id = "fun_ge9LlE"; // String | The Intrinio ID for the Fundamental


fundamentals_api.getFundamentalReportedFinancials(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID for the Fundamental | 

### Return type

[**ApiResponseReportedFinancials**](ApiResponseReportedFinancials.md)

<a name="getFundamentalStandardizedFinancials"></a>
# **getFundamentalStandardizedFinancials**
> ApiResponseStandardizedFinancials getFundamentalStandardizedFinancials(id)

Get Standardized Financials for a Fundamental

Returns professional-grade historical financial data. This data is standardized, cleansed and verified to ensure the highest quality data sourced directly from the XBRL financial statements. The primary purpose of standardized financials are to facilitate comparability across a single company’s fundamentals and across all companies fundamentals. For example, it is possible to compare total revenues between two companies as of a certain point in time, or within a single company across multiple time periods. This is not possible using the as reported financial statements because of the inherent complexity of reporting standards.

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var fundamentals_api = new intrinio-sdk.FundamentalsApi();

var id = "fun_ge9LlE"; // String | The Intrinio ID for the Fundamental


fundamentals_api.getFundamentalStandardizedFinancials(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID for the Fundamental | 

### Return type

[**ApiResponseStandardizedFinancials**](ApiResponseStandardizedFinancials.md)

<a name="lookupFundamental"></a>
# **lookupFundamental**
> Fundamental lookupFundamental(identifier, statementCode, fiscalYear, fiscalPeriod)

Lookup a Fundamental

Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var fundamentals_api = new intrinio-sdk.FundamentalsApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var statementCode = "income_statement"; // String | The statement code

var fiscalYear = 2017; // Number | The fiscal year

var fiscalPeriod = "FY"; // String | The fiscal period


fundamentals_api.lookupFundamental(identifier, statementCode, fiscalYear, fiscalPeriod).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **statementCode** | **String**| The statement code | 
 **fiscalYear** | **Number**| The fiscal year | 
 **fiscalPeriod** | **String**| The fiscal period | 

### Return type

[**Fundamental**](Fundamental.md)

