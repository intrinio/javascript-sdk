# intrinioSDK.AccountApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountCurrentUsage**](AccountApi.md#getAccountCurrentUsage) | **GET** /account | Account Current Usage



[//]: # (START_OPERATION)

[//]: # (CLASS:AccountApi)

[//]: # (METHOD:getAccountCurrentUsage)

[//]: # (RETURN_TYPE:ApiResponseAccountUsages)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseAccountUsages.md)

[//]: # (OPERATION:getAccountCurrentUsage_v2)

[//]: # (ENDPOINT:/account)

[//]: # (DOCUMENT_LINK:AccountApi.md#getAccountCurrentUsage)

<a name="getAccountCurrentUsage"></a>
## **getAccountCurrentUsage**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAccountCurrentUsage_v2)

[//]: # (START_OVERVIEW)

> ApiResponseAccountUsages getAccountCurrentUsage()

#### Account Current Usage


Returns a list of all access codes available with their current usage.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var account = new intrinioSDK.AccountApi();

account.getAccountCurrentUsage().then(function(data) {
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

[**ApiResponseAccountUsages**](ApiResponseAccountUsages.md)



[//]: # (END_OPERATION)

