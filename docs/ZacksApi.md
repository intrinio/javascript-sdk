# intrinioSDK.ZacksApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZacksAnalystRatings**](ZacksApi.md#getZacksAnalystRatings) | **GET** /zacks/analyst_ratings | Zacks Analyst Ratings
[**getZacksEpsSurprises**](ZacksApi.md#getZacksEpsSurprises) | **GET** /zacks/eps_surprises | Zacks EPS Surprises
[**getZacksSalesSurprises**](ZacksApi.md#getZacksSalesSurprises) | **GET** /zacks/sales_surprises | Zacks Sales Surprises


<a name="getZacksAnalystRatings"></a>
# **getZacksAnalystRatings**
> ApiResponseZacksAnalystRatings getZacksAnalystRatings(opts)

Zacks Analyst Ratings

Returns buy, sell, and hold recommendations from analysts at brokerages for all companies in the Zacks universe. Zack’s storied research team aggregates and validates the ratings from professional analysts.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'identifier': "AAPL", // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
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
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksAnalystRatings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | [optional] 
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
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseZacksAnalystRatings**](ApiResponseZacksAnalystRatings.md)

<a name="getZacksEpsSurprises"></a>
# **getZacksEpsSurprises**
> ApiResponseZacksEPSSurprises getZacksEpsSurprises(opts)

Zacks EPS Surprises

Returns Zacks eps surprise data for all Securities.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'startDate': null, // String | Limit EPS surprises to those on or after this date
  'endDate': null, // String | Limit EPS surprises to those on or before this date
  'epsActualGreater': null, // Number | Return only records with an actual EPS higher than this value
  'epsActualLess': null, // Number | Return only records with an actual EPS lower than this value
  'epsMeanEstimateGreater': null, // Number | Return only records with an EPS mean estimate greater than this value
  'epsMeanEstimateLess': null, // Number | Return only records with an EPS mean estimate lower than this value
  'epsAmountDiffGreater': null, // Number | Return only records with an EPS amount difference greater than this value
  'epsAmountDiffLess': null, // Number | Return only records with an EPS amount difference less than this value
  'epsPercentDiffGreater': null, // Number | Return only records with an EPS percent difference greater than this value
  'epsPercentDiffLess': null, // Number | Return only records with an EPS percent difference less than this value
  'epsCountEstimateGreater': null, // Number | Return only records with an EPS count estimate greater than this value
  'epsCountEstimateLess': null, // Number | Return only records with an EPS count estimate less than this value
  'epsStdDevEstimateGreater': null, // Number | Return only records with an EPS standard deviation greater than this value
  'epsStdDevEstimateLess': null, // Number | Return only records with an EPS standard deviation less than this value
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksEpsSurprises(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Limit EPS surprises to those on or after this date | [optional] 
 **endDate** | **String**| Limit EPS surprises to those on or before this date | [optional] 
 **epsActualGreater** | **Number**| Return only records with an actual EPS higher than this value | [optional] 
 **epsActualLess** | **Number**| Return only records with an actual EPS lower than this value | [optional] 
 **epsMeanEstimateGreater** | **Number**| Return only records with an EPS mean estimate greater than this value | [optional] 
 **epsMeanEstimateLess** | **Number**| Return only records with an EPS mean estimate lower than this value | [optional] 
 **epsAmountDiffGreater** | **Number**| Return only records with an EPS amount difference greater than this value | [optional] 
 **epsAmountDiffLess** | **Number**| Return only records with an EPS amount difference less than this value | [optional] 
 **epsPercentDiffGreater** | **Number**| Return only records with an EPS percent difference greater than this value | [optional] 
 **epsPercentDiffLess** | **Number**| Return only records with an EPS percent difference less than this value | [optional] 
 **epsCountEstimateGreater** | **Number**| Return only records with an EPS count estimate greater than this value | [optional] 
 **epsCountEstimateLess** | **Number**| Return only records with an EPS count estimate less than this value | [optional] 
 **epsStdDevEstimateGreater** | **Number**| Return only records with an EPS standard deviation greater than this value | [optional] 
 **epsStdDevEstimateLess** | **Number**| Return only records with an EPS standard deviation less than this value | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseZacksEPSSurprises**](ApiResponseZacksEPSSurprises.md)

<a name="getZacksSalesSurprises"></a>
# **getZacksSalesSurprises**
> ApiResponseZacksSalesSurprises getZacksSalesSurprises(opts)

Zacks Sales Surprises

Returns Zacks sales surprise data for all Securities.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'startDate': null, // String | Limit sales surprises to those on or after this date
  'endDate': null, // String | Limit sales surprises to those on or before this date
  'salesActualGreater': null, // Number | Return only records with an actual sales higher than this value
  'salesActualLess': null, // Number | Return only records with an actual sales lower than this value
  'salesMeanEstimateGreater': null, // Number | Return only records with a sales mean estimate greater than this value
  'salesMeanEstimateLess': null, // Number | Return only records with a sales mean estimate lower than this value
  'salesAmountDiffGreater': null, // Number | Return only records with a sales amount difference greater than this value
  'salesAmountDiffLess': null, // Number | Return only records with a sales amount difference less than this value
  'salesPercentDiffGreater': null, // Number | Return only records with a sales percent difference greater than this value
  'salesPercentDiffLess': null, // Number | Return only records with a sales percent difference less than this value
  'salesCountEstimateGreater': null, // Number | Return only records with a sales count estimate greater than this value
  'salesCountEstimateLess': null, // Number | Return only records with a sales count estimate less than this value
  'salesStdDevEstimateGreater': null, // Number | Return only records with a sales standard deviation greater than this value
  'salesStdDevEstimateLess': null, // Number | Return only records with a sales standard deviation less than this value
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksSalesSurprises(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Limit sales surprises to those on or after this date | [optional] 
 **endDate** | **String**| Limit sales surprises to those on or before this date | [optional] 
 **salesActualGreater** | **Number**| Return only records with an actual sales higher than this value | [optional] 
 **salesActualLess** | **Number**| Return only records with an actual sales lower than this value | [optional] 
 **salesMeanEstimateGreater** | **Number**| Return only records with a sales mean estimate greater than this value | [optional] 
 **salesMeanEstimateLess** | **Number**| Return only records with a sales mean estimate lower than this value | [optional] 
 **salesAmountDiffGreater** | **Number**| Return only records with a sales amount difference greater than this value | [optional] 
 **salesAmountDiffLess** | **Number**| Return only records with a sales amount difference less than this value | [optional] 
 **salesPercentDiffGreater** | **Number**| Return only records with a sales percent difference greater than this value | [optional] 
 **salesPercentDiffLess** | **Number**| Return only records with a sales percent difference less than this value | [optional] 
 **salesCountEstimateGreater** | **Number**| Return only records with a sales count estimate greater than this value | [optional] 
 **salesCountEstimateLess** | **Number**| Return only records with a sales count estimate less than this value | [optional] 
 **salesStdDevEstimateGreater** | **Number**| Return only records with a sales standard deviation greater than this value | [optional] 
 **salesStdDevEstimateLess** | **Number**| Return only records with a sales standard deviation less than this value | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseZacksSalesSurprises**](ApiResponseZacksSalesSurprises.md)

