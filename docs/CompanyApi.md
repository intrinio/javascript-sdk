# intrinioSDK.CompanyApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterCompanies**](CompanyApi.md#filterCompanies) | **GET** /companies/filter | Filter Companies
[**filterCompanyFundamentals**](CompanyApi.md#filterCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals/filter | Filter Fundamentals for a Company
[**getAllCompanies**](CompanyApi.md#getAllCompanies) | **GET** /companies | Get All Companies
[**getAllCompanyNews**](CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | Get All Company News
[**getCompany**](CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Get a Company by ID
[**getCompanyDataPointNumber**](CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Get Company Data Point (Number)
[**getCompanyDataPointText**](CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Get Company Data Point (Text)
[**getCompanyFilings**](CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | Get Filings for a Company
[**getCompanyFundamentals**](CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | Get All Fundamentals for a Company
[**getCompanyHistoricalData**](CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Get Company Historical Data
[**getCompanyNews**](CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | Get News for a Company
[**getCompanySecurities**](CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | Get Securities by Company
[**lookupCompanyFundamental**](CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental for a Company
[**searchCompanies**](CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies


<a name="filterCompanies"></a>
# **filterCompanies**
> ApiResponseCompanies filterCompanies(opts)

Filter Companies

Returns Companies matching the specified filters

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var opts = { 
  'lastFilingDate': null, // Date | Last filing date
  'sic': "3350", // String | Standard Industrial Classification code
  'template': "industrial", // String | Template
  'sector': "Basic Materials", // String | Industry sector
  'industryCategory': "Metals & Mining", // String | Industry category
  'industryGroup': "Aluminum", // String | Industry group
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.filterCompanies(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastFilingDate** | **Date**| Last filing date | [optional] 
 **sic** | **String**| Standard Industrial Classification code | [optional] 
 **template** | **String**| Template | [optional] 
 **sector** | **String**| Industry sector | [optional] 
 **industryCategory** | **String**| Industry category | [optional] 
 **industryGroup** | **String**| Industry group | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)

<a name="filterCompanyFundamentals"></a>
# **filterCompanyFundamentals**
> ApiResponseCompanyFundamentals filterCompanyFundamentals(identifier, opts)

Filter Fundamentals for a Company

Returns Fundamentals for the Company with the given &#x60;identifier&#x60; and matching the specified filters

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

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
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.filterCompanyFundamentals(identifier, opts).then(function(data) {
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
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyFundamentals**](ApiResponseCompanyFundamentals.md)

<a name="getAllCompanies"></a>
# **getAllCompanies**
> ApiResponseCompanies getAllCompanies(opts)

Get All Companies

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getAllCompanies(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)

<a name="getAllCompanyNews"></a>
# **getAllCompanyNews**
> ApiResponseNews getAllCompanyNews(opts)

Get All Company News

Returns all news for all companies

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getAllCompanyNews(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseNews**](ApiResponseNews.md)

<a name="getCompany"></a>
# **getCompany**
> Company getCompany(identifier)

Get a Company by ID

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)


company_api.getCompany(identifier).then(function(data) {
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

Get Company Data Point (Number)

Returns a numeric value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag


company_api.getCompanyDataPointNumber(identifier, tag).then(function(data) {
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

Get Company Data Point (Text)

Returns a text value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag


company_api.getCompanyDataPointText(identifier, tag).then(function(data) {
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

Get Filings for a Company

Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getCompanyFilings(identifier, opts).then(function(data) {
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

[**ApiResponseCompanyFilings**](ApiResponseCompanyFilings.md)

<a name="getCompanyFundamentals"></a>
# **getCompanyFundamentals**
> ApiResponseCompanyFundamentals getCompanyFundamentals(identifier, opts)

Get All Fundamentals for a Company

Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getCompanyFundamentals(identifier, opts).then(function(data) {
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

[**ApiResponseCompanyFundamentals**](ApiResponseCompanyFundamentals.md)

<a name="getCompanyHistoricalData"></a>
# **getCompanyHistoricalData**
> ApiResponseCompanyHistoricalData getCompanyHistoricalData(identifier, tag, opts)

Get Company Historical Data

Returns historical values for the given &#x60;tag&#x60; and the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | Item

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getCompanyHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **tag** | **String**| Item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCompanyHistoricalData**](ApiResponseCompanyHistoricalData.md)

<a name="getCompanyNews"></a>
# **getCompanyNews**
> ApiResponseCompanyNews getCompanyNews(identifier, opts)

Get News for a Company

Returns news for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getCompanyNews(identifier, opts).then(function(data) {
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

[**ApiResponseCompanyNews**](ApiResponseCompanyNews.md)

<a name="getCompanySecurities"></a>
# **getCompanySecurities**
> ApiResponseCompanySecurities getCompanySecurities(identifier, opts)

Get Securities by Company

Return Securities for the Company with &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

company_api.getCompanySecurities(identifier, opts).then(function(data) {
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

Lookup a Fundamental for a Company

Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var identifier = "AAPL"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var statementCode = "income_statement"; // String | The statement code

var fiscalPeriod = "FY"; // String | The fiscal period

var fiscalYear = 2017; // Number | The fiscal year


company_api.lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear).then(function(data) {
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
> ApiResponseCompanies searchCompanies(query)

Search Companies

Searches for Companies matching the text &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var company_api = new intrinioSDK.CompanyApi();

var query = "Apple"; // String | Search parameters


company_api.searchCompanies(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search parameters | 

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)

