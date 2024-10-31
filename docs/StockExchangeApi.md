# intrinioSDK.StockExchangeApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllStockExchanges**](StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | All Stock Exchanges
[**getStockExchangeById**](StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Lookup Stock Exchange
[**getStockExchangeGainers**](StockExchangeApi.md#getStockExchangeGainers) | **GET** /stock_exchanges/{identifier}/gainers | Top Gainers by Exchange
[**getStockExchangeLosers**](StockExchangeApi.md#getStockExchangeLosers) | **GET** /stock_exchanges/{identifier}/losers | Top Losers by Exchange
[**getStockExchangePriceAdjustments**](StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Stock Price Adjustments by Exchange
[**getStockExchangePrices**](StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Stock Prices by Exchange
[**getStockExchangeQuote**](StockExchangeApi.md#getStockExchangeQuote) | **GET** /stock_exchanges/{identifier}/quote | Realtime Quote Prices by Exchange
[**getStockExchangeRealtimePrices**](StockExchangeApi.md#getStockExchangeRealtimePrices) | **GET** /stock_exchanges/{identifier}/prices/realtime | Realtime Stock Prices by Exchange
[**getStockExchangeSecurities**](StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Securities by Exchange



[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getAllStockExchanges)

[//]: # (RETURN_TYPE:ApiResponseStockExchanges)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchanges.md)

[//]: # (OPERATION:getAllStockExchanges_v2)

[//]: # (ENDPOINT:/stock_exchanges)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getAllStockExchanges)

<a name="getAllStockExchanges"></a>
## **getAllStockExchanges**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllStockExchanges_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchanges getAllStockExchanges(opts)

#### All Stock Exchanges


Returns all Stock Exchanges matching the specified parameters

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var opts = { 
  'city': "New York",
  'country': "UNITED STATES OF AMERICA",
  'countryCode': "US",
  'pageSize': 100
};

stockExchange.getAllStockExchanges(opts).then(function(data) {
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
 **city** | String| Filter by city | [optional]  &nbsp;
 **country** | String| Filter by country | [optional]  &nbsp;
 **countryCode** | String| Filter by ISO country code | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchanges**](ApiResponseStockExchanges.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeById)

[//]: # (RETURN_TYPE:StockExchange)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:StockExchange.md)

[//]: # (OPERATION:getStockExchangeById_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier})

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeById)

<a name="getStockExchangeById"></a>
## **getStockExchangeById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeById_v2)

[//]: # (START_OVERVIEW)

> StockExchange getStockExchangeById(identifier)

#### Lookup Stock Exchange


Returns the Stock Exchange with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


stockExchange.getStockExchangeById(identifier).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**StockExchange**](StockExchange.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeGainers)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeMovers)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeMovers.md)

[//]: # (OPERATION:getStockExchangeGainers_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/gainers)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeGainers)

<a name="getStockExchangeGainers"></a>
## **getStockExchangeGainers**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeGainers_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeMovers getStockExchangeGainers(identifier, opts)

#### Top Gainers by Exchange


Returns securities with the highest gain percent change traded on the chosen stock exchange.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'minPrice': 8.14,
  'pageSize': 100,
  'source': "delayed_sip"
};

stockExchange.getStockExchangeGainers(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **minPrice** | Number| The minimum price filter | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **source** | String| Return the realtime price from the specified source instead of the most recent. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeMovers**](ApiResponseStockExchangeMovers.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeLosers)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeMovers)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeMovers.md)

[//]: # (OPERATION:getStockExchangeLosers_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/losers)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeLosers)

<a name="getStockExchangeLosers"></a>
## **getStockExchangeLosers**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeLosers_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeMovers getStockExchangeLosers(identifier, opts)

#### Top Losers by Exchange


Returns securities with the highest loss percent change traded on the chosen stock exchange.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'minPrice': 8.14,
  'pageSize': 100,
  'source': "delayed_sip"
};

stockExchange.getStockExchangeLosers(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **minPrice** | Number| The minimum price filter | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **source** | String| Return the realtime price from the specified source instead of the most recent. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeMovers**](ApiResponseStockExchangeMovers.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangePriceAdjustments)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeStockPriceAdjustments)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeStockPriceAdjustments.md)

[//]: # (OPERATION:getStockExchangePriceAdjustments_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/prices/adjustments)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangePriceAdjustments)

<a name="getStockExchangePriceAdjustments"></a>
## **getStockExchangePriceAdjustments**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangePriceAdjustments_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeStockPriceAdjustments getStockExchangePriceAdjustments(identifier, opts)

#### Stock Price Adjustments by Exchange


Returns stock price adjustments for the Stock Exchange with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'date': new Date("2018-08-14"),
  'pageSize': 100,
  'nextPage': null
};

stockExchange.getStockExchangePriceAdjustments(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **date** | Date| The date for which to return price adjustments | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeStockPriceAdjustments**](ApiResponseStockExchangeStockPriceAdjustments.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangePrices)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeStockPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeStockPrices.md)

[//]: # (OPERATION:getStockExchangePrices_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/prices)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangePrices)

<a name="getStockExchangePrices"></a>
## **getStockExchangePrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangePrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeStockPrices getStockExchangePrices(identifier, opts)

#### Stock Prices by Exchange


Returns end-of-day stock prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'date': new Date("2018-08-14"),
  'startDate': new Date("2020-08-14"),
  'endDate': new Date("2022-08-14"),
  'pageSize': 100,
  'nextPage': null,
  'tickers': ["AAPL,MSFT,NVDA"],
  'nextPage2': null
};

stockExchange.getStockExchangePrices(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **date** | Date| The date for which to return prices. May not be used with the start_date and end_date parameters. | [optional]  &nbsp;
 **startDate** | Date| The start of the date range you&#39;re querying. May not be used with date parameter. | [optional]  &nbsp;
 **endDate** | Date| The end of the date range you&#39;re querying. May not be used with date parameter. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **tickers** | [**[String]**](String.md)| The comma-delimited list of ticker symbols to filter down to. If not provided, the entire stock exchange is returned. | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeStockPrices**](ApiResponseStockExchangeStockPrices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeQuote)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeQuote)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeQuote.md)

[//]: # (OPERATION:getStockExchangeQuote_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/quote)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeQuote)

<a name="getStockExchangeQuote"></a>
## **getStockExchangeQuote**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeQuote_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeQuote getStockExchangeQuote(identifier, tickers, opts)

#### Realtime Quote Prices by Exchange


Returns many popular metrics for securities from a given exchange &#39;identifier&#39; from multiple products conveniently in one API. Realtime stock price data requires at least one realtime product subscription (IEX, NASDAQ Basic, and/or Delayed SIP).  If you are subscribed to multiple realtime stock price products, the api will return the most recent realtime stock price. Previous close price and percent change fields require both an EoD US Stock Price subscription and a realtime stock price subscription. Market_cap, price_to_earnings, and dividendyield data fields require a fundamentals subscription.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";
var tickers = ["AAPL,MSFT,NVDA"];


var opts = { 
  'source': "delayed_sip",
  'activeOnly': null
};

stockExchange.getStockExchangeQuote(identifier, tickers, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **tickers** | [**[String]**](String.md)| The comma-delimited list of ticker symbols to return quotes for. |  &nbsp;
 **source** | String| Return the realtime price from the specified source instead of the most recent. | [optional]  &nbsp;
 **activeOnly** | Boolean| Returns prices only from the most recent trading day. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeQuote**](ApiResponseStockExchangeQuote.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeRealtimePrices)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeRealtimeStockPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeRealtimeStockPrices.md)

[//]: # (OPERATION:getStockExchangeRealtimePrices_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/prices/realtime)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeRealtimePrices)

<a name="getStockExchangeRealtimePrices"></a>
## **getStockExchangeRealtimePrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeRealtimePrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeRealtimeStockPrices getStockExchangeRealtimePrices(identifier, opts)

#### Realtime Stock Prices by Exchange


Returns realtime stock prices for the Stock Exchange with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'source': ["iex,delayed_sip"],
  'activeOnly': null,
  'tradedToday': null,
  'pageSize': 100,
  'tickers': ["AAPL,MSFT,NVDA"],
  'nextPage': null
};

stockExchange.getStockExchangeRealtimePrices(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **source** | [**[String]**](String.md)| Return realtime prices from the specified comma-delimited data sources. If no source is specified, all sources available to user are used. | [optional]  &nbsp;
 **activeOnly** | Boolean| Returns prices only from the most recent trading day. | [optional]  &nbsp;
 **tradedToday** | Boolean| Returns prices only from securities which have traded on the most recent trading day. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **tickers** | [**[String]**](String.md)| The comma-delimited list of ticker symbols to filter to. If not provided, the entire stock exchange is returned. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeRealtimeStockPrices**](ApiResponseStockExchangeRealtimeStockPrices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:StockExchangeApi)

[//]: # (METHOD:getStockExchangeSecurities)

[//]: # (RETURN_TYPE:ApiResponseStockExchangeSecurities)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockExchangeSecurities.md)

[//]: # (OPERATION:getStockExchangeSecurities_v2)

[//]: # (ENDPOINT:/stock_exchanges/{identifier}/securities)

[//]: # (DOCUMENT_LINK:StockExchangeApi.md#getStockExchangeSecurities)

<a name="getStockExchangeSecurities"></a>
## **getStockExchangeSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockExchangeSecurities_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockExchangeSecurities getStockExchangeSecurities(identifier, opts)

#### Securities by Exchange


Returns Securities traded on the Stock Exchange with &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var stockExchange = new intrinioSDK.StockExchangeApi();

var identifier = "USCOMP";


var opts = { 
  'pageSize': 100,
  'nextPage': null
};

stockExchange.getStockExchangeSecurities(identifier, opts).then(function(data) {
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
 **identifier** | String| A Stock Exchange identifier (MIC or Intrinio ID) |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockExchangeSecurities**](ApiResponseStockExchangeSecurities.md)



[//]: # (END_OPERATION)

