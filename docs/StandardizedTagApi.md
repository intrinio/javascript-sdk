# intrinio.StandardizedTagApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterStandardizedTags**](StandardizedTagApi.md#filterStandardizedTags) | **GET** /standardized_tags/filter | Filter Standardized Tags
[**getAllStandardizedTags**](StandardizedTagApi.md#getAllStandardizedTags) | **GET** /standardized_tags | Get All Standardized Tags
[**getStandardizedTagById**](StandardizedTagApi.md#getStandardizedTagById) | **GET** /standardized_tags/{tag_id} | Get a Standardized Tag by ID
[**getStandardizedTagDataPointNumber**](StandardizedTagApi.md#getStandardizedTagDataPointNumber) | **GET** /standardized_tags/{id}/data_point/{identifier}/number | Get Data Point (Number) for The Standardized Tag
[**getStandardizedTagDataPointText**](StandardizedTagApi.md#getStandardizedTagDataPointText) | **GET** /standardized_tags/{id}/data_point/{identifier}/text | Get Data Point (Text) for the Standardized Tag
[**getStandardizedTagHistoricalData**](StandardizedTagApi.md#getStandardizedTagHistoricalData) | **GET** /standardized_tags/{id}/historical_data/{identifier} | Get Historical Data for the Standardized Tag
[**searchStandardizedTags**](StandardizedTagApi.md#searchStandardizedTags) | **GET** /standardized_tags/search | Search Standardized Tags


<a name="filterStandardizedTags"></a>
# **filterStandardizedTags**
> [StandardizedTag] filterStandardizedTags(opts)

Filter Standardized Tags

Returns Standarized Tags that match the given filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var opts = { 
  'tag': "tag_example", // String | Tag
  'type': "type_example", // String | Type
  'parent': "parent_example", // String | ID of tag parent
  'statementCode': "statementCode_example", // String | Statement Code
  'fsTemplate': "industrial", // String | Template
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

standardizedTag_api.filterStandardizedTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| Tag | [optional] 
 **type** | **String**| Type | [optional] 
 **parent** | **String**| ID of tag parent | [optional] 
 **statementCode** | **String**| Statement Code | [optional] 
 **fsTemplate** | **String**| Template | [optional] [default to industrial]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[StandardizedTag]**](StandardizedTag.md)

<a name="getAllStandardizedTags"></a>
# **getAllStandardizedTags**
> [StandardizedTag] getAllStandardizedTags(opts)

Get All Standardized Tags

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

standardizedTag_api.getAllStandardizedTags(opts).then(function(data) {
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

[**[StandardizedTag]**](StandardizedTag.md)

<a name="getStandardizedTagById"></a>
# **getStandardizedTagById**
> StandardizedTag getStandardizedTagById(tagId)

Get a Standardized Tag by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var tagId = "tagId_example"; // String | The Intrinio ID for the tag


standardizedTag_api.getStandardizedTagById(tagId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| The Intrinio ID for the tag | 

### Return type

[**StandardizedTag**](StandardizedTag.md)

<a name="getStandardizedTagDataPointNumber"></a>
# **getStandardizedTagDataPointNumber**
> DataPointNumber getStandardizedTagDataPointNumber(id, identifier)

Get Data Point (Number) for The Standardized Tag

Returns a numeric data point for the Standardized Tag and entity &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var id = "id_example"; // String | The Intrinio Standardized Tag ID or its tag

var identifier = "identifier_example"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)


standardizedTag_api.getStandardizedTagDataPointNumber(id, identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio Standardized Tag ID or its tag | 
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getStandardizedTagDataPointText"></a>
# **getStandardizedTagDataPointText**
> DataPointText getStandardizedTagDataPointText(id, identifier)

Get Data Point (Text) for the Standardized Tag

Returns a text data point for the Standardized Tag and entity &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var id = "id_example"; // String | The Intrinio Standardized Tag ID or its tag

var identifier = "identifier_example"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)


standardizedTag_api.getStandardizedTagDataPointText(id, identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio Standardized Tag ID or its tag | 
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getStandardizedTagHistoricalData"></a>
# **getStandardizedTagHistoricalData**
> [HistoricalData] getStandardizedTagHistoricalData(id, identifier, opts)

Get Historical Data for the Standardized Tag

Returns historical values for the Standardized Tag and the Entity represented by the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var id = "id_example"; // String | The Intrinio Standardized Tag ID or its tag

var identifier = "identifier_example"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

standardizedTag_api.getStandardizedTagHistoricalData(id, identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio Standardized Tag ID or its tag | 
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="searchStandardizedTags"></a>
# **searchStandardizedTags**
> [StandardizedTag] searchStandardizedTags(query, opts)

Search Standardized Tags

Searches for Standardized Tags matching the text &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var standardizedTag_api = new intrinio.StandardizedTagApi();

var query = "query_example"; // String | 

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

standardizedTag_api.searchStandardizedTags(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[StandardizedTag]**](StandardizedTag.md)

