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



[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getAllEconomicIndices)

[//]: # (RETURN_TYPE:ApiResponseEconomicIndices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseEconomicIndices.md)

[//]: # (OPERATION:getAllEconomicIndices_v2)

[//]: # (ENDPOINT:/indices/economic)

[//]: # (DOCUMENT_LINK:IndexApi.md#getAllEconomicIndices)

<a name="getAllEconomicIndices"></a>
## **getAllEconomicIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllEconomicIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseEconomicIndices getAllEconomicIndices(opts)

#### All Economic Indices



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

index.getAllEconomicIndices(opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseEconomicIndices**](ApiResponseEconomicIndices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getAllSicIndices)

[//]: # (RETURN_TYPE:ApiResponseSICIndices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSICIndices.md)

[//]: # (OPERATION:getAllSicIndices_v2)

[//]: # (ENDPOINT:/indices/sic)

[//]: # (DOCUMENT_LINK:IndexApi.md#getAllSicIndices)

<a name="getAllSicIndices"></a>
## **getAllSicIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllSicIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSICIndices getAllSicIndices(opts)

#### All SIC Indices



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

index.getAllSicIndices(opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSICIndices**](ApiResponseSICIndices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getAllStockMarketIndices)

[//]: # (RETURN_TYPE:ApiResponseStockMarketIndices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockMarketIndices.md)

[//]: # (OPERATION:getAllStockMarketIndices_v2)

[//]: # (ENDPOINT:/indices/stock_market)

[//]: # (DOCUMENT_LINK:IndexApi.md#getAllStockMarketIndices)

<a name="getAllStockMarketIndices"></a>
## **getAllStockMarketIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllStockMarketIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockMarketIndices getAllStockMarketIndices(opts)

#### All Stock Market Indices



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

index.getAllStockMarketIndices(opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockMarketIndices**](ApiResponseStockMarketIndices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getEconomicIndexById)

[//]: # (RETURN_TYPE:EconomicIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:EconomicIndex.md)

[//]: # (OPERATION:getEconomicIndexById_v2)

[//]: # (ENDPOINT:/indices/economic/{identifier})

[//]: # (DOCUMENT_LINK:IndexApi.md#getEconomicIndexById)

<a name="getEconomicIndexById"></a>
## **getEconomicIndexById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEconomicIndexById_v2)

[//]: # (START_OVERVIEW)

> EconomicIndex getEconomicIndexById(identifier)

#### Lookup Economic Index



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$GDP";

index.getEconomicIndexById(identifier).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**EconomicIndex**](EconomicIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getEconomicIndexDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getEconomicIndexDataPointNumber_v2)

[//]: # (ENDPOINT:/indices/economic/{identifier}/data_point/{tag}/number)

[//]: # (DOCUMENT_LINK:IndexApi.md#getEconomicIndexDataPointNumber)

<a name="getEconomicIndexDataPointNumber"></a>
## **getEconomicIndexDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEconomicIndexDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getEconomicIndexDataPointNumber(identifier, tag)

#### Data Point (Number) for an Economic Index


Returns a numeric value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$GDP";
var tag = "level";

index.getEconomicIndexDataPointNumber(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag &lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags/economic&#39;&gt;reference&lt;/a&gt; |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getEconomicIndexDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getEconomicIndexDataPointText_v2)

[//]: # (ENDPOINT:/indices/economic/{identifier}/data_point/{tag}/text)

[//]: # (DOCUMENT_LINK:IndexApi.md#getEconomicIndexDataPointText)

<a name="getEconomicIndexDataPointText"></a>
## **getEconomicIndexDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEconomicIndexDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getEconomicIndexDataPointText(identifier, tag)

#### Data Point (Text) for an Economic Index


Returns a text value for the given &#x60;tag&#x60; for the Economic Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$GDP";
var tag = "level";

index.getEconomicIndexDataPointText(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getEconomicIndexHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseEconomicIndexHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseEconomicIndexHistoricalData.md)

[//]: # (OPERATION:getEconomicIndexHistoricalData_v2)

[//]: # (ENDPOINT:/indices/economic/{identifier}/historical_data/{tag})

[//]: # (DOCUMENT_LINK:IndexApi.md#getEconomicIndexHistoricalData)

<a name="getEconomicIndexHistoricalData"></a>
## **getEconomicIndexHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getEconomicIndexHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseEconomicIndexHistoricalData getEconomicIndexHistoricalData(identifier, tag, opts)

#### Historical Data for an Economic Index


Returns historical values for the given &#x60;tag&#x60; and the Economic Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$GDP";
var tag = "level";

var opts = { 
  'type': null,
  'startDate': new Date("2018-01-01"),
  'endDate': null,
  'sortOrder': "desc",
  'pageSize': 100,
  'nextPage': null
};

index.getEconomicIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag &lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags/economic&#39;&gt;reference&lt;/a&gt; |  &nbsp;
 **type** | String| Filter by type, when applicable | [optional]  &nbsp;
 **startDate** | Date| Get historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Get historical data on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseEconomicIndexHistoricalData**](ApiResponseEconomicIndexHistoricalData.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getSicIndexById)

[//]: # (RETURN_TYPE:SICIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:SICIndex.md)

[//]: # (OPERATION:getSicIndexById_v2)

[//]: # (ENDPOINT:/indices/sic/{identifier})

[//]: # (DOCUMENT_LINK:IndexApi.md#getSicIndexById)

<a name="getSicIndexById"></a>
## **getSicIndexById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSicIndexById_v2)

[//]: # (START_OVERVIEW)

> SICIndex getSicIndexById(identifier)

#### Lookup SIC Index



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$SIC.2911";

index.getSicIndexById(identifier).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**SICIndex**](SICIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getSicIndexDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getSicIndexDataPointNumber_v2)

[//]: # (ENDPOINT:/indices/sic/{identifier}/data_point/{tag}/number)

[//]: # (DOCUMENT_LINK:IndexApi.md#getSicIndexDataPointNumber)

<a name="getSicIndexDataPointNumber"></a>
## **getSicIndexDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSicIndexDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getSicIndexDataPointNumber(identifier, tag)

#### Data Point (Number) for an SIC Index


Returns a numeric value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$SIC.2911";
var tag = "marketcap";

index.getSicIndexDataPointNumber(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getSicIndexDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getSicIndexDataPointText_v2)

[//]: # (ENDPOINT:/indices/sic/{identifier}/data_point/{tag}/text)

[//]: # (DOCUMENT_LINK:IndexApi.md#getSicIndexDataPointText)

<a name="getSicIndexDataPointText"></a>
## **getSicIndexDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSicIndexDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getSicIndexDataPointText(identifier, tag)

#### Data Point (Text) for an SIC Index


Returns a text value for the given &#x60;tag&#x60; for the SIC Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$SIC.2911";
var tag = "marketcap";

index.getSicIndexDataPointText(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getSicIndexHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseSICIndexHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSICIndexHistoricalData.md)

[//]: # (OPERATION:getSicIndexHistoricalData_v2)

[//]: # (ENDPOINT:/indices/sic/{identifier}/historical_data/{tag})

[//]: # (DOCUMENT_LINK:IndexApi.md#getSicIndexHistoricalData)

<a name="getSicIndexHistoricalData"></a>
## **getSicIndexHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSicIndexHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSICIndexHistoricalData getSicIndexHistoricalData(identifier, tag, opts)

#### Historical Data for an SIC Index


Returns historical values for the given &#x60;tag&#x60; and the SIC Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$SIC.1";
var tag = "marketcap";

var opts = { 
  'type': null,
  'startDate': new Date("2018-01-01"),
  'endDate': null,
  'sortOrder': "desc",
  'pageSize': 100,
  'nextPage': null
};

index.getSicIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
 **type** | String| Filter by type, when applicable | [optional]  &nbsp;
 **startDate** | Date| Get historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Get historical data on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSICIndexHistoricalData**](ApiResponseSICIndexHistoricalData.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getStockMarketIndexById)

[//]: # (RETURN_TYPE:StockMarketIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:StockMarketIndex.md)

[//]: # (OPERATION:getStockMarketIndexById_v2)

[//]: # (ENDPOINT:/indices/stock_market/{identifier})

[//]: # (DOCUMENT_LINK:IndexApi.md#getStockMarketIndexById)

<a name="getStockMarketIndexById"></a>
## **getStockMarketIndexById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockMarketIndexById_v2)

[//]: # (START_OVERVIEW)

> StockMarketIndex getStockMarketIndexById(identifier)

#### Lookup Stock Market Index



[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$DJI";

index.getStockMarketIndexById(identifier).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**StockMarketIndex**](StockMarketIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getStockMarketIndexDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getStockMarketIndexDataPointNumber_v2)

[//]: # (ENDPOINT:/indices/stock_market/{identifier}/data_point/{tag}/number)

[//]: # (DOCUMENT_LINK:IndexApi.md#getStockMarketIndexDataPointNumber)

<a name="getStockMarketIndexDataPointNumber"></a>
## **getStockMarketIndexDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockMarketIndexDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getStockMarketIndexDataPointNumber(identifier, tag)

#### Data Point (Number) for Stock Market Index


Returns a numeric value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$DJI";
var tag = "level";

index.getStockMarketIndexDataPointNumber(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getStockMarketIndexDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getStockMarketIndexDataPointText_v2)

[//]: # (ENDPOINT:/indices/stock_market/{identifier}/data_point/{tag}/text)

[//]: # (DOCUMENT_LINK:IndexApi.md#getStockMarketIndexDataPointText)

<a name="getStockMarketIndexDataPointText"></a>
## **getStockMarketIndexDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockMarketIndexDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getStockMarketIndexDataPointText(identifier, tag)

#### Data Point (Text) for Stock Market Index


Returns a text value for the given &#x60;tag&#x60; for the Stock Market Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$DJI";
var tag = "level";

index.getStockMarketIndexDataPointText(identifier, tag).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:getStockMarketIndexHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseStockMarketIndexHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockMarketIndexHistoricalData.md)

[//]: # (OPERATION:getStockMarketIndexHistoricalData_v2)

[//]: # (ENDPOINT:/indices/stock_market/{identifier}/historical_data/{tag})

[//]: # (DOCUMENT_LINK:IndexApi.md#getStockMarketIndexHistoricalData)

<a name="getStockMarketIndexHistoricalData"></a>
## **getStockMarketIndexHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getStockMarketIndexHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockMarketIndexHistoricalData getStockMarketIndexHistoricalData(identifier, tag, opts)

#### Historical Data for Stock Market Index


Returns historical values for the given &#x60;tag&#x60; and the Stock Market Index with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var identifier = "$DJI";
var tag = "level";

var opts = { 
  'type': null,
  'startDate': new Date("2018-01-01"),
  'endDate': null,
  'sortOrder': "desc",
  'pageSize': 100,
  'nextPage': null
};

index.getStockMarketIndexHistoricalData(identifier, tag, opts).then(function(data) {
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
 **identifier** | String| An Index Identifier (symbol, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
 **type** | String| Filter by type, when applicable | [optional]  &nbsp;
 **startDate** | Date| Get historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Get historical data on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockMarketIndexHistoricalData**](ApiResponseStockMarketIndexHistoricalData.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:searchEconomicIndices)

[//]: # (RETURN_TYPE:ApiResponseEconomicIndicesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseEconomicIndicesSearch.md)

[//]: # (OPERATION:searchEconomicIndices_v2)

[//]: # (ENDPOINT:/indices/economic/search)

[//]: # (DOCUMENT_LINK:IndexApi.md#searchEconomicIndices)

<a name="searchEconomicIndices"></a>
## **searchEconomicIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchEconomicIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseEconomicIndicesSearch searchEconomicIndices(query, opts)

#### Search Economic Indices


Searches for indices using the text in &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var query = "GDP";

var opts = { 
  'pageSize': 100
};

index.searchEconomicIndices(query, opts).then(function(data) {
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
 **query** | String| Search query |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseEconomicIndicesSearch**](ApiResponseEconomicIndicesSearch.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:searchSicIndices)

[//]: # (RETURN_TYPE:ApiResponseSICIndicesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSICIndicesSearch.md)

[//]: # (OPERATION:searchSicIndices_v2)

[//]: # (ENDPOINT:/indices/sic/search)

[//]: # (DOCUMENT_LINK:IndexApi.md#searchSicIndices)

<a name="searchSicIndices"></a>
## **searchSicIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchSicIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSICIndicesSearch searchSicIndices(query, opts)

#### Search SIC Indices


Searches for indices using the text in &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var query = "agriculture";

var opts = { 
  'pageSize': 100
};

index.searchSicIndices(query, opts).then(function(data) {
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
 **query** | String| Search query |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSICIndicesSearch**](ApiResponseSICIndicesSearch.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:IndexApi)

[//]: # (METHOD:searchStockMarketsIndices)

[//]: # (RETURN_TYPE:ApiResponseStockMarketIndicesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseStockMarketIndicesSearch.md)

[//]: # (OPERATION:searchStockMarketsIndices_v2)

[//]: # (ENDPOINT:/indices/stock_market/search)

[//]: # (DOCUMENT_LINK:IndexApi.md#searchStockMarketsIndices)

<a name="searchStockMarketsIndices"></a>
## **searchStockMarketsIndices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchStockMarketsIndices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseStockMarketIndicesSearch searchStockMarketsIndices(query, opts)

#### Search Stock Market Indices


Searches for indices using the text in &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var index = new intrinioSDK.IndexApi();

var query = "dow";

var opts = { 
  'pageSize': 100
};

index.searchStockMarketsIndices(query, opts).then(function(data) {
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
 **query** | String| Search query |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseStockMarketIndicesSearch**](ApiResponseStockMarketIndicesSearch.md)



[//]: # (END_OPERATION)

