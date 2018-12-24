# intrinioSDK.SecurityApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSecurities**](SecurityApi.md#getAllSecurities) | **GET** /securities | Get All Securiites
[**getSecurityById**](SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Get a Security by ID
[**getSecurityDataPointNumber**](SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Get Security Data Point (Number)
[**getSecurityDataPointText**](SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Get Security Data Point (Text)
[**getSecurityHistoricalData**](SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Get Security Historical Data
[**getSecurityStockPriceAdjustments**](SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Get Stock Price Adjustments for Security
[**getSecurityStockPrices**](SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Get Stock Prices for Security
[**screenSecurities**](SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
[**searchSecurities**](SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities


<a name="getAllSecurities"></a>
# **getAllSecurities**
> ApiResponseSecurities getAllSecurities(opts)

Get All Securiites

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var opts = { 
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getAllSecurities(opts).then(function(data) {
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

[**ApiResponseSecurities**](ApiResponseSecurities.md)

<a name="getSecurityById"></a>
# **getSecurityById**
> Security getSecurityById(identifier)

Get a Security by ID

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)


securityAPI.getSecurityById(identifier).then(function(data) {
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
> &#39;Number&#39; getSecurityDataPointNumber(identifier, tag)

Get Security Data Point (Number)

Returns a numeric value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "52_week_high"; // String | An Intrinio data tag ID or code-name


securityAPI.getSecurityDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;Number&#39;**

<a name="getSecurityDataPointText"></a>
# **getSecurityDataPointText**
> &#39;String&#39; getSecurityDataPointText(identifier, tag)

Get Security Data Point (Text)

Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "figi"; // String | An Intrinio data tag ID or code-name


securityAPI.getSecurityDataPointText(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;String&#39;**

<a name="getSecurityHistoricalData"></a>
# **getSecurityHistoricalData**
> ApiResponseSecurityHistoricalData getSecurityHistoricalData(identifier, tag, opts)

Get Security Historical Data

Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "volume"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityHistoricalData(identifier, tag, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityHistoricalData**](ApiResponseSecurityHistoricalData.md)

<a name="getSecurityStockPriceAdjustments"></a>
# **getSecurityStockPriceAdjustments**
> ApiResponseSecurityStockPriceAdjustments getSecurityStockPriceAdjustments(identifier, opts)

Get Stock Price Adjustments for Security

Return stock price adjustments for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2018-01-01"), // Date | Return price adjustments on or after the date
  'endDate': new Date("2019-01-01"), // Date | Return price adjustments on or before the date
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityStockPriceAdjustments(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **Date**| Return price adjustments on or after the date | [optional] 
 **endDate** | **Date**| Return price adjustments on or before the date | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityStockPriceAdjustments**](ApiResponseSecurityStockPriceAdjustments.md)

<a name="getSecurityStockPrices"></a>
# **getSecurityStockPrices**
> ApiResponseSecurityStockPrices getSecurityStockPrices(identifier, opts)

Get Stock Prices for Security

Return stock prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2018-01-01"), // Date | Return prices on or after the date
  'endDate': new Date("2019-01-01"), // Date | Return prices on or before the date
  'frequency': "daily", // String | Return stock prices in the given frequency
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityStockPrices(identifier, opts).then(function(data) {
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
 **endDate** | **Date**| Return prices on or before the date | [optional] 
 **frequency** | **String**| Return stock prices in the given frequency | [optional] [default to daily]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityStockPrices**](ApiResponseSecurityStockPrices.md)

<a name="screenSecurities"></a>
# **screenSecurities**
> [SecurityScreenResult] screenSecurities(opts)

Screen Securities

Screen securities using complex logic

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var opts = { 
  'logic': new intrinioSDK.SecurityScreenGroup(), // SecurityScreenGroup | The logic to screen with, consisting of operators, clauses, and nested groups.<br/> See <a href=\"/documentation/screener_v2\" target=\"_blank\">screener documentation</a> for details on how to construct conditions.
  'orderColumn': "orderColumn_example", // String | Results returned sorted by this column
  'orderDirection': "asc", // String | Sort order to use with the order_column
  'primaryOnly': false // Boolean | Return only primary securities
};

securityAPI.screenSecurities(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logic** | [**SecurityScreenGroup**](SecurityScreenGroup.md)| The logic to screen with, consisting of operators, clauses, and nested groups.&lt;br/&gt; See &lt;a href&#x3D;\&quot;/documentation/screener_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;screener documentation&lt;/a&gt; for details on how to construct conditions. | [optional] 
 **orderColumn** | **String**| Results returned sorted by this column | [optional] 
 **orderDirection** | **String**| Sort order to use with the order_column | [optional] [default to asc]
 **primaryOnly** | **Boolean**| Return only primary securities | [optional] [default to false]

### Return type

[**[SecurityScreenResult]**](SecurityScreenResult.md)

<a name="searchSecurities"></a>
# **searchSecurities**
> ApiResponseSecurities searchSecurities(query)

Search Securities

Searches for Securities matching the text &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var query = "Apple"; // String | 


securityAPI.searchSecurities(query).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 

### Return type

[**ApiResponseSecurities**](ApiResponseSecurities.md)

