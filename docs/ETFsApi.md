# intrinioSDK.ETFsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEtfs**](ETFsApi.md#getAllEtfs) | **GET** /etfs | All ETFs
[**getEtf**](ETFsApi.md#getEtf) | **GET** /etfs/{identifier} | Lookup ETF
[**getEtfAnalytics**](ETFsApi.md#getEtfAnalytics) | **GET** /etfs/{identifier}/analytics | ETF Analytics
[**getEtfHoldings**](ETFsApi.md#getEtfHoldings) | **GET** /etfs/{identifier}/holdings | ETF Holdings
[**getEtfStats**](ETFsApi.md#getEtfStats) | **GET** /etfs/{identifier}/stats | Exchange Traded Fund (ETF) stats
[**searchEtfs**](ETFsApi.md#searchEtfs) | **GET** /etfs/search | Search ETFs



[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:getAllEtfs)

[//]: # (RETURN_TYPE:ApiResponseETFs)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseETFs.md)

[//]: # (OPERATION:getAllEtfs_v2)

[//]: # (ENDPOINT:/etfs)

[//]: # (DOCUMENT_LINK:ETFsApi.md#getAllEtfs)

<a name="getAllEtfs"></a>
## **getAllEtfs**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllEtfs_v2)

[//]: # (START_OVERVIEW)

> ApiResponseETFs getAllEtfs(opts)

#### All ETFs


Returns a list of Exchange Traded Funds (ETFs) sourced from FirstBridge

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var opts = { 
  'exchange': "XNAS",
  'pageSize': 100,
  'nextPage': null
};

eTFs.getAllEtfs(opts).then(function(data) {
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
 **exchange** | String|  | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseETFs**](ApiResponseETFs.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:getEtf)

[//]: # (RETURN_TYPE:ETF)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ETF.md)

[//]: # (OPERATION:getEtf_v2)

[//]: # (ENDPOINT:/etfs/{identifier})

[//]: # (DOCUMENT_LINK:ETFsApi.md#getEtf)

<a name="getEtf"></a>
## **getEtf**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEtf_v2)

[//]: # (START_OVERVIEW)

> ETF getEtf(identifier)

#### Lookup ETF


Returns the Exchange Traded Fund (ETF) with the given identifier

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var identifier = "SPY";

eTFs.getEtf(identifier).then(function(data) {
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
 **identifier** | String| An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ETF**](ETF.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:getEtfAnalytics)

[//]: # (RETURN_TYPE:ETFAnalytics)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ETFAnalytics.md)

[//]: # (OPERATION:getEtfAnalytics_v2)

[//]: # (ENDPOINT:/etfs/{identifier}/analytics)

[//]: # (DOCUMENT_LINK:ETFsApi.md#getEtfAnalytics)

<a name="getEtfAnalytics"></a>
## **getEtfAnalytics**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEtfAnalytics_v2)

[//]: # (START_OVERVIEW)

> ETFAnalytics getEtfAnalytics(identifier)

#### ETF Analytics


Returns analytics for the Exchange Traded Fund (ETF) including volume, market cap, 52 week high, and 52 week low

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var identifier = "SPY";

eTFs.getEtfAnalytics(identifier).then(function(data) {
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
 **identifier** | String| An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ETFAnalytics**](ETFAnalytics.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:getEtfHoldings)

[//]: # (RETURN_TYPE:ApiResponseETFHoldings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseETFHoldings.md)

[//]: # (OPERATION:getEtfHoldings_v2)

[//]: # (ENDPOINT:/etfs/{identifier}/holdings)

[//]: # (DOCUMENT_LINK:ETFsApi.md#getEtfHoldings)

<a name="getEtfHoldings"></a>
## **getEtfHoldings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEtfHoldings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseETFHoldings getEtfHoldings(identifier, opts)

#### ETF Holdings


Returns the holdings sorted by weight descending and the Exchange Traded Fund (ETF) summary

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var identifier = "SPY";

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

eTFs.getEtfHoldings(identifier, opts).then(function(data) {
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
 **identifier** | String| An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID) |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseETFHoldings**](ApiResponseETFHoldings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:getEtfStats)

[//]: # (RETURN_TYPE:ETFStats)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ETFStats.md)

[//]: # (OPERATION:getEtfStats_v2)

[//]: # (ENDPOINT:/etfs/{identifier}/stats)

[//]: # (DOCUMENT_LINK:ETFsApi.md#getEtfStats)

<a name="getEtfStats"></a>
## **getEtfStats**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEtfStats_v2)

[//]: # (START_OVERVIEW)

> ETFStats getEtfStats(identifier)

#### Exchange Traded Fund (ETF) stats


Returns daily stats for the Exchange Traded Fund (ETF) including net asset value, beta vs spy, returns, and volatility

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var identifier = "SPY";

eTFs.getEtfStats(identifier).then(function(data) {
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
 **identifier** | String| An ETF identifier (Ticker, Figi Ticker, ISIN, RIC, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ETFStats**](ETFStats.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ETFsApi)

[//]: # (METHOD:searchEtfs)

[//]: # (RETURN_TYPE:ApiResponseETFs)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseETFs.md)

[//]: # (OPERATION:searchEtfs_v2)

[//]: # (ENDPOINT:/etfs/search)

[//]: # (DOCUMENT_LINK:ETFsApi.md#searchEtfs)

<a name="searchEtfs"></a>
## **searchEtfs**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchEtfs_v2)

[//]: # (START_OVERVIEW)

> ApiResponseETFs searchEtfs(query)

#### Search ETFs


Searches for Exchange Traded Funds (ETFs) matching the text &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var eTFs = new intrinioSDK.ETFsApi();

var query = "iShares";

eTFs.searchEtfs(query).then(function(data) {
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
 **query** | String|  |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseETFs**](ApiResponseETFs.md)



[//]: # (END_OPERATION)

