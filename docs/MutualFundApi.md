# intrinio.MutualFundApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMutualFunds**](MutualFundApi.md#getAllMutualFunds) | **GET** /mutual_funds | Get All Mutual Funds
[**getMutualFundById**](MutualFundApi.md#getMutualFundById) | **GET** /mutual_funds/{identifier} | Get a Mutual Fund by ID
[**getMutualFundStats**](MutualFundApi.md#getMutualFundStats) | **GET** /mutual_funds/{identifier}/stats | Get Stats for a Mutual Fund
[**searchMutualFunds**](MutualFundApi.md#searchMutualFunds) | **GET** /mutual_funds/search | Search Mutual Funds


<a name="getAllMutualFunds"></a>
# **getAllMutualFunds**
> [MutualFund] getAllMutualFunds(opts)

Get All Mutual Funds

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var mutualFund_api = new intrinio.MutualFundApi();

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

mutualFund_api.getAllMutualFunds(opts).then(function(data) {
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

[**[MutualFund]**](MutualFund.md)

<a name="getMutualFundById"></a>
# **getMutualFundById**
> MutualFund getMutualFundById(identifier)

Get a Mutual Fund by ID

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var mutualFund_api = new intrinio.MutualFundApi();

var identifier = "identifier_example"; // String | A Mutual Fund identifier (CUSIP, Intrinio ID)


mutualFund_api.getMutualFundById(identifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Mutual Fund identifier (CUSIP, Intrinio ID) | 

### Return type

[**MutualFund**](MutualFund.md)

<a name="getMutualFundStats"></a>
# **getMutualFundStats**
> [MutualFundStat] getMutualFundStats(identifier, opts)

Get Stats for a Mutual Fund

Returns stats for the  Mutual Fund with the given &#x60;identifier&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var mutualFund_api = new intrinio.MutualFundApi();

var identifier = "identifier_example"; // String | A Mutual Fund identifier (CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2013-10-20"), // Date | Return stats on or after the date
  'endDate': new Date("2013-10-20"), // Date | Return stats on or before the date
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

mutualFund_api.getMutualFundStats(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| A Mutual Fund identifier (CUSIP, Intrinio ID) | 
 **startDate** | **Date**| Return stats on or after the date | [optional] 
 **endDate** | **Date**| Return stats on or before the date | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**[MutualFundStat]**](MutualFundStat.md)

<a name="searchMutualFunds"></a>
# **searchMutualFunds**
> [MutualFund] searchMutualFunds(query, opts)

Search Mutual Funds

Searches for Mutual Funds matching the text &#x60;query&#x60;

### Example
```javascript
var intrinio = require('intrinio');
intrinio.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";

var mutualFund_api = new intrinio.MutualFundApi();

var query = "query_example"; // String | 

var opts = { 
  'nextPage': "nextPage_example" // String | Gets the next page of data from a previous API call
};

mutualFund_api.searchMutualFunds(query, opts).then(function(data) {
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

[**[MutualFund]**](MutualFund.md)

