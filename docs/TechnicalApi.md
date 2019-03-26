# intrinioSDK.TechnicalApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityPriceTechnicalsAdi**](TechnicalApi.md#getSecurityPriceTechnicalsAdi) | **GET** /securities/{identifier}/prices/technicals/adi | Accumulation/Distribution Index
[**getSecurityPriceTechnicalsAdtv**](TechnicalApi.md#getSecurityPriceTechnicalsAdtv) | **GET** /securities/{identifier}/prices/technicals/adtv | Average Daily Trading Volume
[**getSecurityPriceTechnicalsAdx**](TechnicalApi.md#getSecurityPriceTechnicalsAdx) | **GET** /securities/{identifier}/prices/technicals/adx | Average Directional Index
[**getSecurityPriceTechnicalsAo**](TechnicalApi.md#getSecurityPriceTechnicalsAo) | **GET** /securities/{identifier}/prices/technicals/ao | Awesome Oscillator
[**getSecurityPriceTechnicalsAtr**](TechnicalApi.md#getSecurityPriceTechnicalsAtr) | **GET** /securities/{identifier}/prices/technicals/atr | Average True Range
[**getSecurityPriceTechnicalsBb**](TechnicalApi.md#getSecurityPriceTechnicalsBb) | **GET** /securities/{identifier}/prices/technicals/bb | Bollinger Bands
[**getSecurityPriceTechnicalsCci**](TechnicalApi.md#getSecurityPriceTechnicalsCci) | **GET** /securities/{identifier}/prices/technicals/cci | Commodity Channel Index
[**getSecurityPriceTechnicalsCmf**](TechnicalApi.md#getSecurityPriceTechnicalsCmf) | **GET** /securities/{identifier}/prices/technicals/cmf | Chaikin Money Flow
[**getSecurityPriceTechnicalsDc**](TechnicalApi.md#getSecurityPriceTechnicalsDc) | **GET** /securities/{identifier}/prices/technicals/dc | Donchian Channel
[**getSecurityPriceTechnicalsDpo**](TechnicalApi.md#getSecurityPriceTechnicalsDpo) | **GET** /securities/{identifier}/prices/technicals/dpo | Detrended Price Oscillator
[**getSecurityPriceTechnicalsEom**](TechnicalApi.md#getSecurityPriceTechnicalsEom) | **GET** /securities/{identifier}/prices/technicals/eom | Ease of Movement
[**getSecurityPriceTechnicalsFi**](TechnicalApi.md#getSecurityPriceTechnicalsFi) | **GET** /securities/{identifier}/prices/technicals/fi | Force Index
[**getSecurityPriceTechnicalsIchimoku**](TechnicalApi.md#getSecurityPriceTechnicalsIchimoku) | **GET** /securities/{identifier}/prices/technicals/ichimoku | Ichimoku Kinko Hyo
[**getSecurityPriceTechnicalsKc**](TechnicalApi.md#getSecurityPriceTechnicalsKc) | **GET** /securities/{identifier}/prices/technicals/kc | Keltner Channel
[**getSecurityPriceTechnicalsKst**](TechnicalApi.md#getSecurityPriceTechnicalsKst) | **GET** /securities/{identifier}/prices/technicals/kst | Know Sure Thing
[**getSecurityPriceTechnicalsMacd**](TechnicalApi.md#getSecurityPriceTechnicalsMacd) | **GET** /securities/{identifier}/prices/technicals/macd | Moving Average Convergence Divergence
[**getSecurityPriceTechnicalsMfi**](TechnicalApi.md#getSecurityPriceTechnicalsMfi) | **GET** /securities/{identifier}/prices/technicals/mfi | Money Flow Index
[**getSecurityPriceTechnicalsMi**](TechnicalApi.md#getSecurityPriceTechnicalsMi) | **GET** /securities/{identifier}/prices/technicals/mi | Mass Index
[**getSecurityPriceTechnicalsNvi**](TechnicalApi.md#getSecurityPriceTechnicalsNvi) | **GET** /securities/{identifier}/prices/technicals/nvi | Negative Volume Index
[**getSecurityPriceTechnicalsObv**](TechnicalApi.md#getSecurityPriceTechnicalsObv) | **GET** /securities/{identifier}/prices/technicals/obv | On-balance Volume
[**getSecurityPriceTechnicalsObvMean**](TechnicalApi.md#getSecurityPriceTechnicalsObvMean) | **GET** /securities/{identifier}/prices/technicals/obv_mean | On-balance Volume Mean
[**getSecurityPriceTechnicalsRsi**](TechnicalApi.md#getSecurityPriceTechnicalsRsi) | **GET** /securities/{identifier}/prices/technicals/rsi | Relative Strength Index
[**getSecurityPriceTechnicalsSma**](TechnicalApi.md#getSecurityPriceTechnicalsSma) | **GET** /securities/{identifier}/prices/technicals/sma | Simple Moving Average
[**getSecurityPriceTechnicalsSr**](TechnicalApi.md#getSecurityPriceTechnicalsSr) | **GET** /securities/{identifier}/prices/technicals/sr | Stochastic Oscillator
[**getSecurityPriceTechnicalsTrix**](TechnicalApi.md#getSecurityPriceTechnicalsTrix) | **GET** /securities/{identifier}/prices/technicals/trix | Triple Exponential Average
[**getSecurityPriceTechnicalsTsi**](TechnicalApi.md#getSecurityPriceTechnicalsTsi) | **GET** /securities/{identifier}/prices/technicals/tsi | True Strength Index
[**getSecurityPriceTechnicalsUo**](TechnicalApi.md#getSecurityPriceTechnicalsUo) | **GET** /securities/{identifier}/prices/technicals/uo | Ultimate Oscillator
[**getSecurityPriceTechnicalsVi**](TechnicalApi.md#getSecurityPriceTechnicalsVi) | **GET** /securities/{identifier}/prices/technicals/vi | Vortex Indicator
[**getSecurityPriceTechnicalsVpt**](TechnicalApi.md#getSecurityPriceTechnicalsVpt) | **GET** /securities/{identifier}/prices/technicals/vpt | Volume-price Trend
[**getSecurityPriceTechnicalsVwap**](TechnicalApi.md#getSecurityPriceTechnicalsVwap) | **GET** /securities/{identifier}/prices/technicals/vwap | Volume Weighted Average Price
[**getSecurityPriceTechnicalsWr**](TechnicalApi.md#getSecurityPriceTechnicalsWr) | **GET** /securities/{identifier}/prices/technicals/wr | Williams %R


<a name="getSecurityPriceTechnicalsAdi"></a>
# **getSecurityPriceTechnicalsAdi**
> ApiResponseSecurityAccumulationDistributionIndex getSecurityPriceTechnicalsAdi(identifier, opts)

Accumulation/Distribution Index

Returns the Accumulation/Distribution Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsAdi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsAdtv"></a>
# **getSecurityPriceTechnicalsAdtv**
> ApiResponseSecurityAverageDailyTradingVolume getSecurityPriceTechnicalsAdtv(identifier, opts)

Average Daily Trading Volume

Returns the Average Daily Trading Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 22, // Number | The number of observations, per period, to calculate Average Daily Trading Volume
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsAdtv(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsAdx"></a>
# **getSecurityPriceTechnicalsAdx**
> ApiResponseSecurityAverageDirectionalIndex getSecurityPriceTechnicalsAdx(identifier, opts)

Average Directional Index

Returns the Average Directional Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Average Directional Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsAdx(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsAo"></a>
# **getSecurityPriceTechnicalsAo**
> ApiResponseSecurityAwesomeOscillator getSecurityPriceTechnicalsAo(identifier, opts)

Awesome Oscillator

Returns the Awesome Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'shortPeriod': 5, // Number | The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator
  'longPeriod': 34, // Number | The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsAo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsAtr"></a>
# **getSecurityPriceTechnicalsAtr**
> ApiResponseSecurityAverageTrueRange getSecurityPriceTechnicalsAtr(identifier, opts)

Average True Range

Returns the Average True Range values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Average True Range
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsAtr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsBb"></a>
# **getSecurityPriceTechnicalsBb**
> ApiResponseSecurityBollingerBands getSecurityPriceTechnicalsBb(identifier, opts)

Bollinger Bands

Returns the Bollinger Bands values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Bollinger Bands
  'standardDeviations': 2.0, // Number | The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands
  'priceKey': "close", // String | The Stock Price field to use when calculating Bollinger Bands
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsBb(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsCci"></a>
# **getSecurityPriceTechnicalsCci**
> ApiResponseSecurityCommodityChannelIndex getSecurityPriceTechnicalsCci(identifier, opts)

Commodity Channel Index

Returns the Commodity Channel Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Commodity Channel Index
  'constant': 0.015, // Number | The number of observations, per period, to calculate Commodity Channel Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsCci(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsCmf"></a>
# **getSecurityPriceTechnicalsCmf**
> ApiResponseSecurityChaikinMoneyFlow getSecurityPriceTechnicalsCmf(identifier, opts)

Chaikin Money Flow

Returns the Chaikin Money Flow values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Chaikin Money Flow
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsCmf(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsDc"></a>
# **getSecurityPriceTechnicalsDc**
> ApiResponseSecurityDonchianChannel getSecurityPriceTechnicalsDc(identifier, opts)

Donchian Channel

Returns the Donchian Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Donchian Channel
  'priceKey': "close", // String | The Stock Price field to use when calculating Donchian Channel
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsDc(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsDpo"></a>
# **getSecurityPriceTechnicalsDpo**
> ApiResponseSecurityDetrendedPriceOscillator getSecurityPriceTechnicalsDpo(identifier, opts)

Detrended Price Oscillator

Returns the Detrended Price Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Detrended Price Oscillator
  'priceKey': "close", // String | The Stock Price field to use when calculating Detrended Price Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsDpo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsEom"></a>
# **getSecurityPriceTechnicalsEom**
> ApiResponseSecurityEaseOfMovement getSecurityPriceTechnicalsEom(identifier, opts)

Ease of Movement

Returns the Ease of Movement values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Ease of Movement
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsEom(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsFi"></a>
# **getSecurityPriceTechnicalsFi**
> ApiResponseSecurityForceIndex getSecurityPriceTechnicalsFi(identifier, opts)

Force Index

Returns the Force Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsFi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsIchimoku"></a>
# **getSecurityPriceTechnicalsIchimoku**
> ApiResponseSecurityIchimokuKinkoHyo getSecurityPriceTechnicalsIchimoku(identifier, opts)

Ichimoku Kinko Hyo

Returns the Ichimoku Kinko Hyo values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'lowPeriod': 9, // Number | The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo
  'mediumPeriod': 26, // Number | The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo
  'highPeriod': 52, // Number | The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsIchimoku(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsKc"></a>
# **getSecurityPriceTechnicalsKc**
> ApiResponseSecurityKeltnerChannel getSecurityPriceTechnicalsKc(identifier, opts)

Keltner Channel

Returns the Keltner Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 10, // Number | The number of observations, per period, to calculate Kelter Channel
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsKc(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsKst"></a>
# **getSecurityPriceTechnicalsKst**
> ApiResponseSecurityKnowSureThing getSecurityPriceTechnicalsKst(identifier, opts)

Know Sure Thing

Returns the Know Sure Thing values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'roc1': 10, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA1
  'roc2': 15, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA2
  'roc3': 15, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA2
  'roc4': 20, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA3
  'roc5': 30, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA4
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

technicalAPI.getSecurityPriceTechnicalsKst(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | 
 **roc1** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA1 | [optional] [default to 10]
 **roc2** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA2 | [optional] [default to 15]
 **roc3** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA2 | [optional] [default to 15]
 **roc4** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA3 | [optional] [default to 20]
 **roc5** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA4 | [optional] [default to 30]
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

<a name="getSecurityPriceTechnicalsMacd"></a>
# **getSecurityPriceTechnicalsMacd**
> ApiResponseSecurityMovingAverageConvergenceDivergence getSecurityPriceTechnicalsMacd(identifier, opts)

Moving Average Convergence Divergence

Returns the Moving Average Convergence Divergence values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

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

technicalAPI.getSecurityPriceTechnicalsMacd(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsMfi"></a>
# **getSecurityPriceTechnicalsMfi**
> ApiResponseSecurityMoneyFlowIndex getSecurityPriceTechnicalsMfi(identifier, opts)

Money Flow Index

Returns the Money Flow Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Money Flow Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsMfi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsMi"></a>
# **getSecurityPriceTechnicalsMi**
> ApiResponseSecurityMassIndex getSecurityPriceTechnicalsMi(identifier, opts)

Mass Index

Returns the Mass Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'emaPeriod': 9, // Number | The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index
  'sumPeriod': 25, // Number | The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsMi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsNvi"></a>
# **getSecurityPriceTechnicalsNvi**
> ApiResponseSecurityNegativeVolumeIndex getSecurityPriceTechnicalsNvi(identifier, opts)

Negative Volume Index

Returns the Negative Volume Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsNvi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsObv"></a>
# **getSecurityPriceTechnicalsObv**
> ApiResponseSecurityOnBalanceVolume getSecurityPriceTechnicalsObv(identifier, opts)

On-balance Volume

Returns the On-balance Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsObv(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsObvMean"></a>
# **getSecurityPriceTechnicalsObvMean**
> ApiResponseSecurityOnBalanceVolumeMean getSecurityPriceTechnicalsObvMean(identifier, opts)

On-balance Volume Mean

Returns the On-balance Volume Mean values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 10, // Number | The number of observations, per period, to calculate On-balance Volume Mean
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsObvMean(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsRsi"></a>
# **getSecurityPriceTechnicalsRsi**
> ApiResponseSecurityRelativeStrengthIndex getSecurityPriceTechnicalsRsi(identifier, opts)

Relative Strength Index

Returns the Relative Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Relative Strength Index
  'priceKey': "close", // String | The Stock Price field to use when calculating Relative Strength Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsRsi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsSma"></a>
# **getSecurityPriceTechnicalsSma**
> ApiResponseSecuritySimpleMovingAverage getSecurityPriceTechnicalsSma(identifier, opts)

Simple Moving Average

Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 20, // Number | The number of observations, per period, to calculate Simple Moving Average
  'priceKey': "close", // String | The Stock Price field to use when calculating Simple Moving Average
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsSma(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsSr"></a>
# **getSecurityPriceTechnicalsSr**
> ApiResponseSecurityStochasticOscillator getSecurityPriceTechnicalsSr(identifier, opts)

Stochastic Oscillator

Returns the Stochastic Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate %K of Stochastic Oscillator
  'signalPeriod': 3, // Number | The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsSr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsTrix"></a>
# **getSecurityPriceTechnicalsTrix**
> ApiResponseSecurityTripleExponentialAverage getSecurityPriceTechnicalsTrix(identifier, opts)

Triple Exponential Average

Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 15, // Number | The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsTrix(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsTsi"></a>
# **getSecurityPriceTechnicalsTsi**
> ApiResponseSecurityTrueStrengthIndex getSecurityPriceTechnicalsTsi(identifier, opts)

True Strength Index

Returns the True Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'lowPeriod': 13, // Number | The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index
  'highPeriod': 25, // Number | The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index
  'priceKey': "close", // String | The Stock Price field to use when calculating True Strength Index
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsTsi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsUo"></a>
# **getSecurityPriceTechnicalsUo**
> ApiResponseSecurityUltimateOscillator getSecurityPriceTechnicalsUo(identifier, opts)

Ultimate Oscillator

Returns the Ultimate Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

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

technicalAPI.getSecurityPriceTechnicalsUo(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsVi"></a>
# **getSecurityPriceTechnicalsVi**
> ApiResponseSecurityVortexIndicator getSecurityPriceTechnicalsVi(identifier, opts)

Vortex Indicator

Returns the Vortex Indicator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to calculate Vortex Indicator
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsVi(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsVpt"></a>
# **getSecurityPriceTechnicalsVpt**
> ApiResponseSecurityVolumePriceTrend getSecurityPriceTechnicalsVpt(identifier, opts)

Volume-price Trend

Returns the Volume-price Trend values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsVpt(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsVwap"></a>
# **getSecurityPriceTechnicalsVwap**
> ApiResponseSecurityVolumeWeightedAveragePrice getSecurityPriceTechnicalsVwap(identifier, opts)

Volume Weighted Average Price

Returns the Volume Weighted Average Price values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsVwap(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

<a name="getSecurityPriceTechnicalsWr"></a>
# **getSecurityPriceTechnicalsWr**
> ApiResponseSecurityWilliamsR getSecurityPriceTechnicalsWr(identifier, opts)

Williams %R

Returns the Williams %R values of Stock Prices for the Security with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var technicalAPI = new intrinioSDK.TechnicalApi();

var identifier = "$$v2_ticker_default$$"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'period': 14, // Number | The number of observations, per period, to look-back when calculating Williams %R
  'startDate': "2018-01-01", // String | Return technical indicator values on or after the date
  'endDate': "2019-01-01", // String | Return technical indicator values on or before the date
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

technicalAPI.getSecurityPriceTechnicalsWr(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

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

