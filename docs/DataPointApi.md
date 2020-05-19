# intrinioSDK.DataPointApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataPointNumber**](DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Data Point (Number)
[**getDataPointText**](DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Data Point (Text)



[//]: # (START_OPERATION)

[//]: # (CLASS:DataPointApi)

[//]: # (METHOD:getDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getDataPointNumber_v2)

[//]: # (ENDPOINT:/data_point/{identifier}/{tag}/number)

[//]: # (DOCUMENT_LINK:DataPointApi.md#getDataPointNumber)

<a name="getDataPointNumber"></a>
## **getDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getDataPointNumber(identifier, tag)

#### Data Point (Number)


$$v2_data_point_number_description$$

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var dataPointAPI = new intrinioSDK.DataPointApi();

var identifier = "$$v2_data_point_identifier_default$$"; // String | $$v2_data_point_identifier_description$$

var tag = "$$v2_data_point_item_number_default$$"; // String | $$v2_data_point_item_description$$


dataPointAPI.getDataPointNumber(identifier, tag).then(function(data) {
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
 **identifier** | String| $$v2_data_point_identifier_description$$ |  &nbsp;
 **tag** | String| $$v2_data_point_item_description$$ |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:DataPointApi)

[//]: # (METHOD:getDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getDataPointText_v2)

[//]: # (ENDPOINT:/data_point/{identifier}/{tag}/text)

[//]: # (DOCUMENT_LINK:DataPointApi.md#getDataPointText)

<a name="getDataPointText"></a>
## **getDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getDataPointText(identifier, tag)

#### Data Point (Text)


$$v2_data_point_text_description$$

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var dataPointAPI = new intrinioSDK.DataPointApi();

var identifier = "$$v2_data_point_identifier_default$$"; // String | $$v2_data_point_identifier_description$$

var tag = "$$v2_data_point_item_text_default$$"; // String | $$v2_data_point_item_description$$


dataPointAPI.getDataPointText(identifier, tag).then(function(data) {
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
 **identifier** | String| $$v2_data_point_identifier_description$$ |  &nbsp;
 **tag** | String| $$v2_data_point_item_description$$ |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)

