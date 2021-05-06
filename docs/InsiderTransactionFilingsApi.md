# intrinioSDK.InsiderTransactionFilingsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllInsiderTransactionFilings**](InsiderTransactionFilingsApi.md#getAllInsiderTransactionFilings) | **GET** /insider_transaction_filings | All Insider Transactions Filings



[//]: # (START_OPERATION)

[//]: # (CLASS:InsiderTransactionFilingsApi)

[//]: # (METHOD:getAllInsiderTransactionFilings)

[//]: # (RETURN_TYPE:ApiResponseOwnerInsiderTransactionFilings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOwnerInsiderTransactionFilings.md)

[//]: # (OPERATION:getAllInsiderTransactionFilings_v2)

[//]: # (ENDPOINT:/insider_transaction_filings)

[//]: # (DOCUMENT_LINK:InsiderTransactionFilingsApi.md#getAllInsiderTransactionFilings)

<a name="getAllInsiderTransactionFilings"></a>
## **getAllInsiderTransactionFilings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllInsiderTransactionFilings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOwnerInsiderTransactionFilings getAllInsiderTransactionFilings(opts)

#### All Insider Transactions Filings


Returns all insider transactions filings fitting the optional supplied start and end date.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var insiderTransactionFilings = new intrinioSDK.InsiderTransactionFilingsApi();

var opts = { 
  'startDate': new Date("2015-01-01"),
  'endDate': null,
  'pageSize': 100,
  'nextPage': null
};

insiderTransactionFilings.getAllInsiderTransactionFilings(opts).then(function(data) {
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
 **startDate** | Date| Filed on or after the given date | [optional]  &nbsp;
 **endDate** | Date| Filed before or after the given date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOwnerInsiderTransactionFilings**](ApiResponseOwnerInsiderTransactionFilings.md)



[//]: # (END_OPERATION)

