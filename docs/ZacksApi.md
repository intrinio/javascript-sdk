# intrinioSDK.ZacksApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZacksAnalystRatings**](ZacksApi.md#getZacksAnalystRatings) | **GET** /zacks/analyst_ratings | Zacks Analyst Ratings
[**getZacksEpsEstimates**](ZacksApi.md#getZacksEpsEstimates) | **GET** /zacks/eps_estimates | Zacks EPS Estimates
[**getZacksEpsGrowthRates**](ZacksApi.md#getZacksEpsGrowthRates) | **GET** /zacks/eps_growth_rates | Zacks EPS Growth Rates
[**getZacksEpsSurprises**](ZacksApi.md#getZacksEpsSurprises) | **GET** /zacks/eps_surprises | Zacks EPS Surprises
[**getZacksEtfHoldings**](ZacksApi.md#getZacksEtfHoldings) | **GET** /zacks/etf_holdings | Zacks ETF Holdings
[**getZacksInstitutionalHoldingCompanies**](ZacksApi.md#getZacksInstitutionalHoldingCompanies) | **GET** /zacks/institutional_holdings/companies | Zacks Institutional Holding Companies
[**getZacksInstitutionalHoldingOwners**](ZacksApi.md#getZacksInstitutionalHoldingOwners) | **GET** /zacks/institutional_holdings/owners | Zacks Institutional Holding Owners
[**getZacksInstitutionalHoldings**](ZacksApi.md#getZacksInstitutionalHoldings) | **GET** /zacks/institutional_holdings | Zacks Institutional Holdings
[**getZacksLongTermGrowthRates**](ZacksApi.md#getZacksLongTermGrowthRates) | **GET** /zacks/long_term_growth_rates | Zacks Long Term Growth Rates
[**getZacksSalesSurprises**](ZacksApi.md#getZacksSalesSurprises) | **GET** /zacks/sales_surprises | Zacks Sales Surprises
[**getZacksTargetPriceConsensuses**](ZacksApi.md#getZacksTargetPriceConsensuses) | **GET** /zacks/target_price_consensuses | Zacks Target Price Consensuses



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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksAnalystRatings_v2)

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
  'identifier': "$$v2_ticker_default$$", // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
  'startDate': null, // Date | Limit ratings to those on or after this date
  'endDate': null, // Date | Limit ratings to those on or before this date
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
 **startDate** | Date| Limit ratings to those on or after this date | [optional]  &nbsp;
 **endDate** | Date| Limit ratings to those on or before this date | [optional]  &nbsp;
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

[//]: # (METHOD:getZacksEpsEstimates)

[//]: # (RETURN_TYPE:ApiResponseZacksEPSEstimates)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksEPSEstimates.md)

[//]: # (OPERATION:getZacksEpsEstimates_v2)

[//]: # (ENDPOINT:/zacks/eps_estimates)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksEpsEstimates)

<a name="getZacksEpsEstimates"></a>
## **getZacksEpsEstimates**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksEpsEstimates_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksEPSEstimates getZacksEpsEstimates(opts)

#### Zacks EPS Estimates


Returns Zacks consensus earnings-per-share (EPS) data for all Companies.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'identifier': "AAPL", // String | A Company identifier (Ticker, CIK, LEI, Intrinio ID)
  'startDate': null, // Date | Limit EPS estimates to those on or after this date
  'endDate': null, // Date | Limit EPS estimates to those on or before this date
  'fiscalYear': null, // Number | Only for the given fiscal year
  'fiscalPeriod': null, // String | The fiscal period
  'calendarYear': null, // Number | Only for the given calendar year
  'calendarPeriod': null, // String | The calendar period
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksEpsEstimates(opts).then(function(data) {
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
 **identifier** | String| A Company identifier (Ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **startDate** | Date| Limit EPS estimates to those on or after this date | [optional]  &nbsp;
 **endDate** | Date| Limit EPS estimates to those on or before this date | [optional]  &nbsp;
 **fiscalYear** | Number| Only for the given fiscal year | [optional]  &nbsp;
 **fiscalPeriod** | String| The fiscal period | [optional]  &nbsp;
 **calendarYear** | Number| Only for the given calendar year | [optional]  &nbsp;
 **calendarPeriod** | String| The calendar period | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksEPSEstimates**](ApiResponseZacksEPSEstimates.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksEpsGrowthRates)

[//]: # (RETURN_TYPE:ApiResponseZacksEPSGrowthRates)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksEPSGrowthRates.md)

[//]: # (OPERATION:getZacksEpsGrowthRates_v2)

[//]: # (ENDPOINT:/zacks/eps_growth_rates)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksEpsGrowthRates)

<a name="getZacksEpsGrowthRates"></a>
## **getZacksEpsGrowthRates**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksEpsGrowthRates_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksEPSGrowthRates getZacksEpsGrowthRates(opts)

#### Zacks EPS Growth Rates


Returns the latest Zacks EPS growth rates

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'company': "AAPL", // String | Filings for the given `company` identifier (ticker, CIK, LEI, Intrinio ID)
  'industryGroupName': null, // String | Return only growth rates for companies in the given Zacks industry group name
  'industryGroupNumber': null, // String | Return only growth rates for companies in the given Zacks industry group number
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksEpsGrowthRates(opts).then(function(data) {
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
 **company** | String| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **industryGroupName** | String| Return only growth rates for companies in the given Zacks industry group name | [optional]  &nbsp;
 **industryGroupNumber** | String| Return only growth rates for companies in the given Zacks industry group number | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksEPSGrowthRates**](ApiResponseZacksEPSGrowthRates.md)



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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksEpsSurprises_v2)

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
  'startDate': null, // Date | Limit EPS surprises to those on or after this date
  'endDate': null, // Date | Limit EPS surprises to those on or before this date
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
 **startDate** | Date| Limit EPS surprises to those on or after this date | [optional]  &nbsp;
 **endDate** | Date| Limit EPS surprises to those on or before this date | [optional]  &nbsp;
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

[//]: # (METHOD:getZacksEtfHoldings)

[//]: # (RETURN_TYPE:ApiResponseZacksETFHoldings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksETFHoldings.md)

[//]: # (OPERATION:getZacksEtfHoldings_v2)

[//]: # (ENDPOINT:/zacks/etf_holdings)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksEtfHoldings)

<a name="getZacksEtfHoldings"></a>
## **getZacksEtfHoldings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksEtfHoldings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksETFHoldings getZacksEtfHoldings(opts)

#### Zacks ETF Holdings


Returns Zacks ETF holdings data

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'etfTicker': null, // String | Return holdings of the ETF with the given ticker
  'holdingSymbol': null, // String | Return holdings where the instrument being held has the given trading symbol
  'weightGreater': null, // Number | Return on the holdings with a weight greater than
  'weightLess': null, // Number | Return on the holdings with a weight less than
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksEtfHoldings(opts).then(function(data) {
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
 **etfTicker** | String| Return holdings of the ETF with the given ticker | [optional]  &nbsp;
 **holdingSymbol** | String| Return holdings where the instrument being held has the given trading symbol | [optional]  &nbsp;
 **weightGreater** | Number| Return on the holdings with a weight greater than | [optional]  &nbsp;
 **weightLess** | Number| Return on the holdings with a weight less than | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksETFHoldings**](ApiResponseZacksETFHoldings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksInstitutionalHoldingCompanies)

[//]: # (RETURN_TYPE:ApiResponseZacksInstitutionalHoldingCompanies)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksInstitutionalHoldingCompanies.md)

[//]: # (OPERATION:getZacksInstitutionalHoldingCompanies_v2)

[//]: # (ENDPOINT:/zacks/institutional_holdings/companies)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksInstitutionalHoldingCompanies)

<a name="getZacksInstitutionalHoldingCompanies"></a>
## **getZacksInstitutionalHoldingCompanies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksInstitutionalHoldingCompanies_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksInstitutionalHoldingCompanies getZacksInstitutionalHoldingCompanies(opts)

#### Zacks Institutional Holding Companies


Returns Zacks institutional holding companies data

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'ticker': null, // String | Return companies with the given ticker
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksInstitutionalHoldingCompanies(opts).then(function(data) {
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
 **ticker** | String| Return companies with the given ticker | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksInstitutionalHoldingCompanies**](ApiResponseZacksInstitutionalHoldingCompanies.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksInstitutionalHoldingOwners)

[//]: # (RETURN_TYPE:ApiResponseZacksInstitutionalHoldingOwners)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksInstitutionalHoldingOwners.md)

[//]: # (OPERATION:getZacksInstitutionalHoldingOwners_v2)

[//]: # (ENDPOINT:/zacks/institutional_holdings/owners)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksInstitutionalHoldingOwners)

<a name="getZacksInstitutionalHoldingOwners"></a>
## **getZacksInstitutionalHoldingOwners**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksInstitutionalHoldingOwners_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksInstitutionalHoldingOwners getZacksInstitutionalHoldingOwners(opts)

#### Zacks Institutional Holding Owners


Returns Zacks institutional holding owners data

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'cik': null, // String | Return owners with the given Central Index Key (CIK)
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksInstitutionalHoldingOwners(opts).then(function(data) {
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
 **cik** | String| Return owners with the given Central Index Key (CIK) | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksInstitutionalHoldingOwners**](ApiResponseZacksInstitutionalHoldingOwners.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksInstitutionalHoldings)

[//]: # (RETURN_TYPE:ApiResponseZacksInstitutionalHoldings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksInstitutionalHoldings.md)

[//]: # (OPERATION:getZacksInstitutionalHoldings_v2)

[//]: # (ENDPOINT:/zacks/institutional_holdings)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksInstitutionalHoldings)

<a name="getZacksInstitutionalHoldings"></a>
## **getZacksInstitutionalHoldings**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksInstitutionalHoldings_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksInstitutionalHoldings getZacksInstitutionalHoldings(opts)

#### Zacks Institutional Holdings


Returns Zacks institutional holdings data

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'ticker': null, // String | Return holdings where the company being held has the given ticker
  'ownerCik': null, // String | Return holdings where the owner/holder has the given Central Index Key (CIK)
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksInstitutionalHoldings(opts).then(function(data) {
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
 **ticker** | String| Return holdings where the company being held has the given ticker | [optional]  &nbsp;
 **ownerCik** | String| Return holdings where the owner/holder has the given Central Index Key (CIK) | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksInstitutionalHoldings**](ApiResponseZacksInstitutionalHoldings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksLongTermGrowthRates)

[//]: # (RETURN_TYPE:ApiResponseZacksLongTermGrowthRates)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksLongTermGrowthRates.md)

[//]: # (OPERATION:getZacksLongTermGrowthRates_v2)

[//]: # (ENDPOINT:/zacks/long_term_growth_rates)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksLongTermGrowthRates)

<a name="getZacksLongTermGrowthRates"></a>
## **getZacksLongTermGrowthRates**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksLongTermGrowthRates_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksLongTermGrowthRates getZacksLongTermGrowthRates(opts)

#### Zacks Long Term Growth Rates


Returns the latest Zacks long term growth rates

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'identifier': "AAPL", // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksLongTermGrowthRates(opts).then(function(data) {
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
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksLongTermGrowthRates**](ApiResponseZacksLongTermGrowthRates.md)



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

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksSalesSurprises_v2)

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
  'startDate': null, // Date | Limit sales surprises to those on or after this date
  'endDate': null, // Date | Limit sales surprises to those on or before this date
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
 **startDate** | Date| Limit sales surprises to those on or after this date | [optional]  &nbsp;
 **endDate** | Date| Limit sales surprises to those on or before this date | [optional]  &nbsp;
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


[//]: # (START_OPERATION)

[//]: # (CLASS:ZacksApi)

[//]: # (METHOD:getZacksTargetPriceConsensuses)

[//]: # (RETURN_TYPE:ApiResponseZacksTargetPriceConsensuses)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseZacksTargetPriceConsensuses.md)

[//]: # (OPERATION:getZacksTargetPriceConsensuses_v2)

[//]: # (ENDPOINT:/zacks/target_price_consensuses)

[//]: # (DOCUMENT_LINK:ZacksApi.md#getZacksTargetPriceConsensuses)

<a name="getZacksTargetPriceConsensuses"></a>
## **getZacksTargetPriceConsensuses**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getZacksTargetPriceConsensuses_v2)

[//]: # (START_OVERVIEW)

> ApiResponseZacksTargetPriceConsensuses getZacksTargetPriceConsensuses(opts)

#### Zacks Target Price Consensuses


Returns the latest Zacks target price consensus data

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";

var zacksAPI = new intrinioSDK.ZacksApi();

var opts = { 
  'identifier': "AAPL", // String | Filings for the given `company` identifier (ticker, CIK, LEI, Intrinio ID)
  'industryGroupNumber': null, // String | Return only growth rates for companies in the given Zacks industry group number
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

zacksAPI.getZacksTargetPriceConsensuses(opts).then(function(data) {
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
 **identifier** | String| Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID) | [optional]  &nbsp;
 **industryGroupNumber** | String| Return only growth rates for companies in the given Zacks industry group number | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseZacksTargetPriceConsensuses**](ApiResponseZacksTargetPriceConsensuses.md)



[//]: # (END_OPERATION)

