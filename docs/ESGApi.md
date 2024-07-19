# intrinioSDK.ESGApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEsgCompanies**](ESGApi.md#getEsgCompanies) | **GET** /esg/companies | ESG Companies
[**getEsgCompanyComprehensiveRatings**](ESGApi.md#getEsgCompanyComprehensiveRatings) | **GET** /esg/{identifier}/comprehensive | ESG Company Comprehensive Ratings History
[**getEsgCompanyRatings**](ESGApi.md#getEsgCompanyRatings) | **GET** /esg/{identifier} | ESG Company Ratings History
[**getEsgLatest**](ESGApi.md#getEsgLatest) | **GET** /esg | ESG Latest
[**getEsgLatestComprehensive**](ESGApi.md#getEsgLatestComprehensive) | **GET** /esg/comprehensive | ESG Latest Comprehensive



[//]: # (START_OPERATION)

[//]: # (CLASS:ESGApi)

[//]: # (METHOD:getEsgCompanies)

[//]: # (RETURN_TYPE:ApiResponseESGCompanies)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseESGCompanies.md)

[//]: # (OPERATION:getEsgCompanies_v2)

[//]: # (ENDPOINT:/esg/companies)

[//]: # (DOCUMENT_LINK:ESGApi.md#getEsgCompanies)

<a name="getEsgCompanies"></a>
## **getEsgCompanies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEsgCompanies_v2)

[//]: # (START_OVERVIEW)

> ApiResponseESGCompanies getEsgCompanies(opts)

#### ESG Companies



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eSG = new intrinioSDK.ESGApi();

var opts = { 
  'country': "\"Canada\"",
  'industry': "\"Retail\"",
  'ticker': "\"SHOP\"",
  'pageSize': 100,
  'nextPage': "\"~null\""
};

eSG.getEsgCompanies(opts).then(function(data) {
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
 **country** | String|  | [optional]  &nbsp;
 **industry** | String|  | [optional]  &nbsp;
 **ticker** | String|  | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseESGCompanies**](ApiResponseESGCompanies.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ESGApi)

[//]: # (METHOD:getEsgCompanyComprehensiveRatings)

[//]: # (RETURN_TYPE:ApiResponseESGCompanyComprehensiveRatingHistory)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseESGCompanyComprehensiveRatingHistory.md)

[//]: # (OPERATION:getEsgCompanyComprehensiveRatings_v2)

[//]: # (ENDPOINT:/esg/{identifier}/comprehensive)

[//]: # (DOCUMENT_LINK:ESGApi.md#getEsgCompanyComprehensiveRatings)

<a name="getEsgCompanyComprehensiveRatings"></a>
## **getEsgCompanyComprehensiveRatings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEsgCompanyComprehensiveRatings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseESGCompanyComprehensiveRatingHistory getEsgCompanyComprehensiveRatings(identifier, opts)

#### ESG Company Comprehensive Ratings History



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eSG = new intrinioSDK.ESGApi();

var identifier = "\"AAPL\"";


var opts = { 
  'pageSize': 100,
  'nextPage': "\"~null\""
};

eSG.getEsgCompanyComprehensiveRatings(identifier, opts).then(function(data) {
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
 **identifier** | String| ISIN, Intrinio ID, or Ticker |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseESGCompanyComprehensiveRatingHistory**](ApiResponseESGCompanyComprehensiveRatingHistory.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ESGApi)

[//]: # (METHOD:getEsgCompanyRatings)

[//]: # (RETURN_TYPE:ApiResponseESGCompanyRatingHistory)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseESGCompanyRatingHistory.md)

[//]: # (OPERATION:getEsgCompanyRatings_v2)

[//]: # (ENDPOINT:/esg/{identifier})

[//]: # (DOCUMENT_LINK:ESGApi.md#getEsgCompanyRatings)

<a name="getEsgCompanyRatings"></a>
## **getEsgCompanyRatings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEsgCompanyRatings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseESGCompanyRatingHistory getEsgCompanyRatings(identifier, opts)

#### ESG Company Ratings History



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eSG = new intrinioSDK.ESGApi();

var identifier = "\"AAPL\"";


var opts = { 
  'pageSize': 100,
  'nextPage': "\"~null\""
};

eSG.getEsgCompanyRatings(identifier, opts).then(function(data) {
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
 **identifier** | String| ISIN, Intrinio ID, or Ticker |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseESGCompanyRatingHistory**](ApiResponseESGCompanyRatingHistory.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ESGApi)

[//]: # (METHOD:getEsgLatest)

[//]: # (RETURN_TYPE:ApiResponseESGLatest)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseESGLatest.md)

[//]: # (OPERATION:getEsgLatest_v2)

[//]: # (ENDPOINT:/esg)

[//]: # (DOCUMENT_LINK:ESGApi.md#getEsgLatest)

<a name="getEsgLatest"></a>
## **getEsgLatest**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEsgLatest_v2)

[//]: # (START_OVERVIEW)

> ApiResponseESGLatest getEsgLatest(opts)

#### ESG Latest



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eSG = new intrinioSDK.ESGApi();

var opts = { 
  'country': "\"USA\"",
  'pageSize': 100,
  'nextPage': "\"~null\""
};

eSG.getEsgLatest(opts).then(function(data) {
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
 **country** | String|  | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseESGLatest**](ApiResponseESGLatest.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ESGApi)

[//]: # (METHOD:getEsgLatestComprehensive)

[//]: # (RETURN_TYPE:ApiResponseESGLatestComprehensive)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseESGLatestComprehensive.md)

[//]: # (OPERATION:getEsgLatestComprehensive_v2)

[//]: # (ENDPOINT:/esg/comprehensive)

[//]: # (DOCUMENT_LINK:ESGApi.md#getEsgLatestComprehensive)

<a name="getEsgLatestComprehensive"></a>
## **getEsgLatestComprehensive**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEsgLatestComprehensive_v2)

[//]: # (START_OVERVIEW)

> ApiResponseESGLatestComprehensive getEsgLatestComprehensive(opts)

#### ESG Latest Comprehensive



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eSG = new intrinioSDK.ESGApi();

var opts = { 
  'country': "\"USA\"",
  'pageSize': 100,
  'nextPage': "\"~null\""
};

eSG.getEsgLatestComprehensive(opts).then(function(data) {
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
 **country** | String|  | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseESGLatestComprehensive**](ApiResponseESGLatestComprehensive.md)



[//]: # (END_OPERATION)

