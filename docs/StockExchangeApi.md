# intrinioSDK.StockExchangeApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllStockExchanges**](StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | All Stock Exchanges
[**getStockExchangeById**](StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Lookup Stock Exchange
[**getStockExchangePriceAdjustments**](StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Stock Price Adjustments by Exchange
[**getStockExchangePrices**](StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Stock Prices by Exchange
[**getStockExchangeRealtimePrices**](StockExchangeApi.md#getStockExchangeRealtimePrices) | **GET** /stock_exchanges/{identifier}/prices/realtime | Realtime Stock Prices by Exchange
[**getStockExchangeSecurities**](StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Securities by Exchange


<a name="getAllStockExchanges"></a>
# **getAllStockExchanges**
> ApiResponseStockExchanges getAllStockExchanges(opts)

All Stock Exchanges

Returns all Stock Exchanges. Returns Stock Exchanges matching parameters when specified.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var opts = { 
  'city': "city_example", // String | Filter by city
  'country': "CHINA", // String | Filter by country
  'countryCode': "countryCode_example", // String | Filter by ISO country code
  'pageSize': 100 // Number | The number of results to return
};

stockExchangeAPI.getAllStockExchanges(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **String**| Filter by city | [optional] 
 **country** | **String**| Filter by country | [optional] 
 **countryCode** | **String**| Filter by ISO country code | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseStockExchanges**](ApiResponseStockExchanges.md)

<a name="getStockExchangeById"></a>
# **getStockExchangeById**
> StockExchange getStockExchangeById(identifier)

Lookup Stock Exchange

Returns the Stock Exchange with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var identifier = "XSHG"; // String | A Stock Exchange identifier (MIC or Intrinio ID)


stockExchangeAPI.getStockExchangeById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 

### Return type

[**StockExchange**](StockExchange.md)

<a name="getStockExchangePriceAdjustments"></a>
# **getStockExchangePriceAdjustments**
> ApiResponseStockExchangeStockPriceAdjustments getStockExchangePriceAdjustments(identifier, opts)

Stock Price Adjustments by Exchange

Returns stock price adjustments for the Stock Exchange with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  '_date': new Date("2018-08-14"), // Date | The date for which to return price adjustments
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

stockExchangeAPI.getStockExchangePriceAdjustments(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 
 **_date** | **Date**| The date for which to return price adjustments | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeStockPriceAdjustments**](ApiResponseStockExchangeStockPriceAdjustments.md)

<a name="getStockExchangePrices"></a>
# **getStockExchangePrices**
> ApiResponseStockExchangeStockPrices getStockExchangePrices(identifier, opts)

Stock Prices by Exchange

Returns end-of-day stock prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  '_date': new Date("2018-08-14"), // Date | The date for which to return prices
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

stockExchangeAPI.getStockExchangePrices(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 
 **_date** | **Date**| The date for which to return prices | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeStockPrices**](ApiResponseStockExchangeStockPrices.md)

<a name="getStockExchangeRealtimePrices"></a>
# **getStockExchangeRealtimePrices**
> ApiResponseStockExchangeRealtimeStockPrices getStockExchangeRealtimePrices(identifier, opts)

Realtime Stock Prices by Exchange

Returns realtime stock prices for the Stock Exchange with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  'source': null, // String | Return realtime prices from the specified data source
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

stockExchangeAPI.getStockExchangeRealtimePrices(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 
 **source** | **String**| Return realtime prices from the specified data source | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeRealtimeStockPrices**](ApiResponseStockExchangeRealtimeStockPrices.md)

<a name="getStockExchangeSecurities"></a>
# **getStockExchangeSecurities**
> ApiResponseStockExchangeSecurities getStockExchangeSecurities(identifier, opts)

Securities by Exchange

Returns Securities traded on the Stock Exchange with &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchangeAPI = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

stockExchangeAPI.getStockExchangeSecurities(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeSecurities**](ApiResponseStockExchangeSecurities.md)

