# intrinio.SecurityApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSecurities**](SecurityApi.md#getAllSecurities) | **GET** /securities | Get All Securiites
[**getSecurityById**](SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Get a Security by ID
[**getSecurityDataPointNumber**](SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{item}/number | Get Security Data Point (Number)
[**getSecurityDataPointText**](SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{item}/text | Get Security Data Point (Text)
[**getSecurityHistoricalData**](SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{item} | Get Security Historical Data
[**getSecurityStockPrices**](SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Get Stock Prices for Security
[**screenSecurities**](SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
[**searchSecurities**](SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities


<a name="getAllSecurities"></a>
# **getAllSecurities**
> [SecuritySummary] getAllSecurities(opts)

Get All Securiites

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

security_api.getAllSecurities(opts).then(function(data) {
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

[**[SecuritySummary]**](SecuritySummary.md)

<a name="getSecurityById"></a>
# **getSecurityById**
> Security getSecurityById(identifier)

Get a Security by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var identifier = "identifier_example"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)


security_api.getSecurityById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 

### Return type

[**Security**](Security.md)

<a name="getSecurityDataPointNumber"></a>
# **getSecurityDataPointNumber**
> DataPointNumber getSecurityDataPointNumber(identifier, item)

Get Security Data Point (Number)

Returns a numeric value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var identifier = "identifier_example"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


security_api.getSecurityDataPointNumber(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointNumber**](DataPointNumber.md)

<a name="getSecurityDataPointText"></a>
# **getSecurityDataPointText**
> DataPointText getSecurityDataPointText(identifier, item)

Get Security Data Point (Text)

Returns a text value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var identifier = "identifier_example"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item


security_api.getSecurityDataPointText(identifier, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 

### Return type

[**DataPointText**](DataPointText.md)

<a name="getSecurityHistoricalData"></a>
# **getSecurityHistoricalData**
> [HistoricalData] getSecurityHistoricalData(identifier, item, opts)

Get Security Historical Data

Returns historical values for the given &#x60;item&#x60; and the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var identifier = "identifier_example"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var item = "item_example"; // String | An Intrinio data tag or other item

var opts = { 
  'type': "type_example", // String | Filter by type, when applicable
  'startDate': new Date("2013-10-20"), // Date | Get historical data on or after this date
  'endDate': new Date("2013-10-20"), // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

security_api.getSecurityHistoricalData(identifier, item, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **item** | **String**| An Intrinio data tag or other item | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[HistoricalData]**](HistoricalData.md)

<a name="getSecurityStockPrices"></a>
# **getSecurityStockPrices**
> [StockPriceSummary] getSecurityStockPrices(identifier, opts)

Get Stock Prices for Security

Return stock prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var identifier = "identifier_example"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2013-10-20"), // Date | Return prices on or after the date
  'endDate': new Date("2013-10-20"), // Date | Return prices on or beore the date
  'frequency': "daily", // String | Return stock prices in the given frequency
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

security_api.getSecurityStockPrices(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **Date**| Return prices on or after the date | [optional] 
 **endDate** | **Date**| Return prices on or beore the date | [optional] 
 **frequency** | **String**| Return stock prices in the given frequency | [optional] [default to daily]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[StockPriceSummary]**](StockPriceSummary.md)

<a name="screenSecurities"></a>
# **screenSecurities**
> [SecurityScreenResult] screenSecurities(opts)

Screen Securities

Screen securities using complex logic

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var opts = { 
  'logic': new intrinio.SecurityScreenGroup(), // SecurityScreenGroup | The logic to screen with, consisting of operators, clauses, and nested groups
  'orderColumn': "orderColumn_example", // String | Results returned sorted by this column
  'orderDirection': "asc", // String | Sort order to use with the order_column
  'primaryOnly': false, // Boolean | Return only primary securities
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

security_api.screenSecurities(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logic** | [**SecurityScreenGroup**](SecurityScreenGroup.md)| The logic to screen with, consisting of operators, clauses, and nested groups | [optional] 
 **orderColumn** | **String**| Results returned sorted by this column | [optional] 
 **orderDirection** | **String**| Sort order to use with the order_column | [optional] [default to asc]
 **primaryOnly** | **Boolean**| Return only primary securities | [optional] [default to false]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[SecurityScreenResult]**](SecurityScreenResult.md)

<a name="searchSecurities"></a>
# **searchSecurities**
> [SecuritySummary] searchSecurities(query, opts)

Search Securities

Searches for Securities matching the text &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var security_api = new intrinio.SecurityApi();

var query = "query_example"; // String | 

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

security_api.searchSecurities(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[SecuritySummary]**](SecuritySummary.md)

