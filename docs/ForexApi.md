# intrinioSDK.ForexApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getForexCurrencies**](ForexApi.md#getForexCurrencies) | **GET** /forex/currencies | Forex Currencies
[**getForexPairs**](ForexApi.md#getForexPairs) | **GET** /forex/pairs | Forex Currency Pairs
[**getForexPrices**](ForexApi.md#getForexPrices) | **GET** /forex/prices/{pair}/{timeframe} | Forex Currency Prices


<a name="getForexCurrencies"></a>
# **getForexCurrencies**
> ApiResponseForexCurrencies getForexCurrencies()

Forex Currencies

Returns a list of forex currencies for which prices are available.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var forexAPI = new intrinioSDK.ForexApi();

forexAPI.getForexCurrencies().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponseForexCurrencies**](ApiResponseForexCurrencies.md)

<a name="getForexPairs"></a>
# **getForexPairs**
> ApiResponseForexPairs getForexPairs()

Forex Currency Pairs

Returns a list of currency pairs used to request foreign exchange (forex) market price data. The currency that is used as the reference is called quote currency and the currency that is quoted in relation is called the base currency. For example, in the pair code “EURGBP” with a price of 0.88, one Euro (base currency) can be exchanged for 0.88 British Pounds (quote currency).

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var forexAPI = new intrinioSDK.ForexApi();

forexAPI.getForexPairs().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponseForexPairs**](ApiResponseForexPairs.md)

<a name="getForexPrices"></a>
# **getForexPrices**
> ApiResponseForexPrices getForexPrices(pair, timeframe, opts)

Forex Currency Prices

Provides a list of forex price quotes for a given forex currency pair and timeframe.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var forexAPI = new intrinioSDK.ForexApi();

var pair = "EURUSD"; // String | The Forex Currency Pair code

var timeframe = "D1"; // String | The time interval for the quotes

var opts = { 
  'timezone': "UTC", // String | Returns trading times in this timezone
  'startDate': "2018-01-01", // String | Return Forex Prices on or after this date
  'startTime': "14:20:00", // String | Return Forex Prices at or after this time (24-hour)
  'endDate': "2019-01-01", // String | Return Forex Prices on or before this date
  'endTime': "21:01:21", // String | Return Forex Prices at or before this time (24-hour)
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

forexAPI.getForexPrices(pair, timeframe, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| The Forex Currency Pair code | 
 **timeframe** | **String**| The time interval for the quotes | 
 **timezone** | **String**| Returns trading times in this timezone | [optional] [default to UTC]
 **startDate** | **String**| Return Forex Prices on or after this date | [optional] 
 **startTime** | **String**| Return Forex Prices at or after this time (24-hour) | [optional] 
 **endDate** | **String**| Return Forex Prices on or before this date | [optional] 
 **endTime** | **String**| Return Forex Prices at or before this time (24-hour) | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseForexPrices**](ApiResponseForexPrices.md)

