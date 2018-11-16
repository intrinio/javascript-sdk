# intrinio.IndexApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEconomicIndices**](IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | Get ALl Economic Indices
[**getAllSicIndices**](IndexApi.md#getAllSicIndices) | **GET** /indices/sic | Get All SIC Indices
[**getAllStockMarketIndices**](IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | Get All Stock Market Indices
[**getEconomicIndexById**](IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Get an Economic Index by ID
[**getEconomicIndexDataPointNumber**](IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{item}/number | Get Economic Index Data Point (Number)
[**getEconomicIndexDataPointText**](IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{item}/text | Get Economic Index Data Point (Text)
[**getEconomicIndexHistoricalData**](IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{item} | Get Economic Index Historical Data
[**getSicIndexById**](IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Get an SIC Index by ID
[**getSicIndexDataPointNumber**](IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{item}/number | Get SIC Index Data Point (Number)
[**getSicIndexDataPointText**](IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{item}/text | Get SIC Index Data Point (Text)
[**getSicIndexHistoricalData**](IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{item} | Get SIC Index Historical Data
[**getStockMarketIndexById**](IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Get a Stock Market Index by ID
[**getStockMarketIndexDataPointNumber**](IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{item}/number | Get Stock Market Index Data Point (Number)
[**getStockMarketIndexDataPointText**](IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{item}/text | Get Stock Market Index Data Point (Text)
[**getStockMarketIndexHistoricalData**](IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{item} | Get Stock Market Index Historical Data
[**searchEconomicIndices**](IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
[**searchSicIndices**](IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
[**searchStockMarketsIndices**](IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices


<a name="getAllEconomicIndices"></a>
# **getAllEconomicIndices**
> [EconomicIndexSummary] getAllEconomicIndices(opts)

Get ALl Economic Indices

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[EconomicIndexSummary]**](EconomicIndexSummary.md)

<a name="getAllSicIndices"></a>
# **getAllSicIndices**
> [SICIndex] getAllSicIndices(opts)

Get All SIC Indices

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[SICIndex]**](SICIndex.md)

<a name="getAllStockMarketIndices"></a>
# **getAllStockMarketIndices**
> [StockMarketIndexSummary] getAllStockMarketIndices(opts)

Get All Stock Market Indices

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
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

[**[StockMarketIndexSummary]**](StockMarketIndexSummary.md)

<a name="getEconomicIndexById"></a>
# **getEconomicIndexById**
> EconomicIndex getEconomicIndexById(identifier)

Get an Economic Index by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)


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
> DataPointNumber getEconomicIndexDataPointNumber(identifier, item)

Get Economic Index Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getEconomicIndexDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getEconomicIndexDataPointText"></a>
# **getEconomicIndexDataPointText**
> DataPointText getEconomicIndexDataPointText(identifier, item)

Get Economic Index Data Point (Text)

Returns a text value for the given &#x60;item&#x60; for the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getEconomicIndexDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getEconomicIndexHistoricalData"></a>
# **getEconomicIndexHistoricalData**
> [HistoricalData] getEconomicIndexHistoricalData(identifier, item, opts)

Get Economic Index Historical Data

Returns historical values for the given &#x60;item&#x60; and the Economic Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100 // Number | 
};

index_api.getEconomicIndexHistoricalData(identifier, item, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**|  | [optional] [default to 100]

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="getSicIndexById"></a>
# **getSicIndexById**
> SICIndex getSicIndexById(identifier)

Get an SIC Index by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)


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
> DataPointNumber getSicIndexDataPointNumber(identifier, item)

Get SIC Index Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getSicIndexDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getSicIndexDataPointText"></a>
# **getSicIndexDataPointText**
> DataPointText getSicIndexDataPointText(identifier, item)

Get SIC Index Data Point (Text)

Returns a text value for the given &#x60;item&#x60; for the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getSicIndexDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getSicIndexHistoricalData"></a>
# **getSicIndexHistoricalData**
> [HistoricalData] getSicIndexHistoricalData(identifier, item, opts)

Get SIC Index Historical Data

Returns historical values for the given &#x60;item&#x60; and the SIC Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100 // Number | 
};

index_api.getSicIndexHistoricalData(identifier, item, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**|  | [optional] [default to 100]

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="getStockMarketIndexById"></a>
# **getStockMarketIndexById**
> StockMarketIndex getStockMarketIndexById(identifier)

Get a Stock Market Index by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)


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
> DataPointNumber getStockMarketIndexDataPointNumber(identifier, item)

Get Stock Market Index Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getStockMarketIndexDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getStockMarketIndexDataPointText"></a>
# **getStockMarketIndexDataPointText**
> DataPointText getStockMarketIndexDataPointText(identifier, item)

Get Stock Market Index Data Point (Text)

Returns a text value for the given &#x60;item&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


index_api.getStockMarketIndexDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getStockMarketIndexHistoricalData"></a>
# **getStockMarketIndexHistoricalData**
> [HistoricalData] getStockMarketIndexHistoricalData(identifier, item, opts)

Get Stock Market Index Historical Data

Returns historical values for the given &#x60;item&#x60; and the Stock Market Index with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var identifier = "identifier_example"; // String | An Index Identifier (symbol, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical data on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100 // Number | 
};

index_api.getStockMarketIndexHistoricalData(identifier, item, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| An Index Identifier (symbol, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical data on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**|  | [optional] [default to 100]

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="searchEconomicIndices"></a>
# **searchEconomicIndices**
> [EconomicIndexSummary] searchEconomicIndices(query, opts)

Search Economic Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var query = "query_example"; // String | Search query

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

index_api.searchEconomicIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[EconomicIndexSummary]**](EconomicIndexSummary.md)

<a name="searchSicIndices"></a>
# **searchSicIndices**
> [SICIndex] searchSicIndices(query, opts)

Search SIC Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var query = "query_example"; // String | Search query

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

index_api.searchSicIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[SICIndex]**](SICIndex.md)

<a name="searchStockMarketsIndices"></a>
# **searchStockMarketsIndices**
> [StockMarketIndexSummary] searchStockMarketsIndices(query, opts)

Search Stock Market Indices

Searches for indices using the text in &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var index_api = new intrinio.IndexApi();

var query = "query_example"; // String | Search query

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

index_api.searchStockMarketsIndices(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[StockMarketIndexSummary]**](StockMarketIndexSummary.md)

