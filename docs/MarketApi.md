# intrinioSDK.MarketApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarketStatus**](MarketApi.md#getMarketStatus) | **GET** /market/status | Market Status



[//]: # (START_OPERATION)

[//]: # (CLASS:MarketApi)

[//]: # (METHOD:getMarketStatus)

[//]: # (RETURN_TYPE:MarketStatusResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:MarketStatusResult.md)

[//]: # (OPERATION:getMarketStatus_v2)

[//]: # (ENDPOINT:/market/status)

[//]: # (DOCUMENT_LINK:MarketApi.md#getMarketStatus)

<a name="getMarketStatus"></a>
## **getMarketStatus**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getMarketStatus_v2)

[//]: # (START_OVERVIEW)

> MarketStatusResult getMarketStatus()

#### Market Status


Returns the market status.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var market = new intrinioSDK.MarketApi();

market.getMarketStatus().then(function(data) {
  data = JSON.stringify(data, null, 2)
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)

This endpoint does not need any parameter.
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**MarketStatusResult**](MarketStatusResult.md)



[//]: # (END_OPERATION)

