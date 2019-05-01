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
[**getSecurityPriceTechnicalsAdi**](SecurityApi.md#getSecurityPriceTechnicalsAdi) | **GET** /securities/{identifier}/prices/technicals/adi | Accumulation/Distribution Index
[**getSecurityPriceTechnicalsAdtv**](SecurityApi.md#getSecurityPriceTechnicalsAdtv) | **GET** /securities/{identifier}/prices/technicals/adtv | Average Daily Trading Volume
[**getSecurityPriceTechnicalsAdx**](SecurityApi.md#getSecurityPriceTechnicalsAdx) | **GET** /securities/{identifier}/prices/technicals/adx | Average Directional Index
[**getSecurityPriceTechnicalsAo**](SecurityApi.md#getSecurityPriceTechnicalsAo) | **GET** /securities/{identifier}/prices/technicals/ao | Awesome Oscillator
[**getSecurityPriceTechnicalsAtr**](SecurityApi.md#getSecurityPriceTechnicalsAtr) | **GET** /securities/{identifier}/prices/technicals/atr | Average True Range
[**getSecurityPriceTechnicalsBb**](SecurityApi.md#getSecurityPriceTechnicalsBb) | **GET** /securities/{identifier}/prices/technicals/bb | Bollinger Bands
[**getSecurityPriceTechnicalsCci**](SecurityApi.md#getSecurityPriceTechnicalsCci) | **GET** /securities/{identifier}/prices/technicals/cci | Commodity Channel Index
[**getSecurityPriceTechnicalsCmf**](SecurityApi.md#getSecurityPriceTechnicalsCmf) | **GET** /securities/{identifier}/prices/technicals/cmf | Chaikin Money Flow
[**getSecurityPriceTechnicalsDc**](SecurityApi.md#getSecurityPriceTechnicalsDc) | **GET** /securities/{identifier}/prices/technicals/dc | Donchian Channel
[**getSecurityPriceTechnicalsDpo**](SecurityApi.md#getSecurityPriceTechnicalsDpo) | **GET** /securities/{identifier}/prices/technicals/dpo | Detrended Price Oscillator
[**getSecurityPriceTechnicalsEom**](SecurityApi.md#getSecurityPriceTechnicalsEom) | **GET** /securities/{identifier}/prices/technicals/eom | Ease of Movement
[**getSecurityPriceTechnicalsFi**](SecurityApi.md#getSecurityPriceTechnicalsFi) | **GET** /securities/{identifier}/prices/technicals/fi | Force Index
[**getSecurityPriceTechnicalsIchimoku**](SecurityApi.md#getSecurityPriceTechnicalsIchimoku) | **GET** /securities/{identifier}/prices/technicals/ichimoku | Ichimoku Kinko Hyo
[**getSecurityPriceTechnicalsKc**](SecurityApi.md#getSecurityPriceTechnicalsKc) | **GET** /securities/{identifier}/prices/technicals/kc | Keltner Channel
[**getSecurityPriceTechnicalsKst**](SecurityApi.md#getSecurityPriceTechnicalsKst) | **GET** /securities/{identifier}/prices/technicals/kst | Know Sure Thing
[**getSecurityPriceTechnicalsMacd**](SecurityApi.md#getSecurityPriceTechnicalsMacd) | **GET** /securities/{identifier}/prices/technicals/macd | Moving Average Convergence Divergence
[**getSecurityPriceTechnicalsMfi**](SecurityApi.md#getSecurityPriceTechnicalsMfi) | **GET** /securities/{identifier}/prices/technicals/mfi | Money Flow Index
[**getSecurityPriceTechnicalsMi**](SecurityApi.md#getSecurityPriceTechnicalsMi) | **GET** /securities/{identifier}/prices/technicals/mi | Mass Index
[**getSecurityPriceTechnicalsNvi**](SecurityApi.md#getSecurityPriceTechnicalsNvi) | **GET** /securities/{identifier}/prices/technicals/nvi | Negative Volume Index
[**getSecurityPriceTechnicalsObv**](SecurityApi.md#getSecurityPriceTechnicalsObv) | **GET** /securities/{identifier}/prices/technicals/obv | On-balance Volume
[**getSecurityPriceTechnicalsObvMean**](SecurityApi.md#getSecurityPriceTechnicalsObvMean) | **GET** /securities/{identifier}/prices/technicals/obv_mean | On-balance Volume Mean
[**getSecurityPriceTechnicalsRsi**](SecurityApi.md#getSecurityPriceTechnicalsRsi) | **GET** /securities/{identifier}/prices/technicals/rsi | Relative Strength Index
[**getSecurityPriceTechnicalsSma**](SecurityApi.md#getSecurityPriceTechnicalsSma) | **GET** /securities/{identifier}/prices/technicals/sma | Simple Moving Average
[**getSecurityPriceTechnicalsSr**](SecurityApi.md#getSecurityPriceTechnicalsSr) | **GET** /securities/{identifier}/prices/technicals/sr | Stochastic Oscillator
[**getSecurityPriceTechnicalsTrix**](SecurityApi.md#getSecurityPriceTechnicalsTrix) | **GET** /securities/{identifier}/prices/technicals/trix | Triple Exponential Average
[**getSecurityPriceTechnicalsTsi**](SecurityApi.md#getSecurityPriceTechnicalsTsi) | **GET** /securities/{identifier}/prices/technicals/tsi | True Strength Index
[**getSecurityPriceTechnicalsUo**](SecurityApi.md#getSecurityPriceTechnicalsUo) | **GET** /securities/{identifier}/prices/technicals/uo | Ultimate Oscillator
[**getSecurityPriceTechnicalsVi**](SecurityApi.md#getSecurityPriceTechnicalsVi) | **GET** /securities/{identifier}/prices/technicals/vi | Vortex Indicator
[**getSecurityPriceTechnicalsVpt**](SecurityApi.md#getSecurityPriceTechnicalsVpt) | **GET** /securities/{identifier}/prices/technicals/vpt | Volume-price Trend
[**getSecurityPriceTechnicalsVwap**](SecurityApi.md#getSecurityPriceTechnicalsVwap) | **GET** /securities/{identifier}/prices/technicals/vwap | Volume Weighted Average Price
[**getSecurityPriceTechnicalsWr**](SecurityApi.md#getSecurityPriceTechnicalsWr) | **GET** /securities/{identifier}/prices/technicals/wr | Williams %R
[**getSecurityRealtimePrice**](SecurityApi.md#getSecurityRealtimePrice) | **GET** /securities/{identifier}/prices/realtime | Realtime Stock Price for Security
[**getSecurityStockPriceAdjustments**](SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Stock Price Adjustments by Security
[**getSecurityStockPrices**](SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Stock Prices by Security
[**getSecurityZacksAnalystRatings**](SecurityApi.md#getSecurityZacksAnalystRatings) | **GET** /securities/{identifier}/zacks/analyst_ratings | Zacks Analyst Ratings
[**getSecurityZacksAnalystRatingsSnapshot**](SecurityApi.md#getSecurityZacksAnalystRatingsSnapshot) | **GET** /securities/{identifier}/zacks/analyst_ratings/snapshot | Zacks Analyst Ratings Snapshot
[**getSecurityZacksEpsSurprises**](SecurityApi.md#getSecurityZacksEpsSurprises) | **GET** /securities/{identifier}/zacks/eps_surprises | Zacks EPS Surprises for Security
[**getSecurityZacksSalesSurprises**](SecurityApi.md#getSecurityZacksSalesSurprises) | **GET** /securities/{identifier}/zacks/sales_surprises | Zacks Sales Surprises for Security
[**screenSecurities**](SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
[**searchSecurities**](SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities



[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities)

[//]: # (DOC_LINK:SecurityApi.md#getAllSecurities)

<a name="getAllSecurities"></a>
# **getAllSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getAllSecurities_v2)

> ApiResponseSecurities getAllSecurities(opts)

All Securities

Returns all Securities to which you have access.

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurities**](ApiResponseSecurities.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier})

[//]: # (DOC_LINK:SecurityApi.md#getSecurityById)

<a name="getSecurityById"></a>
# **getSecurityById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityById_v2)

> Security getSecurityById(identifier)

Lookup Security

Returns the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 

### Return type

[**Security**](Security.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/data_point/{tag}/number)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityDataPointNumber)

<a name="getSecurityDataPointNumber"></a>
# **getSecurityDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityDataPointNumber_v2)

> &#39;Number&#39; getSecurityDataPointNumber(identifier, tag)

Data Point (Number) for Security

Returns a numeric value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "close_price"; // String | An Intrinio data tag ID or code (<a href='https://data.intrinio.com/data-tags'>reference</a>)


securityAPI.getSecurityDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) | 

### Return type

**&#39;Number&#39;**

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/data_point/{tag}/text)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityDataPointText)

<a name="getSecurityDataPointText"></a>
# **getSecurityDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityDataPointText_v2)

> &#39;String&#39; getSecurityDataPointText(identifier, tag)

Data Point (Text) for Security

Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code-name | 

### Return type

**&#39;String&#39;**

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/historical_data/{tag})

[//]: # (DOC_LINK:SecurityApi.md#getSecurityHistoricalData)

<a name="getSecurityHistoricalData"></a>
# **getSecurityHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityHistoricalData_v2)

> ApiResponseSecurityHistoricalData getSecurityHistoricalData(identifier, tag, opts)

Historical Data for Security

Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var tag = "adj_close_price"; // String | An Intrinio data tag ID or code (<a href='https://data.intrinio.com/data-tags'>reference</a>)

var opts = { 
  'frequency': "daily", // String | Return historical data in the given frequency
  'type': null, // String | Filter by type, when applicable
  'startDate': new Date("2018-01-01"), // Date | Get historical data on or after this date
  'endDate': null, // Date | Get historical date on or before this date
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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **tag** | **String**| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) | 
 **frequency** | **String**| Return historical data in the given frequency | [optional] [default to daily]
 **type** | **String**| Filter by type, when applicable | [optional] 
 **startDate** | **Date**| Get historical data on or after this date | [optional] 
 **endDate** | **Date**| Get historical date on or before this date | [optional] 
 **sortOrder** | **String**| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc]
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityHistoricalData**](ApiResponseSecurityHistoricalData.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/intraday)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityIntradayPrices)

<a name="getSecurityIntradayPrices"></a>
# **getSecurityIntradayPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityIntradayPrices_v2)

> ApiResponseSecurityIntradayPrices getSecurityIntradayPrices(identifier, opts)

Intraday Stock Prices for Security

Return intraday stock prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

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

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/dividends/latest)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityLatestDividendRecord)

<a name="getSecurityLatestDividendRecord"></a>
# **getSecurityLatestDividendRecord**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityLatestDividendRecord_v2)

> DividendRecord getSecurityLatestDividendRecord(identifier)

Lastest Dividend Record for Security

Returns the latest available dividend information for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 

### Return type

[**DividendRecord**](DividendRecord.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/earnings/latest)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityLatestEarningsRecord)

<a name="getSecurityLatestEarningsRecord"></a>
# **getSecurityLatestEarningsRecord**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityLatestEarningsRecord_v2)

> EarningsRecord getSecurityLatestEarningsRecord(identifier)

Lastest Earnings Record for Security

Returns latest available earnings information for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 

### Return type

[**EarningsRecord**](EarningsRecord.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdi)

<a name="getSecurityPriceTechnicalsAdi"></a>
# **getSecurityPriceTechnicalsAdi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsAdi_v2)

> ApiResponseSecurityAccumulationDistributionIndex getSecurityPriceTechnicalsAdi(identifier, opts)

Accumulation/Distribution Index

Returns the Accumulation/Distribution Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsAdi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityAccumulationDistributionIndex**](ApiResponseSecurityAccumulationDistributionIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adtv)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdtv)

<a name="getSecurityPriceTechnicalsAdtv"></a>
# **getSecurityPriceTechnicalsAdtv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsAdtv_v2)

> ApiResponseSecurityAverageDailyTradingVolume getSecurityPriceTechnicalsAdtv(identifier, opts)

Average Daily Trading Volume

Returns the Average Daily Trading Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 22, // Number | The number of observations, per period, to calculate Average Daily Trading Volume
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsAdtv(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Average Daily Trading Volume | [optional] [default to 22]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityAverageDailyTradingVolume**](ApiResponseSecurityAverageDailyTradingVolume.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adx)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdx)

<a name="getSecurityPriceTechnicalsAdx"></a>
# **getSecurityPriceTechnicalsAdx**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsAdx_v2)

> ApiResponseSecurityAverageDirectionalIndex getSecurityPriceTechnicalsAdx(identifier, opts)

Average Directional Index

Returns the Average Directional Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Average Directional Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsAdx(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Average Directional Index | [optional] [default to 14]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityAverageDirectionalIndex**](ApiResponseSecurityAverageDirectionalIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/ao)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsAo)

<a name="getSecurityPriceTechnicalsAo"></a>
# **getSecurityPriceTechnicalsAo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsAo_v2)

> ApiResponseSecurityAwesomeOscillator getSecurityPriceTechnicalsAo(identifier, opts)

Awesome Oscillator

Returns the Awesome Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'shortPeriod': 5, // Number | The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator
  'longPeriod': 34, // Number | The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsAo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **shortPeriod** | **Number**| The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator | [optional] [default to 5]
 **longPeriod** | **Number**| The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator | [optional] [default to 34]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityAwesomeOscillator**](ApiResponseSecurityAwesomeOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/atr)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsAtr)

<a name="getSecurityPriceTechnicalsAtr"></a>
# **getSecurityPriceTechnicalsAtr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsAtr_v2)

> ApiResponseSecurityAverageTrueRange getSecurityPriceTechnicalsAtr(identifier, opts)

Average True Range

Returns the Average True Range values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Average True Range
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsAtr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Average True Range | [optional] [default to 14]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityAverageTrueRange**](ApiResponseSecurityAverageTrueRange.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/bb)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsBb)

<a name="getSecurityPriceTechnicalsBb"></a>
# **getSecurityPriceTechnicalsBb**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsBb_v2)

> ApiResponseSecurityBollingerBands getSecurityPriceTechnicalsBb(identifier, opts)

Bollinger Bands

Returns the Bollinger Bands values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Bollinger Bands
  'standardDeviations': 2.0, // Number | The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands
  'priceKey': "close", // String | The Stock Price field to use when calculating Bollinger Bands
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsBb(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Bollinger Bands | [optional] [default to 20]
 **standardDeviations** | **Number**| The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands | [optional] [default to 2.0]
 **priceKey** | **String**| The Stock Price field to use when calculating Bollinger Bands | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityBollingerBands**](ApiResponseSecurityBollingerBands.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/cci)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsCci)

<a name="getSecurityPriceTechnicalsCci"></a>
# **getSecurityPriceTechnicalsCci**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsCci_v2)

> ApiResponseSecurityCommodityChannelIndex getSecurityPriceTechnicalsCci(identifier, opts)

Commodity Channel Index

Returns the Commodity Channel Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Commodity Channel Index
  'constant': 0.015, // Number | The number of observations, per period, to calculate Commodity Channel Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsCci(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Commodity Channel Index | [optional] [default to 20]
 **constant** | **Number**| The number of observations, per period, to calculate Commodity Channel Index | [optional] [default to 0.015]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityCommodityChannelIndex**](ApiResponseSecurityCommodityChannelIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/cmf)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsCmf)

<a name="getSecurityPriceTechnicalsCmf"></a>
# **getSecurityPriceTechnicalsCmf**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsCmf_v2)

> ApiResponseSecurityChaikinMoneyFlow getSecurityPriceTechnicalsCmf(identifier, opts)

Chaikin Money Flow

Returns the Chaikin Money Flow values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Chaikin Money Flow
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsCmf(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Chaikin Money Flow | [optional] [default to 20]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityChaikinMoneyFlow**](ApiResponseSecurityChaikinMoneyFlow.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/dc)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsDc)

<a name="getSecurityPriceTechnicalsDc"></a>
# **getSecurityPriceTechnicalsDc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsDc_v2)

> ApiResponseSecurityDonchianChannel getSecurityPriceTechnicalsDc(identifier, opts)

Donchian Channel

Returns the Donchian Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Donchian Channel
  'priceKey': "close", // String | The Stock Price field to use when calculating Donchian Channel
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsDc(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Donchian Channel | [optional] [default to 20]
 **priceKey** | **String**| The Stock Price field to use when calculating Donchian Channel | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityDonchianChannel**](ApiResponseSecurityDonchianChannel.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/dpo)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsDpo)

<a name="getSecurityPriceTechnicalsDpo"></a>
# **getSecurityPriceTechnicalsDpo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsDpo_v2)

> ApiResponseSecurityDetrendedPriceOscillator getSecurityPriceTechnicalsDpo(identifier, opts)

Detrended Price Oscillator

Returns the Detrended Price Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Detrended Price Oscillator
  'priceKey': "close", // String | The Stock Price field to use when calculating Detrended Price Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsDpo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Detrended Price Oscillator | [optional] [default to 20]
 **priceKey** | **String**| The Stock Price field to use when calculating Detrended Price Oscillator | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityDetrendedPriceOscillator**](ApiResponseSecurityDetrendedPriceOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/eom)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsEom)

<a name="getSecurityPriceTechnicalsEom"></a>
# **getSecurityPriceTechnicalsEom**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsEom_v2)

> ApiResponseSecurityEaseOfMovement getSecurityPriceTechnicalsEom(identifier, opts)

Ease of Movement

Returns the Ease of Movement values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Ease of Movement
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsEom(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Ease of Movement | [optional] [default to 20]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityEaseOfMovement**](ApiResponseSecurityEaseOfMovement.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/fi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsFi)

<a name="getSecurityPriceTechnicalsFi"></a>
# **getSecurityPriceTechnicalsFi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsFi_v2)

> ApiResponseSecurityForceIndex getSecurityPriceTechnicalsFi(identifier, opts)

Force Index

Returns the Force Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsFi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityForceIndex**](ApiResponseSecurityForceIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/ichimoku)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsIchimoku)

<a name="getSecurityPriceTechnicalsIchimoku"></a>
# **getSecurityPriceTechnicalsIchimoku**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsIchimoku_v2)

> ApiResponseSecurityIchimokuKinkoHyo getSecurityPriceTechnicalsIchimoku(identifier, opts)

Ichimoku Kinko Hyo

Returns the Ichimoku Kinko Hyo values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'lowPeriod': 9, // Number | The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo
  'mediumPeriod': 26, // Number | The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo
  'highPeriod': 52, // Number | The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsIchimoku(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **lowPeriod** | **Number**| The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo | [optional] [default to 9]
 **mediumPeriod** | **Number**| The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo | [optional] [default to 26]
 **highPeriod** | **Number**| The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo | [optional] [default to 52]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityIchimokuKinkoHyo**](ApiResponseSecurityIchimokuKinkoHyo.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/kc)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsKc)

<a name="getSecurityPriceTechnicalsKc"></a>
# **getSecurityPriceTechnicalsKc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsKc_v2)

> ApiResponseSecurityKeltnerChannel getSecurityPriceTechnicalsKc(identifier, opts)

Keltner Channel

Returns the Keltner Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 10, // Number | The number of observations, per period, to calculate Kelter Channel
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsKc(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Kelter Channel | [optional] [default to 10]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityKeltnerChannel**](ApiResponseSecurityKeltnerChannel.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/kst)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsKst)

<a name="getSecurityPriceTechnicalsKst"></a>
# **getSecurityPriceTechnicalsKst**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsKst_v2)

> ApiResponseSecurityKnowSureThing getSecurityPriceTechnicalsKst(identifier, opts)

Know Sure Thing

Returns the Know Sure Thing values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'roc1': 10, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA1
  'roc2': 15, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA2
  'roc3': 20, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA3
  'roc4': 30, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA4
  'sma1': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA1
  'sma2': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA2
  'sma3': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA3
  'sma4': 15, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA4
  'priceKey': "close", // String | The Stock Price field to use when calculating Know Sure Thing
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsKst(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **roc1** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA1 | [optional] [default to 10]
 **roc2** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA2 | [optional] [default to 15]
 **roc3** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA3 | [optional] [default to 20]
 **roc4** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA4 | [optional] [default to 30]
 **sma1** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA1 | [optional] [default to 10]
 **sma2** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA2 | [optional] [default to 10]
 **sma3** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA3 | [optional] [default to 10]
 **sma4** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA4 | [optional] [default to 15]
 **priceKey** | **String**| The Stock Price field to use when calculating Know Sure Thing | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityKnowSureThing**](ApiResponseSecurityKnowSureThing.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/macd)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsMacd)

<a name="getSecurityPriceTechnicalsMacd"></a>
# **getSecurityPriceTechnicalsMacd**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsMacd_v2)

> ApiResponseSecurityMovingAverageConvergenceDivergence getSecurityPriceTechnicalsMacd(identifier, opts)

Moving Average Convergence Divergence

Returns the Moving Average Convergence Divergence values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'fastPeriod': 12, // Number | The number of observations, per period, to calculate the fast moving Exponential Moving Average for Moving Average Convergence Divergence
  'slowPeriod': 26, // Number | The number of observations, per period, to calculate the slow moving Exponential Moving Average for Moving Average Convergence Divergence
  'signalPeriod': 9, // Number | The number of observations, per period, to calculate the signal line for Moving Average Convergence Divergence
  'priceKey': "close", // String | The Stock Price field to use when calculating Moving Average Convergence Divergence
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsMacd(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **fastPeriod** | **Number**| The number of observations, per period, to calculate the fast moving Exponential Moving Average for Moving Average Convergence Divergence | [optional] [default to 12]
 **slowPeriod** | **Number**| The number of observations, per period, to calculate the slow moving Exponential Moving Average for Moving Average Convergence Divergence | [optional] [default to 26]
 **signalPeriod** | **Number**| The number of observations, per period, to calculate the signal line for Moving Average Convergence Divergence | [optional] [default to 9]
 **priceKey** | **String**| The Stock Price field to use when calculating Moving Average Convergence Divergence | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityMovingAverageConvergenceDivergence**](ApiResponseSecurityMovingAverageConvergenceDivergence.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/mfi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsMfi)

<a name="getSecurityPriceTechnicalsMfi"></a>
# **getSecurityPriceTechnicalsMfi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsMfi_v2)

> ApiResponseSecurityMoneyFlowIndex getSecurityPriceTechnicalsMfi(identifier, opts)

Money Flow Index

Returns the Money Flow Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Money Flow Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsMfi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Money Flow Index | [optional] [default to 14]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityMoneyFlowIndex**](ApiResponseSecurityMoneyFlowIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/mi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsMi)

<a name="getSecurityPriceTechnicalsMi"></a>
# **getSecurityPriceTechnicalsMi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsMi_v2)

> ApiResponseSecurityMassIndex getSecurityPriceTechnicalsMi(identifier, opts)

Mass Index

Returns the Mass Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'emaPeriod': 9, // Number | The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index
  'sumPeriod': 25, // Number | The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsMi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **emaPeriod** | **Number**| The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index | [optional] [default to 9]
 **sumPeriod** | **Number**| The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index | [optional] [default to 25]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityMassIndex**](ApiResponseSecurityMassIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/nvi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsNvi)

<a name="getSecurityPriceTechnicalsNvi"></a>
# **getSecurityPriceTechnicalsNvi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsNvi_v2)

> ApiResponseSecurityNegativeVolumeIndex getSecurityPriceTechnicalsNvi(identifier, opts)

Negative Volume Index

Returns the Negative Volume Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsNvi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityNegativeVolumeIndex**](ApiResponseSecurityNegativeVolumeIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/obv)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsObv)

<a name="getSecurityPriceTechnicalsObv"></a>
# **getSecurityPriceTechnicalsObv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsObv_v2)

> ApiResponseSecurityOnBalanceVolume getSecurityPriceTechnicalsObv(identifier, opts)

On-balance Volume

Returns the On-balance Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsObv(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityOnBalanceVolume**](ApiResponseSecurityOnBalanceVolume.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/obv_mean)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsObvMean)

<a name="getSecurityPriceTechnicalsObvMean"></a>
# **getSecurityPriceTechnicalsObvMean**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsObvMean_v2)

> ApiResponseSecurityOnBalanceVolumeMean getSecurityPriceTechnicalsObvMean(identifier, opts)

On-balance Volume Mean

Returns the On-balance Volume Mean values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 10, // Number | The number of observations, per period, to calculate On-balance Volume Mean
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsObvMean(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate On-balance Volume Mean | [optional] [default to 10]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityOnBalanceVolumeMean**](ApiResponseSecurityOnBalanceVolumeMean.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/rsi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsRsi)

<a name="getSecurityPriceTechnicalsRsi"></a>
# **getSecurityPriceTechnicalsRsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsRsi_v2)

> ApiResponseSecurityRelativeStrengthIndex getSecurityPriceTechnicalsRsi(identifier, opts)

Relative Strength Index

Returns the Relative Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Relative Strength Index
  'priceKey': "close", // String | The Stock Price field to use when calculating Relative Strength Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsRsi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Relative Strength Index | [optional] [default to 14]
 **priceKey** | **String**| The Stock Price field to use when calculating Relative Strength Index | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityRelativeStrengthIndex**](ApiResponseSecurityRelativeStrengthIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/sma)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsSma)

<a name="getSecurityPriceTechnicalsSma"></a>
# **getSecurityPriceTechnicalsSma**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsSma_v2)

> ApiResponseSecuritySimpleMovingAverage getSecurityPriceTechnicalsSma(identifier, opts)

Simple Moving Average

Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Simple Moving Average
  'priceKey': "close", // String | The Stock Price field to use when calculating Simple Moving Average
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsSma(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Simple Moving Average | [optional] [default to 20]
 **priceKey** | **String**| The Stock Price field to use when calculating Simple Moving Average | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecuritySimpleMovingAverage**](ApiResponseSecuritySimpleMovingAverage.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/sr)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsSr)

<a name="getSecurityPriceTechnicalsSr"></a>
# **getSecurityPriceTechnicalsSr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsSr_v2)

> ApiResponseSecurityStochasticOscillator getSecurityPriceTechnicalsSr(identifier, opts)

Stochastic Oscillator

Returns the Stochastic Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate %K of Stochastic Oscillator
  'signalPeriod': 3, // Number | The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsSr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate %K of Stochastic Oscillator | [optional] [default to 14]
 **signalPeriod** | **Number**| The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator | [optional] [default to 3]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityStochasticOscillator**](ApiResponseSecurityStochasticOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/trix)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsTrix)

<a name="getSecurityPriceTechnicalsTrix"></a>
# **getSecurityPriceTechnicalsTrix**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsTrix_v2)

> ApiResponseSecurityTripleExponentialAverage getSecurityPriceTechnicalsTrix(identifier, opts)

Triple Exponential Average

Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 15, // Number | The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsTrix(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average | [optional] [default to 15]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityTripleExponentialAverage**](ApiResponseSecurityTripleExponentialAverage.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/tsi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsTsi)

<a name="getSecurityPriceTechnicalsTsi"></a>
# **getSecurityPriceTechnicalsTsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsTsi_v2)

> ApiResponseSecurityTrueStrengthIndex getSecurityPriceTechnicalsTsi(identifier, opts)

True Strength Index

Returns the True Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'lowPeriod': 13, // Number | The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index
  'highPeriod': 25, // Number | The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index
  'priceKey': "close", // String | The Stock Price field to use when calculating True Strength Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsTsi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **lowPeriod** | **Number**| The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index | [optional] [default to 13]
 **highPeriod** | **Number**| The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index | [optional] [default to 25]
 **priceKey** | **String**| The Stock Price field to use when calculating True Strength Index | [optional] [default to close]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityTrueStrengthIndex**](ApiResponseSecurityTrueStrengthIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/uo)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsUo)

<a name="getSecurityPriceTechnicalsUo"></a>
# **getSecurityPriceTechnicalsUo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsUo_v2)

> ApiResponseSecurityUltimateOscillator getSecurityPriceTechnicalsUo(identifier, opts)

Ultimate Oscillator

Returns the Ultimate Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'shortPeriod': 7, // Number | The number of observations, per period, to calculate the short period for Ultimate Oscillator
  'mediumPeriod': 14, // Number | The number of observations, per period, to calculate the medium period for Ultimate Oscillator
  'longPeriod': 28, // Number | The number of observations, per period, to calculate the long period for Ultimate Oscillator
  'shortWeight': 4.0, // Number | The weight of short Buying Pressure average for Ultimate Oscillator
  'mediumWeight': 2.0, // Number | The weight of medium Buying Pressure average for Ultimate Oscillator
  'longWeight': 1.0, // Number | The weight of long Buying Pressure average for Ultimate Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsUo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **shortPeriod** | **Number**| The number of observations, per period, to calculate the short period for Ultimate Oscillator | [optional] [default to 7]
 **mediumPeriod** | **Number**| The number of observations, per period, to calculate the medium period for Ultimate Oscillator | [optional] [default to 14]
 **longPeriod** | **Number**| The number of observations, per period, to calculate the long period for Ultimate Oscillator | [optional] [default to 28]
 **shortWeight** | **Number**| The weight of short Buying Pressure average for Ultimate Oscillator | [optional] [default to 4.0]
 **mediumWeight** | **Number**| The weight of medium Buying Pressure average for Ultimate Oscillator | [optional] [default to 2.0]
 **longWeight** | **Number**| The weight of long Buying Pressure average for Ultimate Oscillator | [optional] [default to 1.0]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityUltimateOscillator**](ApiResponseSecurityUltimateOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vi)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsVi)

<a name="getSecurityPriceTechnicalsVi"></a>
# **getSecurityPriceTechnicalsVi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsVi_v2)

> ApiResponseSecurityVortexIndicator getSecurityPriceTechnicalsVi(identifier, opts)

Vortex Indicator

Returns the Vortex Indicator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Vortex Indicator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsVi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to calculate Vortex Indicator | [optional] [default to 14]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityVortexIndicator**](ApiResponseSecurityVortexIndicator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vpt)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsVpt)

<a name="getSecurityPriceTechnicalsVpt"></a>
# **getSecurityPriceTechnicalsVpt**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsVpt_v2)

> ApiResponseSecurityVolumePriceTrend getSecurityPriceTechnicalsVpt(identifier, opts)

Volume-price Trend

Returns the Volume-price Trend values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsVpt(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityVolumePriceTrend**](ApiResponseSecurityVolumePriceTrend.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vwap)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsVwap)

<a name="getSecurityPriceTechnicalsVwap"></a>
# **getSecurityPriceTechnicalsVwap**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsVwap_v2)

> ApiResponseSecurityVolumeWeightedAveragePrice getSecurityPriceTechnicalsVwap(identifier, opts)

Volume Weighted Average Price

Returns the Volume Weighted Average Price values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsVwap(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityVolumeWeightedAveragePrice**](ApiResponseSecurityVolumeWeightedAveragePrice.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/wr)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityPriceTechnicalsWr)

<a name="getSecurityPriceTechnicalsWr"></a>
# **getSecurityPriceTechnicalsWr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityPriceTechnicalsWr_v2)

> ApiResponseSecurityWilliamsR getSecurityPriceTechnicalsWr(identifier, opts)

Williams %R

Returns the Williams %R values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to look-back when calculating Williams %R
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityPriceTechnicalsWr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **period** | **Number**| The number of observations, per period, to look-back when calculating Williams %R | [optional] [default to 14]
 **startDate** | **String**| Return technical indicator values on or after the date | [optional] 
 **endDate** | **String**| Return technical indicator values on or before the date | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityWilliamsR**](ApiResponseSecurityWilliamsR.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/realtime)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityRealtimePrice)

<a name="getSecurityRealtimePrice"></a>
# **getSecurityRealtimePrice**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityRealtimePrice_v2)

> RealtimeStockPrice getSecurityRealtimePrice(identifier, opts)

Realtime Stock Price for Security

Return the realtime stock price for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **source** | **String**| Return the realtime price from the specified data source | [optional] 

### Return type

[**RealtimeStockPrice**](RealtimeStockPrice.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices/adjustments)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityStockPriceAdjustments)

<a name="getSecurityStockPriceAdjustments"></a>
# **getSecurityStockPriceAdjustments**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityStockPriceAdjustments_v2)

> ApiResponseSecurityStockPriceAdjustments getSecurityStockPriceAdjustments(identifier, opts)

Stock Price Adjustments by Security

Returns stock price adjustments for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

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

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/prices)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityStockPrices)

<a name="getSecurityStockPrices"></a>
# **getSecurityStockPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityStockPrices_v2)

> ApiResponseSecurityStockPrices getSecurityStockPrices(identifier, opts)

Stock Prices by Security

Return end-of-day stock prices for the Security with the given &#x60;identifier&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

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

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/analyst_ratings)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityZacksAnalystRatings)

<a name="getSecurityZacksAnalystRatings"></a>
# **getSecurityZacksAnalystRatings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityZacksAnalystRatings_v2)

> ApiResponseSecurityZacksAnalystRatings getSecurityZacksAnalystRatings(identifier, opts)

Zacks Analyst Ratings

Returns buy, sell, and hold recommendations from analysts at brokerages for the Security with the given &#x60;identifier&#x60;. Zack’s storied research team aggregates and validates the ratings from professional analysts.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': null, // String | Limit ratings to those on or after this date
  'endDate': null, // String | Limit ratings to those on or before this date
  'meanGreater': null, // Number | Return only records with a mean (average) higher than this value
  'meanLess': null, // Number | Return only records with a mean (average) lower than this value
  'strongBuysGreater': null, // Number | Return only records with more than this many Strong Buy recommendations
  'strongBuysLess': null, // Number | Return only records with fewer than this many Strong Buy recommendations
  'buysGreater': null, // Number | Return only records with more than this many Buy recommendations
  'buysLess': null, // Number | Return only records with fewer than this many Buy recommendations
  'holdsGreater': null, // Number | Return only records with more than this many Hold recommendations
  'holdsLess': null, // Number | Return only records with fewer than this many Hold recommendations
  'sellsGreater': null, // Number | Return only records with more than this many Sell recommendations
  'sellsLess': null, // Number | Return only records with fewer than this many Sell recommendations
  'strongSellsGreater': null, // Number | Return only records with more than this many Strong Sell recommendations
  'strongSellsLess': null, // Number | Return only records with fewer than this many Strong Sell recommendations
  'totalGreater': null, // Number | Return only records with more than this many recommendations, regardless of type
  'totalLess': null, // Number | Return only records with fewer than this many recommendations, regardless of type
  'pageSize': 100 // Number | The number of results to return
};

securityAPI.getSecurityZacksAnalystRatings(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **startDate** | **String**| Limit ratings to those on or after this date | [optional] 
 **endDate** | **String**| Limit ratings to those on or before this date | [optional] 
 **meanGreater** | **Number**| Return only records with a mean (average) higher than this value | [optional] 
 **meanLess** | **Number**| Return only records with a mean (average) lower than this value | [optional] 
 **strongBuysGreater** | **Number**| Return only records with more than this many Strong Buy recommendations | [optional] 
 **strongBuysLess** | **Number**| Return only records with fewer than this many Strong Buy recommendations | [optional] 
 **buysGreater** | **Number**| Return only records with more than this many Buy recommendations | [optional] 
 **buysLess** | **Number**| Return only records with fewer than this many Buy recommendations | [optional] 
 **holdsGreater** | **Number**| Return only records with more than this many Hold recommendations | [optional] 
 **holdsLess** | **Number**| Return only records with fewer than this many Hold recommendations | [optional] 
 **sellsGreater** | **Number**| Return only records with more than this many Sell recommendations | [optional] 
 **sellsLess** | **Number**| Return only records with fewer than this many Sell recommendations | [optional] 
 **strongSellsGreater** | **Number**| Return only records with more than this many Strong Sell recommendations | [optional] 
 **strongSellsLess** | **Number**| Return only records with fewer than this many Strong Sell recommendations | [optional] 
 **totalGreater** | **Number**| Return only records with more than this many recommendations, regardless of type | [optional] 
 **totalLess** | **Number**| Return only records with fewer than this many recommendations, regardless of type | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseSecurityZacksAnalystRatings**](ApiResponseSecurityZacksAnalystRatings.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/analyst_ratings/snapshot)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityZacksAnalystRatingsSnapshot)

<a name="getSecurityZacksAnalystRatingsSnapshot"></a>
# **getSecurityZacksAnalystRatingsSnapshot**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityZacksAnalystRatingsSnapshot_v2)

> ApiResponseSecurityZacksAnalystRatingsSnapshot getSecurityZacksAnalystRatingsSnapshot(identifier, opts)

Zacks Analyst Ratings Snapshot

Returns a snapshot of ratings data compared with previous timeframes for the Security with the given &#x60;identifier&#x60;. Also returns mean percentiles for comparing one security to the universe of securities covered by Zacks analyst ratings, at a specific point in time.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  '_date': null // String | Lookup a historical snapshot on the given date
};

securityAPI.getSecurityZacksAnalystRatingsSnapshot(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **_date** | **String**| Lookup a historical snapshot on the given date | [optional] 

### Return type

[**ApiResponseSecurityZacksAnalystRatingsSnapshot**](ApiResponseSecurityZacksAnalystRatingsSnapshot.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/eps_surprises)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityZacksEpsSurprises)

<a name="getSecurityZacksEpsSurprises"></a>
# **getSecurityZacksEpsSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityZacksEpsSurprises_v2)

> ApiResponseSecurityZacksEPSSurprises getSecurityZacksEpsSurprises(identifier, opts)

Zacks EPS Surprises for Security

Return Zacks EPS surprises for the Security with the given &#x60;identifier&#x60;.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityZacksEpsSurprises(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityZacksEPSSurprises**](ApiResponseSecurityZacksEPSSurprises.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/sales_surprises)

[//]: # (DOC_LINK:SecurityApi.md#getSecurityZacksSalesSurprises)

<a name="getSecurityZacksSalesSurprises"></a>
# **getSecurityZacksSalesSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getSecurityZacksSalesSurprises_v2)

> ApiResponseSecurityZacksSalesSurprises getSecurityZacksSalesSurprises(identifier, opts)

Zacks Sales Surprises for Security

Return Zacks sales surprises for the Security with the given &#x60;identifier&#x60;.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityZacksSalesSurprises(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseSecurityZacksSalesSurprises**](ApiResponseSecurityZacksSalesSurprises.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/screen)

[//]: # (DOC_LINK:SecurityApi.md#screenSecurities)

<a name="screenSecurities"></a>
# **screenSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/screenSecurities_v2)

> [SecurityScreenResult] screenSecurities(opts)

Screen Securities

Screen Securities using complex logic

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

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

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/securities/search)

[//]: # (DOC_LINK:SecurityApi.md#searchSecurities)

<a name="searchSecurities"></a>
# **searchSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/searchSecurities_v2)

> ApiResponseSecuritiesSearch searchSecurities(query, opts)

Search Securities

Searches for Securities matching the text &#x60;query&#x60;

### Example

[//]: # (START_CODE_EXAMPLE)

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

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseSecuritiesSearch**](ApiResponseSecuritiesSearch.md)

[//]: # (END_OPERATION)

