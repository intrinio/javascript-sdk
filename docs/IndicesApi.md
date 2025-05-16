# intrinioSDK.IndicesApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIndexIntervals**](IndicesApi.md#getIndexIntervals) | **GET** /indices/{identifier}/intervals | Index Intervals



[//]: # (START_OPERATION)

[//]: # (CLASS:IndicesApi)

[//]: # (METHOD:getIndexIntervals)

[//]: # (RETURN_TYPE:ApiResponseIndexIntervals)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseIndexIntervals.md)

[//]: # (OPERATION:getIndexIntervals_v2)

[//]: # (ENDPOINT:/indices/{identifier}/intervals)

[//]: # (DOCUMENT_LINK:IndicesApi.md#getIndexIntervals)

<a name="getIndexIntervals"></a>
## **getIndexIntervals**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getIndexIntervals_v2)

[//]: # (START_OVERVIEW)

> ApiResponseIndexIntervals getIndexIntervals(identifier, intervalSize, opts)

#### Index Intervals


Returns a list of interval data points for a specified index, including open, close, high, low, volume, and average price. Intervals are available in 60-minute, 30-minute, 15-minute, 10-minute, 5-minute, and 1-minute increments.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var indices = new intrinioSDK.IndicesApi();

var identifier = "SPX";
var intervalSize = "5m";


var opts = { 
  'startDate': new Date("2023-01-01"),
  'startTime': "33300",
  'endDate': new Date("2023-02-01"),
  'endTime': "33300",
  'timezone': "UTC",
  'pageSize': 100
};

indices.getIndexIntervals(identifier, intervalSize, opts).then(function(data) {
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
 **identifier** | String| The index identifier |  &nbsp;
 **intervalSize** | String| The interval size to return in minutes (m) or hour (h). | [default to 5m] &nbsp;
 **startDate** | Date| Return intervals starting at the specified date | [optional]  &nbsp;
 **startTime** | String| Return intervals starting at the specified time on the &#x60;start_date&#x60; (24-hour in &#39;hh:mm:ss&#39; format) | [optional]  &nbsp;
 **endDate** | Date| Return intervals stopping at the specified date | [optional]  &nbsp;
 **endTime** | String| Return intervals stopping at the specified time on the &#x60;end_date&#x60; (24-hour in &#39;hh:mm:ss&#39; format) | [optional]  &nbsp;
 **timezone** | String| Interprets the input times in this time zone, as well as returns times in this timezone. | [optional] [default to UTC] &nbsp;
 **pageSize** | Number| The number of results to return per page. | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseIndexIntervals**](ApiResponseIndexIntervals.md)



[//]: # (END_OPERATION)

