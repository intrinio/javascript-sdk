# intrinioSDK.HistoricalDataApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricalData**](HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Historical Data



[//]: # (START_OPERATION)

[//]: # (CLASS:HistoricalDataApi)

[//]: # (METHOD:getHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseHistoricalData.md)

[//]: # (OPERATION:getHistoricalData_v2)

[//]: # (ENDPOINT:/historical_data/{identifier}/{tag})

[//]: # (DOCUMENT_LINK:HistoricalDataApi.md#getHistoricalData)

<a name="getHistoricalData"></a>
## **getHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseHistoricalData getHistoricalData(identifier, tag, opts)

#### Historical Data


Returns historical values for the given &#x60;tag&#x60; and the entity represented by the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var historicalDataAPI = new intrinioSDK.HistoricalDataApi();

var identifier = "AAPL"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag ID or code (<a href='https://data.intrinio.com/data-tags'>reference</a>)

var opts = { 
  'frequency': "daily", // String | Return historical data in the given frequency
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2015-01-01"), // Date | Get historical data on or after this date
  'endDate': null, // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

historicalDataAPI.getHistoricalData(identifier, tag, opts).then(function(data) {
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
 **identifier** | String| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
 **frequency** | String| Return historical data in the given frequency | [optional] [default to daily] &nbsp;
 **type** | String| Filter by type, when applicable | [optional]  &nbsp;
 **startDate** | Date| Get historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Get historical date on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseHistoricalData**](ApiResponseHistoricalData.md)



[//]: # (END_OPERATION)

