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
[**getCompanyIpos**](CompanyApi.md#getCompanyIpos) | **GET** /companies/ipos | IPOs
[**getCompanyNews**](CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | All News by Company
[**getCompanySecurities**](CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | All Securities by Company
[**lookupCompanyFundamental**](CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental by Company
[**searchCompanies**](CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies



[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getAllCompanies)

[//]: # (RETURN_TYPE:ApiResponseCompanies)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanies.md)

[//]: # (OPERATION:getAllCompanies_v2)

[//]: # (ENDPOINT:/companies)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getAllCompanies)

<a name="getAllCompanies"></a>
## **getAllCompanies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllCompanies_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanies getAllCompanies(opts)

#### All Companies


Returns all Companies. When parameters are specified, returns matching companies.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var opts = { 
  'latestFilingDate': null,
  'sic': null,
  'template': null,
  'sector': null,
  'industryCategory': null,
  'industryGroup': null,
  'hasFundamentals': true,
  'hasStockPrices': true,
  'pageSize': 100,
  'nextPage': null
};

company.getAllCompanies(opts).then(function(data) {
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
 **latestFilingDate** | Date| Return companies whose latest 10-Q or 10-K was filed on or after this date | [optional]  &nbsp;
 **sic** | String| Return companies with the given Standard Industrial Classification code | [optional]  &nbsp;
 **template** | String| Return companies with the given financial statement template | [optional]  &nbsp;
 **sector** | String| Return companies in the given industry sector | [optional]  &nbsp;
 **industryCategory** | String| Return companies in the given industry category | [optional]  &nbsp;
 **industryGroup** | String| Return companies in the given industry group | [optional]  &nbsp;
 **hasFundamentals** | Boolean| Return only companies that have fundamentals when true | [optional]  &nbsp;
 **hasStockPrices** | Boolean| Return only companies that have stock prices when true | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getAllCompanyNews)

[//]: # (RETURN_TYPE:ApiResponseNews)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseNews.md)

[//]: # (OPERATION:getAllCompanyNews_v2)

[//]: # (ENDPOINT:/companies/news)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getAllCompanyNews)

<a name="getAllCompanyNews"></a>
## **getAllCompanyNews**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllCompanyNews_v2)

[//]: # (START_OVERVIEW)

> ApiResponseNews getAllCompanyNews(opts)

#### All News


Returns all News for all Companies

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

company.getAllCompanyNews(opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseNews**](ApiResponseNews.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompany)

[//]: # (RETURN_TYPE:Company)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Company.md)

[//]: # (OPERATION:getCompany_v2)

[//]: # (ENDPOINT:/companies/{identifier})

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompany)

<a name="getCompany"></a>
## **getCompany**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompany_v2)

[//]: # (START_OVERVIEW)

> Company getCompany(identifier)

#### Lookup Company


Returns the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";

company.getCompany(identifier).then(function(data) {
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
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Company**](Company.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getCompanyDataPointNumber_v2)

[//]: # (ENDPOINT:/companies/{identifier}/data_point/{tag}/number)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyDataPointNumber)

<a name="getCompanyDataPointNumber"></a>
## **getCompanyDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getCompanyDataPointNumber(identifier, tag)

#### Data Point (Number) for Company


Returns a numeric value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";
var tag = "marketcap";

company.getCompanyDataPointNumber(identifier, tag).then(function(data) {
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
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getCompanyDataPointText_v2)

[//]: # (ENDPOINT:/companies/{identifier}/data_point/{tag}/text)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyDataPointText)

<a name="getCompanyDataPointText"></a>
## **getCompanyDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getCompanyDataPointText(identifier, tag)

#### Data Point (Text) for Company


Returns a text value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";
var tag = "ceo";

company.getCompanyDataPointText(identifier, tag).then(function(data) {
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
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyFilings)

[//]: # (RETURN_TYPE:ApiResponseCompanyFilings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyFilings.md)

[//]: # (OPERATION:getCompanyFilings_v2)

[//]: # (ENDPOINT:/companies/{identifier}/filings)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyFilings)

<a name="getCompanyFilings"></a>
## **getCompanyFilings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyFilings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyFilings getCompanyFilings(identifier, opts)

#### All Filings by Company


Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";

var opts = { 
  'reportType': null,
  'startDate': new Date("2015-01-01"),
  'endDate': null,
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyFilings(identifier, opts).then(function(data) {
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
 **reportType** | String| Filter by &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;. Separate values with commas to return multiple report types. | [optional]  &nbsp;
 **startDate** | Date| Filed on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Filed before or after the given date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyFilings**](ApiResponseCompanyFilings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyFundamentals)

[//]: # (RETURN_TYPE:ApiResponseCompanyFundamentals)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyFundamentals.md)

[//]: # (OPERATION:getCompanyFundamentals_v2)

[//]: # (ENDPOINT:/companies/{identifier}/fundamentals)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyFundamentals)

<a name="getCompanyFundamentals"></a>
## **getCompanyFundamentals**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyFundamentals_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyFundamentals getCompanyFundamentals(identifier, opts)

#### All Fundamentals by Company


Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";

var opts = { 
  'filedAfter': null,
  'filedBefore': null,
  'reportedOnly': false,
  'fiscalYear': null,
  'statementCode': null,
  'type': null,
  'startDate': null,
  'endDate': null,
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyFundamentals(identifier, opts).then(function(data) {
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
 **filedAfter** | Date| Filed on or after this date | [optional]  &nbsp;
 **filedBefore** | Date| Filed on or before this date | [optional]  &nbsp;
 **reportedOnly** | Boolean| Only as-reported fundamentals | [optional]  &nbsp;
 **fiscalYear** | Number| Only for the given fiscal year | [optional]  &nbsp;
 **statementCode** | String| Only of the given statement code | [optional]  &nbsp;
 **type** | String| Only of the given type | [optional]  &nbsp;
 **startDate** | Date| Only on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Only on or before the given date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyFundamentals**](ApiResponseCompanyFundamentals.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseCompanyHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyHistoricalData.md)

[//]: # (OPERATION:getCompanyHistoricalData_v2)

[//]: # (ENDPOINT:/companies/{identifier}/historical_data/{tag})

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyHistoricalData)

<a name="getCompanyHistoricalData"></a>
## **getCompanyHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyHistoricalData getCompanyHistoricalData(identifier, tag, opts)

#### Historical Data for Company


Returns historical values for the given &#x60;tag&#x60; and the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";
var tag = "marketcap";

var opts = { 
  'frequency': "daily",
  'type': null,
  'startDate': new Date("2018-01-01"),
  'endDate': null,
  'sortOrder': "desc",
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyHistoricalData(identifier, tag, opts).then(function(data) {
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
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
 **frequency** | String| Return historical data in the given frequency | [optional] [default to daily] &nbsp;
 **type** | String| Return historical data for given fiscal period type | [optional]  &nbsp;
 **startDate** | Date| Return historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Return historical data on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyHistoricalData**](ApiResponseCompanyHistoricalData.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyIpos)

[//]: # (RETURN_TYPE:ApiResponseInitialPublicOfferings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseInitialPublicOfferings.md)

[//]: # (OPERATION:getCompanyIpos_v2)

[//]: # (ENDPOINT:/companies/ipos)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyIpos)

<a name="getCompanyIpos"></a>
## **getCompanyIpos**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyIpos_v2)

[//]: # (START_OVERVIEW)

> ApiResponseInitialPublicOfferings getCompanyIpos(opts)

#### IPOs


Returns initial public offerings (IPOs). An IPO is a public offering of private company stock. The act of \&quot;going public\&quot; is initiated by an IPO, at which point the company&#39;s stock trades on a major stock exchange (such as NYSE or NASDAQ). Intrinio covers all upcoming and recent IPOs for US exchanges.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var opts = { 
  'ticker': "UBER",
  'status': null,
  'startDate': null,
  'endDate': null,
  'offerAmountGreaterThan': null,
  'offerAmountLessThan': null,
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyIpos(opts).then(function(data) {
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
 **ticker** | String| Return IPOs with the given ticker (typically the IPO for the company) | [optional]  &nbsp;
 **status** | String| Return IPOs with the given status. Upcoming IPOs are scheduled to occur in the future. Priced IPOs have occured and the company should be trading publicly. Withdrawn IPOs were planned to occurr but were withdrawn beforehand | [optional]  &nbsp;
 **startDate** | Date| Return IPOs on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Return IPOs on or before the given date | [optional]  &nbsp;
 **offerAmountGreaterThan** | Number| Return IPOs with an offer dollar amount greater than the given amount | [optional]  &nbsp;
 **offerAmountLessThan** | Number| Return IPOs with an offer dollar amount less than the given amount | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseInitialPublicOfferings**](ApiResponseInitialPublicOfferings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyNews)

[//]: # (RETURN_TYPE:ApiResponseCompanyNews)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyNews.md)

[//]: # (OPERATION:getCompanyNews_v2)

[//]: # (ENDPOINT:/companies/{identifier}/news)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyNews)

<a name="getCompanyNews"></a>
## **getCompanyNews**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyNews_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyNews getCompanyNews(identifier, opts)

#### All News by Company


Returns news for the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyNews(identifier, opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyNews**](ApiResponseCompanyNews.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanySecurities)

[//]: # (RETURN_TYPE:ApiResponseCompanySecurities)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanySecurities.md)

[//]: # (OPERATION:getCompanySecurities_v2)

[//]: # (ENDPOINT:/companies/{identifier}/securities)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanySecurities)

<a name="getCompanySecurities"></a>
## **getCompanySecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanySecurities_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanySecurities getCompanySecurities(identifier, opts)

#### All Securities by Company


Returns Securities for the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";

var opts = { 
  'nextPage': null
};

company.getCompanySecurities(identifier, opts).then(function(data) {
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
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanySecurities**](ApiResponseCompanySecurities.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:lookupCompanyFundamental)

[//]: # (RETURN_TYPE:Fundamental)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Fundamental.md)

[//]: # (OPERATION:lookupCompanyFundamental_v2)

[//]: # (ENDPOINT:/companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period})

[//]: # (DOCUMENT_LINK:CompanyApi.md#lookupCompanyFundamental)

<a name="lookupCompanyFundamental"></a>
## **lookupCompanyFundamental**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/lookupCompanyFundamental_v2)

[//]: # (START_OVERVIEW)

> Fundamental lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear)

#### Lookup Fundamental by Company


Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";
var statementCode = "income_statement";
var fiscalPeriod = "FY";
var fiscalYear = 2017;

company.lookupCompanyFundamental(identifier, statementCode, fiscalPeriod, fiscalYear).then(function(data) {
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
 **fiscalPeriod** | String| The fiscal period |  &nbsp;
 **fiscalYear** | Number| The fiscal year |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Fundamental**](Fundamental.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:searchCompanies)

[//]: # (RETURN_TYPE:ApiResponseCompaniesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompaniesSearch.md)

[//]: # (OPERATION:searchCompanies_v2)

[//]: # (ENDPOINT:/companies/search)

[//]: # (DOCUMENT_LINK:CompanyApi.md#searchCompanies)

<a name="searchCompanies"></a>
## **searchCompanies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchCompanies_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompaniesSearch searchCompanies(query, opts)

#### Search Companies


Searches for Companies matching the text &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var query = "Apple";

var opts = { 
  'active': true,
  'pageSize': 100
};

company.searchCompanies(query, opts).then(function(data) {
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
 **query** | String| Search parameters |  &nbsp;
 **active** | Boolean| When true, return companies that are actively traded (having stock prices within the past 14 days). When false, return companies that are not actively traded or never have been traded. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompaniesSearch**](ApiResponseCompaniesSearch.md)



[//]: # (END_OPERATION)

