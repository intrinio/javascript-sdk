# intrinio.StockExchangeApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterStockExchanges**](StockExchangeApi.md#filterStockExchanges) | **GET** /stock_exchanges/filter | Filter Stock Exchanges
[**getAllStockExchanges**](StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | Get All Stock Exchanges
[**getStockExchangeById**](StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Get Stock Exchange by ID
[**getStockExchangePriceAdjustments**](StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Get Stock Price Adjustments by Exchange
[**getStockExchangePrices**](StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Get Stock Prices by Exchange
[**getStockExchangeSecurities**](StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Get Securities by Exchange


<a name="filterStockExchanges"></a>
# **filterStockExchanges**
> ApiResponseStockExchanges filterStockExchanges(opts)

Filter Stock Exchanges

Return Stock Exchanges matching the given filters

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var opts = { 
  'city': "city_example", // String | Filter by city
  'country': "CHINA", // String | Filter by country
  'countryCode': "countryCode_example" // String | Filter by ISO country code
};

stockExchange_api.filterStockExchanges(opts).then(function(data) {
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

### Return type

[**ApiResponseStockExchanges**](ApiResponseStockExchanges.md)

<a name="getAllStockExchanges"></a>
# **getAllStockExchanges**
> ApiResponseStockExchanges getAllStockExchanges()

Get All Stock Exchanges

Return All Stock Exchanges

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

stockExchange_api.getAllStockExchanges().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponseStockExchanges**](ApiResponseStockExchanges.md)

<a name="getStockExchangeById"></a>
# **getStockExchangeById**
> StockExchange getStockExchangeById(identifier)

Get Stock Exchange by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "XSHG"; // String | A Stock Exchange identifier (MIC or Intrinio ID)


stockExchange_api.getStockExchangeById(identifier).then(function(data) {
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

Get Stock Price Adjustments by Exchange

Return stock price adjustments for the Stock Exchange with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  '_date': new Date("2018-08-14"), // Date | The date for which to return price adjustments
  'nextPage': "" // String | Gets the next page of data from a previous API call
};

stockExchange_api.getStockExchangePriceAdjustments(identifier, opts).then(function(data) {
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
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeStockPriceAdjustments**](ApiResponseStockExchangeStockPriceAdjustments.md)

<a name="getStockExchangePrices"></a>
# **getStockExchangePrices**
> ApiResponseStockExchangeStockPrices getStockExchangePrices(identifier, opts)

Get Stock Prices by Exchange

Return daily Stock Prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  '_date': new Date("2018-08-14"), // Date | The date for which to return prices
  'nextPage': "" // String | Gets the next page of data from a previous API call
};

stockExchange_api.getStockExchangePrices(identifier, opts).then(function(data) {
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
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeStockPrices**](ApiResponseStockExchangeStockPrices.md)

<a name="getStockExchangeSecurities"></a>
# **getStockExchangeSecurities**
> ApiResponseStockExchangeSecurities getStockExchangeSecurities(identifier, opts)

Get Securities by Exchange

Return Securities traded on the Stock Exchange with &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "USCOMP"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  'nextPage': "" // String | Gets the next page of data from a previous API call
};

stockExchange_api.getStockExchangeSecurities(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Stock Exchange identifier (MIC or Intrinio ID) | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockExchangeSecurities**](ApiResponseStockExchangeSecurities.md)

