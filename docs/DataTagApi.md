# intrinioSDK.DataTagApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllDataTags**](DataTagApi.md#getAllDataTags) | **GET** /data_tags | All Data Tags
[**getDataTagById**](DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Lookup Data Tag
[**searchDataTags**](DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags



[//]: # (START_OPERATION)

[//]: # (CLASS:DataTagApi)

[//]: # (METHOD:getAllDataTags)

[//]: # (RETURN_TYPE:ApiResponseDataTags)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseDataTags.md)

[//]: # (OPERATION:getAllDataTags_v2)

[//]: # (ENDPOINT:/data_tags)

[//]: # (DOCUMENT_LINK:DataTagApi.md#getAllDataTags)

<a name="getAllDataTags"></a>
## **getAllDataTags**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllDataTags_v2)

[//]: # (START_OVERVIEW)

> ApiResponseDataTags getAllDataTags(opts)

#### All Data Tags


Returns all Data Tags. Returns Data Tags matching parameters when specified.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var dataTag = new intrinioSDK.DataTagApi();

var opts = { 
  'tag': null,
  'type': null,
  'parent': null,
  'statementCode': "income_statement",
  'fsTemplate': "industrial",
  'pageSize': 100,
  'nextPage': null
};

dataTag.getAllDataTags(opts).then(function(data) {
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
 **tag** | String| Tag | [optional]  &nbsp;
 **type** | String| Type | [optional]  &nbsp;
 **parent** | String| ID of tag parent | [optional]  &nbsp;
 **statementCode** | String| Statement Code | [optional]  &nbsp;
 **fsTemplate** | String| Template | [optional] [default to industrial] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseDataTags**](ApiResponseDataTags.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:DataTagApi)

[//]: # (METHOD:getDataTagById)

[//]: # (RETURN_TYPE:DataTag)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:DataTag.md)

[//]: # (OPERATION:getDataTagById_v2)

[//]: # (ENDPOINT:/data_tags/{identifier})

[//]: # (DOCUMENT_LINK:DataTagApi.md#getDataTagById)

<a name="getDataTagById"></a>
## **getDataTagById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getDataTagById_v2)

[//]: # (START_OVERVIEW)

> DataTag getDataTagById(identifier)

#### Lookup Data Tag


Returns the Data Tag with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var dataTag = new intrinioSDK.DataTagApi();

var identifier = "marketcap";

dataTag.getDataTagById(identifier).then(function(data) {
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
 **identifier** | String| The Intrinio ID or the code-name of the Data Tag |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**DataTag**](DataTag.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:DataTagApi)

[//]: # (METHOD:searchDataTags)

[//]: # (RETURN_TYPE:ApiResponseDataTagsSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseDataTagsSearch.md)

[//]: # (OPERATION:searchDataTags_v2)

[//]: # (ENDPOINT:/data_tags/search)

[//]: # (DOCUMENT_LINK:DataTagApi.md#searchDataTags)

<a name="searchDataTags"></a>
## **searchDataTags**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchDataTags_v2)

[//]: # (START_OVERVIEW)

> ApiResponseDataTagsSearch searchDataTags(query, opts)

#### Search Data Tags


Searches for Data Tags matching the text &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var dataTag = new intrinioSDK.DataTagApi();

var query = "revenue";

var opts = { 
  'pageSize': 100
};

dataTag.searchDataTags(query, opts).then(function(data) {
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
 **query** | String|  |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseDataTagsSearch**](ApiResponseDataTagsSearch.md)



[//]: # (END_OPERATION)

