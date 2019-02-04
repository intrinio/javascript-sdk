# intrinioSDK.CompanyApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCompanies**](CompanyApi.md#getAllCompanies) | **GET** /companies | All Companies
[**getAllCompanyNews**](CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | All News
[**getCompany**](CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Lookup Company
[**getCompanyDataPointNumber**](CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Data Point (Number) for Company
[**getCompanyDataPointText**](CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Data Point (Text) for Company
[**getCompanyFilings**](CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | All Filings by Company
[**getCompanyFundamentals**](CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | All Fundamentals by Company
[**getCompanyHistoricalData**](CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Historical Data for Company
[**getCompanyNews**](CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | All News by Company
[**getCompanySecurities**](CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | All Securities by Company
[**lookupCompanyFundamental**](CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental by Company
[**searchCompanies**](CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies


<a name="getAllCompanies"></a>
# **getAllCompanies**
> ApiResponseCompanies getAllCompanies(opts)

All Companies

Returns all Companies. When parameters are specified, returns matching companies.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var opts = { 
  'latestFilingDate': null, // Date | Last filing date
  'sic': "3350", // String | Standard Industrial Classification code
  'template': "industrial", // String | Template
  'sector': "Basic Materials", // String | Industry sector
  'industryCategory': "Metals & Mining", // String | Industry category
  'industryGroup': "Aluminum", // String | Industry group
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getAllCompanies(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latestFilingDate** | **Date**| Last filing date | [optional] 
 **sic** | **String**| Standard Industrial Classification code | [optional] 
 **template** | **String**| Template | [optional] 
 **sector** | **String**| Industry sector | [optional] 
 **industryCategory** | **String**| Industry category | [optional] 
 **industryGroup** | **String**| Industry group | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)

<a name="getAllCompanyNews"></a>
# **getAllCompanyNews**
> ApiResponseNews getAllCompanyNews(opts)

All News

Returns all News for all Companies

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getAllCompanyNews(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseNews**](ApiResponseNews.md)

<a name="getCompany"></a>
# **getCompany**
> Company getCompany(identifier)

Lookup Company

Returns the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)


companyAPI.getCompany(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 

### Return type

[**Company**](Company.md)

<a name="getCompanyDataPointNumber"></a>
# **getCompanyDataPointNumber**
> &#39;Number&#39; getCompanyDataPointNumber(identifier, tag)

Data Point (Number) for Company

Returns a numeric value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag


companyAPI.getCompanyDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag | 

### Return type

**&#39;Number&#39;**

<a name="getCompanyDataPointText"></a>
# **getCompanyDataPointText**
> &#39;String&#39; getCompanyDataPointText(identifier, tag)

Data Point (Text) for Company

Returns a text value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag


companyAPI.getCompanyDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag | 

### Return type

**&#39;String&#39;**

<a name="getCompanyFilings"></a>
# **getCompanyFilings**
> ApiResponseCompanyFilings getCompanyFilings(identifier, opts)

All Filings by Company

Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getCompanyFilings(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyFilings**](ApiResponseCompanyFilings.md)

<a name="getCompanyFundamentals"></a>
# **getCompanyFundamentals**
> ApiResponseCompanyFundamentals getCompanyFundamentals(identifier, opts)

All Fundamentals by Company

Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'filedAfter': null, // Date | Filed on or after this date
  'filedBefore': null, // Date | Filed on or before this date
  'reportedOnly': false, // Boolean | Only as-reported fundamentals
  'fiscalYear': 2017, // Number | Only for the given fiscal year
  'statementCode': null, // String | Only of the given statement code
  'type': null, // String | Only of the given type
  'startDate': null, // Date | Only on or after the given date
  'endDate': null, // Date | Only on or before the given date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getCompanyFundamentals(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **filedAfter** | **Date**| Filed on or after this date | [optional] 
 **filedBefore** | **Date**| Filed on or before this date | [optional] 
 **reportedOnly** | **Boolean**| Only as-reported fundamentals | [optional] 
 **fiscalYear** | **Number**| Only for the given fiscal year | [optional] 
 **statementCode** | **String**| Only of the given statement code | [optional] 
 **type** | **String**| Only of the given type | [optional] 
 **startDate** | **Date**| Only on or after the given date | [optional] 
 **endDate** | **Date**| Only on or before the given date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyFundamentals**](ApiResponseCompanyFundamentals.md)

<a name="getCompanyHistoricalData"></a>
# **getCompanyHistoricalData**
> ApiResponseCompanyHistoricalData getCompanyHistoricalData(identifier, tag, opts)

Historical Data for Company

Returns historical values for the given &#x60;tag&#x60; and the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data-tag

var opts = { 
  'frequency': "daily", // String | Return historical data in the given frequency
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getCompanyHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **tag** | **String**| An Intrinio data-tag | 
 **frequency** | **String**| Return historical data in the given frequency | [optional] [default to daily]
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyHistoricalData**](ApiResponseCompanyHistoricalData.md)

<a name="getCompanyNews"></a>
# **getCompanyNews**
> ApiResponseCompanyNews getCompanyNews(identifier, opts)

All News by Company

Returns news for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getCompanyNews(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyNews**](ApiResponseCompanyNews.md)

<a name="getCompanySecurities"></a>
# **getCompanySecurities**
> ApiResponseCompanySecurities getCompanySecurities(identifier, opts)

All Securities by Company

Returns Securities for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

companyAPI.getCompanySecurities(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanySecurities**](ApiResponseCompanySecurities.md)

<a name="lookupCompanyFundamental"></a>
# **lookupCompanyFundamental**
> Fundamental lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear)

Lookup Fundamental by Company

Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var statementCode = "income_statement"; // String | The statement code

var fiscalPeriod = "FY"; // String | The fiscal period

var fiscalYear = 2017; // Number | The fiscal year


companyAPI.lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear).then(function(data) {
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
 **fiscalPeriod** | **String**| The fiscal period | 
 **fiscalYear** | **Number**| The fiscal year | 

### Return type

[**Fundamental**](Fundamental.md)

<a name="searchCompanies"></a>
# **searchCompanies**
> ApiResponseCompaniesSearch searchCompanies(query, opts)

Search Companies

Searches for Companies matching the text &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var companyAPI = new intrinioSDK.CompanyApi();

var query = "Apple"; // String | Search parameters

var opts = { 
  'pageSize': 100 // Number | The number of results to return
};

companyAPI.searchCompanies(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search parameters | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseCompaniesSearch**](ApiResponseCompaniesSearch.md)

