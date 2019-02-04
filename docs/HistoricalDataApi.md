# intrinioSDK.HistoricalDataApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricalData**](HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Historical Data


<a name="getHistoricalData"></a>
# **getHistoricalData**
> ApiResponseHistoricalData getHistoricalData(identifier, tag, opts)

Historical Data

Returns historical values for the given &#x60;tag&#x60; and the entity represented by the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var historicalDataAPI = new intrinioSDK.HistoricalDataApi();

var identifier = "AAPL"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag ID or code-name

var opts = { 
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
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseHistoricalData**](ApiResponseHistoricalData.md)

