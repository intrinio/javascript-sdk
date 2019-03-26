# intrinioSDK.HistoricalDataApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricalData**](HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Historical Data


<a name="getHistoricalData"></a>
# **getHistoricalData**
> ApiResponseHistoricalData getHistoricalData(identifier, tag, opts)

Historical Data

$$v2_historical_data_description$$

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var historicalDataAPI = new intrinioSDK.HistoricalDataApi();

var identifier = "$$v2_historical_data_identifier_default$$"; // String | $$v2_historical_data_identifier_description$$

var tag = "$$v2_historical_data_item_default$$"; // String | $$v2_historical_data_item_description$$

var opts = { 
  'frequency': "daily", // String | Return historical data in the given frequency
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2015-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

historicalDataAPI.getHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| $$v2_historical_data_identifier_description$$ | 
 **tag** | **String**| $$v2_historical_data_item_description$$ | 
 **frequency** | **String**| Return historical data in the given frequency | [optional] [default to daily]
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseHistoricalData**](ApiResponseHistoricalData.md)

