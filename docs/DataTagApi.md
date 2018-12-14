# intrinio.DataTagApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterDataTags**](DataTagApi.md#filterDataTags) | **GET** /data_tags/filter | Filter Data Tags
[**getAllDataTags**](DataTagApi.md#getAllDataTags) | **GET** /data_tags | Get All Data Tags
[**getDataTagById**](DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Get a Data Tag by ID
[**searchDataTags**](DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags


<a name="filterDataTags"></a>
# **filterDataTags**
> ApiResponseDataTags filterDataTags(opts)

Filter Data Tags

Returns Data Tags that match the given filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataTag_api = new intrinio.DataTagApi();

var opts = { 
  'tag': "tag_example", // String | Tag
  'type': "type_example", // String | Type
  'parent': "parent_example", // String | ID of tag parent
  'statementCode': "statementCode_example", // String | Statement Code
  'fsTemplate': "industrial", // String | Template
  'nextPage': "" // String | Gets the next page of data from a previous API call
};

dataTag_api.filterDataTags(opts).then(function(data) {
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

[**ApiResponseDataTags**](ApiResponseDataTags.md)

<a name="getAllDataTags"></a>
# **getAllDataTags**
> ApiResponseDataTags getAllDataTags(opts)

Get All Data Tags

Returns All Data Tags

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataTag_api = new intrinio.DataTagApi();

var opts = { 
  'nextPage': "" // String | Gets the next page of data from a previous API call
};

dataTag_api.getAllDataTags(opts).then(function(data) {
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

[**ApiResponseDataTags**](ApiResponseDataTags.md)

<a name="getDataTagById"></a>
# **getDataTagById**
> DataTag getDataTagById(identifier)

Get a Data Tag by ID

Returns a Data Tag with the specified &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataTag_api = new intrinio.DataTagApi();

var identifier = "identifier_example"; // String | The Intrinio ID or the code-name of the Data Tag


dataTag_api.getDataTagById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID or the code-name of the Data Tag | 

### Return type

[**DataTag**](DataTag.md)

<a name="searchDataTags"></a>
# **searchDataTags**
> ApiResponseDataTags searchDataTags(query)

Search Data Tags

Searches for Data Tags matching the text &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataTag_api = new intrinio.DataTagApi();

var query = "query_example"; // String | 


dataTag_api.searchDataTags(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 

### Return type

[**ApiResponseDataTags**](ApiResponseDataTags.md)

