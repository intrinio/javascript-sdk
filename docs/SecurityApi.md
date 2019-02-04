# intrinioSDK.SecurityApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSecurities**](SecurityApi.md#getAllSecurities) | **GET** /securities | All Securities
[**getSecurityById**](SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Lookup Security
[**getSecurityDataPointNumber**](SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Data Point (Number) for Security
[**getSecurityDataPointText**](SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Data Point (Text) for Security
[**getSecurityHistoricalData**](SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Historical Data for Security
[**getSecurityIntradayPrices**](SecurityApi.md#getSecurityIntradayPrices) | **GET** /securities/{identifier}/prices/intraday | Intraday Stock Prices for Security
[**getSecurityLatestDividendRecord**](SecurityApi.md#getSecurityLatestDividendRecord) | **GET** /securities/{identifier}/dividends/latest | Lastest Dividend Record for Security
[**getSecurityLatestEarningsRecord**](SecurityApi.md#getSecurityLatestEarningsRecord) | **GET** /securities/{identifier}/earnings/latest | Lastest Earnings Record for Security
[**getSecurityRealtimePrice**](SecurityApi.md#getSecurityRealtimePrice) | **GET** /securities/{identifier}/prices/realtime | Realtime Stock Price for Security
[**getSecurityStockPriceAdjustments**](SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Stock Price Adjustments by Security
[**getSecurityStockPrices**](SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Stock Prices by Security
[**screenSecurities**](SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
[**searchSecurities**](SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities


<a name="getAllSecurities"></a>
# **getAllSecurities**
> ApiResponseSecurities getAllSecurities(opts)

All Securities

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var opts = { 
  'pageSize': 100, // Number | The number of results to return
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurities**](ApiResponseSecurities.md)

<a name="getSecurityById"></a>
# **getSecurityById**
> Security getSecurityById(identifier)

Lookup Security

Returns the Security with the given &#x60;identifier&#x60;

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

Data Point (Number) for Security

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

Data Point (Text) for Security

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

Historical Data for Security

Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "volume"; // String | An Intrinio data tag ID or code-name

var opts = { 
  'frequency': "daily", // String | Return historical data in the given frequency
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': new Date("2019-01-01"), // Date | Get historical date on or before this date
  'sortOrder': "desc", // String | Sort by date `asc` or `desc`
  'pageSize': 100, // Number | The number of results to return
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
 **frequency** | **String**| Return historical data in the given frequency | [optional] [default to daily]
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityHistoricalData**](ApiResponseSecurityHistoricalData.md)

<a name="getSecurityIntradayPrices"></a>
# **getSecurityIntradayPrices**
> ApiResponseSecurityIntradayPrices getSecurityIntradayPrices(identifier, opts)

Intraday Stock Prices for Security

Return intraday stock prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'source': null, // String | Return intraday prices from the specified data source
  'startDate': new Date("2018-01-01"), // Date | Return intraday prices starting at the specified date
  'startTime': "4200", // String | Return intraday prices starting at the specified time on the `start_date` (timezone is UTC)
  'endDate': new Date("2018-01-01"), // Date | Return intraday prices stopping at the specified date
  'endTime': "4200" // String | Return intraday prices stopping at the specified time on the `end_date` (timezone is UTC)
};

securityAPI.getSecurityIntradayPrices(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **source** | **String**| Return intraday prices from the specified data source | [optional] 
 **startDate** | **Date**| Return intraday prices starting at the specified date | [optional] 
 **startTime** | **String**| Return intraday prices starting at the specified time on the &#x60;start_date&#x60; (timezone is UTC) | [optional] 
 **endDate** | **Date**| Return intraday prices stopping at the specified date | [optional] 
 **endTime** | **String**| Return intraday prices stopping at the specified time on the &#x60;end_date&#x60; (timezone is UTC) | [optional] 

### Return type

[**ApiResponseSecurityIntradayPrices**](ApiResponseSecurityIntradayPrices.md)

<a name="getSecurityLatestDividendRecord"></a>
# **getSecurityLatestDividendRecord**
> DividendRecord getSecurityLatestDividendRecord(identifier)

Lastest Dividend Record for Security

Returns the latest available dividend information for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)


securityAPI.getSecurityLatestDividendRecord(identifier).then(function(data) {
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

[**DividendRecord**](DividendRecord.md)

<a name="getSecurityLatestEarningsRecord"></a>
# **getSecurityLatestEarningsRecord**
> EarningsRecord getSecurityLatestEarningsRecord(identifier)

Lastest Earnings Record for Security

Returns latest available earnings information for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)


securityAPI.getSecurityLatestEarningsRecord(identifier).then(function(data) {
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

[**EarningsRecord**](EarningsRecord.md)

<a name="getSecurityRealtimePrice"></a>
# **getSecurityRealtimePrice**
> RealtimeStockPrice getSecurityRealtimePrice(identifier, opts)

Realtime Stock Price for Security

Return the realtime stock price for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'source': null // String | Return the realtime price from the specified data source
};

securityAPI.getSecurityRealtimePrice(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **source** | **String**| Return the realtime price from the specified data source | [optional] 

### Return type

[**RealtimeStockPrice**](RealtimeStockPrice.md)

<a name="getSecurityStockPriceAdjustments"></a>
# **getSecurityStockPriceAdjustments**
> ApiResponseSecurityStockPriceAdjustments getSecurityStockPriceAdjustments(identifier, opts)

Stock Price Adjustments by Security

Returns stock price adjustments for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2018-01-01"), // Date | Return price adjustments on or after the date
  'endDate': new Date("2019-01-01"), // Date | Return price adjustments on or before the date
  'pageSize': 100, // Number | The number of results to return
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityStockPriceAdjustments**](ApiResponseSecurityStockPriceAdjustments.md)

<a name="getSecurityStockPrices"></a>
# **getSecurityStockPrices**
> ApiResponseSecurityStockPrices getSecurityStockPrices(identifier, opts)

Stock Prices by Security

Return end-of-day stock prices for the Security with the given &#x60;identifier&#x60;

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
  'pageSize': 100, // Number | The number of results to return
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityStockPrices**](ApiResponseSecurityStockPrices.md)

<a name="screenSecurities"></a>
# **screenSecurities**
> [SecurityScreenResult] screenSecurities(opts)

Screen Securities

Screen Securities using complex logic

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var opts = { 
  'logic': new intrinioSDK.SecurityScreenGroup(), // SecurityScreenGroup | The logic to screen with, consisting of operators, clauses, and nested groups.<br/> See <a href=\"/documentation/screener_v2\" target=\"_blank\">screener documentation</a> for details on how to construct conditions.
  'orderColumn': "orderColumn_example", // String | Results returned sorted by this column
  'orderDirection': "asc", // String | Sort order to use with the order_column
  'primaryOnly': false, // Boolean | Return only primary securities
  'pageSize': 100 // Number | The number of results to return
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
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**[SecurityScreenResult]**](SecurityScreenResult.md)

<a name="searchSecurities"></a>
# **searchSecurities**
> ApiResponseSecuritiesSearch searchSecurities(query, opts)

Search Securities

Searches for Securities matching the text &#x60;query&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var query = "Apple"; // String | 

var opts = { 
  'pageSize': 100 // Number | The number of results to return
};

securityAPI.searchSecurities(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseSecuritiesSearch**](ApiResponseSecuritiesSearch.md)

