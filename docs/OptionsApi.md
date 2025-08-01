# intrinioSDK.OptionsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOptionsTickers**](OptionsApi.md#getAllOptionsTickers) | **GET** /options/tickers | Options Tickers
[**getOptionAggregates**](OptionsApi.md#getOptionAggregates) | **GET** /options/aggregates | Total open interest and volume aggregated by ticker
[**getOptionExpirationsRealtime**](OptionsApi.md#getOptionExpirationsRealtime) | **GET** /options/expirations/{symbol}/realtime | Options Expirations
[**getOptionStrikesRealtime**](OptionsApi.md#getOptionStrikesRealtime) | **GET** /options/strikes/{symbol}/{strike}/realtime | Option Strikes Realtime
[**getOptionTrades**](OptionsApi.md#getOptionTrades) | **GET** /options/trades | Option Trades
[**getOptionTradesByContract**](OptionsApi.md#getOptionTradesByContract) | **GET** /options/{identifier}/trades | Option Trades By Contract
[**getOptions**](OptionsApi.md#getOptions) | **GET** /options/{symbol} | Options
[**getOptionsBySymbolRealtime**](OptionsApi.md#getOptionsBySymbolRealtime) | **GET** /options/{symbol}/realtime | Options by Symbol Realtime
[**getOptionsChain**](OptionsApi.md#getOptionsChain) | **GET** /options/chain/{symbol}/{expiration} | Options Chain
[**getOptionsChainEod**](OptionsApi.md#getOptionsChainEod) | **GET** /options/chain/{symbol}/{expiration}/eod | Options Chain EOD
[**getOptionsChainRealtime**](OptionsApi.md#getOptionsChainRealtime) | **GET** /options/chain/{symbol}/{expiration}/realtime | Options Chain Realtime
[**getOptionsExpirations**](OptionsApi.md#getOptionsExpirations) | **GET** /options/expirations/{symbol} | Options Expirations
[**getOptionsExpirationsEod**](OptionsApi.md#getOptionsExpirationsEod) | **GET** /options/expirations/{symbol}/eod | Options Expirations
[**getOptionsGreeksByContract**](OptionsApi.md#getOptionsGreeksByContract) | **GET** /options/greeks/{contract}/realtime | Option Greeks &amp; Derived Price by Contract
[**getOptionsGreeksByTicker**](OptionsApi.md#getOptionsGreeksByTicker) | **GET** /options/greeks/by_ticker/{identifier}/realtime | Options Realtime Greeks &amp; Derived Price by Ticker
[**getOptionsImpliedMoveBySymbol**](OptionsApi.md#getOptionsImpliedMoveBySymbol) | **GET** /options/implied_move/{symbol}/{expiration_date} | Options Implied Move By Symbol
[**getOptionsIntervalByContract**](OptionsApi.md#getOptionsIntervalByContract) | **GET** /options/interval/{identifier} | Options Intervals By Contract
[**getOptionsIntervalMovers**](OptionsApi.md#getOptionsIntervalMovers) | **GET** /options/interval/movers | Options Intervals Movers
[**getOptionsIntervalMoversChange**](OptionsApi.md#getOptionsIntervalMoversChange) | **GET** /options/interval/movers/change | Options Intervals Movers By Change
[**getOptionsIntervalMoversVolume**](OptionsApi.md#getOptionsIntervalMoversVolume) | **GET** /options/interval/movers/volume | Options Intervals Movers By Volume
[**getOptionsPrices**](OptionsApi.md#getOptionsPrices) | **GET** /options/prices/{identifier} | Option Prices
[**getOptionsPricesBatchRealtime**](OptionsApi.md#getOptionsPricesBatchRealtime) | **POST** /options/prices/realtime/batch | Option Prices Batch Realtime
[**getOptionsPricesEod**](OptionsApi.md#getOptionsPricesEod) | **GET** /options/prices/{identifier}/eod | Option Prices EOD
[**getOptionsPricesEodByTicker**](OptionsApi.md#getOptionsPricesEodByTicker) | **GET** /options/prices/by_ticker/{symbol}/eod | Option Prices End of Day By Ticker
[**getOptionsPricesRealtime**](OptionsApi.md#getOptionsPricesRealtime) | **GET** /options/prices/{identifier}/realtime | Option Prices Realtime
[**getOptionsPricesRealtimeByTicker**](OptionsApi.md#getOptionsPricesRealtimeByTicker) | **GET** /options/prices/by_ticker/{symbol}/realtime | Option Prices Realtime By Ticker
[**getOptionsSnapshots**](OptionsApi.md#getOptionsSnapshots) | **GET** /options/snapshots | Option Prices Realtime Snapshot
[**getOptionsStatsRealtime**](OptionsApi.md#getOptionsStatsRealtime) | **GET** /options/prices/{identifier}/realtime/stats | Option Stats Realtime
[**getUnusualActivity**](OptionsApi.md#getUnusualActivity) | **GET** /options/unusual_activity/{symbol} | Options Unusual Activity
[**getUnusualActivityIntraday**](OptionsApi.md#getUnusualActivityIntraday) | **GET** /options/unusual_activity/{symbol}/intraday | Options Unusual Activity Intraday
[**getUnusualActivityUniversal**](OptionsApi.md#getUnusualActivityUniversal) | **GET** /options/unusual_activity | Options Unusual Activity Universal
[**getUnusualActivityUniversalIntraday**](OptionsApi.md#getUnusualActivityUniversalIntraday) | **GET** /options/unusual_activity/intraday | Options Unusual Activity Universal Intraday



[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getAllOptionsTickers)

[//]: # (RETURN_TYPE:ApiResponseOptionsTickers)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsTickers.md)

[//]: # (OPERATION:getAllOptionsTickers_v2)

[//]: # (ENDPOINT:/options/tickers)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getAllOptionsTickers)

<a name="getAllOptionsTickers"></a>
## **getAllOptionsTickers**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllOptionsTickers_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsTickers getAllOptionsTickers(opts)

#### Options Tickers


Returns all tickers that have existing options contracts.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'useUnderlyingSymbols': false
};

options.getAllOptionsTickers(opts).then(function(data) {
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
 **useUnderlyingSymbols** | Boolean| Use underlying symbol vs contract symbol | [optional] [default to false] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsTickers**](ApiResponseOptionsTickers.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionAggregates)

[//]: # (RETURN_TYPE:ApiResponseOptionsAggregates)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsAggregates.md)

[//]: # (OPERATION:getOptionAggregates_v2)

[//]: # (ENDPOINT:/options/aggregates)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionAggregates)

<a name="getOptionAggregates"></a>
## **getOptionAggregates**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionAggregates_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsAggregates getOptionAggregates(opts)

#### Total open interest and volume aggregated by ticker


Returns total open interest and volume by ticker

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'date': "2024-04-24",
  'pageSize': 100,
  'nextPage': null
};

options.getOptionAggregates(opts).then(function(data) {
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
 **date** | [**Object**](.md)| Return aggregated data for this date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsAggregates**](ApiResponseOptionsAggregates.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionExpirationsRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsExpirations)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsExpirations.md)

[//]: # (OPERATION:getOptionExpirationsRealtime_v2)

[//]: # (ENDPOINT:/options/expirations/{symbol}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionExpirationsRealtime)

<a name="getOptionExpirationsRealtime"></a>
## **getOptionExpirationsRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionExpirationsRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsExpirations getOptionExpirationsRealtime(symbol, opts)

#### Options Expirations


Returns a list of all current and upcoming option contract expiration dates for a particular symbol.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";


var opts = { 
  'after': "2022-01-01",
  'before': "2023-04-01",
  'source': null,
  'includeRelatedSymbols': false
};

options.getOptionExpirationsRealtime(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **after** | String| Return option contract expiration dates after this date. | [optional]  &nbsp;
 **before** | String| Return option contract expiration dates before this date. | [optional]  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsExpirations**](ApiResponseOptionsExpirations.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionStrikesRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsChainRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsChainRealtime.md)

[//]: # (OPERATION:getOptionStrikesRealtime_v2)

[//]: # (ENDPOINT:/options/strikes/{symbol}/{strike}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionStrikesRealtime)

<a name="getOptionStrikesRealtime"></a>
## **getOptionStrikesRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionStrikesRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsChainRealtime getOptionStrikesRealtime(symbol, strike, opts)

#### Option Strikes Realtime


Returns a list of the latest top of the order book size and premium (bid / ask), the latest trade size and premium as well as the greeks and implied volatility for all call/put contracts that match the strike and symbol specified.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";
var strike = 95;


var opts = { 
  'source': null,
  'stockPriceSource': null,
  'model': null,
  'showExtendedPrice': null,
  'includeRelatedSymbols': false
};

options.getOptionStrikesRealtime(symbol, strike, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. |  &nbsp;
 **source** | String| Realtime or delayed. | [optional]  &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **model** | String| Model for calculating Greek values. Default is black_scholes. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsChainRealtime**](ApiResponseOptionsChainRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionTrades)

[//]: # (RETURN_TYPE:OptionTradesResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionTradesResult.md)

[//]: # (OPERATION:getOptionTrades_v2)

[//]: # (ENDPOINT:/options/trades)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionTrades)

<a name="getOptionTrades"></a>
## **getOptionTrades**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionTrades_v2)

[//]: # (START_OVERVIEW)

> OptionTradesResult getOptionTrades(opts)

#### Option Trades


Returns all trades between start time and end time, up to seven days ago for the specified source.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null,
  'startDate': null,
  'startTime': null,
  'endDate': null,
  'endTime': null,
  'timezone': "UTC",
  'pageSize': 100,
  'minSize': 100,
  'security': "AAPL",
  'nextPage': null
};

options.getOptionTrades(opts).then(function(data) {
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
 **source** | String| The specific source of the data being requested. | [optional]  &nbsp;
 **startDate** | Date| The start date for the data being requested. | [optional]  &nbsp;
 **startTime** | String| The start time for the data being requested. | [optional]  &nbsp;
 **endDate** | Date| The end date for the data being requested. | [optional]  &nbsp;
 **endTime** | String| The end time for the data being requested. | [optional]  &nbsp;
 **timezone** | String| The timezone the start and end date/times use. | [optional] [default to UTC] &nbsp;
 **pageSize** | Number| The maximum number of results to return per page. | [optional] [default to 100] &nbsp;
 **minSize** | Number| Trades must be larger or equal to this size. | [optional]  &nbsp;
 **security** | String| The ticker symbol for which trades are being requested. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionTradesResult**](OptionTradesResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionTradesByContract)

[//]: # (RETURN_TYPE:OptionTradesResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionTradesResult.md)

[//]: # (OPERATION:getOptionTradesByContract_v2)

[//]: # (ENDPOINT:/options/{identifier}/trades)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionTradesByContract)

<a name="getOptionTradesByContract"></a>
## **getOptionTradesByContract**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionTradesByContract_v2)

[//]: # (START_OVERVIEW)

> OptionTradesResult getOptionTradesByContract(identifier, opts)

#### Option Trades By Contract


Returns all trades for a contract between start time and end time, up to seven days ago for the specified source.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "AAPL__261218C00230000";


var opts = { 
  'source': null,
  'startDate': null,
  'startTime': null,
  'endDate': null,
  'endTime': null,
  'timezone': "UTC",
  'pageSize': 100,
  'minSize': 100,
  'nextPage': null
};

options.getOptionTradesByContract(identifier, opts).then(function(data) {
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
 **identifier** | String| The option contract for which trades are being requested. |  &nbsp;
 **source** | String| The specific source of the data being requested. | [optional]  &nbsp;
 **startDate** | Date| The start date for the data being requested. | [optional]  &nbsp;
 **startTime** | String| The start time for the data being requested. | [optional]  &nbsp;
 **endDate** | Date| The end date for the data being requested. | [optional]  &nbsp;
 **endTime** | String| The end time for the data being requested. | [optional]  &nbsp;
 **timezone** | String| The timezone the start and end date/times use. | [optional] [default to UTC] &nbsp;
 **pageSize** | Number| The maximum number of results to return per page. | [optional] [default to 100] &nbsp;
 **minSize** | Number| Trades must be larger or equal to this size. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionTradesResult**](OptionTradesResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptions)

[//]: # (RETURN_TYPE:ApiResponseOptions)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptions.md)

[//]: # (OPERATION:getOptions_v2)

[//]: # (ENDPOINT:/options/{symbol})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptions)

<a name="getOptions"></a>
## **getOptions**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptions_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptions getOptions(symbol, opts)

#### Options


Returns a list of all securities that have options listed and are tradable on a US market exchange. Useful to retrieve the entire universe.  Available via a 3rd party, contact sales for a trial.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "AAPL";


var opts = { 
  'type': "put",
  'strike': 170,
  'strikeGreaterThan': 150,
  'strikeLessThan': 190,
  'expiration': "2019-03-01",
  'expirationAfter': "2019-01-01",
  'expirationBefore': "2019-12-31",
  'pageSize': 100,
  'nextPage': null
};

options.getOptions(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **expiration** | String| The expiration date of the option contract. This will return options contracts with expiration dates on this date. | [optional]  &nbsp;
 **expirationAfter** | String| The expiration date of the option contract. This will return options contracts with expiration dates after this date. | [optional]  &nbsp;
 **expirationBefore** | String| The expiration date of the option contract. This will return options contracts with expiration dates before this date. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptions**](ApiResponseOptions.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsBySymbolRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsRealtime.md)

[//]: # (OPERATION:getOptionsBySymbolRealtime_v2)

[//]: # (ENDPOINT:/options/{symbol}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsBySymbolRealtime)

<a name="getOptionsBySymbolRealtime"></a>
## **getOptionsBySymbolRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsBySymbolRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsRealtime getOptionsBySymbolRealtime(symbol, opts)

#### Options by Symbol Realtime


Returns a list of all securities that have options listed and are tradable on a US market exchange. Useful to retrieve the entire universe.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "AAPL";


var opts = { 
  'type': "put",
  'strike': 170,
  'strikeGreaterThan': 150,
  'strikeLessThan': 190,
  'expiration': "2022-04-16",
  'expirationAfter': "2022-01-01",
  'expirationBefore': "2023-12-31",
  'source': null,
  'includeRelatedSymbols': false
};

options.getOptionsBySymbolRealtime(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **expiration** | String| The expiration date of the option contract. This will return options contracts with expiration dates on this date. | [optional]  &nbsp;
 **expirationAfter** | String| The expiration date of the option contract. This will return options contracts with expiration dates after this date. | [optional]  &nbsp;
 **expirationBefore** | String| The expiration date of the option contract. This will return options contracts with expiration dates before this date. | [optional]  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsRealtime**](ApiResponseOptionsRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsChain)

[//]: # (RETURN_TYPE:ApiResponseOptionsChain)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsChain.md)

[//]: # (OPERATION:getOptionsChain_v2)

[//]: # (ENDPOINT:/options/chain/{symbol}/{expiration})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsChain)

<a name="getOptionsChain"></a>
## **getOptionsChain**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsChain_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsChain getOptionsChain(symbol, expiration, opts)

#### Options Chain


Returns a list of the historical end-of-day top of the order book size and premium (bid / ask), the latest trade size and premium as well as the greeks and implied volatility for all option contracts currently associated with the option chain.  Available via a 3rd party, contact sales for a trial.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";
var expiration = "2019-04-05";


var opts = { 
  'date': null,
  'type': null,
  'strike': null,
  'strikeGreaterThan': null,
  'strikeLessThan': null,
  'moneyness': null,
  'pageSize': 100
};

options.getOptionsChain(symbol, expiration, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **expiration** | String| The expiration date of the options contract |  &nbsp;
 **date** | Date| The date of the option price. Returns option prices on this date. | [optional]  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **moneyness** | String| The moneyness of the options contracts to return. &#39;all&#39; will return all options contracts. &#39;in_the_money&#39; will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). &#39;out_of_they_money&#39; will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). &#39;near_the_money&#39; will return options contracts that are $0.50 or less away from being in the money. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsChain**](ApiResponseOptionsChain.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsChainEod)

[//]: # (RETURN_TYPE:ApiResponseOptionsChainEod)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsChainEod.md)

[//]: # (OPERATION:getOptionsChainEod_v2)

[//]: # (ENDPOINT:/options/chain/{symbol}/{expiration}/eod)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsChainEod)

<a name="getOptionsChainEod"></a>
## **getOptionsChainEod**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsChainEod_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsChainEod getOptionsChainEod(symbol, expiration, opts)

#### Options Chain EOD


Returns all EOD options contracts and their prices for the given symbol and expiration date.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "AAPL";
var expiration = "2023-01-20";


var opts = { 
  'type': null,
  'strike': null,
  'strikeGreaterThan': null,
  'strikeLessThan': null,
  'date': null,
  'includeRelatedSymbols': false
};

options.getOptionsChainEod(symbol, expiration, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **expiration** | String| The expiration date of the options contract |  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **date** | Date| The date to retrieve prices for | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsChainEod**](ApiResponseOptionsChainEod.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsChainRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsChainRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsChainRealtime.md)

[//]: # (OPERATION:getOptionsChainRealtime_v2)

[//]: # (ENDPOINT:/options/chain/{symbol}/{expiration}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsChainRealtime)

<a name="getOptionsChainRealtime"></a>
## **getOptionsChainRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsChainRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsChainRealtime getOptionsChainRealtime(symbol, expiration, opts)

#### Options Chain Realtime


Returns a list of the latest National Best Bid &amp; Offer (NBBO) top of the order book size and premium (bid / ask), the latest trade size and premium as well as the greeks and implied volatility for all option contracts currently associated with the option chain.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";
var expiration = "2023-01-20";


var opts = { 
  'source': null,
  'type': null,
  'strike': null,
  'strikeGreaterThan': null,
  'strikeLessThan': null,
  'volumeGreaterThan': null,
  'volumeLessThan': null,
  'openInterestGreaterThan': null,
  'openInterestLessThan': null,
  'moneyness': null,
  'stockPriceSource': null,
  'model': null,
  'showExtendedPrice': null,
  'includeRelatedSymbols': false,
  'showStats': null
};

options.getOptionsChainRealtime(symbol, expiration, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **expiration** | String| The expiration date of the options contract |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **volumeGreaterThan** | Number| The volume of the option contract. This will return options contracts with volumes greater than this amount. | [optional]  &nbsp;
 **volumeLessThan** | Number| The volume of the option contract. This will return options contracts with volumes less than this amout. | [optional]  &nbsp;
 **openInterestGreaterThan** | Number| The open interest of the option contract. This will return options contracts with open interest greater than this amount. | [optional]  &nbsp;
 **openInterestLessThan** | Number| The open interest of the option contract. This will return options contracts with open interest less than this amount. | [optional]  &nbsp;
 **moneyness** | String| The moneyness of the options contracts to return. &#39;all&#39; will return all options contracts. &#39;in_the_money&#39; will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). &#39;out_of_they_money&#39; will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). &#39;near_the_money&#39; will return options contracts that are $0.50 or less away from being in the money.  Requires subscription to realtime stock price data. | [optional]  &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **model** | String| Model for calculating Greek values. Default is black_scholes. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
 **showStats** | Boolean| Whether to include Greek calculations or not. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsChainRealtime**](ApiResponseOptionsChainRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsExpirations)

[//]: # (RETURN_TYPE:ApiResponseOptionsExpirations)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsExpirations.md)

[//]: # (OPERATION:getOptionsExpirations_v2)

[//]: # (ENDPOINT:/options/expirations/{symbol})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsExpirations)

<a name="getOptionsExpirations"></a>
## **getOptionsExpirations**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsExpirations_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsExpirations getOptionsExpirations(symbol, opts)

#### Options Expirations


Returns a list of all current and upcoming option contract expiration dates for a particular symbol.  Available via a 3rd party, contact sales for a trial.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";


var opts = { 
  'after': "2019-01-01",
  'before': "2019-12-31"
};

options.getOptionsExpirations(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **after** | String| Return option contract expiration dates after this date. | [optional]  &nbsp;
 **before** | String| Return option contract expiration dates before this date. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsExpirations**](ApiResponseOptionsExpirations.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsExpirationsEod)

[//]: # (RETURN_TYPE:ApiResponseOptionsExpirations)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsExpirations.md)

[//]: # (OPERATION:getOptionsExpirationsEod_v2)

[//]: # (ENDPOINT:/options/expirations/{symbol}/eod)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsExpirationsEod)

<a name="getOptionsExpirationsEod"></a>
## **getOptionsExpirationsEod**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsExpirationsEod_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsExpirations getOptionsExpirationsEod(symbol, opts)

#### Options Expirations


Returns a list of all current and upcoming option contract expiration dates for a particular symbol.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";


var opts = { 
  'after': "2019-01-01",
  'before': "2019-12-31",
  'includeRelatedSymbols': false
};

options.getOptionsExpirationsEod(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **after** | String| Return option contract expiration dates after this date. | [optional]  &nbsp;
 **before** | String| Return option contract expiration dates before this date. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsExpirations**](ApiResponseOptionsExpirations.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsGreeksByContract)

[//]: # (RETURN_TYPE:ApiResponseOptionsGreekContractRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsGreekContractRealtime.md)

[//]: # (OPERATION:getOptionsGreeksByContract_v2)

[//]: # (ENDPOINT:/options/greeks/{contract}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsGreeksByContract)

<a name="getOptionsGreeksByContract"></a>
## **getOptionsGreeksByContract**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsGreeksByContract_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsGreekContractRealtime getOptionsGreeksByContract(contract, opts)

#### Option Greeks &amp; Derived Price by Contract


Retrieves realtime options greeks data for a specific options contract

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var contract = "contract_example";


var opts = { 
  'source': "source_example",
  'model': "black_scholes",
  'ivMode': "ivMode_example",
  'stockPriceSource': "stockPriceSource_example"
};

options.getOptionsGreeksByContract(contract, opts).then(function(data) {
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
 **contract** | String| The options contract identifier |  &nbsp;
 **source** | String| The data source to use for options data | [optional]  &nbsp;
 **model** | String| The options pricing model to use for greeks calculations | [optional] [default to black_scholes] &nbsp;
 **ivMode** | String| The implied volatility calculation mode | [optional]  &nbsp;
 **stockPriceSource** | String| The data source to use for underlying stock prices | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsGreekContractRealtime**](ApiResponseOptionsGreekContractRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsGreeksByTicker)

[//]: # (RETURN_TYPE:ApiResponseOptionsGreeksByTickerRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsGreeksByTickerRealtime.md)

[//]: # (OPERATION:getOptionsGreeksByTicker_v2)

[//]: # (ENDPOINT:/options/greeks/by_ticker/{identifier}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsGreeksByTicker)

<a name="getOptionsGreeksByTicker"></a>
## **getOptionsGreeksByTicker**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsGreeksByTicker_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsGreeksByTickerRealtime getOptionsGreeksByTicker(identifier, opts)

#### Options Realtime Greeks &amp; Derived Price by Ticker


Retrieves realtime options greeks data for all contracts of a given ticker symbol

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "identifier_example";


var opts = { 
  'source': "source_example",
  'model': "black_scholes",
  'ivMode': "ivMode_example",
  'stockPriceSource': "stockPriceSource_example",
  'expirationStartDate': new Date("2013-10-20"),
  'expirationEndDate': new Date("2013-10-20"),
  'strike': 3.4,
  'strikeGreaterThan': 3.4,
  'strikeLessThan': 3.4,
  'pageSize': 250,
  'nextPage': null
};

options.getOptionsGreeksByTicker(identifier, opts).then(function(data) {
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
 **identifier** | String| The ticker symbol to get options greeks for |  &nbsp;
 **source** | String| The data source to use for options data | [optional]  &nbsp;
 **model** | String| The options pricing model to use for greeks calculations | [optional] [default to black_scholes] &nbsp;
 **ivMode** | String| The implied volatility calculation mode | [optional]  &nbsp;
 **stockPriceSource** | String| The data source to use for underlying stock prices | [optional]  &nbsp;
 **expirationStartDate** | Date| Filter options by expiration date (start) | [optional]  &nbsp;
 **expirationEndDate** | Date| Filter options by expiration date (end) | [optional]  &nbsp;
 **strike** | Number| Filter options by strike price | [optional]  &nbsp;
 **strikeGreaterThan** | Number| Filter options by minimum strike price | [optional]  &nbsp;
 **strikeLessThan** | Number| Filter options by maximum strike price | [optional]  &nbsp;
 **pageSize** | Number| Number of results to return per page | [optional] [default to 250] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsGreeksByTickerRealtime**](ApiResponseOptionsGreeksByTickerRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsImpliedMoveBySymbol)

[//]: # (RETURN_TYPE:ApiResponseOptionsImpliedMove)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsImpliedMove.md)

[//]: # (OPERATION:getOptionsImpliedMoveBySymbol_v2)

[//]: # (ENDPOINT:/options/implied_move/{symbol}/{expiration_date})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsImpliedMoveBySymbol)

<a name="getOptionsImpliedMoveBySymbol"></a>
## **getOptionsImpliedMoveBySymbol**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsImpliedMoveBySymbol_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsImpliedMove getOptionsImpliedMoveBySymbol(symbol, expirationDate, opts)

#### Options Implied Move By Symbol


Returns the implied move data points for a ticker symbol.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "TSLA";
var expirationDate = new Date("2025-05-30");


var opts = { 
  'percentage': 0.85,
  'source': null
};

options.getOptionsImpliedMoveBySymbol(symbol, expirationDate, opts).then(function(data) {
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
 **symbol** | String| The ticker symbol for the contracts. |  &nbsp;
 **expirationDate** | Date| The expiration date for the contracts to consider. |  &nbsp;
 **percentage** | [**Object**](.md)| Percentage to multiply the straddle by. Defaults to 0.85. | [optional]  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsImpliedMove**](ApiResponseOptionsImpliedMove.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsIntervalByContract)

[//]: # (RETURN_TYPE:OptionIntervalsResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionIntervalsResult.md)

[//]: # (OPERATION:getOptionsIntervalByContract_v2)

[//]: # (ENDPOINT:/options/interval/{identifier})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsIntervalByContract)

<a name="getOptionsIntervalByContract"></a>
## **getOptionsIntervalByContract**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsIntervalByContract_v2)

[//]: # (START_OVERVIEW)

> OptionIntervalsResult getOptionsIntervalByContract(identifier, intervalSize, opts)

#### Options Intervals By Contract


Returns a list of interval data points for a contract.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "SPY___230103P00380000";
var intervalSize = "5m";


var opts = { 
  'source': null,
  'pageSize': 100,
  'endTime': null
};

options.getOptionsIntervalByContract(identifier, intervalSize, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID or code of the options contract to request intervals for. |  &nbsp;
 **intervalSize** | String| The time length of the interval. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **endTime** | Date| The inclusive UTC date and time the intervals end at. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionIntervalsResult**](OptionIntervalsResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsIntervalMovers)

[//]: # (RETURN_TYPE:OptionIntervalsMoversResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionIntervalsMoversResult.md)

[//]: # (OPERATION:getOptionsIntervalMovers_v2)

[//]: # (ENDPOINT:/options/interval/movers)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsIntervalMovers)

<a name="getOptionsIntervalMovers"></a>
## **getOptionsIntervalMovers**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsIntervalMovers_v2)

[//]: # (START_OVERVIEW)

> OptionIntervalsMoversResult getOptionsIntervalMovers(opts)

#### Options Intervals Movers


Returns a list of intervals for the biggest movers over the last hour interval.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null,
  'openTime': null
};

options.getOptionsIntervalMovers(opts).then(function(data) {
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
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **openTime** | Date| The inclusive UTC date and time the interval opens at. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionIntervalsMoversResult**](OptionIntervalsMoversResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsIntervalMoversChange)

[//]: # (RETURN_TYPE:OptionIntervalsMoversResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionIntervalsMoversResult.md)

[//]: # (OPERATION:getOptionsIntervalMoversChange_v2)

[//]: # (ENDPOINT:/options/interval/movers/change)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsIntervalMoversChange)

<a name="getOptionsIntervalMoversChange"></a>
## **getOptionsIntervalMoversChange**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsIntervalMoversChange_v2)

[//]: # (START_OVERVIEW)

> OptionIntervalsMoversResult getOptionsIntervalMoversChange(opts)

#### Options Intervals Movers By Change


Returns a list of intervals for the biggest movers by change over the last hour interval.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null,
  'openTime': null
};

options.getOptionsIntervalMoversChange(opts).then(function(data) {
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
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **openTime** | Date| The inclusive UTC date and time the interval opens at. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionIntervalsMoversResult**](OptionIntervalsMoversResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsIntervalMoversVolume)

[//]: # (RETURN_TYPE:OptionIntervalsMoversResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionIntervalsMoversResult.md)

[//]: # (OPERATION:getOptionsIntervalMoversVolume_v2)

[//]: # (ENDPOINT:/options/interval/movers/volume)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsIntervalMoversVolume)

<a name="getOptionsIntervalMoversVolume"></a>
## **getOptionsIntervalMoversVolume**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsIntervalMoversVolume_v2)

[//]: # (START_OVERVIEW)

> OptionIntervalsMoversResult getOptionsIntervalMoversVolume(opts)

#### Options Intervals Movers By Volume


Returns a list of intervals for the biggest movers by volume over the last hour interval.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null,
  'openTime': null
};

options.getOptionsIntervalMoversVolume(opts).then(function(data) {
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
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **openTime** | Date| The inclusive UTC date and time the interval opens at. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionIntervalsMoversResult**](OptionIntervalsMoversResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPrices)

[//]: # (RETURN_TYPE:ApiResponseOptionPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionPrices.md)

[//]: # (OPERATION:getOptionsPrices_v2)

[//]: # (ENDPOINT:/options/prices/{identifier})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPrices)

<a name="getOptionsPrices"></a>
## **getOptionsPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionPrices getOptionsPrices(identifier, opts)

#### Option Prices


Returns all price data from inception to expiration for a particular contract.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "MSFT190405C00118000";


var opts = { 
  'startDate': "2019-01-01",
  'endDate': "2019-12-31",
  'pageSize': 100,
  'nextPage': null
};

options.getOptionsPrices(identifier, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID or code of the options contract to request prices for. |  &nbsp;
 **startDate** | String| Return option contract prices on or after this date. | [optional]  &nbsp;
 **endDate** | String| Return option contract prices on or before this date. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionPrices**](ApiResponseOptionPrices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPricesBatchRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsPricesBatchRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsPricesBatchRealtime.md)

[//]: # (OPERATION:getOptionsPricesBatchRealtime_v2)

[//]: # (ENDPOINT:/options/prices/realtime/batch)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPricesBatchRealtime)

<a name="getOptionsPricesBatchRealtime"></a>
## **getOptionsPricesBatchRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPricesBatchRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsPricesBatchRealtime getOptionsPricesBatchRealtime(body, opts)

#### Option Prices Batch Realtime


Returns a list of latest price data for up to 250 option contracts per request.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();


body = {
  "contracts": [
    "A220121P00055000",
    "A220121P00057500",
    "A220121P00060000"
  ]
}

var opts = { 
  'source': null,
  'showStats': null,
  'stockPriceSource': null,
  'model': null,
  'showExtendedPrice': null
};

options.getOptionsPricesBatchRealtime(body, opts).then(function(data) {
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
 **body** | [**OptionContractsList**](OptionContractsList.md)| The contract symbols for which to return options prices for. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **showStats** | Boolean| Whether to include Greek calculations or not. | [optional]  &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **model** | String| Model for calculating Greek values. Default is black_scholes. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsPricesBatchRealtime**](ApiResponseOptionsPricesBatchRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPricesEod)

[//]: # (RETURN_TYPE:ApiResponseOptionsPricesEod)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsPricesEod.md)

[//]: # (OPERATION:getOptionsPricesEod_v2)

[//]: # (ENDPOINT:/options/prices/{identifier}/eod)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPricesEod)

<a name="getOptionsPricesEod"></a>
## **getOptionsPricesEod**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPricesEod_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsPricesEod getOptionsPricesEod(identifier, opts)

#### Option Prices EOD


Returns all option prices for a given option contract identifier.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "AAPL230616P00190000";


var opts = { 
  'nextPage': null,
  'startDate': null,
  'endDate': null
};

options.getOptionsPricesEod(identifier, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID or code of the options contract to request prices for. |  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **startDate** | Date| The start date to retrieve prices for | [optional]  &nbsp;
 **endDate** | Date| The end date to retrieve prices for | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsPricesEod**](ApiResponseOptionsPricesEod.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPricesEodByTicker)

[//]: # (RETURN_TYPE:ApiResponseOptionsPricesByTickerEod)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsPricesByTickerEod.md)

[//]: # (OPERATION:getOptionsPricesEodByTicker_v2)

[//]: # (ENDPOINT:/options/prices/by_ticker/{symbol}/eod)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPricesEodByTicker)

<a name="getOptionsPricesEodByTicker"></a>
## **getOptionsPricesEodByTicker**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPricesEodByTicker_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsPricesByTickerEod getOptionsPricesEodByTicker(symbol, opts)

#### Option Prices End of Day By Ticker


Returns a list of end of day pricing information for all option contracts currently associated with the ticker.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";


var opts = { 
  'pageSize': 250,
  'date': "2024-01-01",
  'type': null,
  'strike': null,
  'strikeGreaterThan': null,
  'strikeLessThan': null,
  'includeRelatedSymbols': false,
  'nextPage': null
};

options.getOptionsPricesEodByTicker(symbol, opts).then(function(data) {
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
 **symbol** | String| The equities ticker symbol, corresponding to the underlying security. |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 250] &nbsp;
 **date** | [**Object**](.md)| The date to get pricing data for. Defaults to today in Eastern time zone. | [optional]  &nbsp;
 **type** | String| The option contract type. | [optional]  &nbsp;
 **strike** | Number| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional]  &nbsp;
 **strikeGreaterThan** | Number| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional]  &nbsp;
 **strikeLessThan** | Number| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional]  &nbsp;
 **includeRelatedSymbols** | Boolean| Include related symbols that end in a 1 or 2 because of a corporate action. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsPricesByTickerEod**](ApiResponseOptionsPricesByTickerEod.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPricesRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsPriceRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsPriceRealtime.md)

[//]: # (OPERATION:getOptionsPricesRealtime_v2)

[//]: # (ENDPOINT:/options/prices/{identifier}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPricesRealtime)

<a name="getOptionsPricesRealtime"></a>
## **getOptionsPricesRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPricesRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsPriceRealtime getOptionsPricesRealtime(identifier, opts)

#### Option Prices Realtime


Returns all option prices for a given option contract identifier.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "AAPL__261218C00230000";


var opts = { 
  'source': null,
  'stockPriceSource': null,
  'model': null,
  'showExtendedPrice': null
};

options.getOptionsPricesRealtime(identifier, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID or code of the options contract to request prices for. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **model** | String| Model for calculating Greek values. Default is black_scholes. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsPriceRealtime**](ApiResponseOptionsPriceRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsPricesRealtimeByTicker)

[//]: # (RETURN_TYPE:ApiResponseOptionsPricesByTickerRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsPricesByTickerRealtime.md)

[//]: # (OPERATION:getOptionsPricesRealtimeByTicker_v2)

[//]: # (ENDPOINT:/options/prices/by_ticker/{symbol}/realtime)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsPricesRealtimeByTicker)

<a name="getOptionsPricesRealtimeByTicker"></a>
## **getOptionsPricesRealtimeByTicker**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsPricesRealtimeByTicker_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsPricesByTickerRealtime getOptionsPricesRealtimeByTicker(symbol, opts)

#### Option Prices Realtime By Ticker


Returns a list of the latest National Best Bid &amp; Offer (NBBO) top of the order book size and premium (bid / ask), the latest trade size and premium as well as the greeks and implied volatility for all option contracts currently associated with the ticker.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "MSFT";


var opts = { 
  'source': null,
  'ivMode': null,
  'nextPage': null,
  'pageSize': 250,
  'stockPriceSource': null,
  'model': null,
  'showExtendedPrice': null,
  'expirationStartDate': "2024-01-01",
  'expirationEndDate': "2024-02-02",
  'strike': 100.0,
  'showStats': null,
  'nextPage2': null
};

options.getOptionsPricesRealtimeByTicker(symbol, opts).then(function(data) {
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
 **symbol** | String| The equities ticker symbol, corresponding to the underlying security. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **ivMode** | String| Change the mode for the implied volatility calculation to out of the money. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 250] &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **model** | String| Model for calculating Greek values. Default is black_scholes. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
 **expirationStartDate** | [**Object**](.md)| Filter out contracts that expire before this date. | [optional]  &nbsp;
 **expirationEndDate** | [**Object**](.md)| Filter out contracts that expire after this date. | [optional]  &nbsp;
 **strike** | Number| Filter out contracts that have this strike price. | [optional]  &nbsp;
 **showStats** | Boolean| Whether to include Greek calculations or not. | [optional]  &nbsp;
 **nextPage2** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsPricesByTickerRealtime**](ApiResponseOptionsPricesByTickerRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsSnapshots)

[//]: # (RETURN_TYPE:OptionSnapshotsResult)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:OptionSnapshotsResult.md)

[//]: # (OPERATION:getOptionsSnapshots_v2)

[//]: # (ENDPOINT:/options/snapshots)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsSnapshots)

<a name="getOptionsSnapshots"></a>
## **getOptionsSnapshots**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsSnapshots_v2)

[//]: # (START_OVERVIEW)

> OptionSnapshotsResult getOptionsSnapshots(opts)

#### Option Prices Realtime Snapshot


Returns all options snapshots for the queried interval with links to download.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null,
  'atDatetime': null,
  'withGreeks': null,
  'stockPriceSource': null,
  'withUnderlyingPrice': null
};

options.getOptionsSnapshots(opts).then(function(data) {
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
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **atDatetime** | Date| The UTC date and time (with url-encoded spaces) the snapshot will cover. | [optional]  &nbsp;
 **withGreeks** | Boolean| Whether to include Greek calculations fields when available. | [optional]  &nbsp;
 **stockPriceSource** | String| Source for underlying price for calculating Greeks. | [optional]  &nbsp;
 **withUnderlyingPrice** | Boolean| Whether to include the underlying price of the security in the file. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**OptionSnapshotsResult**](OptionSnapshotsResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getOptionsStatsRealtime)

[//]: # (RETURN_TYPE:ApiResponseOptionsStatsRealtime)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsStatsRealtime.md)

[//]: # (OPERATION:getOptionsStatsRealtime_v2)

[//]: # (ENDPOINT:/options/prices/{identifier}/realtime/stats)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getOptionsStatsRealtime)

<a name="getOptionsStatsRealtime"></a>
## **getOptionsStatsRealtime**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOptionsStatsRealtime_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsStatsRealtime getOptionsStatsRealtime(identifier, opts)

#### Option Stats Realtime


Returns all option stats (greeks and implied volatility) as well as the underlying factors used to calculate them, for a particular option contract.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var identifier = "AAPL230120C00090000";


var opts = { 
  'source': null,
  'showExtendedPrice': null
};

options.getOptionsStatsRealtime(identifier, opts).then(function(data) {
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
 **identifier** | String| The Intrinio ID or code of the options contract to request prices for. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
 **showExtendedPrice** | Boolean| Whether to include open close high low type fields. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsStatsRealtime**](ApiResponseOptionsStatsRealtime.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getUnusualActivity)

[//]: # (RETURN_TYPE:ApiResponseOptionsUnusualActivity)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsUnusualActivity.md)

[//]: # (OPERATION:getUnusualActivity_v2)

[//]: # (ENDPOINT:/options/unusual_activity/{symbol})

[//]: # (DOCUMENT_LINK:OptionsApi.md#getUnusualActivity)

<a name="getUnusualActivity"></a>
## **getUnusualActivity**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getUnusualActivity_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsUnusualActivity getUnusualActivity(symbol, opts)

#### Options Unusual Activity


Returns unusual options activity for a particular company across all option chains. Unusual options activity includes large trades, sweeps, and block trades.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "AAPL";


var opts = { 
  'source': null
};

options.getUnusualActivity(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsUnusualActivity**](ApiResponseOptionsUnusualActivity.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getUnusualActivityIntraday)

[//]: # (RETURN_TYPE:ApiResponseOptionsUnusualActivity)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsUnusualActivity.md)

[//]: # (OPERATION:getUnusualActivityIntraday_v2)

[//]: # (ENDPOINT:/options/unusual_activity/{symbol}/intraday)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getUnusualActivityIntraday)

<a name="getUnusualActivityIntraday"></a>
## **getUnusualActivityIntraday**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getUnusualActivityIntraday_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsUnusualActivity getUnusualActivityIntraday(symbol, opts)

#### Options Unusual Activity Intraday


Returns unusual trades for a given identifier within the query parameters.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var symbol = "AAPL";


var opts = { 
  'nextPage': null,
  'pageSize': 1000,
  'activityType': null,
  'sentiment': null,
  'startDate': new Date("2022-02-01"),
  'endDate': new Date("2022-02-03"),
  'minimumTotalValue': 100000.0,
  'maximumTotalValue': 200000.0
};

options.getUnusualActivityIntraday(symbol, opts).then(function(data) {
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
 **symbol** | String| The option symbol, corresponding to the underlying security. |  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 1000] &nbsp;
 **activityType** | String| The unusual activity type to query for. | [optional]  &nbsp;
 **sentiment** | String| The sentiment type to query for. | [optional]  &nbsp;
 **startDate** | Date| Return unusual activity on or after this date. | [optional]  &nbsp;
 **endDate** | Date| Return unusual activity before this date. | [optional]  &nbsp;
 **minimumTotalValue** | [**Object**](.md)| The inclusive minimum total value for the unusual activity. | [optional]  &nbsp;
 **maximumTotalValue** | [**Object**](.md)| The inclusive maximum total value for the unusual activity. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsUnusualActivity**](ApiResponseOptionsUnusualActivity.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getUnusualActivityUniversal)

[//]: # (RETURN_TYPE:ApiResponseOptionsUnusualActivity)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsUnusualActivity.md)

[//]: # (OPERATION:getUnusualActivityUniversal_v2)

[//]: # (ENDPOINT:/options/unusual_activity)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getUnusualActivityUniversal)

<a name="getUnusualActivityUniversal"></a>
## **getUnusualActivityUniversal**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getUnusualActivityUniversal_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsUnusualActivity getUnusualActivityUniversal(opts)

#### Options Unusual Activity Universal


Returns the latest unusual options activity across all US companies with across all option chains. Unusual options activity includes large trades, sweeps, and block trades.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'source': null
};

options.getUnusualActivityUniversal(opts).then(function(data) {
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
 **source** | String| Realtime or 15-minute delayed contracts. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsUnusualActivity**](ApiResponseOptionsUnusualActivity.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OptionsApi)

[//]: # (METHOD:getUnusualActivityUniversalIntraday)

[//]: # (RETURN_TYPE:ApiResponseOptionsUnusualActivity)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOptionsUnusualActivity.md)

[//]: # (OPERATION:getUnusualActivityUniversalIntraday_v2)

[//]: # (ENDPOINT:/options/unusual_activity/intraday)

[//]: # (DOCUMENT_LINK:OptionsApi.md#getUnusualActivityUniversalIntraday)

<a name="getUnusualActivityUniversalIntraday"></a>
## **getUnusualActivityUniversalIntraday**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getUnusualActivityUniversalIntraday_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOptionsUnusualActivity getUnusualActivityUniversalIntraday(opts)

#### Options Unusual Activity Universal Intraday


Returns unusual trades for all underlying security symbols within the query parameters.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var options = new intrinioSDK.OptionsApi();

var opts = { 
  'nextPage': null,
  'pageSize': 1000,
  'activityType': null,
  'sentiment': null,
  'startDate': new Date("2022-02-01"),
  'endDate': new Date("2022-02-03"),
  'minimumTotalValue': 100000.0,
  'maximumTotalValue': 200000.0
};

options.getUnusualActivityUniversalIntraday(opts).then(function(data) {
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
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 1000] &nbsp;
 **activityType** | String| The unusual activity type to query for. | [optional]  &nbsp;
 **sentiment** | String| The sentiment type to query for. | [optional]  &nbsp;
 **startDate** | Date| Return unusual activity on or after this date. | [optional]  &nbsp;
 **endDate** | Date| Return unusual activity before this date. | [optional]  &nbsp;
 **minimumTotalValue** | [**Object**](.md)| The inclusive minimum total value for the unusual activity. | [optional]  &nbsp;
 **maximumTotalValue** | [**Object**](.md)| The inclusive maximum total value for the unusual activity. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOptionsUnusualActivity**](ApiResponseOptionsUnusualActivity.md)



[//]: # (END_OPERATION)

