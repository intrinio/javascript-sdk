# intrinio.CompanyApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterCompanies**](CompanyApi.md#filterCompanies) | **GET** /companies/filter | Filter Companies
[**filterCompanyFundamentals**](CompanyApi.md#filterCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals/filter | Filter Fundamentals for a Company
[**getAllCompanies**](CompanyApi.md#getAllCompanies) | **GET** /companies | Get All Companies
[**getAllCompanyFilings**](CompanyApi.md#getAllCompanyFilings) | **GET** /companies/{identifier}/filings | Filings
[**getAllCompanyFundamentals**](CompanyApi.md#getAllCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | Get All Fundamentals for a Company
[**getCompany**](CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Get a Company by ID
[**getCompanyDataPointNumber**](CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{item}/number | Get Company Data Point (Number)
[**getCompanyDataPointText**](CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{item}/text | Get Company Data Point (Text)
[**getCompanyHistoricalData**](CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{item} | Get Company Historical Data
[**getNews**](CompanyApi.md#getNews) | **GET** /companies/{identifier}/news | News
[**lookupCompanyFundamental**](CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental for a Company
[**searchCompanies**](CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies


<a name="filterCompanies"></a>
# **filterCompanies**
> [CompanySummary] filterCompanies(opts)

Filter Companies

Returns Companies matching the specified filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var opts = { 
  'lastFilingDate': new Date("2013-10-20"), // Date | Last filing date
  'sic': "sic_example", // String | Standard Industrial Classification code
  'template': "template_example", // String | Template
  'sector': "sector_example", // String | Industry sector
  'industryCategory': "industryCategory_example", // String | Industry category
  'industryGroup': "industryGroup_example", // String | Industry group
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[CompanySummary]**](CompanySummary.md)

<a name="filterCompanyFundamentals"></a>
# **filterCompanyFundamentals**
> [Fundamental] filterCompanyFundamentals(identifier, opts)

Filter Fundamentals for a Company

Returns Fundamentals for the Company with the given &#x60;identifier&#x60; and matching the specified filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'filedAfter': new Date("2013-10-20"), // Date | Filed on or after this date
  'filedBefore': new Date("2013-10-20"), // Date | Filed on or before this date
  'reportedOnly': true, // Boolean | Only as-reported fundamentals
  'fiscalYear': 56, // Number | Only for the given fiscal year
  'statementCode': "statementCode_example", // String | Only of the given statement code
  'type': "type_example", // String | Only of the given type
  'startDate': new Date("2013-10-20"), // Date | Only on or after the given date
  'endDate': new Date("2013-10-20"), // Date | Only on or after the given date
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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
 **endDate** | **Date**| Only on or after the given date | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[Fundamental]**](Fundamental.md)

<a name="getAllCompanies"></a>
# **getAllCompanies**
> [CompanySummary] getAllCompanies(opts)

Get All Companies

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[CompanySummary]**](CompanySummary.md)

<a name="getAllCompanyFilings"></a>
# **getAllCompanyFilings**
> [FilingSummary] getAllCompanyFilings(identifier, opts)

Filings

Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

company_api.getAllCompanyFilings(identifier, opts).then(function(data) {
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

[**[FilingSummary]**](FilingSummary.md)

<a name="getAllCompanyFundamentals"></a>
# **getAllCompanyFundamentals**
> [Fundamental] getAllCompanyFundamentals(identifier, opts)

Get All Fundamentals for a Company

Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

company_api.getAllCompanyFundamentals(identifier, opts).then(function(data) {
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

[**[Fundamental]**](Fundamental.md)

<a name="getCompany"></a>
# **getCompany**
> Company getCompany(identifier)

Get a Company by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)


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
> DataPointNumber getCompanyDataPointNumber(identifier, item)

Get Company Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag


company_api.getCompanyDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getCompanyDataPointText"></a>
# **getCompanyDataPointText**
> DataPointText getCompanyDataPointText(identifier, item)

Get Company Data Point (Text)

Returns a text value for the given &#x60;item&#x60; for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag


company_api.getCompanyDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getCompanyHistoricalData"></a>
# **getCompanyHistoricalData**
> [HistoricalData] getCompanyHistoricalData(identifier, item, opts)

Get Company Historical Data

Returns historical values for the given &#x60;item&#x60; and the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var item = "item_example"; // String | Item

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

company_api.getCompanyHistoricalData(identifier, item, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | 
 **item** | **String**| Item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="getNews"></a>
# **getNews**
> [CompanyNews] getNews(identifier, opts)

News

Returns news for the Company with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

company_api.getNews(identifier, opts).then(function(data) {
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

[**[CompanyNews]**](CompanyNews.md)

<a name="lookupCompanyFundamental"></a>
# **lookupCompanyFundamental**
> [Fundamental] lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear)

Lookup a Fundamental for a Company

Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var identifier = "identifier_example"; // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)

var statementCode = "statementCode_example"; // String | The statement code

var fiscalPeriod = "fiscalPeriod_example"; // String | The fiscal period

var fiscalYear = 56; // Number | The fiscal year


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

[**[Fundamental]**](Fundamental.md)

<a name="searchCompanies"></a>
# **searchCompanies**
> [CompanySummary] searchCompanies(query, opts)

Search Companies

Searches for Companies matching the text &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var company_api = new intrinio.CompanyApi();

var query = "query_example"; // String | Search parameters

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

company_api.searchCompanies(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search parameters | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[CompanySummary]**](CompanySummary.md)

