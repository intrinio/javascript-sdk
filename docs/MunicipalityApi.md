# intrinioSDK.MunicipalityApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMunicipalities**](MunicipalityApi.md#getAllMunicipalities) | **GET** /municipalities | All Municipalities
[**getMunicipalityById**](MunicipalityApi.md#getMunicipalityById) | **GET** /municipalities/{id} | Municipality by ID
[**getMunicipalityFinancials**](MunicipalityApi.md#getMunicipalityFinancials) | **GET** /municipalities/{id}/financials | Financials for a Municipality


<a name="getAllMunicipalities"></a>
# **getAllMunicipalities**
> ApiResponseMunicipalities getAllMunicipalities(opts)

All Municipalities

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var municipalityAPI = new intrinioSDK.MunicipalityApi();

var opts = { 
  'hasFinancials': true, // Boolean | Return municipalities with financials
  'governmentName': "governmentName_example", // String | Return municipalities with a government name matching the given query
  'governmentType': "governmentType_example", // String | Return municipalities with the given government type
  'areaName': "areaName_example", // String | Return municipalities with an area name matching the given query
  'areaType': "areaType_example", // String | Return municipalities with the given area type
  'city': "city_example", // String | Return municipalities in the given city
  'state': "state_example", // String | Return municipalities in the given state
  'zipcode': 8.14, // Number | Return municipalities in the given zipcode
  'populationGreaterThan': 8.14, // Number | Return municipalities with a population greater than the given number
  'populationLessThan': 8.14, // Number | Return municipalities with a population less than the given number
  'enrollmentGreaterThan': 8.14, // Number | Return municipalities with an enrollment greater than the given number
  'enrollmentLessThan': 8.14, // Number | Return municipalities with an enrollment less than the given number
  'nextPage': null // String | Gets the next page of data from a previous API call
};

municipalityAPI.getAllMunicipalities(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hasFinancials** | **Boolean**| Return municipalities with financials | [optional] 
 **governmentName** | **String**| Return municipalities with a government name matching the given query | [optional] 
 **governmentType** | **String**| Return municipalities with the given government type | [optional] 
 **areaName** | **String**| Return municipalities with an area name matching the given query | [optional] 
 **areaType** | **String**| Return municipalities with the given area type | [optional] 
 **city** | **String**| Return municipalities in the given city | [optional] 
 **state** | **String**| Return municipalities in the given state | [optional] 
 **zipcode** | **Number**| Return municipalities in the given zipcode | [optional] 
 **populationGreaterThan** | **Number**| Return municipalities with a population greater than the given number | [optional] 
 **populationLessThan** | **Number**| Return municipalities with a population less than the given number | [optional] 
 **enrollmentGreaterThan** | **Number**| Return municipalities with an enrollment greater than the given number | [optional] 
 **enrollmentLessThan** | **Number**| Return municipalities with an enrollment less than the given number | [optional] 
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseMunicipalities**](ApiResponseMunicipalities.md)

<a name="getMunicipalityById"></a>
# **getMunicipalityById**
> Municipality getMunicipalityById(id)

Municipality by ID

Returns the Municipality with the given ID

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var municipalityAPI = new intrinioSDK.MunicipalityApi();

var id = "mun_Xn7x4z"; // String | An Intrinio ID of a Municipality


municipalityAPI.getMunicipalityById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| An Intrinio ID of a Municipality | 

### Return type

[**Municipality**](Municipality.md)

<a name="getMunicipalityFinancials"></a>
# **getMunicipalityFinancials**
> ApiResponseMunicipalitiyFinancials getMunicipalityFinancials(id, opts)

Financials for a Municipality

Returns financial statement data for the Municipality with the given ID

### Example
```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var municipalityAPI = new intrinioSDK.MunicipalityApi();

var id = "mun_Xn7x4z"; // String | An Intrinio ID of a Municipality

var opts = { 
  'fiscalYear': 8.14 // Number | Return financials for the given fiscal year
};

municipalityAPI.getMunicipalityFinancials(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| An Intrinio ID of a Municipality | 
 **fiscalYear** | **Number**| Return financials for the given fiscal year | [optional] 

### Return type

[**ApiResponseMunicipalitiyFinancials**](ApiResponseMunicipalitiyFinancials.md)

