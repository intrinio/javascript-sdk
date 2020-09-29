# intrinioSDK.ForexApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getForexCurrencies**](ForexApi.md#getForexCurrencies) | **GET** /forex/currencies | Forex Currencies
[**getForexPairs**](ForexApi.md#getForexPairs) | **GET** /forex/pairs | Forex Currency Pairs
[**getForexPrices**](ForexApi.md#getForexPrices) | **GET** /forex/prices/{pair}/{timeframe} | Forex Currency Prices



[//]: # (START_OPERATION)

[//]: # (CLASS:ForexApi)

[//]: # (METHOD:getForexCurrencies)

[//]: # (RETURN_TYPE:ApiResponseForexCurrencies)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseForexCurrencies.md)

[//]: # (OPERATION:getForexCurrencies_v2)

[//]: # (ENDPOINT:/forex/currencies)

[//]: # (DOCUMENT_LINK:ForexApi.md#getForexCurrencies)

<a name="getForexCurrencies"></a>
## **getForexCurrencies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getForexCurrencies_v2)

[//]: # (START_OVERVIEW)

> ApiResponseForexCurrencies getForexCurrencies()

#### Forex Currencies


Returns a list of forex currencies for which prices are available.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var forex = new intrinioSDK.ForexApi();

forex.getForexCurrencies().then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)

This endpoint does not need any parameter.
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseForexCurrencies**](ApiResponseForexCurrencies.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ForexApi)

[//]: # (METHOD:getForexPairs)

[//]: # (RETURN_TYPE:ApiResponseForexPairs)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseForexPairs.md)

[//]: # (OPERATION:getForexPairs_v2)

[//]: # (ENDPOINT:/forex/pairs)

[//]: # (DOCUMENT_LINK:ForexApi.md#getForexPairs)

<a name="getForexPairs"></a>
## **getForexPairs**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getForexPairs_v2)

[//]: # (START_OVERVIEW)

> ApiResponseForexPairs getForexPairs()

#### Forex Currency Pairs


Returns a list of currency pairs used to request foreign exchange (forex) market price data. The currency that is used as the reference is called quote currency and the currency that is quoted in relation is called the base currency. For example, in the pair code “EURGBP” with a price of 0.88, one Euro (base currency) can be exchanged for 0.88 British Pounds (quote currency).

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var forex = new intrinioSDK.ForexApi();

forex.getForexPairs().then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

[//]: # (START_PARAMETERS)

This endpoint does not need any parameter.
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseForexPairs**](ApiResponseForexPairs.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ForexApi)

[//]: # (METHOD:getForexPrices)

[//]: # (RETURN_TYPE:ApiResponseForexPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseForexPrices.md)

[//]: # (OPERATION:getForexPrices_v2)

[//]: # (ENDPOINT:/forex/prices/{pair}/{timeframe})

[//]: # (DOCUMENT_LINK:ForexApi.md#getForexPrices)

<a name="getForexPrices"></a>
## **getForexPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getForexPrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseForexPrices getForexPrices(pair, timeframe, opts)

#### Forex Currency Prices


Provides a list of forex price quotes for a given forex currency pair and timeframe.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var forex = new intrinioSDK.ForexApi();

var pair = "EURUSD";
var timeframe = "D1";

var opts = { 
  'timezone': "UTC",
  'startDate': new Date("2018-01-01"),
  'startTime': null,
  'endDate': new Date("2019-01-01"),
  'endTime': null,
  'pageSize': 100,
  'nextPage': null
};

forex.getForexPrices(pair, timeframe, opts).then(function(data) {
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
 **pair** | String| The Forex Currency Pair code |  &nbsp;
 **timeframe** | String| The time interval for the quotes |  &nbsp;
 **timezone** | String| Returns trading times in this timezone | [optional] [default to UTC] &nbsp;
 **startDate** | Date| Return Forex Prices on or after this date | [optional]  &nbsp;
 **startTime** | String| Return Forex Prices at or after this time (24-hour in &#39;hh:mm&#39; format, UTC timezone) | [optional]  &nbsp;
 **endDate** | Date| Return Forex Prices on or before this date | [optional]  &nbsp;
 **endTime** | String| Return Forex Prices at or before this time (24-hour in &#39;hh:mm&#39; format, UTC timezone) | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseForexPrices**](ApiResponseForexPrices.md)



[//]: # (END_OPERATION)

