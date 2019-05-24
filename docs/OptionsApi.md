# intrinioSDK.OptionsApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOptions**](OptionsApi.md#getOptions) | **GET** /options/{symbol} | Options
[**getOptionsChain**](OptionsApi.md#getOptionsChain) | **GET** /options/chain/{symbol}/{expiration} | Options Chain
[**getOptionsExpirations**](OptionsApi.md#getOptionsExpirations) | **GET** /options/expirations/{symbol} | Options Expirations
[**getOptionsPrices**](OptionsApi.md#getOptionsPrices) | **GET** /options/prices/{identifier} | Option Prices


<a name="getOptions"></a>
# **getOptions**
> ApiResponseOptions getOptions(symbol, opts)

Options

Returns the master list of option contracts for a given symbol.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var optionsAPI = new intrinioSDK.OptionsApi();

var symbol = "MSFT"; // String | The option symbol, corresponding to the underlying security.

var opts = { 
  'type': "put", // String | The option contract type.
  'strike': 170.0, // Number | The strike price of the option contract. This will return options contracts with strike price equal to this price.
  'strikeGreaterThan': 190.0, // Number | The strike price of the option contract. This will return options contracts with strike prices greater than this price.
  'strikeLessThan': 150.0, // Number | The strike price of the option contract. This will return options contracts with strike prices less than this price.
  'expiration': "2019-03-01", // String | The expiration date of the option contract. This will return options contracts with expiration dates on this date.
  'expirationAfter': "2019-01-01", // String | The expiration date of the option contract. This will return options contracts with expiration dates after this date.
  'expirationBefore': "2019-12-31", // String | The expiration date of the option contract. This will return options contracts with expiration dates before this date.
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

optionsAPI.getOptions(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The option symbol, corresponding to the underlying security. | 
 **type** | **String**| The option contract type. | [optional] 
 **strike** | **Number**| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional] 
 **strikeGreaterThan** | **Number**| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional] 
 **strikeLessThan** | **Number**| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional] 
 **expiration** | **String**| The expiration date of the option contract. This will return options contracts with expiration dates on this date. | [optional] 
 **expirationAfter** | **String**| The expiration date of the option contract. This will return options contracts with expiration dates after this date. | [optional] 
 **expirationBefore** | **String**| The expiration date of the option contract. This will return options contracts with expiration dates before this date. | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseOptions**](ApiResponseOptions.md)

<a name="getOptionsChain"></a>
# **getOptionsChain**
> ApiResponseOptionsChain getOptionsChain(symbol, expiration, opts)

Options Chain

Returns all options contracts and their prices for the given symbol and expiration date.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var optionsAPI = new intrinioSDK.OptionsApi();

var symbol = "MSFT"; // String | The option symbol, corresponding to the underlying security.

var expiration = "2019-03-06"; // String | The expiration date of the options contract

var opts = { 
  'type': "put", // String | The option contract type.
  'strike': 170.0, // Number | The strike price of the option contract. This will return options contracts with strike price equal to this price.
  'strikeGreaterThan': 190.0, // Number | The strike price of the option contract. This will return options contracts with strike prices greater than this price.
  'strikeLessThan': 150.0, // Number | The strike price of the option contract. This will return options contracts with strike prices less than this price.
  'moneyness': "in_the_money", // String | The moneyness of the options contracts to return. 'all' will return all options contracts. 'in_the_money' will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). 'out_of_they_money' will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). 'near_the_money' will return options contracts that are $0.50 or less away from being in the money.
  'pageSize': 100 // Number | The number of results to return
};

optionsAPI.getOptionsChain(symbol, expiration, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The option symbol, corresponding to the underlying security. | 
 **expiration** | **String**| The expiration date of the options contract | 
 **type** | **String**| The option contract type. | [optional] 
 **strike** | **Number**| The strike price of the option contract. This will return options contracts with strike price equal to this price. | [optional] 
 **strikeGreaterThan** | **Number**| The strike price of the option contract. This will return options contracts with strike prices greater than this price. | [optional] 
 **strikeLessThan** | **Number**| The strike price of the option contract. This will return options contracts with strike prices less than this price. | [optional] 
 **moneyness** | **String**| The moneyness of the options contracts to return. &#39;all&#39; will return all options contracts. &#39;in_the_money&#39; will return options contracts that are in the money (call options with strike prices below the current price, put options with strike prices above the current price). &#39;out_of_they_money&#39; will return options contracts that are out of the money (call options with strike prices above the current price, put options with strike prices below the current price). &#39;near_the_money&#39; will return options contracts that are $0.50 or less away from being in the money. | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]

### Return type

[**ApiResponseOptionsChain**](ApiResponseOptionsChain.md)

<a name="getOptionsExpirations"></a>
# **getOptionsExpirations**
> ApiResponseOptionsExpirations getOptionsExpirations(symbol, opts)

Options Expirations

Returns all option contract expiration dates for a given symbol.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var optionsAPI = new intrinioSDK.OptionsApi();

var symbol = "MSFT"; // String | The option symbol, corresponding to the underlying security.

var opts = { 
  'after': "2019-01-01", // String | Return option contract expiration dates after this date.
  'before': "2019-12-31" // String | Return option contract expiration dates before this date.
};

optionsAPI.getOptionsExpirations(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The option symbol, corresponding to the underlying security. | 
 **after** | **String**| Return option contract expiration dates after this date. | [optional] 
 **before** | **String**| Return option contract expiration dates before this date. | [optional] 

### Return type

[**ApiResponseOptionsExpirations**](ApiResponseOptionsExpirations.md)

<a name="getOptionsPrices"></a>
# **getOptionsPrices**
> ApiResponseOptionPrices getOptionsPrices(identifier, opts)

Option Prices

Returns all option prices for a given option contract identifier.

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var optionsAPI = new intrinioSDK.OptionsApi();

var identifier = "null"; // String | The Intrinio ID or code of the options contract to request prices for.

var opts = { 
  'startDate': "2019-01-01", // String | Return option contract prices on or after this date.
  'endDate': "2019-12-31", // String | Return option contract prices on or before this date.
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

optionsAPI.getOptionsPrices(identifier, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The Intrinio ID or code of the options contract to request prices for. | 
 **startDate** | **String**| Return option contract prices on or after this date. | [optional] 
 **endDate** | **String**| Return option contract prices on or before this date. | [optional] 
 **pageSize** | **Number**| The number of results to return | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseOptionPrices**](ApiResponseOptionPrices.md)

