# intrinioSDK.CryptoApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoBookAsks**](CryptoApi.md#getCryptoBookAsks) | **GET** /crypto/book/asks | Crypto Book Asks
[**getCryptoBookBids**](CryptoApi.md#getCryptoBookBids) | **GET** /crypto/book/bids | Crypto Book Bids
[**getCryptoBookSummary**](CryptoApi.md#getCryptoBookSummary) | **GET** /crypto/book | Crypto Book Summary
[**getCryptoCurrencies**](CryptoApi.md#getCryptoCurrencies) | **GET** /crypto/currencies | Crypto Currencies
[**getCryptoExchanges**](CryptoApi.md#getCryptoExchanges) | **GET** /crypto/exchanges | Crypto Exchanges
[**getCryptoPairs**](CryptoApi.md#getCryptoPairs) | **GET** /crypto/pairs | Crypto Pairs
[**getCryptoPrices**](CryptoApi.md#getCryptoPrices) | **GET** /crypto/prices | Crypto Prices
[**getCryptoSnapshot**](CryptoApi.md#getCryptoSnapshot) | **GET** /crypto/snapshot | Crypto Snapshot
[**getCryptoStats**](CryptoApi.md#getCryptoStats) | **GET** /crypto/stats | Crypto Stats


<a name="getCryptoBookAsks"></a>
# **getCryptoBookAsks**
> ApiResponseCryptoBookAsks getCryptoBookAsks(opts)

Crypto Book Asks

Returns the entire ask order book for a given Crypto Currency Pair and Crypto Exchange.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the order book asks for the given Crypto Currency Pair.
  'exchange': "gemini", // String | Return the order book asks for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book asks for the given Crypto Currency.
};

cryptoAPI.getCryptoBookAsks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the order book asks for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book asks for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book asks for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBookAsks**](ApiResponseCryptoBookAsks.md)

<a name="getCryptoBookBids"></a>
# **getCryptoBookBids**
> ApiResponseCryptoBookBids getCryptoBookBids(opts)

Crypto Book Bids

Returns the entire bid order book for a given Crypto Currency Pair and Crypto Exchange.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the order book bids for the given Crypto Currency Pair.
  'exchange': "gemini", // String | Return the order book bids for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book bids for the given Crypto Currency.
};

cryptoAPI.getCryptoBookBids(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the order book bids for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book bids for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book bids for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBookBids**](ApiResponseCryptoBookBids.md)

<a name="getCryptoBookSummary"></a>
# **getCryptoBookSummary**
> ApiResponseCryptoBook getCryptoBookSummary(opts)

Crypto Book Summary

Returns the order book summary (bid/ask prices and size) for a given Crypto Currency Pair and Crypto Exchange.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'levels': 50, // Number | The number of prices/levels to return on each side. For example, the max of 50 levels will return up to 50 bid prices and 50 ask prices.
  'pair': "btcusd", // String | Return the order book summary for the given Crypto Currency Pair.
  'exchange': "gemini", // String | Return the order book summary for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book summary for the given Crypto Currency.
};

cryptoAPI.getCryptoBookSummary(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levels** | **Number**| The number of prices/levels to return on each side. For example, the max of 50 levels will return up to 50 bid prices and 50 ask prices. | [optional] 
 **pair** | **String**| Return the order book summary for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book summary for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book summary for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBook**](ApiResponseCryptoBook.md)

<a name="getCryptoCurrencies"></a>
# **getCryptoCurrencies**
> ApiResponseCryptoCurrencies getCryptoCurrencies(opts)

Crypto Currencies

Returns a list of Crypto Currencies for which prices are available.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "gemini" // String | Returns Crypto Currencies traded on the given Crypto Exchange.
};

cryptoAPI.getCryptoCurrencies(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Returns Crypto Currencies traded on the given Crypto Exchange. | [optional] 

### Return type

[**ApiResponseCryptoCurrencies**](ApiResponseCryptoCurrencies.md)

<a name="getCryptoExchanges"></a>
# **getCryptoExchanges**
> ApiResponseCryptoExchanges getCryptoExchanges(opts)

Crypto Exchanges

Returns a list of Crypto Exchanges for which prices are available.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd" // String | Returns Crypto Currencies traded on the given Crypto Exchange.
};

cryptoAPI.getCryptoExchanges(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Returns Crypto Currencies traded on the given Crypto Exchange. | [optional] 

### Return type

[**ApiResponseCryptoExchanges**](ApiResponseCryptoExchanges.md)

<a name="getCryptoPairs"></a>
# **getCryptoPairs**
> ApiResponseCryptoPairs getCryptoPairs(opts)

Crypto Pairs

Returns a list of Crypto Currency Pairs for which data is available.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "gemini", // String | Return pairs traded on the given Crypto Exchange.
  'currency': "BTC", // String | Return pairs with one side being the given Crypto Currency.
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPairs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Return pairs traded on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return pairs with one side being the given Crypto Currency. | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoPairs**](ApiResponseCryptoPairs.md)

<a name="getCryptoPrices"></a>
# **getCryptoPrices**
> ApiResponseCryptoPrices getCryptoPrices(timeframe, opts)

Crypto Prices

Returns a list of available Crypto Currency Prices.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var timeframe = "h1"; // String | The time interval for the prices.

var opts = { 
  'pair': "btcusd", // String | Return prices for the given Crypto Currency Pair.
  'exchange': "gemini", // String | Return prices for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return prices for the given Crypto Currency.
  'timezone': "UTC", // String | Return price date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': "2018-01-01", // String | Return Crypto Prices on or after this date.
  'startTime': "14:20:00", // String | Return Crypto Prices at or after this time (24-hour).
  'endDate': "2019-01-01", // String | Return Crypto Prices on or before this date.
  'endTime': "21:01:21", // String | Return Crypto Prices at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPrices(timeframe, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeframe** | **String**| The time interval for the prices. | 
 **pair** | **String**| Return prices for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return prices for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return prices for the given Crypto Currency. | [optional] 
 **timezone** | **String**| Return price date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **String**| Return Crypto Prices on or after this date. | [optional] 
 **startTime** | **String**| Return Crypto Prices at or after this time (24-hour). | [optional] 
 **endDate** | **String**| Return Crypto Prices on or before this date. | [optional] 
 **endTime** | **String**| Return Crypto Prices at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoPrices**](ApiResponseCryptoPrices.md)

<a name="getCryptoSnapshot"></a>
# **getCryptoSnapshot**
> ApiResponseCryptoSnapshot getCryptoSnapshot(opts)

Crypto Snapshot

Returns a market snapshot over that last 24 hours for the given currency pair and exchange.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the snapshot for the given Crypto Currency Pair.
  'exchange': "gemini", // String | Return the snapshot for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the snapshot for the given Crypto Currency.
};

cryptoAPI.getCryptoSnapshot(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the snapshot for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the snapshot for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the snapshot for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoSnapshot**](ApiResponseCryptoSnapshot.md)

<a name="getCryptoStats"></a>
# **getCryptoStats**
> ApiResponseCryptoStats getCryptoStats(opts)

Crypto Stats

Returns available stats on Crypto Currencies.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "gemini", // String | Returns stats for Crypto Currencies that trade on the specified Crypto Exchange.
  'currency': "BTC" // String | Returns stats for the specified Crypto Currency.
};

cryptoAPI.getCryptoStats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Returns stats for Crypto Currencies that trade on the specified Crypto Exchange. | [optional] 
 **currency** | **String**| Returns stats for the specified Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoStats**](ApiResponseCryptoStats.md)

