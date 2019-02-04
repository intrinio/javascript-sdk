# intrinioSDK.IndexApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEconomicIndices**](IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | All Economic Indices
[**getAllSicIndices**](IndexApi.md#getAllSicIndices) | **GET** /indices/sic | All SIC Indices
[**getAllStockMarketIndices**](IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | All Stock Market Indices
[**getEconomicIndexById**](IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Lookup Economic Index
[**getEconomicIndexDataPointNumber**](IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Data Point (Number) for an Economic Index
[**getEconomicIndexDataPointText**](IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Data Point (Text) for an Economic Index
[**getEconomicIndexHistoricalData**](IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Historical Data for an Economic Index
[**getSicIndexById**](IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Lookup SIC Index
[**getSicIndexDataPointNumber**](IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Data Point (Number) for an SIC Index
[**getSicIndexDataPointText**](IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Data Point (Text) for an SIC Index
[**getSicIndexHistoricalData**](IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Historical Data for an SIC Index
[**getStockMarketIndexById**](IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Lookup Stock Market Index
[**getStockMarketIndexDataPointNumber**](IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Data Point (Number) for Stock Market Index
[**getStockMarketIndexDataPointText**](IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Data Point (Text) for Stock Market Index
[**getStockMarketIndexHistoricalData**](IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Historical Data for Stock Market Index
[**searchEconomicIndices**](IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
[**searchSicIndices**](IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
[**searchStockMarketsIndices**](IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices


<a name="getAllEconomicIndices"></a>
# **getAllEconomicIndices**
> ApiResponseEconomicIndices getAllEconomicIndices(opts)

All Economic Indices

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getAllEconomicIndices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseEconomicIndices**](ApiResponseEconomicIndices.md)

<a name="getAllSicIndices"></a>
# **getAllSicIndices**
> ApiResponseSICIndices getAllSicIndices(opts)

All SIC Indices

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getAllSicIndices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSICIndices**](ApiResponseSICIndices.md)

<a name="getAllStockMarketIndices"></a>
# **getAllStockMarketIndices**
> ApiResponseStockMarketIndices getAllStockMarketIndices(opts)

All Stock Market Indices

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getAllStockMarketIndices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockMarketIndices**](ApiResponseStockMarketIndices.md)

<a name="getEconomicIndexById"></a>
# **getEconomicIndexById**
> EconomicIndex getEconomicIndexById(identifier)

Lookup Economic Index

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)


indexAPI.getEconomicIndexById(identifier).then(function(data) {
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

Data Point (Number) for an Economic Index

Returns a numeric value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getEconomicIndexDataPointNumber(identifier, tag).then(function(data) {
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

Data Point (Text) for an Economic Index

Returns a text value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getEconomicIndexDataPointText(identifier, tag).then(function(data) {
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

Historical Data for an Economic Index

Returns historical values for the given &#x60;tag&#x60; and the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$GDP"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getEconomicIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseEconomicIndexHistoricalData**](ApiResponseEconomicIndexHistoricalData.md)

<a name="getSicIndexById"></a>
# **getSicIndexById**
> SICIndex getSicIndexById(identifier)

Lookup SIC Index

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)


indexAPI.getSicIndexById(identifier).then(function(data) {
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

Data Point (Number) for an SIC Index

Returns a numeric value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getSicIndexDataPointNumber(identifier, tag).then(function(data) {
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

Data Point (Text) for an SIC Index

Returns a text value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getSicIndexDataPointText(identifier, tag).then(function(data) {
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

Historical Data for an SIC Index

Returns historical values for the given &#x60;tag&#x60; and the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$SIC.1"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "marketcap"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getSicIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSICIndexHistoricalData**](ApiResponseSICIndexHistoricalData.md)

<a name="getStockMarketIndexById"></a>
# **getStockMarketIndexById**
> StockMarketIndex getStockMarketIndexById(identifier)

Lookup Stock Market Index

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)


indexAPI.getStockMarketIndexById(identifier).then(function(data) {
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

Data Point (Number) for Stock Market Index

Returns a numeric value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getStockMarketIndexDataPointNumber(identifier, tag).then(function(data) {
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

Data Point (Text) for Stock Market Index

Returns a text value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getStockMarketIndexDataPointText(identifier, tag).then(function(data) {
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

Historical Data for Stock Market Index

Returns historical values for the given &#x60;tag&#x60; and the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

indexAPI.getStockMarketIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseStockMarketIndexHistoricalData**](ApiResponseStockMarketIndexHistoricalData.md)

<a name="searchEconomicIndices"></a>
# **searchEconomicIndices**
> ApiResponseEconomicIndicesSearch searchEconomicIndices(query, opts)

Search Economic Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var query = "GDP"; // String | Search query

var opts = { 
  'pageSize': 100 // Number | The number of results to return
};

indexAPI.searchEconomicIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseEconomicIndicesSearch**](ApiResponseEconomicIndicesSearch.md)

<a name="searchSicIndices"></a>
# **searchSicIndices**
> ApiResponseSICIndicesSearch searchSicIndices(query, opts)

Search SIC Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var query = "agriculture"; // String | Search query

var opts = { 
  'pageSize': 100 // Number | The number of results to return
};

indexAPI.searchSicIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseSICIndicesSearch**](ApiResponseSICIndicesSearch.md)

<a name="searchStockMarketsIndices"></a>
# **searchStockMarketsIndices**
> ApiResponseStockMarketIndicesSearch searchStockMarketsIndices(query, opts)

Search Stock Market Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var indexAPI = new intrinioSDK.IndexApi();

var query = "dow"; // String | Search query

var opts = { 
  'pageSize': 100 // Number | The number of results to return
};

indexAPI.searchStockMarketsIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseStockMarketIndicesSearch**](ApiResponseStockMarketIndicesSearch.md)

