# intrinioSDK.CompanyApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCompanies**](CompanyApi.md#getAllCompanies) | **GET** /companies | All Companies
[**getAllCompaniesDailyMetrics**](CompanyApi.md#getAllCompaniesDailyMetrics) | **GET** /companies/daily_metrics | All Companies daily metrics
[**getAllCompanyNews**](CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | All News
[**getCompany**](CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Lookup Company
[**getCompanyAnswers**](CompanyApi.md#getCompanyAnswers) | **GET** /companies/{identifier}/answers | Company Answers
[**getCompanyDailyMetrics**](CompanyApi.md#getCompanyDailyMetrics) | **GET** /companies/{identifier}/daily_metrics | Company metrics by Company
[**getCompanyDataPointNumber**](CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Data Point (Number) for Company
[**getCompanyDataPointText**](CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Data Point (Text) for Company
[**getCompanyFilings**](CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | All Filings by Company
[**getCompanyFundamentals**](CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | All Fundamentals by Company
[**getCompanyHistoricalData**](CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Historical Data for Company
[**getCompanyIpos**](CompanyApi.md#getCompanyIpos) | **GET** /companies/ipos | IPOs
[**getCompanyNews**](CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | All News by Company
[**getCompanyNewsBody**](CompanyApi.md#getCompanyNewsBody) | **GET** /companies/news/body | News Article Body
[**getCompanyPublicFloat**](CompanyApi.md#getCompanyPublicFloat) | **GET** /companies/{identifier}/public_float | Get Company&#39;s public float
[**getCompanySecurities**](CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | All Securities by Company
[**insiderTransactionFilingsByCompany**](CompanyApi.md#insiderTransactionFilingsByCompany) | **GET** /companies/{identifier}/insider_transaction_filings | Insider Transaction Filings by Company
[**latestInsiderTransactionFilingByCompany**](CompanyApi.md#latestInsiderTransactionFilingByCompany) | **GET** /companies/{identifier}/insider_transaction_filings/latest | Latest Insider Transaction Filing by Company
[**lookupCompanyFundamental**](CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental by Company
[**recognizeCompany**](CompanyApi.md#recognizeCompany) | **GET** /companies/recognize | Recognize Company
[**searchCompanies**](CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
[**sharesOutstandingByCompany**](CompanyApi.md#sharesOutstandingByCompany) | **GET** /companies/{identifier}/shares_outstanding | Shares Outstanding by Company



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
  'theaEnabled': null,
  'pageSize': 100,
  'nextPage': null
};

company.getAllCompanies(opts).then(function(data) {
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
 **latestFilingDate** | Date| Return companies whose latest 10-Q or 10-K was filed on or after this date | [optional]  &nbsp;
 **sic** | String| Return companies with the given Standard Industrial Classification code | [optional]  &nbsp;
 **template** | String| Return companies with the given financial statement template | [optional]  &nbsp;
 **sector** | String| Return companies in the given industry sector | [optional]  &nbsp;
 **industryCategory** | String| Return companies in the given industry category | [optional]  &nbsp;
 **industryGroup** | String| Return companies in the given industry group | [optional]  &nbsp;
 **hasFundamentals** | Boolean| Return only companies that have fundamentals when true | [optional]  &nbsp;
 **hasStockPrices** | Boolean| Return only companies that have stock prices when true | [optional]  &nbsp;
 **theaEnabled** | Boolean| Return companies whose have been read by our Thea NLP and are ready for our company answers endpoint | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanies**](ApiResponseCompanies.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getAllCompaniesDailyMetrics)

[//]: # (RETURN_TYPE:ApiResponseCompanyDailyMetrics)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyDailyMetrics.md)

[//]: # (OPERATION:getAllCompaniesDailyMetrics_v2)

[//]: # (ENDPOINT:/companies/daily_metrics)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getAllCompaniesDailyMetrics)

<a name="getAllCompaniesDailyMetrics"></a>
## **getAllCompaniesDailyMetrics**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllCompaniesDailyMetrics_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyDailyMetrics getAllCompaniesDailyMetrics(opts)

#### All Companies daily metrics


Returns the company metrics for a date.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var opts = { 
  'onDate': new Date("2013-10-20"),
  'pageSize': 100,
  'nextPage': null,
  'nextPage2': null
};

company.getAllCompaniesDailyMetrics(opts).then(function(data) {
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
 **onDate** | Date| Date of the metric | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyDailyMetrics**](ApiResponseCompanyDailyMetrics.md)



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


Returns the latest news article links, headlines and summaries for all US traded companies allowing you to keep a pulse on companies and their business operations.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var opts = { 
  'specificSource': null,
  'pageSize': 100,
  'sentiment': null,
  'topic': null,
  'company': "AAPL",
  'security': "AAPL",
  'startDate': null,
  'endDate': null,
  'language': null,
  'wordCountGreaterThan': null,
  'wordCountLessThan': null,
  'isSpam': null,
  'businessRelevanceGreaterThan': null,
  'businessRelevanceLessThan': null,
  'nextPage': null
};

company.getAllCompanyNews(opts).then(function(data) {
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
 **specificSource** | String| Only news from this source. Defaults to highest available if not present. | [optional]  &nbsp;
 **pageSize** | Number| The maximum number of results to return. | [optional] [default to 100] &nbsp;
 **sentiment** | String| Filter by sentiment.  Unsupported for yahoo source. | [optional]  &nbsp;
 **topic** | String| Filter by topic.  Unsupported for yahoo source. | [optional]  &nbsp;
 **company** | String| Filter by &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **security** | String| Filter by &#x60;security&#x60; identifier (ticker, figi, isin, cusip, Intrinio ID).  Unsupported for yahoo source. | [optional]  &nbsp;
 **startDate** | Date| Limit news stories to those on or after this date. Defaults to yesterday if unspecified. | [optional]  &nbsp;
 **endDate** | Date| Limit news stories to those on or before this date. | [optional]  &nbsp;
 **language** | String| Filter by language.  Unsupported for yahoo source. | [optional]  &nbsp;
 **wordCountGreaterThan** | Number| News stories will have a word count greater than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **wordCountLessThan** | Number| News stories will have a word count less than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **isSpam** | Boolean| Filter whether it is marked as spam or not.  Unsupported for yahoo source. | [optional]  &nbsp;
 **businessRelevanceGreaterThan** | Number| News stories will have a business relevance score more than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **businessRelevanceLessThan** | Number| News stories will have a business relevance score less than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
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


Returns company reference and metadata such as tickers, CIK, and a unique company identifier, as well as company metadata such as business description, employee count, and company URL.

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
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Company**](Company.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyAnswers)

[//]: # (RETURN_TYPE:ApiResponseCompanyAnswers)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyAnswers.md)

[//]: # (OPERATION:getCompanyAnswers_v2)

[//]: # (ENDPOINT:/companies/{identifier}/answers)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyAnswers)

<a name="getCompanyAnswers"></a>
## **getCompanyAnswers**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyAnswers_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyAnswers getCompanyAnswers(identifier, query)

#### Company Answers


Returns answers for a question about the Company with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var identifier = "AAPL";
var query = "What do they believe in?";


company.getCompanyAnswers(identifier, query).then(function(data) {
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
 **query** | String| The query to ask the Thea API |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyAnswers**](ApiResponseCompanyAnswers.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyDailyMetrics)

[//]: # (RETURN_TYPE:ApiResponseCompanyDailyMetrics)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyDailyMetrics.md)

[//]: # (OPERATION:getCompanyDailyMetrics_v2)

[//]: # (ENDPOINT:/companies/{identifier}/daily_metrics)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyDailyMetrics)

<a name="getCompanyDailyMetrics"></a>
## **getCompanyDailyMetrics**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyDailyMetrics_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyDailyMetrics getCompanyDailyMetrics(identifier, opts)

#### Company metrics by Company


Returns the latest company metrics.

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
  'onDate': new Date("2013-10-20"),
  'pageSize': 100,
  'nextPage': null,
  'nextPage2': null
};

company.getCompanyDailyMetrics(identifier, opts).then(function(data) {
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
 **onDate** | Date| Date of the metric | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyDailyMetrics**](ApiResponseCompanyDailyMetrics.md)



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


Returns latest value for calculations, metrics, and financial data points for a company.

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


Returns latest value for metadata items for a company.

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
  'theaEnabled': null,
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyFilings(identifier, opts).then(function(data) {
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
 **reportType** | String| Filter by &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;. Separate values with commas to return multiple report types. | [optional]  &nbsp;
 **startDate** | Date| Filed on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Filed before or after the given date | [optional]  &nbsp;
 **theaEnabled** | Boolean| Return filings that have been read by our Thea NLP and are ready for our answers endpoint | [optional]  &nbsp;
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


Returns a list of fundamentals with unique fundamental IDs associated with a particular company. Useful to obtain all historical and/or latest fundamental IDs for a given company to then use to loop through and pull all fundamental data available.

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
  'updatedAfter': new Date("2022-12-01"),
  'updatedBefore': new Date("2022-12-01"),
  'pageSize': 100,
  'nextPage': null
};

company.getCompanyFundamentals(identifier, opts).then(function(data) {
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
 **filedAfter** | Date| Filed on or after this date | [optional]  &nbsp;
 **filedBefore** | Date| Filed on or before this date | [optional]  &nbsp;
 **reportedOnly** | Boolean| Only as-reported fundamentals | [optional]  &nbsp;
 **fiscalYear** | Number| Only for the given fiscal year | [optional]  &nbsp;
 **statementCode** | String| Only of the given statement code | [optional]  &nbsp;
 **type** | String| Only of the given type | [optional]  &nbsp;
 **startDate** | Date| Only on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Only on or before the given date | [optional]  &nbsp;
 **updatedAfter** | Date| Only include fundamentals where it was updated after this date. | [optional]  &nbsp;
 **updatedBefore** | Date| Only include fundamentals where it was updated before this date. | [optional]  &nbsp;
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


Returns a list of historical, current, and upcoming initial public offerings (IPOs) across the major US Exchanges. Includes relevant information such as the IPO status, the offer amount, the total share count and target share price.

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
 **ticker** | String| Return IPOs with the given ticker (typically the IPO for the company) | [optional]  &nbsp;
 **status** | String| Return IPOs with the given status. Upcoming IPOs are scheduled to occur in the future. Priced IPOs have occurred and the company should be trading publicly. Withdrawn IPOs were planned to occurr but were withdrawn beforehand | [optional]  &nbsp;
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


Returns the latest and historical news article links, headlines and summaries for a specified US traded company.

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
  'specificSource': null,
  'pageSize': 100,
  'sentiment': null,
  'topic': null,
  'security': "AAPL",
  'startDate': null,
  'endDate': null,
  'language': null,
  'wordCountGreaterThan': null,
  'wordCountLessThan': null,
  'isSpam': null,
  'businessRelevanceGreaterThan': null,
  'businessRelevanceLessThan': null,
  'nextPage': null
};

company.getCompanyNews(identifier, opts).then(function(data) {
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
 **specificSource** | String| Only news from this source. Defaults to highest available if not present. | [optional]  &nbsp;
 **pageSize** | Number| The maximum number of results to return | [optional] [default to 100] &nbsp;
 **sentiment** | String| Filter by sentiment.  Unsupported for yahoo source. | [optional]  &nbsp;
 **topic** | String| Filter by topic.  Unsupported for yahoo source. | [optional]  &nbsp;
 **security** | String| Filter by &#x60;security&#x60; identifier (ticker, figi, isin, cusip, Intrinio ID).  Unsupported for yahoo source. | [optional]  &nbsp;
 **startDate** | Date| Limit news stories to those on or after this date. Defaults to yesterday if unspecified. | [optional]  &nbsp;
 **endDate** | Date| Limit news stories to those on or before this date | [optional]  &nbsp;
 **language** | String| Filter by language.  Unsupported for yahoo source. | [optional]  &nbsp;
 **wordCountGreaterThan** | Number| News stories will have a word count greater than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **wordCountLessThan** | Number| News stories will have a word count less than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **isSpam** | Boolean| Filter whether it is marked as spam or not.  Unsupported for yahoo source. | [optional]  &nbsp;
 **businessRelevanceGreaterThan** | Number| News stories will have a business relevance score more than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **businessRelevanceLessThan** | Number| News stories will have a business relevance score less than this value.  Unsupported for yahoo source. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyNews**](ApiResponseCompanyNews.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyNewsBody)

[//]: # (RETURN_TYPE:ApiResponseCompanyNewsBody)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyNewsBody.md)

[//]: # (OPERATION:getCompanyNewsBody_v2)

[//]: # (ENDPOINT:/companies/news/body)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyNewsBody)

<a name="getCompanyNewsBody"></a>
## **getCompanyNewsBody**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyNewsBody_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyNewsBody getCompanyNewsBody(newsStoryId, publicationDate, opts)

#### News Article Body


Returns the body of a news article.  This endpoint requires additional authorization beyond basic news access. Please see a representative for details.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var newsStoryId = "new_aBcDef";
var publicationDate = null;


var opts = { 
  'specificSource': null,
  'nextPage': null
};

company.getCompanyNewsBody(newsStoryId, publicationDate, opts).then(function(data) {
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
 **newsStoryId** | String| The identifier of the news story. |  &nbsp;
 **publicationDate** | Date| The DateTime of the story. |  &nbsp;
 **specificSource** | String| Only news from this source. Defaults to highest available if not present. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyNewsBody**](ApiResponseCompanyNewsBody.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:getCompanyPublicFloat)

[//]: # (RETURN_TYPE:ApiResponseCompanyPublicFloatResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyPublicFloatResult.md)

[//]: # (OPERATION:getCompanyPublicFloat_v2)

[//]: # (ENDPOINT:/companies/{identifier}/public_float)

[//]: # (DOCUMENT_LINK:CompanyApi.md#getCompanyPublicFloat)

<a name="getCompanyPublicFloat"></a>
## **getCompanyPublicFloat**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getCompanyPublicFloat_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyPublicFloatResult getCompanyPublicFloat(identifier, opts)

#### Get Company&#39;s public float


Returns a list of public float data tied to a given company identifier.

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
  'floatDateGreaterThan': null,
  'floatDateLessThan': null,
  'nextPage': null,
  'nextPage2': null
};

company.getCompanyPublicFloat(identifier, opts).then(function(data) {
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
 **floatDateGreaterThan** | Date| The lower-bound date for the data being requested. | [optional]  &nbsp;
 **floatDateLessThan** | Date| The upper-bound date for the data being requested. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyPublicFloatResult**](ApiResponseCompanyPublicFloatResult.md)



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


Returns a list of underlying securities with associated reference data tied to a given company identifier.

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
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanySecurities**](ApiResponseCompanySecurities.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:insiderTransactionFilingsByCompany)

[//]: # (RETURN_TYPE:ApiResponseInsiderTransactionFilings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseInsiderTransactionFilings.md)

[//]: # (OPERATION:insiderTransactionFilingsByCompany_v2)

[//]: # (ENDPOINT:/companies/{identifier}/insider_transaction_filings)

[//]: # (DOCUMENT_LINK:CompanyApi.md#insiderTransactionFilingsByCompany)

<a name="insiderTransactionFilingsByCompany"></a>
## **insiderTransactionFilingsByCompany**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/insiderTransactionFilingsByCompany_v2)

[//]: # (START_OVERVIEW)

> ApiResponseInsiderTransactionFilings insiderTransactionFilingsByCompany(identifier, opts)

#### Insider Transaction Filings by Company


Returns a list of all insider transaction filings in a company. Criteria for being an insider include being a director, officer, or 10%+ owner in the company. Transactions are detailed for both non-derivative and derivative transactions by the insider.

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
  'startDate': new Date("2018-01-01"),
  'endDate': new Date("2019-01-01"),
  'ownershipType': "D",
  'nextPage': null,
  'pageSize': 1000,
  'sortBy': "updated_on",
  'nextPage2': null
};

company.insiderTransactionFilingsByCompany(identifier, opts).then(function(data) {
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
 **startDate** | Date| Return Company&#39;s insider transaction filings on or after this date | [optional]  &nbsp;
 **endDate** | Date| Return Company&#39;s insider transaction filings on or before this date | [optional]  &nbsp;
 **ownershipType** | String| The type of ownership to return transaction filings for. &#39;D&#39; is for direct transactions. &#39;I&#39; is for indirect transactions. Omit for both types. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 1000] &nbsp;
 **sortBy** | String| The field to sort by.  Default is &#39;filing_date&#39;. | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseInsiderTransactionFilings**](ApiResponseInsiderTransactionFilings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:latestInsiderTransactionFilingByCompany)

[//]: # (RETURN_TYPE:InsiderTransactionFiling)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:InsiderTransactionFiling.md)

[//]: # (OPERATION:latestInsiderTransactionFilingByCompany_v2)

[//]: # (ENDPOINT:/companies/{identifier}/insider_transaction_filings/latest)

[//]: # (DOCUMENT_LINK:CompanyApi.md#latestInsiderTransactionFilingByCompany)

<a name="latestInsiderTransactionFilingByCompany"></a>
## **latestInsiderTransactionFilingByCompany**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/latestInsiderTransactionFilingByCompany_v2)

[//]: # (START_OVERVIEW)

> InsiderTransactionFiling latestInsiderTransactionFilingByCompany(identifier, opts)

#### Latest Insider Transaction Filing by Company


Returns the latest insider transaction filing for a company.

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

company.latestInsiderTransactionFilingByCompany(identifier, opts).then(function(data) {
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
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**InsiderTransactionFiling**](InsiderTransactionFiling.md)



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
 **fiscalPeriod** | String| The fiscal period |  &nbsp;
 **fiscalYear** | Number| The fiscal year |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Fundamental**](Fundamental.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:recognizeCompany)

[//]: # (RETURN_TYPE:ApiResponseCompanyRecognize)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanyRecognize.md)

[//]: # (OPERATION:recognizeCompany_v2)

[//]: # (ENDPOINT:/companies/recognize)

[//]: # (DOCUMENT_LINK:CompanyApi.md#recognizeCompany)

<a name="recognizeCompany"></a>
## **recognizeCompany**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/recognizeCompany_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanyRecognize recognizeCompany(text)

#### Recognize Company


Returns a list of companies recognized by the Thea API in the given &#x60;text&#x60; query string parameter.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var company = new intrinioSDK.CompanyApi();

var text = "Apple";


company.recognizeCompany(text).then(function(data) {
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
 **text** | String| The text sent to the Thea API to analyze |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanyRecognize**](ApiResponseCompanyRecognize.md)



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


Search the companies database and return a list of companies matching the text query parameter passed through. Query parameter searches across the company ticker and name.

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
  'mode': null,
  'pageSize': 100
};

company.searchCompanies(query, opts).then(function(data) {
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
 **query** | String| Search parameters |  &nbsp;
 **active** | Boolean| When true, return companies that are actively traded (having stock prices within the past 14 days). When false, return companies that are not actively traded or never have been traded. Not setting this value returns all. Not used when mode is set. | [optional]  &nbsp;
 **mode** | String| When set, changes search mode to the specified mode. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompaniesSearch**](ApiResponseCompaniesSearch.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:CompanyApi)

[//]: # (METHOD:sharesOutstandingByCompany)

[//]: # (RETURN_TYPE:ApiResponseCompanySharesOutstanding)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseCompanySharesOutstanding.md)

[//]: # (OPERATION:sharesOutstandingByCompany_v2)

[//]: # (ENDPOINT:/companies/{identifier}/shares_outstanding)

[//]: # (DOCUMENT_LINK:CompanyApi.md#sharesOutstandingByCompany)

<a name="sharesOutstandingByCompany"></a>
## **sharesOutstandingByCompany**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/sharesOutstandingByCompany_v2)

[//]: # (START_OVERVIEW)

> ApiResponseCompanySharesOutstanding sharesOutstandingByCompany(identifier, opts)

#### Shares Outstanding by Company


Returns the shares outstanding reported on the front cover of the SEC 10-K and 10-Q filings.

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
  'endDateGreaterThan': null,
  'endDateLessThan': null
};

company.sharesOutstandingByCompany(identifier, opts).then(function(data) {
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
 **endDateGreaterThan** | Date| Returns shares outstanding after this date. | [optional]  &nbsp;
 **endDateLessThan** | Date| Returns shares outstanding before this date. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseCompanySharesOutstanding**](ApiResponseCompanySharesOutstanding.md)



[//]: # (END_OPERATION)

