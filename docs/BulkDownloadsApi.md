# intrinioSDK.BulkDownloadsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBulkDownloadLinks**](BulkDownloadsApi.md#getBulkDownloadLinks) | **GET** /bulk_downloads/links | All Links



[//]: # (START_OPERATION)

[//]: # (CLASS:BulkDownloadsApi)

[//]: # (METHOD:getBulkDownloadLinks)

[//]: # (RETURN_TYPE:ApiResponseBulkDownloadLinks)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseBulkDownloadLinks.md)

[//]: # (OPERATION:getBulkDownloadLinks_v2)

[//]: # (ENDPOINT:/bulk_downloads/links)

[//]: # (DOCUMENT_LINK:BulkDownloadsApi.md#getBulkDownloadLinks)

<a name="getBulkDownloadLinks"></a>
## **getBulkDownloadLinks**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getBulkDownloadLinks_v2)

[//]: # (START_OVERVIEW)

> ApiResponseBulkDownloadLinks getBulkDownloadLinks()

#### All Links


Returns all active bulk downloads for your account with links to download.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var bulkDownloads = new intrinioSDK.BulkDownloadsApi();

bulkDownloads.getBulkDownloadLinks().then(function(data) {
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

[**ApiResponseBulkDownloadLinks**](ApiResponseBulkDownloadLinks.md)



[//]: # (END_OPERATION)

