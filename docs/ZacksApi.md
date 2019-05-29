# intrinioSDK.ZacksApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZacksAnalystRatings**](ZacksApi.md#getZacksAnalystRatings) | **GET** /zacks/analyst_ratings | Zacks Analyst Ratings
[**getZacksEpsSurprises**](ZacksApi.md#getZacksEpsSurprises) | **GET** /zacks/eps_surprises | Zacks EPS Surprises
[**getZacksSalesSurprises**](ZacksApi.md#getZacksSalesSurprises) | **GET** /zacks/sales_surprises | Zacks Sales Surprises



[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksAnalystRatings)

[//]: # (RETURN_TYPE:ApiResponseZacksAnalystRatings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksAnalystRatings.md)

[//]: # (OPERATION:getZacksAnalystRatings_v2)

[//]: # (ENDPOINT:/zacks/analyst_ratings)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksAnalystRatings)

<a name="getZacksAnalystRatings"></a>
## **getZacksAnalystRatings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getZacksAnalystRatings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksAnalystRatings getZacksAnalystRatings(opts)

#### Zacks Analyst Ratings


Returns buy, sell, and hold recommendations from analysts at brokerages for all companies in the Zacks universe. Zack’s storied research team aggregates and validates the ratings from professional analysts.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

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
 **identifier** | String| A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID) | [optional]  &nbsp;
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
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksAnalystRatings**](ApiResponseZacksAnalystRatings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksEpsSurprises)

[//]: # (RETURN_TYPE:ApiResponseZacksEPSSurprises)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksEPSSurprises.md)

[//]: # (OPERATION:getZacksEpsSurprises_v2)

[//]: # (ENDPOINT:/zacks/eps_surprises)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksEpsSurprises)

<a name="getZacksEpsSurprises"></a>
## **getZacksEpsSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getZacksEpsSurprises_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksEPSSurprises getZacksEpsSurprises(opts)

#### Zacks EPS Surprises


Returns Zacks eps surprise data for all Securities.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

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
 **startDate** | String| Limit EPS surprises to those on or after this date | [optional]  &nbsp;
 **endDate** | String| Limit EPS surprises to those on or before this date | [optional]  &nbsp;
 **epsActualGreater** | Number| Return only records with an actual EPS higher than this value | [optional]  &nbsp;
 **epsActualLess** | Number| Return only records with an actual EPS lower than this value | [optional]  &nbsp;
 **epsMeanEstimateGreater** | Number| Return only records with an EPS mean estimate greater than this value | [optional]  &nbsp;
 **epsMeanEstimateLess** | Number| Return only records with an EPS mean estimate lower than this value | [optional]  &nbsp;
 **epsAmountDiffGreater** | Number| Return only records with an EPS amount difference greater than this value | [optional]  &nbsp;
 **epsAmountDiffLess** | Number| Return only records with an EPS amount difference less than this value | [optional]  &nbsp;
 **epsPercentDiffGreater** | Number| Return only records with an EPS percent difference greater than this value | [optional]  &nbsp;
 **epsPercentDiffLess** | Number| Return only records with an EPS percent difference less than this value | [optional]  &nbsp;
 **epsCountEstimateGreater** | Number| Return only records with an EPS count estimate greater than this value | [optional]  &nbsp;
 **epsCountEstimateLess** | Number| Return only records with an EPS count estimate less than this value | [optional]  &nbsp;
 **epsStdDevEstimateGreater** | Number| Return only records with an EPS standard deviation greater than this value | [optional]  &nbsp;
 **epsStdDevEstimateLess** | Number| Return only records with an EPS standard deviation less than this value | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksEPSSurprises**](ApiResponseZacksEPSSurprises.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksSalesSurprises)

[//]: # (RETURN_TYPE:ApiResponseZacksSalesSurprises)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksSalesSurprises.md)

[//]: # (OPERATION:getZacksSalesSurprises_v2)

[//]: # (ENDPOINT:/zacks/sales_surprises)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksSalesSurprises)

<a name="getZacksSalesSurprises"></a>
## **getZacksSalesSurprises**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getZacksSalesSurprises_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksSalesSurprises getZacksSalesSurprises(opts)

#### Zacks Sales Surprises


Returns Zacks sales surprise data for all Securities.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

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
 **startDate** | String| Limit sales surprises to those on or after this date | [optional]  &nbsp;
 **endDate** | String| Limit sales surprises to those on or before this date | [optional]  &nbsp;
 **salesActualGreater** | Number| Return only records with an actual sales higher than this value | [optional]  &nbsp;
 **salesActualLess** | Number| Return only records with an actual sales lower than this value | [optional]  &nbsp;
 **salesMeanEstimateGreater** | Number| Return only records with a sales mean estimate greater than this value | [optional]  &nbsp;
 **salesMeanEstimateLess** | Number| Return only records with a sales mean estimate lower than this value | [optional]  &nbsp;
 **salesAmountDiffGreater** | Number| Return only records with a sales amount difference greater than this value | [optional]  &nbsp;
 **salesAmountDiffLess** | Number| Return only records with a sales amount difference less than this value | [optional]  &nbsp;
 **salesPercentDiffGreater** | Number| Return only records with a sales percent difference greater than this value | [optional]  &nbsp;
 **salesPercentDiffLess** | Number| Return only records with a sales percent difference less than this value | [optional]  &nbsp;
 **salesCountEstimateGreater** | Number| Return only records with a sales count estimate greater than this value | [optional]  &nbsp;
 **salesCountEstimateLess** | Number| Return only records with a sales count estimate less than this value | [optional]  &nbsp;
 **salesStdDevEstimateGreater** | Number| Return only records with a sales standard deviation greater than this value | [optional]  &nbsp;
 **salesStdDevEstimateLess** | Number| Return only records with a sales standard deviation less than this value | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksSalesSurprises**](ApiResponseZacksSalesSurprises.md)



[//]: # (END_OPERATION)

