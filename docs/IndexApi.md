# intrinio-sdk.IndexApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEconomicIndices**](IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | Get All Economic Indices
[**getAllSicIndices**](IndexApi.md#getAllSicIndices) | **GET** /indices/sic | Get All SIC Indices
[**getAllStockMarketIndices**](IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | Get All Stock Market Indices
[**getEconomicIndexById**](IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Get an Economic Index by ID
[**getEconomicIndexDataPointNumber**](IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Get Economic Index Data Point (Number)
[**getEconomicIndexDataPointText**](IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Get Economic Index Data Point (Text)
[**getEconomicIndexHistoricalData**](IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Get Economic Index Historical Data
[**getSicIndexById**](IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Get an SIC Index by ID
[**getSicIndexDataPointNumber**](IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Get SIC Index Data Point (Number)
[**getSicIndexDataPointText**](IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Get SIC Index Data Point (Text)
[**getSicIndexHistoricalData**](IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Get SIC Index Historical Data
[**getStockMarketIndexById**](IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Get a Stock Market Index by ID
[**getStockMarketIndexDataPointNumber**](IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Get Stock Market Index Data Point (Number)
[**getStockMarketIndexDataPointText**](IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Get Stock Market Index Data Point (Text)
[**getStockMarketIndexHistoricalData**](IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Get Stock Market Index Historical Data
[**searchEconomicIndices**](IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
[**searchSicIndices**](IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
[**searchStockMarketsIndices**](IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices


<a name="getAllEconomicIndices"></a>
# **getAllEconomicIndices**
> ApiResponseEconomicIndices getAllEconomicIndices(opts)

Get All Economic Indices

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getAllEconomicIndices(opts).then(function(data) {
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

[**ApiResponseEconomicIndices**](ApiResponseEconomicIndices.md)

<a name="getAllSicIndices"></a>
# **getAllSicIndices**
> ApiResponseSICIndices getAllSicIndices(opts)

Get All SIC Indices

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getAllSicIndices(opts).then(function(data) {
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

[**ApiResponseSICIndices**](ApiResponseSICIndices.md)

<a name="getAllStockMarketIndices"></a>
# **getAllStockMarketIndices**
> ApiResponseStockMarketIndices getAllStockMarketIndices(opts)

Get All Stock Market Indices

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getAllStockMarketIndices(opts).then(function(data) {
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

[**ApiResponseStockMarketIndices**](ApiResponseStockMarketIndices.md)

<a name="getEconomicIndexById"></a>
# **getEconomicIndexById**
> EconomicIndex getEconomicIndexById(identifier)

Get an Economic Index by ID

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)


index_api.getEconomicIndexById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 

### Return type

[**EconomicIndex**](EconomicIndex.md)

<a name="getEconomicIndexDataPointNumber"></a>
# **getEconomicIndexDataPointNumber**
> &#39;Number&#39; getEconomicIndexDataPointNumber(identifier, tag)

Get Economic Index Data Point (Number)

Returns a numeric value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getEconomicIndexDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;Number&#39;**

<a name="getEconomicIndexDataPointText"></a>
# **getEconomicIndexDataPointText**
> &#39;String&#39; getEconomicIndexDataPointText(identifier, tag)

Get Economic Index Data Point (Text)

Returns a text value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getEconomicIndexDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;String&#39;**

<a name="getEconomicIndexHistoricalData"></a>
# **getEconomicIndexHistoricalData**
> ApiResponseEconomicIndexHistoricalData getEconomicIndexHistoricalData(identifier, tag, opts)

Get Economic Index Historical Data

Returns historical values for the given &#x60;tag&#x60; and the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getEconomicIndexHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseEconomicIndexHistoricalData**](ApiResponseEconomicIndexHistoricalData.md)

<a name="getSicIndexById"></a>
# **getSicIndexById**
> SICIndex getSicIndexById(identifier)

Get an SIC Index by ID

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)


index_api.getSicIndexById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 

### Return type

[**SICIndex**](SICIndex.md)

<a name="getSicIndexDataPointNumber"></a>
# **getSicIndexDataPointNumber**
> &#39;Number&#39; getSicIndexDataPointNumber(identifier, tag)

Get SIC Index Data Point (Number)

Returns a numeric value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getSicIndexDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;Number&#39;**

<a name="getSicIndexDataPointText"></a>
# **getSicIndexDataPointText**
> &#39;String&#39; getSicIndexDataPointText(identifier, tag)

Get SIC Index Data Point (Text)

Returns a text value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getSicIndexDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;String&#39;**

<a name="getSicIndexHistoricalData"></a>
# **getSicIndexHistoricalData**
> ApiResponseSICIndexHistoricalData getSicIndexHistoricalData(identifier, tag, opts)

Get SIC Index Historical Data

Returns historical values for the given &#x60;tag&#x60; and the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getSicIndexHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSICIndexHistoricalData**](ApiResponseSICIndexHistoricalData.md)

<a name="getStockMarketIndexById"></a>
# **getStockMarketIndexById**
> StockMarketIndex getStockMarketIndexById(identifier)

Get a Stock Market Index by ID

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)


index_api.getStockMarketIndexById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 

### Return type

[**StockMarketIndex**](StockMarketIndex.md)

<a name="getStockMarketIndexDataPointNumber"></a>
# **getStockMarketIndexDataPointNumber**
> &#39;Number&#39; getStockMarketIndexDataPointNumber(identifier, tag)

Get Stock Market Index Data Point (Number)

Returns a numeric value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getStockMarketIndexDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;Number&#39;**

<a name="getStockMarketIndexDataPointText"></a>
# **getStockMarketIndexDataPointText**
> &#39;String&#39; getStockMarketIndexDataPointText(identifier, tag)

Get Stock Market Index Data Point (Text)

Returns a text value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


index_api.getStockMarketIndexDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;String&#39;**

<a name="getStockMarketIndexHistoricalData"></a>
# **getStockMarketIndexHistoricalData**
> ApiResponseStockMarketIndexHistoricalData getStockMarketIndexHistoricalData(identifier, tag, opts)

Get Stock Market Index Historical Data

Returns historical values for the given &#x60;tag&#x60; and the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': null // String | Gets the next page of data from a previous API call
};

index_api.getStockMarketIndexHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockMarketIndexHistoricalData**](ApiResponseStockMarketIndexHistoricalData.md)

<a name="searchEconomicIndices"></a>
# **searchEconomicIndices**
> ApiResponseEconomicIndices searchEconomicIndices(query)

Search Economic Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var query = "GDP"; // String | Search query


index_api.searchEconomicIndices(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 

### Return type

[**ApiResponseEconomicIndices**](ApiResponseEconomicIndices.md)

<a name="searchSicIndices"></a>
# **searchSicIndices**
> ApiResponseSICIndices searchSicIndices(query)

Search SIC Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var query = "agriculture"; // String | Search query


index_api.searchSicIndices(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 

### Return type

[**ApiResponseSICIndices**](ApiResponseSICIndices.md)

<a name="searchStockMarketsIndices"></a>
# **searchStockMarketsIndices**
> ApiResponseStockMarketIndices searchStockMarketsIndices(query)

Search Stock Market Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio-sdk = require('intrinio-sdk');
intrinio-sdk.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var index_api = new intrinio-sdk.IndexApi();

var query = "dow"; // String | Search query


index_api.searchStockMarketsIndices(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 

### Return type

[**ApiResponseStockMarketIndices**](ApiResponseStockMarketIndices.md)

