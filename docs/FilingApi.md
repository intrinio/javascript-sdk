# intrinioSDK.FilingApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllFilings**](FilingApi.md#getAllFilings) | **GET** /filings | All Filings
[**getAllNotes**](FilingApi.md#getAllNotes) | **GET** /filings/notes | All Filing Notes
[**getFilingById**](FilingApi.md#getFilingById) | **GET** /filings/{id} | Lookup Filing
[**getNote**](FilingApi.md#getNote) | **GET** /filings/notes/{identifier} | Filing Note by ID
[**getNoteHtml**](FilingApi.md#getNoteHtml) | **GET** /filings/notes/{identifier}/html | Filing Note HTML
[**getNoteText**](FilingApi.md#getNoteText) | **GET** /filings/notes/{identifier}/text | Filing Note Text
[**searchNotes**](FilingApi.md#searchNotes) | **GET** /filings/notes/search | Search Filing Notes


<a name="getAllFilings"></a>
# **getAllFilings**
> ApiResponseFilings getAllFilings(company, opts)

All Filings

Returns all Filings. Returns Filings matching parameters when supplied.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var company = "AAPL"; // String | Filings for the given `company` identifier (ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'reportType': null, // String | Filter by report type
  'startDate': new Date("2015-01-01"), // Date | Filed on or after the given date
  'endDate': new Date("2019-01-01"), // Date | Filed before or after the given date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

filingAPI.getAllFilings(company, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) | 
 **reportType** | **String**| Filter by report type | [optional] 
 **startDate** | **Date**| Filed on or after the given date | [optional] 
 **endDate** | **Date**| Filed before or after the given date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseFilings**](ApiResponseFilings.md)

<a name="getAllNotes"></a>
# **getAllNotes**
> ApiResponseFilingNotes getAllNotes(opts)

All Filing Notes

Return all Notes from all Filings, most-recent first. Returns notes matching parameters when supplied.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var opts = { 
  'company': "AAPL", // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)
  'reportType': "10-Q", // String | Notes contained in filings that match the given report type
  'filingStartDate': new Date("2018-07-15"), // Date | Limit search to filings on or after this date
  'filingEndDate': new Date("2018-11-15"), // Date | Limit search to filings on or before this date
  'periodEndedStartDate': new Date("2018-07-15"), // Date | Limit search to filings with a period end date on or after this date
  'periodEndedEndDate': new Date("2018-11-15"), // Date | Limit search to filings with a period end date on or before this date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

filingAPI.getAllNotes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | [optional] 
 **reportType** | **String**| Notes contained in filings that match the given report type | [optional] 
 **filingStartDate** | **Date**| Limit search to filings on or after this date | [optional] 
 **filingEndDate** | **Date**| Limit search to filings on or before this date | [optional] 
 **periodEndedStartDate** | **Date**| Limit search to filings with a period end date on or after this date | [optional] 
 **periodEndedEndDate** | **Date**| Limit search to filings with a period end date on or before this date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseFilingNotes**](ApiResponseFilingNotes.md)

<a name="getFilingById"></a>
# **getFilingById**
> Filing getFilingById(id)

Lookup Filing

Returns the Filing with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var id = "fil_7Kn2P6"; // String | The Intrinio ID of the Filing


filingAPI.getFilingById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID of the Filing | 

### Return type

[**Filing**](Filing.md)

<a name="getNote"></a>
# **getNote**
> FilingNote getNote(identifier, opts)

Filing Note by ID

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var identifier = "xbn_3fghz"; // String | The Intrinio ID of the filing note

var opts = { 
  'contentFormat': "text" // String | Returns content in html (as filed) or plain text
};

filingAPI.getNote(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note | 
 **contentFormat** | **String**| Returns content in html (as filed) or plain text | [optional] [default to text]

### Return type

[**FilingNote**](FilingNote.md)

<a name="getNoteHtml"></a>
# **getNoteHtml**
> &#39;String&#39; getNoteHtml(identifier)

Filing Note HTML

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var identifier = "xbn_3fghz"; // String | The Intrinio ID of the filing note


filingAPI.getNoteHtml(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note | 

### Return type

**&#39;String&#39;**

<a name="getNoteText"></a>
# **getNoteText**
> &#39;String&#39; getNoteText(identifier)

Filing Note Text

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var identifier = "xbn_3fghz"; // String | The Intrinio ID of the filing note


filingAPI.getNoteText(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note | 

### Return type

**&#39;String&#39;**

<a name="searchNotes"></a>
# **searchNotes**
> ApiResponseFilingNotesSearch searchNotes(query, opts)

Search Filing Notes

Searches for Filing Notes using the &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var query = "inflation"; // String | Search for notes that contain all or parts of this text

var opts = { 
  'filingStartDate': new Date("2018-07-15"), // Date | Limit search to filings on or after this date
  'filingEndDate': new Date("2018-11-30"), // Date | Limit search to filings on or before this date
  'pageSize': 100, // Number | The number of results to return
  'pageSize2': 100 // Number | The number of results to return
};

filingAPI.searchNotes(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search for notes that contain all or parts of this text | 
 **filingStartDate** | **Date**| Limit search to filings on or after this date | [optional] 
 **filingEndDate** | **Date**| Limit search to filings on or before this date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **pageSize2** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseFilingNotesSearch**](ApiResponseFilingNotesSearch.md)

