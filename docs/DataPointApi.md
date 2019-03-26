# intrinioSDK.DataPointApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataPointNumber**](DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Data Point (Number)
[**getDataPointText**](DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Data Point (Text)


<a name="getDataPointNumber"></a>
# **getDataPointNumber**
> &#39;Number&#39; getDataPointNumber(identifier, tag)

Data Point (Number)

$$v2_data_point_number_description$$

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataPointAPI = new intrinioSDK.DataPointApi();

var identifier = "$$v2_data_point_identifier_default$$"; // String | $$v2_data_point_identifier_description$$

var tag = "$$v2_data_point_item_number_default$$"; // String | $$v2_data_point_item_description$$


dataPointAPI.getDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| $$v2_data_point_identifier_description$$ | 
 **tag** | **String**| $$v2_data_point_item_description$$ | 

### Return type

**&#39;Number&#39;**

<a name="getDataPointText"></a>
# **getDataPointText**
> &#39;String&#39; getDataPointText(identifier, tag)

Data Point (Text)

$$v2_data_point_text_description$$

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var dataPointAPI = new intrinioSDK.DataPointApi();

var identifier = "$$v2_data_point_identifier_default$$"; // String | $$v2_data_point_identifier_description$$

var tag = "$$v2_data_point_item_text_default$$"; // String | $$v2_data_point_item_description$$


dataPointAPI.getDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| $$v2_data_point_identifier_description$$ | 
 **tag** | **String**| $$v2_data_point_item_description$$ | 

### Return type

**&#39;String&#39;**

