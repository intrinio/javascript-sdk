# intrinioSDK.FundamentalsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFundamentalById**](FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Fundamental by ID
[**getFundamentalReportedFinancials**](FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Reported Financials
[**getFundamentalStandardizedFinancials**](FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Standardized Financials
[**lookupFundamental**](FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental



[//]: # (START_OPERATION)

[//]: # (CLASS:FundamentalsApi)

[//]: # (METHOD:getFundamentalById)

[//]: # (RETURN_TYPE:Fundamental)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Fundamental.md)

[//]: # (OPERATION:getFundamentalById_v2)

[//]: # (ENDPOINT:/fundamentals/{id})

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#getFundamentalById)

<a name="getFundamentalById"></a>
## **getFundamentalById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFundamentalById_v2)

[//]: # (START_OVERVIEW)

> Fundamental getFundamentalById(id)

#### Fundamental by ID


Returns detailed fundamental data for the given &#x60;id&#x60;.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var id = "fun_ge9LlE";

fundamentals.getFundamentalById(id).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | String| The Intrinio ID for the Fundamental |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Fundamental**](Fundamental.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FundamentalsApi)

[//]: # (METHOD:getFundamentalReportedFinancials)

[//]: # (RETURN_TYPE:ApiResponseReportedFinancials)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseReportedFinancials.md)

[//]: # (OPERATION:getFundamentalReportedFinancials_v2)

[//]: # (ENDPOINT:/fundamentals/{id}/reported_financials)

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#getFundamentalReportedFinancials)

<a name="getFundamentalReportedFinancials"></a>
## **getFundamentalReportedFinancials**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFundamentalReportedFinancials_v2)

[//]: # (START_OVERVIEW)

> ApiResponseReportedFinancials getFundamentalReportedFinancials(id)

#### Reported Financials


Returns the As-Reported Financials directly from the financial statements of the XBRL filings from the company

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var id = "AAPL-income_statement-2018-Q1";

fundamentals.getFundamentalReportedFinancials(id).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | String| The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseReportedFinancials**](ApiResponseReportedFinancials.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FundamentalsApi)

[//]: # (METHOD:getFundamentalStandardizedFinancials)

[//]: # (RETURN_TYPE:ApiResponseStandardizedFinancials)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStandardizedFinancials.md)

[//]: # (OPERATION:getFundamentalStandardizedFinancials_v2)

[//]: # (ENDPOINT:/fundamentals/{id}/standardized_financials)

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#getFundamentalStandardizedFinancials)

<a name="getFundamentalStandardizedFinancials"></a>
## **getFundamentalStandardizedFinancials**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFundamentalStandardizedFinancials_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStandardizedFinancials getFundamentalStandardizedFinancials(id)

#### Standardized Financials


Returns professional-grade historical financial data. This data is standardized, cleansed and verified to ensure the highest quality data sourced directly from the XBRL financial statements. The primary purpose of standardized financials are to facilitate comparability across a single company’s fundamentals and across all companies&#39; fundamentals.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var id = "AAPL-income_statement-2018-Q1";

fundamentals.getFundamentalStandardizedFinancials(id).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | String| The Intrinio ID or lookup code (ticker-statement-year-period) for the Fundamental |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStandardizedFinancials**](ApiResponseStandardizedFinancials.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FundamentalsApi)

[//]: # (METHOD:lookupFundamental)

[//]: # (RETURN_TYPE:Fundamental)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Fundamental.md)

[//]: # (OPERATION:lookupFundamental_v2)

[//]: # (ENDPOINT:/fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period})

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#lookupFundamental)

<a name="lookupFundamental"></a>
## **lookupFundamental**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/lookupFundamental_v2)

[//]: # (START_OVERVIEW)

> Fundamental lookupFundamental(identifier, statementCode, fiscalYear, fiscalPeriod)

#### Lookup Fundamental


Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var identifier = "AAPL";
var statementCode = "income_statement";
var fiscalYear = 2017;
var fiscalPeriod = "FY";

fundamentals.lookupFundamental(identifier, statementCode, fiscalYear, fiscalPeriod).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | String| A Company identifier (Ticker, CIK, LEI, Intrinio ID) |  &nbsp;
 **statementCode** | String| The statement code |  &nbsp;
 **fiscalYear** | Number| The fiscal year |  &nbsp;
 **fiscalPeriod** | String| The fiscal period |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Fundamental**](Fundamental.md)



[//]: # (END_OPERATION)

