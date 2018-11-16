# intrinio.StockExchangeApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterStockExchanges**](StockExchangeApi.md#filterStockExchanges) | **GET** /stock_exchanges/filter | Filter Stock Exchanges
[**getAllStockExchanges**](StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | Get All Stock Exchanges
[**getStockExchangeById**](StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Get Stock Exchange by ID
[**getStockExchangePrices**](StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Get Stock Prices by Exchange
[**getStockExchangeSecurities**](StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Get Securities by Exchange


<a name="filterStockExchanges"></a>
# **filterStockExchanges**
> [StockExchange] filterStockExchanges(opts)

Filter Stock Exchanges

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var opts = { 
  'city': "city_example", // String | Filter by city
  'country': "country_example", // String | Filter by country
  'countryCode': "countryCode_example", // String | Filter by ISO country code
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[StockExchange]**](StockExchange.md)

<a name="getAllStockExchanges"></a>
# **getAllStockExchanges**
> [StockExchange] getAllStockExchanges(opts)

Get All Stock Exchanges

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

stockExchange_api.getAllStockExchanges(opts).then(function(data) {
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

[**[StockExchange]**](StockExchange.md)

<a name="getStockExchangeById"></a>
# **getStockExchangeById**
> StockExchange getStockExchangeById(identifier)

Get Stock Exchange by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "identifier_example"; // String | A Stock Exchange identifier (MIC or Intrinio ID)


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

<a name="getStockExchangePrices"></a>
# **getStockExchangePrices**
> [StockPrice] getStockExchangePrices(identifier, opts)

Get Stock Prices by Exchange

Return daily Stock Prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "identifier_example"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  '_date': new Date("2013-10-20"), // Date | The date for which to return prices
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[StockPrice]**](StockPrice.md)

<a name="getStockExchangeSecurities"></a>
# **getStockExchangeSecurities**
> [Security] getStockExchangeSecurities(identifier, opts)

Get Securities by Exchange

Return Securities on the Stock Exchange with &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var stockExchange_api = new intrinio.StockExchangeApi();

var identifier = "identifier_example"; // String | A Stock Exchange identifier (MIC or Intrinio ID)

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[Security]**](Security.md)

