# intrinioSDK.FilingApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllFilings**](FilingApi.md#getAllFilings) | **GET** /filings | All Filings
[**getAllNotes**](FilingApi.md#getAllNotes) | **GET** /filings/notes | All Filing Notes
[**getFilingById**](FilingApi.md#getFilingById) | **GET** /filings/{id} | Lookup Filing
[**getFilingFundamentals**](FilingApi.md#getFilingFundamentals) | **GET** /filings/{identifier}/fundamentals | All Fundamentals by Filing
[**getFilingHtml**](FilingApi.md#getFilingHtml) | **GET** /filings/{identifier}/html | Filing Html
[**getFilingText**](FilingApi.md#getFilingText) | **GET** /filings/{identifier}/text | Filing Text
[**getNote**](FilingApi.md#getNote) | **GET** /filings/notes/{identifier} | Filing Note by ID
[**getNoteHtml**](FilingApi.md#getNoteHtml) | **GET** /filings/notes/{identifier}/html | Filing Note HTML
[**getNoteText**](FilingApi.md#getNoteText) | **GET** /filings/notes/{identifier}/text | Filing Note Text
[**searchNotes**](FilingApi.md#searchNotes) | **GET** /filings/notes/search | Search Filing Notes



[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getAllFilings)

[//]: # (RETURN_TYPE:ApiResponseFilings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseFilings.md)

[//]: # (OPERATION:getAllFilings_v2)

[//]: # (ENDPOINT:/filings)

[//]: # (DOCUMENT_LINK:FilingApi.md#getAllFilings)

<a name="getAllFilings"></a>
## **getAllFilings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllFilings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilings getAllFilings(company, opts)

#### All Filings


Returns all Filings. Returns Filings matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var company = "AAPL";

var opts = { 
  'reportType': "10-Q",
  'startDate': new Date("2015-01-01"),
  'endDate': null,
  'industryCategory': null,
  'industryGroup': null,
  'pageSize': 100,
  'nextPage': null
};

filing.getAllFilings(company, opts).then(function(data) {
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
 **company** | String| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) |  &nbsp;
 **reportType** | String| Filter by report type. Separate values with commas to return multiple The filing &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report types&lt;/a&gt;. | [optional]  &nbsp;
 **startDate** | Date| Filed on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Filed before or after the given date | [optional]  &nbsp;
 **industryCategory** | String| Return companies in the given industry category | [optional]  &nbsp;
 **industryGroup** | String| Return companies in the given industry group | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseFilings**](ApiResponseFilings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getAllNotes)

[//]: # (RETURN_TYPE:ApiResponseFilingNotes)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseFilingNotes.md)

[//]: # (OPERATION:getAllNotes_v2)

[//]: # (ENDPOINT:/filings/notes)

[//]: # (DOCUMENT_LINK:FilingApi.md#getAllNotes)

<a name="getAllNotes"></a>
## **getAllNotes**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllNotes_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilingNotes getAllNotes(opts)

#### All Filing Notes


Return all Notes from all Filings, most-recent first. Returns notes matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var opts = { 
  'company': "AAPL",
  'reportType': "10-Q",
  'filingStartDate': null,
  'filingEndDate': null,
  'periodEndedStartDate': null,
  'periodEndedEndDate': null,
  'pageSize': 100,
  'nextPage': null
};

filing.getAllNotes(opts).then(function(data) {
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
 **company** | String| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **reportType** | String| Notes contained in filings that match the given &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt; | [optional]  &nbsp;
 **filingStartDate** | Date| Limit search to filings on or after this date | [optional]  &nbsp;
 **filingEndDate** | Date| Limit search to filings on or before this date | [optional]  &nbsp;
 **periodEndedStartDate** | Date| Limit search to filings with a period end date on or after this date | [optional]  &nbsp;
 **periodEndedEndDate** | Date| Limit search to filings with a period end date on or before this date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseFilingNotes**](ApiResponseFilingNotes.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getFilingById)

[//]: # (RETURN_TYPE:Filing)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Filing.md)

[//]: # (OPERATION:getFilingById_v2)

[//]: # (ENDPOINT:/filings/{id})

[//]: # (DOCUMENT_LINK:FilingApi.md#getFilingById)

<a name="getFilingById"></a>
## **getFilingById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFilingById_v2)

[//]: # (START_OVERVIEW)

> Filing getFilingById(id)

#### Lookup Filing


Returns the Filing with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var id = "fil_7Kn2P6";

filing.getFilingById(id).then(function(data) {
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
 **id** | String| The Intrinio ID of the Filing |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Filing**](Filing.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getFilingFundamentals)

[//]: # (RETURN_TYPE:ApiResponseFilingFundamentals)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseFilingFundamentals.md)

[//]: # (OPERATION:getFilingFundamentals_v2)

[//]: # (ENDPOINT:/filings/{identifier}/fundamentals)

[//]: # (DOCUMENT_LINK:FilingApi.md#getFilingFundamentals)

<a name="getFilingFundamentals"></a>
## **getFilingFundamentals**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFilingFundamentals_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilingFundamentals getFilingFundamentals(identifier, opts)

#### All Fundamentals by Filing


Returns all Fundamentals for the SEC Filing with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "fil_B73xBG";

var opts = { 
  'statementCode': null,
  'type': null,
  'fiscalYear': null,
  'fiscalPeriod': null,
  'startDate': null,
  'endDate': null,
  'nextPage': null
};

filing.getFilingFundamentals(identifier, opts).then(function(data) {
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
 **identifier** | String| A Filing identifier |  &nbsp;
 **statementCode** | String| Filters fundamentals by statement code | [optional]  &nbsp;
 **type** | String| Filters fundamentals by type | [optional]  &nbsp;
 **fiscalYear** | Number| Filters fundamentals by fiscal year | [optional]  &nbsp;
 **fiscalPeriod** | String| Filters fundamentals by fiscal period | [optional]  &nbsp;
 **startDate** | Date| Returns fundamentals on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Returns fundamentals on or before the given date | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseFilingFundamentals**](ApiResponseFilingFundamentals.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getFilingHtml)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getFilingHtml_v2)

[//]: # (ENDPOINT:/filings/{identifier}/html)

[//]: # (DOCUMENT_LINK:FilingApi.md#getFilingHtml)

<a name="getFilingHtml"></a>
## **getFilingHtml**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFilingHtml_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getFilingHtml(identifier)

#### Filing Html



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "fil_B73xBG";

filing.getFilingHtml(identifier).then(function(data) {
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
 **identifier** | String| A Filing identifier |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getFilingText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getFilingText_v2)

[//]: # (ENDPOINT:/filings/{identifier}/text)

[//]: # (DOCUMENT_LINK:FilingApi.md#getFilingText)

<a name="getFilingText"></a>
## **getFilingText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getFilingText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getFilingText(identifier)

#### Filing Text



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "fil_B73xBG";

filing.getFilingText(identifier).then(function(data) {
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
 **identifier** | String| A Filing identifier |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getNote)

[//]: # (RETURN_TYPE:FilingNote)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:FilingNote.md)

[//]: # (OPERATION:getNote_v2)

[//]: # (ENDPOINT:/filings/notes/{identifier})

[//]: # (DOCUMENT_LINK:FilingApi.md#getNote)

<a name="getNote"></a>
## **getNote**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getNote_v2)

[//]: # (START_OVERVIEW)

> FilingNote getNote(identifier, opts)

#### Filing Note by ID



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "xbn_ydK3QL";

var opts = { 
  'contentFormat': "text"
};

filing.getNote(identifier, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID of the filing note |  &nbsp;
 **contentFormat** | String| Returns content in html (as filed) or plain text | [optional] [default to text] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**FilingNote**](FilingNote.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getNoteHtml)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getNoteHtml_v2)

[//]: # (ENDPOINT:/filings/notes/{identifier}/html)

[//]: # (DOCUMENT_LINK:FilingApi.md#getNoteHtml)

<a name="getNoteHtml"></a>
## **getNoteHtml**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getNoteHtml_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getNoteHtml(identifier)

#### Filing Note HTML



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "xbn_ydK3QL";

filing.getNoteHtml(identifier).then(function(data) {
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
 **identifier** | String| The Intrinio ID of the filing note |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:getNoteText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getNoteText_v2)

[//]: # (ENDPOINT:/filings/notes/{identifier}/text)

[//]: # (DOCUMENT_LINK:FilingApi.md#getNoteText)

<a name="getNoteText"></a>
## **getNoteText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getNoteText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getNoteText(identifier)

#### Filing Note Text



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var identifier = "xbn_ydK3QL";

filing.getNoteText(identifier).then(function(data) {
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
 **identifier** | String| The Intrinio ID of the filing note |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:FilingApi)

[//]: # (METHOD:searchNotes)

[//]: # (RETURN_TYPE:ApiResponseFilingNotesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseFilingNotesSearch.md)

[//]: # (OPERATION:searchNotes_v2)

[//]: # (ENDPOINT:/filings/notes/search)

[//]: # (DOCUMENT_LINK:FilingApi.md#searchNotes)

<a name="searchNotes"></a>
## **searchNotes**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchNotes_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilingNotesSearch searchNotes(query, opts)

#### Search Filing Notes


Searches for Filing Notes using the &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var filing = new intrinioSDK.FilingApi();

var query = "inflation";

var opts = { 
  'filingStartDate': new Date("2018-07-15"),
  'filingEndDate': new Date("2018-11-30"),
  'pageSize': 100
};

filing.searchNotes(query, opts).then(function(data) {
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
 **query** | String| Search for notes that contain all or parts of this text |  &nbsp;
 **filingStartDate** | Date| Limit search to filings on or after this date | [optional]  &nbsp;
 **filingEndDate** | Date| Limit search to filings on or before this date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseFilingNotesSearch**](ApiResponseFilingNotesSearch.md)



[//]: # (END_OPERATION)

