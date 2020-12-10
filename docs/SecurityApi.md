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
[**getSecurityLatestDividendRecord**](SecurityApi.md#getSecurityLatestDividendRecord) | **GET** /securities/{identifier}/dividends/latest | Latest Dividend Record for Security
[**getSecurityLatestEarningsRecord**](SecurityApi.md#getSecurityLatestEarningsRecord) | **GET** /securities/{identifier}/earnings/latest | Latest Earnings Record for Security
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



[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getAllSecurities)

[//]: # (RETURN_TYPE:ApiResponseSecurities)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurities.md)

[//]: # (OPERATION:getAllSecurities_v2)

[//]: # (ENDPOINT:/securities)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getAllSecurities)

<a name="getAllSecurities"></a>
## **getAllSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllSecurities_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurities getAllSecurities(opts)

#### All Securities


Returns all Securities to which you have access. When parameters are specified, returns matching Securities.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var opts = { 
  'active': true,
  'delisted': false,
  'code': null,
  'currency': null,
  'ticker': null,
  'name': null,
  'compositeMic': null,
  'exchangeMic': null,
  'stockPricesAfter': null,
  'stockPricesBefore': null,
  'cik': null,
  'figi': null,
  'compositeFigi': null,
  'shareClassFigi': null,
  'figiUniqueId': null,
  'includeNonFigi': false,
  'pageSize': 100,
  'primaryListing': null,
  'nextPage': null
};

security.getAllSecurities(opts).then(function(data) {
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
 **active** | Boolean| When true, return securities that are active. When false, return securities that are not active. A security is considered active if it has traded or has had a corporate action in the past 30 days, and has not been merged into another security (such as due to ticker changes or corporate restructurings). | [optional]  &nbsp;
 **delisted** | Boolean| When true, return securities that have been delisted from their exchange. Note that there may be a newer security for the same company that has been relisted on a differente exchange. When false, return securities that have not been delisted. | [optional]  &nbsp;
 **code** | String| Return securities classified with the given code (&lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/security_codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **currency** | String| Return securities traded in the given 3-digit ISO 4217 currency code (&lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_4217\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **ticker** | String| Return securities traded with the given ticker. Note that securities across the world (and through time) may trade with the same ticker but represent different companies. Use this in conjuction with other parameters for more specificity. | [optional]  &nbsp;
 **name** | String| Return securities with the given text in their name (not case sensitive). | [optional]  &nbsp;
 **compositeMic** | String| Return securities classified under the composite exchange with the given Market Identification Code (MIC). A composite exchange may or may not be a real exchange.  For example, the USCOMP exchange (our only composite exchange to date) is a combination of exchanges with the following MICs: ARCX, XASE, XPOR, FINR, XCIS, XNAS, XNYS, BATS.  This composite grouping is done for user convenience.  At this time, all US securities are classified under the composite exchange with MIC USCOMP.  To query for specific US exchanges, use the exchange_mic parameter below.  | [optional]  &nbsp;
 **exchangeMic** | String| The MIC code of the exchange where the security is actually traded. | [optional]  &nbsp;
 **stockPricesAfter** | Date| Return securities with end-of-day stock prices on or after this date. | [optional]  &nbsp;
 **stockPricesBefore** | Date| Return securities with end-of-day stock prices on or before this date. | [optional]  &nbsp;
 **cik** | String| Return securities belonging to the company with the given Central Index Key (CIK). | [optional]  &nbsp;
 **figi** | String| Return securities with the given Exchange Level FIGI (&lt;a href&#x3D;\&quot;https://www.openfigi.com/about\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **compositeFigi** | String| Return securities with the given Country Composite FIGI (&lt;a href&#x3D;\&quot;https://www.openfigi.com/about\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **shareClassFigi** | String| Return securities with the given Global Share Class FIGI (&lt;a href&#x3D;\&quot;https://www.openfigi.com/about\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **figiUniqueId** | String| Return securities with the given FIGI Unique ID (&lt;a href&#x3D;\&quot;https://www.openfigi.com/about\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;). | [optional]  &nbsp;
 **includeNonFigi** | Boolean| When true, include securities that do not have a FIGI. By default, this is false. If this parameter is not specified, only securities with a FIGI are returned. | [optional] [default to false] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **primaryListing** | Boolean| If true, the Security is the primary issue for the company, otherwise it is a secondary issue on a secondary stock exchange | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurities**](ApiResponseSecurities.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityById)

[//]: # (RETURN_TYPE:Security)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Security.md)

[//]: # (OPERATION:getSecurityById_v2)

[//]: # (ENDPOINT:/securities/{identifier})

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityById)

<a name="getSecurityById"></a>
## **getSecurityById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityById_v2)

[//]: # (START_OVERVIEW)

> Security getSecurityById(identifier)

#### Lookup Security


Returns the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

security.getSecurityById(identifier).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Security**](Security.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityDataPointNumber)

[//]: # (RETURN_TYPE:'Number')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getSecurityDataPointNumber_v2)

[//]: # (ENDPOINT:/securities/{identifier}/data_point/{tag}/number)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityDataPointNumber)

<a name="getSecurityDataPointNumber"></a>
## **getSecurityDataPointNumber**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityDataPointNumber_v2)

[//]: # (START_OVERVIEW)

> &#39;Number&#39; getSecurityDataPointNumber(identifier, tag)

#### Data Point (Number) for Security


Returns a numeric value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";
var tag = "close_price";

security.getSecurityDataPointNumber(identifier, tag).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;Number&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityDataPointText)

[//]: # (RETURN_TYPE:'String')

[//]: # (RETURN_TYPE_KIND:primitive)

[//]: # (RETURN_TYPE_DOC:)

[//]: # (OPERATION:getSecurityDataPointText_v2)

[//]: # (ENDPOINT:/securities/{identifier}/data_point/{tag}/text)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityDataPointText)

<a name="getSecurityDataPointText"></a>
## **getSecurityDataPointText**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityDataPointText_v2)

[//]: # (START_OVERVIEW)

> &#39;String&#39; getSecurityDataPointText(identifier, tag)

#### Data Point (Text) for Security


Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";
var tag = "figi";

security.getSecurityDataPointText(identifier, tag).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code-name |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

**&#39;String&#39;**



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityHistoricalData)

[//]: # (RETURN_TYPE:ApiResponseSecurityHistoricalData)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityHistoricalData.md)

[//]: # (OPERATION:getSecurityHistoricalData_v2)

[//]: # (ENDPOINT:/securities/{identifier}/historical_data/{tag})

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityHistoricalData)

<a name="getSecurityHistoricalData"></a>
## **getSecurityHistoricalData**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityHistoricalData_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityHistoricalData getSecurityHistoricalData(identifier, tag, opts)

#### Historical Data for Security


Returns historical values for the given &#x60;tag&#x60; and the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";
var tag = "adj_close_price";

var opts = { 
  'frequency': "daily",
  'type': null,
  'startDate': new Date("2018-01-01"),
  'endDate': null,
  'sortOrder': "desc",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityHistoricalData(identifier, tag, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **tag** | String| An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;) |  &nbsp;
 **frequency** | String| Return historical data in the given frequency | [optional] [default to daily] &nbsp;
 **type** | String| Filter by type, when applicable | [optional]  &nbsp;
 **startDate** | Date| Get historical data on or after this date | [optional]  &nbsp;
 **endDate** | Date| Get historical date on or before this date | [optional]  &nbsp;
 **sortOrder** | String| Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; | [optional] [default to desc] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityHistoricalData**](ApiResponseSecurityHistoricalData.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityIntradayPrices)

[//]: # (RETURN_TYPE:ApiResponseSecurityIntradayPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityIntradayPrices.md)

[//]: # (OPERATION:getSecurityIntradayPrices_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/intraday)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityIntradayPrices)

<a name="getSecurityIntradayPrices"></a>
## **getSecurityIntradayPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityIntradayPrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityIntradayPrices getSecurityIntradayPrices(identifier, opts)

#### Intraday Stock Prices for Security


Return intraday stock prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'source': null,
  'startDate': new Date("2018-01-01"),
  'startTime': null,
  'endDate': new Date("2019-01-01"),
  'endTime': null,
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityIntradayPrices(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **source** | String| Return intraday prices from the specified data source | [optional]  &nbsp;
 **startDate** | Date| Return intraday prices starting at the specified date | [optional]  &nbsp;
 **startTime** | String| Return intraday prices starting at the specified time on the &#x60;start_date&#x60; (24-hour in &#39;hh:mm&#39; format, UTC timezone) | [optional]  &nbsp;
 **endDate** | Date| Return intraday prices stopping at the specified date | [optional]  &nbsp;
 **endTime** | String| Return intraday prices stopping at the specified time on the &#x60;end_date&#x60; (24-hour in &#39;hh:mm&#39; format, UTC timezone) | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityIntradayPrices**](ApiResponseSecurityIntradayPrices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityLatestDividendRecord)

[//]: # (RETURN_TYPE:DividendRecord)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:DividendRecord.md)

[//]: # (OPERATION:getSecurityLatestDividendRecord_v2)

[//]: # (ENDPOINT:/securities/{identifier}/dividends/latest)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityLatestDividendRecord)

<a name="getSecurityLatestDividendRecord"></a>
## **getSecurityLatestDividendRecord**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityLatestDividendRecord_v2)

[//]: # (START_OVERVIEW)

> DividendRecord getSecurityLatestDividendRecord(identifier)

#### Latest Dividend Record for Security


Returns the latest available dividend information for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

security.getSecurityLatestDividendRecord(identifier).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**DividendRecord**](DividendRecord.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityLatestEarningsRecord)

[//]: # (RETURN_TYPE:EarningsRecord)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:EarningsRecord.md)

[//]: # (OPERATION:getSecurityLatestEarningsRecord_v2)

[//]: # (ENDPOINT:/securities/{identifier}/earnings/latest)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityLatestEarningsRecord)

<a name="getSecurityLatestEarningsRecord"></a>
## **getSecurityLatestEarningsRecord**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityLatestEarningsRecord_v2)

[//]: # (START_OVERVIEW)

> EarningsRecord getSecurityLatestEarningsRecord(identifier)

#### Latest Earnings Record for Security


Returns latest available earnings information for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

security.getSecurityLatestEarningsRecord(identifier).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**EarningsRecord**](EarningsRecord.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsAdi)

[//]: # (RETURN_TYPE:ApiResponseSecurityAccumulationDistributionIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityAccumulationDistributionIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsAdi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdi)

<a name="getSecurityPriceTechnicalsAdi"></a>
## **getSecurityPriceTechnicalsAdi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsAdi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityAccumulationDistributionIndex getSecurityPriceTechnicalsAdi(identifier, opts)

#### Accumulation/Distribution Index


Returns the Accumulation/Distribution Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsAdi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityAccumulationDistributionIndex**](ApiResponseSecurityAccumulationDistributionIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsAdtv)

[//]: # (RETURN_TYPE:ApiResponseSecurityAverageDailyTradingVolume)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityAverageDailyTradingVolume.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsAdtv_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adtv)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdtv)

<a name="getSecurityPriceTechnicalsAdtv"></a>
## **getSecurityPriceTechnicalsAdtv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsAdtv_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityAverageDailyTradingVolume getSecurityPriceTechnicalsAdtv(identifier, opts)

#### Average Daily Trading Volume


Returns the Average Daily Trading Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 22,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsAdtv(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Average Daily Trading Volume | [optional] [default to 22] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityAverageDailyTradingVolume**](ApiResponseSecurityAverageDailyTradingVolume.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsAdx)

[//]: # (RETURN_TYPE:ApiResponseSecurityAverageDirectionalIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityAverageDirectionalIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsAdx_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/adx)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsAdx)

<a name="getSecurityPriceTechnicalsAdx"></a>
## **getSecurityPriceTechnicalsAdx**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsAdx_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityAverageDirectionalIndex getSecurityPriceTechnicalsAdx(identifier, opts)

#### Average Directional Index


Returns the Average Directional Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsAdx(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Average Directional Index | [optional] [default to 14] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityAverageDirectionalIndex**](ApiResponseSecurityAverageDirectionalIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsAo)

[//]: # (RETURN_TYPE:ApiResponseSecurityAwesomeOscillator)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityAwesomeOscillator.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsAo_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/ao)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsAo)

<a name="getSecurityPriceTechnicalsAo"></a>
## **getSecurityPriceTechnicalsAo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsAo_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityAwesomeOscillator getSecurityPriceTechnicalsAo(identifier, opts)

#### Awesome Oscillator


Returns the Awesome Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'shortPeriod': 5,
  'longPeriod': 34,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsAo(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **shortPeriod** | Number| The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator | [optional] [default to 5] &nbsp;
 **longPeriod** | Number| The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator | [optional] [default to 34] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityAwesomeOscillator**](ApiResponseSecurityAwesomeOscillator.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsAtr)

[//]: # (RETURN_TYPE:ApiResponseSecurityAverageTrueRange)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityAverageTrueRange.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsAtr_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/atr)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsAtr)

<a name="getSecurityPriceTechnicalsAtr"></a>
## **getSecurityPriceTechnicalsAtr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsAtr_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityAverageTrueRange getSecurityPriceTechnicalsAtr(identifier, opts)

#### Average True Range


Returns the Average True Range values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsAtr(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Average True Range | [optional] [default to 14] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityAverageTrueRange**](ApiResponseSecurityAverageTrueRange.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsBb)

[//]: # (RETURN_TYPE:ApiResponseSecurityBollingerBands)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityBollingerBands.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsBb_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/bb)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsBb)

<a name="getSecurityPriceTechnicalsBb"></a>
## **getSecurityPriceTechnicalsBb**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsBb_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityBollingerBands getSecurityPriceTechnicalsBb(identifier, opts)

#### Bollinger Bands


Returns the Bollinger Bands values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'standardDeviations': 2.0,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsBb(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Bollinger Bands | [optional] [default to 20] &nbsp;
 **standardDeviations** | Number| The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands | [optional] [default to 2.0] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Bollinger Bands | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityBollingerBands**](ApiResponseSecurityBollingerBands.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsCci)

[//]: # (RETURN_TYPE:ApiResponseSecurityCommodityChannelIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityCommodityChannelIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsCci_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/cci)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsCci)

<a name="getSecurityPriceTechnicalsCci"></a>
## **getSecurityPriceTechnicalsCci**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsCci_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityCommodityChannelIndex getSecurityPriceTechnicalsCci(identifier, opts)

#### Commodity Channel Index


Returns the Commodity Channel Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'constant': 0.015,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsCci(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Commodity Channel Index | [optional] [default to 20] &nbsp;
 **constant** | Number| The number of observations, per period, to calculate Commodity Channel Index | [optional] [default to 0.015] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityCommodityChannelIndex**](ApiResponseSecurityCommodityChannelIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsCmf)

[//]: # (RETURN_TYPE:ApiResponseSecurityChaikinMoneyFlow)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityChaikinMoneyFlow.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsCmf_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/cmf)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsCmf)

<a name="getSecurityPriceTechnicalsCmf"></a>
## **getSecurityPriceTechnicalsCmf**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsCmf_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityChaikinMoneyFlow getSecurityPriceTechnicalsCmf(identifier, opts)

#### Chaikin Money Flow


Returns the Chaikin Money Flow values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsCmf(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Chaikin Money Flow | [optional] [default to 20] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityChaikinMoneyFlow**](ApiResponseSecurityChaikinMoneyFlow.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsDc)

[//]: # (RETURN_TYPE:ApiResponseSecurityDonchianChannel)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityDonchianChannel.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsDc_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/dc)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsDc)

<a name="getSecurityPriceTechnicalsDc"></a>
## **getSecurityPriceTechnicalsDc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsDc_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityDonchianChannel getSecurityPriceTechnicalsDc(identifier, opts)

#### Donchian Channel


Returns the Donchian Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsDc(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Donchian Channel | [optional] [default to 20] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Donchian Channel | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityDonchianChannel**](ApiResponseSecurityDonchianChannel.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsDpo)

[//]: # (RETURN_TYPE:ApiResponseSecurityDetrendedPriceOscillator)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityDetrendedPriceOscillator.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsDpo_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/dpo)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsDpo)

<a name="getSecurityPriceTechnicalsDpo"></a>
## **getSecurityPriceTechnicalsDpo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsDpo_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityDetrendedPriceOscillator getSecurityPriceTechnicalsDpo(identifier, opts)

#### Detrended Price Oscillator


Returns the Detrended Price Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsDpo(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Detrended Price Oscillator | [optional] [default to 20] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Detrended Price Oscillator | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityDetrendedPriceOscillator**](ApiResponseSecurityDetrendedPriceOscillator.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsEom)

[//]: # (RETURN_TYPE:ApiResponseSecurityEaseOfMovement)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityEaseOfMovement.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsEom_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/eom)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsEom)

<a name="getSecurityPriceTechnicalsEom"></a>
## **getSecurityPriceTechnicalsEom**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsEom_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityEaseOfMovement getSecurityPriceTechnicalsEom(identifier, opts)

#### Ease of Movement


Returns the Ease of Movement values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsEom(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Ease of Movement | [optional] [default to 20] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityEaseOfMovement**](ApiResponseSecurityEaseOfMovement.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsFi)

[//]: # (RETURN_TYPE:ApiResponseSecurityForceIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityForceIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsFi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/fi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsFi)

<a name="getSecurityPriceTechnicalsFi"></a>
## **getSecurityPriceTechnicalsFi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsFi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityForceIndex getSecurityPriceTechnicalsFi(identifier, opts)

#### Force Index


Returns the Force Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsFi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityForceIndex**](ApiResponseSecurityForceIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsIchimoku)

[//]: # (RETURN_TYPE:ApiResponseSecurityIchimokuKinkoHyo)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityIchimokuKinkoHyo.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsIchimoku_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/ichimoku)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsIchimoku)

<a name="getSecurityPriceTechnicalsIchimoku"></a>
## **getSecurityPriceTechnicalsIchimoku**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsIchimoku_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityIchimokuKinkoHyo getSecurityPriceTechnicalsIchimoku(identifier, opts)

#### Ichimoku Kinko Hyo


Returns the Ichimoku Kinko Hyo values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'lowPeriod': 9,
  'mediumPeriod': 26,
  'highPeriod': 52,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsIchimoku(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **lowPeriod** | Number| The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo | [optional] [default to 9] &nbsp;
 **mediumPeriod** | Number| The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo | [optional] [default to 26] &nbsp;
 **highPeriod** | Number| The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo | [optional] [default to 52] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityIchimokuKinkoHyo**](ApiResponseSecurityIchimokuKinkoHyo.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsKc)

[//]: # (RETURN_TYPE:ApiResponseSecurityKeltnerChannel)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityKeltnerChannel.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsKc_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/kc)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsKc)

<a name="getSecurityPriceTechnicalsKc"></a>
## **getSecurityPriceTechnicalsKc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsKc_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityKeltnerChannel getSecurityPriceTechnicalsKc(identifier, opts)

#### Keltner Channel


Returns the Keltner Channel values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 10,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsKc(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Kelter Channel | [optional] [default to 10] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityKeltnerChannel**](ApiResponseSecurityKeltnerChannel.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsKst)

[//]: # (RETURN_TYPE:ApiResponseSecurityKnowSureThing)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityKnowSureThing.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsKst_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/kst)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsKst)

<a name="getSecurityPriceTechnicalsKst"></a>
## **getSecurityPriceTechnicalsKst**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsKst_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityKnowSureThing getSecurityPriceTechnicalsKst(identifier, opts)

#### Know Sure Thing


Returns the Know Sure Thing values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'roc1': 10,
  'roc2': 15,
  'roc3': 20,
  'roc4': 30,
  'sma1': 10,
  'sma2': 10,
  'sma3': 10,
  'sma4': 15,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsKst(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **roc1** | Number| The number of observations, per period, to calculate the rate-of-change for RCMA1 | [optional] [default to 10] &nbsp;
 **roc2** | Number| The number of observations, per period, to calculate the rate-of-change for RCMA2 | [optional] [default to 15] &nbsp;
 **roc3** | Number| The number of observations, per period, to calculate the rate-of-change for RCMA3 | [optional] [default to 20] &nbsp;
 **roc4** | Number| The number of observations, per period, to calculate the rate-of-change for RCMA4 | [optional] [default to 30] &nbsp;
 **sma1** | Number| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA1 | [optional] [default to 10] &nbsp;
 **sma2** | Number| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA2 | [optional] [default to 10] &nbsp;
 **sma3** | Number| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA3 | [optional] [default to 10] &nbsp;
 **sma4** | Number| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA4 | [optional] [default to 15] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Know Sure Thing | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityKnowSureThing**](ApiResponseSecurityKnowSureThing.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsMacd)

[//]: # (RETURN_TYPE:ApiResponseSecurityMovingAverageConvergenceDivergence)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityMovingAverageConvergenceDivergence.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsMacd_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/macd)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsMacd)

<a name="getSecurityPriceTechnicalsMacd"></a>
## **getSecurityPriceTechnicalsMacd**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsMacd_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityMovingAverageConvergenceDivergence getSecurityPriceTechnicalsMacd(identifier, opts)

#### Moving Average Convergence Divergence


Returns the Moving Average Convergence Divergence values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'fastPeriod': 12,
  'slowPeriod': 26,
  'signalPeriod': 9,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsMacd(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **fastPeriod** | Number| The number of observations, per period, to calculate the fast moving Exponential Moving Average for Moving Average Convergence Divergence | [optional] [default to 12] &nbsp;
 **slowPeriod** | Number| The number of observations, per period, to calculate the slow moving Exponential Moving Average for Moving Average Convergence Divergence | [optional] [default to 26] &nbsp;
 **signalPeriod** | Number| The number of observations, per period, to calculate the signal line for Moving Average Convergence Divergence | [optional] [default to 9] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Moving Average Convergence Divergence | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityMovingAverageConvergenceDivergence**](ApiResponseSecurityMovingAverageConvergenceDivergence.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsMfi)

[//]: # (RETURN_TYPE:ApiResponseSecurityMoneyFlowIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityMoneyFlowIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsMfi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/mfi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsMfi)

<a name="getSecurityPriceTechnicalsMfi"></a>
## **getSecurityPriceTechnicalsMfi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsMfi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityMoneyFlowIndex getSecurityPriceTechnicalsMfi(identifier, opts)

#### Money Flow Index


Returns the Money Flow Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsMfi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Money Flow Index | [optional] [default to 14] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityMoneyFlowIndex**](ApiResponseSecurityMoneyFlowIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsMi)

[//]: # (RETURN_TYPE:ApiResponseSecurityMassIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityMassIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsMi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/mi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsMi)

<a name="getSecurityPriceTechnicalsMi"></a>
## **getSecurityPriceTechnicalsMi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsMi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityMassIndex getSecurityPriceTechnicalsMi(identifier, opts)

#### Mass Index


Returns the Mass Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'emaPeriod': 9,
  'sumPeriod': 25,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsMi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **emaPeriod** | Number| The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index | [optional] [default to 9] &nbsp;
 **sumPeriod** | Number| The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index | [optional] [default to 25] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityMassIndex**](ApiResponseSecurityMassIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsNvi)

[//]: # (RETURN_TYPE:ApiResponseSecurityNegativeVolumeIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityNegativeVolumeIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsNvi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/nvi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsNvi)

<a name="getSecurityPriceTechnicalsNvi"></a>
## **getSecurityPriceTechnicalsNvi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsNvi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityNegativeVolumeIndex getSecurityPriceTechnicalsNvi(identifier, opts)

#### Negative Volume Index


Returns the Negative Volume Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsNvi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityNegativeVolumeIndex**](ApiResponseSecurityNegativeVolumeIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsObv)

[//]: # (RETURN_TYPE:ApiResponseSecurityOnBalanceVolume)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityOnBalanceVolume.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsObv_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/obv)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsObv)

<a name="getSecurityPriceTechnicalsObv"></a>
## **getSecurityPriceTechnicalsObv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsObv_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityOnBalanceVolume getSecurityPriceTechnicalsObv(identifier, opts)

#### On-balance Volume


Returns the On-balance Volume values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsObv(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityOnBalanceVolume**](ApiResponseSecurityOnBalanceVolume.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsObvMean)

[//]: # (RETURN_TYPE:ApiResponseSecurityOnBalanceVolumeMean)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityOnBalanceVolumeMean.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsObvMean_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/obv_mean)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsObvMean)

<a name="getSecurityPriceTechnicalsObvMean"></a>
## **getSecurityPriceTechnicalsObvMean**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsObvMean_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityOnBalanceVolumeMean getSecurityPriceTechnicalsObvMean(identifier, opts)

#### On-balance Volume Mean


Returns the On-balance Volume Mean values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 10,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsObvMean(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate On-balance Volume Mean | [optional] [default to 10] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityOnBalanceVolumeMean**](ApiResponseSecurityOnBalanceVolumeMean.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsRsi)

[//]: # (RETURN_TYPE:ApiResponseSecurityRelativeStrengthIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityRelativeStrengthIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsRsi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/rsi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsRsi)

<a name="getSecurityPriceTechnicalsRsi"></a>
## **getSecurityPriceTechnicalsRsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsRsi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityRelativeStrengthIndex getSecurityPriceTechnicalsRsi(identifier, opts)

#### Relative Strength Index


Returns the Relative Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsRsi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Relative Strength Index | [optional] [default to 14] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Relative Strength Index | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityRelativeStrengthIndex**](ApiResponseSecurityRelativeStrengthIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsSma)

[//]: # (RETURN_TYPE:ApiResponseSecuritySimpleMovingAverage)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecuritySimpleMovingAverage.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsSma_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/sma)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsSma)

<a name="getSecurityPriceTechnicalsSma"></a>
## **getSecurityPriceTechnicalsSma**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsSma_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecuritySimpleMovingAverage getSecurityPriceTechnicalsSma(identifier, opts)

#### Simple Moving Average


Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 20,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsSma(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Simple Moving Average | [optional] [default to 20] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating Simple Moving Average | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecuritySimpleMovingAverage**](ApiResponseSecuritySimpleMovingAverage.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsSr)

[//]: # (RETURN_TYPE:ApiResponseSecurityStochasticOscillator)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityStochasticOscillator.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsSr_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/sr)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsSr)

<a name="getSecurityPriceTechnicalsSr"></a>
## **getSecurityPriceTechnicalsSr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsSr_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityStochasticOscillator getSecurityPriceTechnicalsSr(identifier, opts)

#### Stochastic Oscillator


Returns the Stochastic Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'signalPeriod': 3,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsSr(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate %K of Stochastic Oscillator | [optional] [default to 14] &nbsp;
 **signalPeriod** | Number| The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator | [optional] [default to 3] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityStochasticOscillator**](ApiResponseSecurityStochasticOscillator.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsTrix)

[//]: # (RETURN_TYPE:ApiResponseSecurityTripleExponentialAverage)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityTripleExponentialAverage.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsTrix_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/trix)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsTrix)

<a name="getSecurityPriceTechnicalsTrix"></a>
## **getSecurityPriceTechnicalsTrix**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsTrix_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityTripleExponentialAverage getSecurityPriceTechnicalsTrix(identifier, opts)

#### Triple Exponential Average


Returns the Simple Moving Average values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 15,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsTrix(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average | [optional] [default to 15] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityTripleExponentialAverage**](ApiResponseSecurityTripleExponentialAverage.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsTsi)

[//]: # (RETURN_TYPE:ApiResponseSecurityTrueStrengthIndex)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityTrueStrengthIndex.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsTsi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/tsi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsTsi)

<a name="getSecurityPriceTechnicalsTsi"></a>
## **getSecurityPriceTechnicalsTsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsTsi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityTrueStrengthIndex getSecurityPriceTechnicalsTsi(identifier, opts)

#### True Strength Index


Returns the True Strength Index values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'lowPeriod': 13,
  'highPeriod': 25,
  'priceKey': "close",
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsTsi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **lowPeriod** | Number| The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index | [optional] [default to 13] &nbsp;
 **highPeriod** | Number| The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index | [optional] [default to 25] &nbsp;
 **priceKey** | String| The Stock Price field to use when calculating True Strength Index | [optional] [default to close] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityTrueStrengthIndex**](ApiResponseSecurityTrueStrengthIndex.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsUo)

[//]: # (RETURN_TYPE:ApiResponseSecurityUltimateOscillator)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityUltimateOscillator.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsUo_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/uo)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsUo)

<a name="getSecurityPriceTechnicalsUo"></a>
## **getSecurityPriceTechnicalsUo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsUo_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityUltimateOscillator getSecurityPriceTechnicalsUo(identifier, opts)

#### Ultimate Oscillator


Returns the Ultimate Oscillator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'shortPeriod': 7,
  'mediumPeriod': 14,
  'longPeriod': 28,
  'shortWeight': 4.0,
  'mediumWeight': 2.0,
  'longWeight': 1.0,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsUo(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **shortPeriod** | Number| The number of observations, per period, to calculate the short period for Ultimate Oscillator | [optional] [default to 7] &nbsp;
 **mediumPeriod** | Number| The number of observations, per period, to calculate the medium period for Ultimate Oscillator | [optional] [default to 14] &nbsp;
 **longPeriod** | Number| The number of observations, per period, to calculate the long period for Ultimate Oscillator | [optional] [default to 28] &nbsp;
 **shortWeight** | Number| The weight of short Buying Pressure average for Ultimate Oscillator | [optional] [default to 4.0] &nbsp;
 **mediumWeight** | Number| The weight of medium Buying Pressure average for Ultimate Oscillator | [optional] [default to 2.0] &nbsp;
 **longWeight** | Number| The weight of long Buying Pressure average for Ultimate Oscillator | [optional] [default to 1.0] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityUltimateOscillator**](ApiResponseSecurityUltimateOscillator.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsVi)

[//]: # (RETURN_TYPE:ApiResponseSecurityVortexIndicator)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityVortexIndicator.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsVi_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vi)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsVi)

<a name="getSecurityPriceTechnicalsVi"></a>
## **getSecurityPriceTechnicalsVi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsVi_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityVortexIndicator getSecurityPriceTechnicalsVi(identifier, opts)

#### Vortex Indicator


Returns the Vortex Indicator values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsVi(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to calculate Vortex Indicator | [optional] [default to 14] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityVortexIndicator**](ApiResponseSecurityVortexIndicator.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsVpt)

[//]: # (RETURN_TYPE:ApiResponseSecurityVolumePriceTrend)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityVolumePriceTrend.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsVpt_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vpt)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsVpt)

<a name="getSecurityPriceTechnicalsVpt"></a>
## **getSecurityPriceTechnicalsVpt**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsVpt_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityVolumePriceTrend getSecurityPriceTechnicalsVpt(identifier, opts)

#### Volume-price Trend


Returns the Volume-price Trend values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsVpt(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityVolumePriceTrend**](ApiResponseSecurityVolumePriceTrend.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsVwap)

[//]: # (RETURN_TYPE:ApiResponseSecurityVolumeWeightedAveragePrice)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityVolumeWeightedAveragePrice.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsVwap_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/vwap)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsVwap)

<a name="getSecurityPriceTechnicalsVwap"></a>
## **getSecurityPriceTechnicalsVwap**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsVwap_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityVolumeWeightedAveragePrice getSecurityPriceTechnicalsVwap(identifier, opts)

#### Volume Weighted Average Price


Returns the Volume Weighted Average Price values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsVwap(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityVolumeWeightedAveragePrice**](ApiResponseSecurityVolumeWeightedAveragePrice.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityPriceTechnicalsWr)

[//]: # (RETURN_TYPE:ApiResponseSecurityWilliamsR)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityWilliamsR.md)

[//]: # (OPERATION:getSecurityPriceTechnicalsWr_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/technicals/wr)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityPriceTechnicalsWr)

<a name="getSecurityPriceTechnicalsWr"></a>
## **getSecurityPriceTechnicalsWr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityPriceTechnicalsWr_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityWilliamsR getSecurityPriceTechnicalsWr(identifier, opts)

#### Williams %R


Returns the Williams %R values of Stock Prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'period': 14,
  'startDate': "2018-01-01",
  'endDate': "2019-01-01",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityPriceTechnicalsWr(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **period** | Number| The number of observations, per period, to look-back when calculating Williams %R | [optional] [default to 14] &nbsp;
 **startDate** | String| Return technical indicator values on or after the date | [optional]  &nbsp;
 **endDate** | String| Return technical indicator values on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityWilliamsR**](ApiResponseSecurityWilliamsR.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityRealtimePrice)

[//]: # (RETURN_TYPE:RealtimeStockPrice)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:RealtimeStockPrice.md)

[//]: # (OPERATION:getSecurityRealtimePrice_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/realtime)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityRealtimePrice)

<a name="getSecurityRealtimePrice"></a>
## **getSecurityRealtimePrice**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityRealtimePrice_v2)

[//]: # (START_OVERVIEW)

> RealtimeStockPrice getSecurityRealtimePrice(identifier, opts)

#### Realtime Stock Price for Security


Return the realtime stock price for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'source': "bats"
};

security.getSecurityRealtimePrice(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **source** | String| Return the realtime price from the specified data source. If no source is specified, the best source available is used. | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**RealtimeStockPrice**](RealtimeStockPrice.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityStockPriceAdjustments)

[//]: # (RETURN_TYPE:ApiResponseSecurityStockPriceAdjustments)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityStockPriceAdjustments.md)

[//]: # (OPERATION:getSecurityStockPriceAdjustments_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices/adjustments)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityStockPriceAdjustments)

<a name="getSecurityStockPriceAdjustments"></a>
## **getSecurityStockPriceAdjustments**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityStockPriceAdjustments_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityStockPriceAdjustments getSecurityStockPriceAdjustments(identifier, opts)

#### Stock Price Adjustments by Security


Returns stock price adjustments for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': new Date("2018-01-01"),
  'endDate': new Date("2019-01-01"),
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityStockPriceAdjustments(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | Date| Return price adjustments on or after the date | [optional]  &nbsp;
 **endDate** | Date| Return price adjustments on or before the date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityStockPriceAdjustments**](ApiResponseSecurityStockPriceAdjustments.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityStockPrices)

[//]: # (RETURN_TYPE:ApiResponseSecurityStockPrices)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityStockPrices.md)

[//]: # (OPERATION:getSecurityStockPrices_v2)

[//]: # (ENDPOINT:/securities/{identifier}/prices)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityStockPrices)

<a name="getSecurityStockPrices"></a>
## **getSecurityStockPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityStockPrices_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityStockPrices getSecurityStockPrices(identifier, opts)

#### Stock Prices by Security


Return end-of-day stock prices for the Security with the given &#x60;identifier&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': new Date("2018-01-01"),
  'endDate': new Date("2019-01-01"),
  'frequency': "daily",
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityStockPrices(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | Date| Return prices on or after the date | [optional]  &nbsp;
 **endDate** | Date| Return prices on or before the date | [optional]  &nbsp;
 **frequency** | String| Return stock prices in the given frequency | [optional] [default to daily] &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityStockPrices**](ApiResponseSecurityStockPrices.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityZacksAnalystRatings)

[//]: # (RETURN_TYPE:ApiResponseSecurityZacksAnalystRatings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityZacksAnalystRatings.md)

[//]: # (OPERATION:getSecurityZacksAnalystRatings_v2)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/analyst_ratings)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityZacksAnalystRatings)

<a name="getSecurityZacksAnalystRatings"></a>
## **getSecurityZacksAnalystRatings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityZacksAnalystRatings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityZacksAnalystRatings getSecurityZacksAnalystRatings(identifier, opts)

#### Zacks Analyst Ratings


Returns buy, sell, and hold recommendations from analysts at brokerages for the Security with the given &#x60;identifier&#x60;. Zack’s storied research team aggregates and validates the ratings from professional analysts.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'startDate': null,
  'endDate': null,
  'meanGreater': null,
  'meanLess': null,
  'strongBuysGreater': null,
  'strongBuysLess': null,
  'buysGreater': null,
  'buysLess': null,
  'holdsGreater': null,
  'holdsLess': null,
  'sellsGreater': null,
  'sellsLess': null,
  'strongSellsGreater': null,
  'strongSellsLess': null,
  'totalGreater': null,
  'totalLess': null,
  'pageSize': 100
};

security.getSecurityZacksAnalystRatings(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **startDate** | String| Limit ratings to those on or after this date | [optional]  &nbsp;
 **endDate** | String| Limit ratings to those on or before this date | [optional]  &nbsp;
 **meanGreater** | Number| Return only records with a mean (average) higher than this value | [optional]  &nbsp;
 **meanLess** | Number| Return only records with a mean (average) lower than this value | [optional]  &nbsp;
 **strongBuysGreater** | Number| Return only records with more than this many Strong Buy recommendations | [optional]  &nbsp;
 **strongBuysLess** | Number| Return only records with fewer than this many Strong Buy recommendations | [optional]  &nbsp;
 **buysGreater** | Number| Return only records with more than this many Buy recommendations | [optional]  &nbsp;
 **buysLess** | Number| Return only records with fewer than this many Buy recommendations | [optional]  &nbsp;
 **holdsGreater** | Number| Return only records with more than this many Hold recommendations | [optional]  &nbsp;
 **holdsLess** | Number| Return only records with fewer than this many Hold recommendations | [optional]  &nbsp;
 **sellsGreater** | Number| Return only records with more than this many Sell recommendations | [optional]  &nbsp;
 **sellsLess** | Number| Return only records with fewer than this many Sell recommendations | [optional]  &nbsp;
 **strongSellsGreater** | Number| Return only records with more than this many Strong Sell recommendations | [optional]  &nbsp;
 **strongSellsLess** | Number| Return only records with fewer than this many Strong Sell recommendations | [optional]  &nbsp;
 **totalGreater** | Number| Return only records with more than this many recommendations, regardless of type | [optional]  &nbsp;
 **totalLess** | Number| Return only records with fewer than this many recommendations, regardless of type | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityZacksAnalystRatings**](ApiResponseSecurityZacksAnalystRatings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityZacksAnalystRatingsSnapshot)

[//]: # (RETURN_TYPE:ApiResponseSecurityZacksAnalystRatingsSnapshot)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityZacksAnalystRatingsSnapshot.md)

[//]: # (OPERATION:getSecurityZacksAnalystRatingsSnapshot_v2)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/analyst_ratings/snapshot)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityZacksAnalystRatingsSnapshot)

<a name="getSecurityZacksAnalystRatingsSnapshot"></a>
## **getSecurityZacksAnalystRatingsSnapshot**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityZacksAnalystRatingsSnapshot_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityZacksAnalystRatingsSnapshot getSecurityZacksAnalystRatingsSnapshot(identifier, opts)

#### Zacks Analyst Ratings Snapshot


Returns a snapshot of ratings data compared with previous timeframes for the Security with the given &#x60;identifier&#x60;. Also returns mean percentiles for comparing one security to the universe of securities covered by Zacks analyst ratings, at a specific point in time.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'date': null
};

security.getSecurityZacksAnalystRatingsSnapshot(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **date** | String| Lookup a historical snapshot on the given date | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityZacksAnalystRatingsSnapshot**](ApiResponseSecurityZacksAnalystRatingsSnapshot.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityZacksEpsSurprises)

[//]: # (RETURN_TYPE:ApiResponseSecurityZacksEPSSurprises)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityZacksEPSSurprises.md)

[//]: # (OPERATION:getSecurityZacksEpsSurprises_v2)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/eps_surprises)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityZacksEpsSurprises)

<a name="getSecurityZacksEpsSurprises"></a>
## **getSecurityZacksEpsSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityZacksEpsSurprises_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityZacksEPSSurprises getSecurityZacksEpsSurprises(identifier, opts)

#### Zacks EPS Surprises for Security


Return Zacks EPS surprises for the Security with the given &#x60;identifier&#x60;.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityZacksEpsSurprises(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityZacksEPSSurprises**](ApiResponseSecurityZacksEPSSurprises.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:getSecurityZacksSalesSurprises)

[//]: # (RETURN_TYPE:ApiResponseSecurityZacksSalesSurprises)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecurityZacksSalesSurprises.md)

[//]: # (OPERATION:getSecurityZacksSalesSurprises_v2)

[//]: # (ENDPOINT:/securities/{identifier}/zacks/sales_surprises)

[//]: # (DOCUMENT_LINK:SecurityApi.md#getSecurityZacksSalesSurprises)

<a name="getSecurityZacksSalesSurprises"></a>
## **getSecurityZacksSalesSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getSecurityZacksSalesSurprises_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecurityZacksSalesSurprises getSecurityZacksSalesSurprises(identifier, opts)

#### Zacks Sales Surprises for Security


Return Zacks sales surprises for the Security with the given &#x60;identifier&#x60;.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var identifier = "AAPL";

var opts = { 
  'pageSize': 100,
  'nextPage': null
};

security.getSecurityZacksSalesSurprises(identifier, opts).then(function(data) {
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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecurityZacksSalesSurprises**](ApiResponseSecurityZacksSalesSurprises.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:screenSecurities)

[//]: # (RETURN_TYPE:[SecurityScreenResult])

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:SecurityScreenResult.md)

[//]: # (OPERATION:screenSecurities_v2)

[//]: # (ENDPOINT:/securities/screen)

[//]: # (DOCUMENT_LINK:SecurityApi.md#screenSecurities)

<a name="screenSecurities"></a>
## **screenSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/screenSecurities_v2)

[//]: # (START_OVERVIEW)

> [SecurityScreenResult] screenSecurities(opts)

#### Screen Securities


Screen Securities using complex logic. Use POST only. See &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/screener_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;screener documentation&lt;/a&gt; for details on how to construct conditions.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

clauses = [
  {
    "field": "marketcap",
    "operator": "gt",
    "value": "10000000"
  },
  {
    "field": "beta",
    "operator": "lt",
    "value": "5"
  }
]

var logic = new intrinioSDK.SecurityScreenGroup()
logic.operator = "AND"
logic.clauses = clauses

var opts = { 
  'logic': logic,
  'orderColumn': "marketcap",
  'orderDirection': "asc",
  'primaryOnly': false,
  'pageSize': 100
};

security.screenSecurities(opts).then(function(data) {
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
 **logic** | [**SecurityScreenGroup**](SecurityScreenGroup.md)| The logic to screen with, consisting of operators, clauses, and nested groups. &lt;/br&gt; See &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/screener_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;screener documentation&lt;/a&gt; for details on how to construct conditions. | [optional]  &nbsp;
 **orderColumn** | String| Results returned sorted by this column | [optional]  &nbsp;
 **orderDirection** | String| Sort order to use with the order_column | [optional] [default to asc] &nbsp;
 **primaryOnly** | Boolean| Return only primary securities | [optional] [default to false] &nbsp;
 **pageSize** | Number| The number of results to return. Maximum for this endpoint is 50000. | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**[SecurityScreenResult]**](SecurityScreenResult.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:SecurityApi)

[//]: # (METHOD:searchSecurities)

[//]: # (RETURN_TYPE:ApiResponseSecuritiesSearch)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseSecuritiesSearch.md)

[//]: # (OPERATION:searchSecurities_v2)

[//]: # (ENDPOINT:/securities/search)

[//]: # (DOCUMENT_LINK:SecurityApi.md#searchSecurities)

<a name="searchSecurities"></a>
## **searchSecurities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchSecurities_v2)

[//]: # (START_OVERVIEW)

> ApiResponseSecuritiesSearch searchSecurities(query, opts)

#### Search Securities


Searches for Securities matching the text &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var security = new intrinioSDK.SecurityApi();

var query = "Apple";

var opts = { 
  'pageSize': 100
};

security.searchSecurities(query, opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseSecuritiesSearch**](ApiResponseSecuritiesSearch.md)



[//]: # (END_OPERATION)

