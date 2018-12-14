# intrinio.FilingApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterFilings**](FilingApi.md#filterFilings) | **GET** /filings/filter | Filter Filings
[**getAllFilings**](FilingApi.md#getAllFilings) | **GET** /filings | Get All Filings
[**getFilingById**](FilingApi.md#getFilingById) | **GET** /filings/{id} | Get a Filing by ID


<a name="filterFilings"></a>
# **filterFilings**
> ApiResponseFilings filterFilings(company, opts)

Filter Filings

Returns filings that match the specified filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filing_api = new intrinio.FilingApi();

var company = "AAPL"; // String | Filings for the given `company` identifier (ticker, CIK, LEI, Intrinio ID)

var opts = { 
  'reportType': null, // String | Filter by report type
  'startDate': new Date("2015-01-01"), // Date | Filed on or after the given date
  'endDate': new Date("2019-01-01"), // Date | Filed before or after the given date
  'nextPage': null // String | Gets the next page of data from a previous API call
};

filing_api.filterFilings(company, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) | 
 **reportType** | **String**| Filter by report type | [optional] 
 **startDate** | **Date**| Filed on or after the given date | [optional] 
 **endDate** | **Date**| Filed before or after the given date | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseFilings**](ApiResponseFilings.md)

<a name="getAllFilings"></a>
# **getAllFilings**
> ApiResponseFilings getAllFilings(opts)

Get All Filings

Returns all filings

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filing_api = new intrinio.FilingApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

filing_api.getAllFilings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseFilings**](ApiResponseFilings.md)

<a name="getFilingById"></a>
# **getFilingById**
> Filing getFilingById(id)

Get a Filing by ID

Return the filing with the given ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var filing_api = new intrinio.FilingApi();

var id = "fil_7Kn2P6"; // String | The Intrinio ID of the Filing


filing_api.getFilingById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Intrinio ID of the Filing | 

### Return type

[**Filing**](Filing.md)

