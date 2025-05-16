# intrinioSDK.FundamentalsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterFundamental**](FundamentalsApi.md#filterFundamental) | **GET** /fundamentals | Filter Fundamental
[**getFundamentalById**](FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Fundamental by ID
[**getFundamentalReportedFinancials**](FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Reported Financials
[**getFundamentalStandardizedFinancials**](FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Standardized Financials
[**getFundamentalStandardizedFinancialsDimensions**](FundamentalsApi.md#getFundamentalStandardizedFinancialsDimensions) | **GET** /fundamentals/{id}/standardized_financials/dimensions/{tag} | Standardized Financials Dimensions
[**lookupFundamental**](FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental



[//]: # (START_OPERATION)

[//]: # (CLASS:FundamentalsApi)

[//]: # (METHOD:filterFundamental)

[//]: # (RETURN_TYPE:Fundamental)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Fundamental.md)

[//]: # (OPERATION:filterFundamental_v2)

[//]: # (ENDPOINT:/fundamentals)

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#filterFundamental)

<a name="filterFundamental"></a>
## **filterFundamental**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/filterFundamental_v2)

[//]: # (START_OVERVIEW)

> Fundamental filterFundamental(opts)

#### Filter Fundamental


Returns fundamentals that meet the set of filters specified in parameters.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var opts = { 
  'filedAfter': new Date("2022-01-01"),
  'filedBefore': new Date("2022-12-01"),
  'reportedOnly': false,
  'fiscalYear': 2017,
  'statementCode': null,
  'type': "false",
  'fiscalPeriod': "FY",
  'startDate': new Date("2022-01-01"),
  'endDate': new Date("2022-12-01"),
  'updatedAfter': new Date("2022-12-01"),
  'updatedBefore': new Date("2022-12-01"),
  'template': "indu",
  'nextPage': null
};

fundamentals.filterFundamental(opts).then(function(data) {
  data = JSON.stringify(data, null, 2)
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
 **filedAfter** | Date| Only include fundamentals that were filed on or after this date. | [optional]  &nbsp;
 **filedBefore** | Date| Only include fundamentals that were filed on or before this date. | [optional]  &nbsp;
 **reportedOnly** | Boolean| Only as-reported fundamentals | [optional]  &nbsp;
 **fiscalYear** | Number| Only for the given fiscal year | [optional]  &nbsp;
 **statementCode** | String| Only of the given statement code | [optional]  &nbsp;
 **type** | String| Only of the given type | [optional]  &nbsp;
 **fiscalPeriod** | String| The fiscal period | [optional]  &nbsp;
 **startDate** | Date| Only include fundamentals where covered period is on or after this date. | [optional]  &nbsp;
 **endDate** | Date| Only include fundamentals where covered period is on or before this date. | [optional]  &nbsp;
 **updatedAfter** | Date| Only include fundamentals where it was updated after this date. | [optional]  &nbsp;
 **updatedBefore** | Date| Only include fundamentals where it was updated before this date. | [optional]  &nbsp;
 **template** | String| The financial statement template used by Intrinio to standardize the as reported data | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Fundamental**](Fundamental.md)



[//]: # (END_OPERATION)


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


Returns a specific fundamental associated with a particular unique fundamental ID. Useful for pulling reference data for a specific fundamental.

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
  data = JSON.stringify(data, null, 2)
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


Returns as-reported financial statement data for income statement, balance sheet, and cash flow statement. Data for income statement and cash flow statement is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.

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
  data = JSON.stringify(data, null, 2)
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


Returns standardized financial statement data for income statement, balance sheet, cash flow statement and over 100 associated calculations for a given company. Data for income statement, cash flow statement, and calculations is available on a FY, QTR (Q1, Q2, Q3, Q4), TTM (Q1TTM, Q2TTM, Q3TTM), and YTD (Q2YTD, Q3YTD) basis. Data for the balance sheet is available on a FY or QTR (Q1, Q2, Q3, Q4) basis only due its point-in-time nature.

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
  data = JSON.stringify(data, null, 2)
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

[//]: # (METHOD:getFundamentalStandardizedFinancialsDimensions)

[//]: # (RETURN_TYPE:ApiResponseStandardizedFinancialsDimensions)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStandardizedFinancialsDimensions.md)

[//]: # (OPERATION:getFundamentalStandardizedFinancialsDimensions_v2)

[//]: # (ENDPOINT:/fundamentals/{id}/standardized_financials/dimensions/{tag})

[//]: # (DOCUMENT_LINK:FundamentalsApi.md#getFundamentalStandardizedFinancialsDimensions)

<a name="getFundamentalStandardizedFinancialsDimensions"></a>
## **getFundamentalStandardizedFinancialsDimensions**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFundamentalStandardizedFinancialsDimensions_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStandardizedFinancialsDimensions getFundamentalStandardizedFinancialsDimensions(id, tag)

#### Standardized Financials Dimensions


Returns as reported dimensionality of a data tag

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var fundamentals = new intrinioSDK.FundamentalsApi();

var id = "AAPL-income_statement-2020-FY";
var tag = "$$v2_data_point_item_text_default$$";


fundamentals.getFundamentalStandardizedFinancialsDimensions(id, tag).then(function(data) {
  data = JSON.stringify(data, null, 2)
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
 **tag** | String| $$v2_data_point_item_description$$ |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStandardizedFinancialsDimensions**](ApiResponseStandardizedFinancialsDimensions.md)



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


Returns a specific fundamental with unique fundamental ID associated with a particular company, year, period and statement. Useful for pulling the unique fundamental ID and reference data for a specific fundamental.

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
  data = JSON.stringify(data, null, 2)
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

