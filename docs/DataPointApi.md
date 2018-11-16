# intrinio.DataPointApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataPointNumber**](DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{item}/number | Get a Data Point (Number)
[**getDataPointText**](DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{item}/text | Get a Data Point (Text)


<a name="getDataPointNumber"></a>
# **getDataPointNumber**
> DataPointNumber getDataPointNumber(identifier, item)

Get a Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var dataPoint_api = new intrinio.DataPointApi();

var identifier = "identifier_example"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


dataPoint_api.getDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getDataPointText"></a>
# **getDataPointText**
> DataPointText getDataPointText(identifier, item)

Get a Data Point (Text)

Returns a text value for the given &#x60;item&#x60; and the entity with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var dataPoint_api = new intrinio.DataPointApi();

var identifier = "identifier_example"; // String | An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


dataPoint_api.getDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointText**](DataPointText.md)

