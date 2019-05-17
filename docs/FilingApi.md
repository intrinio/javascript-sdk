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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getAllFilings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilings getAllFilings(company, opts)

#### All Filings


Returns all Filings. Returns Filings matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filingAPI = new intrinioSDK.FilingApi();

var company = "AAPL"; // String | Filings for the given `company` identifier (ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'reportType': null, // String | Filter by report type
  'startDate': new Date("2015-01-01"), // Date | Filed on or after the given date
  'endDate': null, // Date | Filed before or after the given date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

filingAPI.getAllFilings(company, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) |  &nbsp;
 **reportType** | **String**| Filter by report type | [optional]  &nbsp;
 **startDate** | **Date**| Filed on or after the given date | [optional]  &nbsp;
 **endDate** | **Date**| Filed before or after the given date | [optional]  &nbsp;
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional]  &nbsp;
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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getAllNotes_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilingNotes getAllNotes(opts)

#### All Filing Notes


Return all Notes from all Filings, most-recent first. Returns notes matching parameters when supplied.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **reportType** | **String**| Notes contained in filings that match the given report type | [optional]  &nbsp;
 **filingStartDate** | **Date**| Limit search to filings on or after this date | [optional]  &nbsp;
 **filingEndDate** | **Date**| Limit search to filings on or before this date | [optional]  &nbsp;
 **periodEndedStartDate** | **Date**| Limit search to filings with a period end date on or after this date | [optional]  &nbsp;
 **periodEndedEndDate** | **Date**| Limit search to filings with a period end date on or before this date | [optional]  &nbsp;
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional]  &nbsp;
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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getFilingById_v2)

[//]: # (START_OVERVIEW)

> Filing getFilingById(id)

#### Lookup Filing


Returns the Filing with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID of the Filing |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Filing**](Filing.md)



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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getNote_v2)

[//]: # (START_OVERVIEW)

> FilingNote getNote(identifier, opts)

#### Filing Note by ID



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note |  &nbsp;
 **contentFormat** | **String**| Returns content in html (as filed) or plain text | [optional] [default to text] &nbsp;
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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getNoteHtml_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getNoteHtml(identifier)

#### Filing Note HTML



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note |  &nbsp;
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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getNoteText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getNoteText(identifier)

#### Filing Note Text



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID of the filing note |  &nbsp;
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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/searchNotes_v2)

[//]: # (START_OVERVIEW)

> ApiResponseFilingNotesSearch searchNotes(query, opts)

#### Search Filing Notes


Searches for Filing Notes using the &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search for notes that contain all or parts of this text |  &nbsp;
 **filingStartDate** | **Date**| Limit search to filings on or after this date | [optional]  &nbsp;
 **filingEndDate** | **Date**| Limit search to filings on or before this date | [optional]  &nbsp;
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100] &nbsp;
 **pageSize2** | **Number**| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseFilingNotesSearch**](ApiResponseFilingNotesSearch.md)



[//]: # (END_OPERATION)

