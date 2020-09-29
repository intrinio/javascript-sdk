# intrinioSDK.MunicipalityApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMunicipalities**](MunicipalityApi.md#getAllMunicipalities) | **GET** /municipalities | All Municipalities
[**getMunicipalityById**](MunicipalityApi.md#getMunicipalityById) | **GET** /municipalities/{id} | Municipality by ID
[**getMunicipalityFinancials**](MunicipalityApi.md#getMunicipalityFinancials) | **GET** /municipalities/{id}/financials | Financials for a Municipality



[//]: # (START_OPERATION)

[//]: # (CLASS:MunicipalityApi)

[//]: # (METHOD:getAllMunicipalities)

[//]: # (RETURN_TYPE:ApiResponseMunicipalities)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseMunicipalities.md)

[//]: # (OPERATION:getAllMunicipalities_v2)

[//]: # (ENDPOINT:/municipalities)

[//]: # (DOCUMENT_LINK:MunicipalityApi.md#getAllMunicipalities)

<a name="getAllMunicipalities"></a>
## **getAllMunicipalities**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllMunicipalities_v2)

[//]: # (START_OVERVIEW)

> ApiResponseMunicipalities getAllMunicipalities(opts)

#### All Municipalities


Returns all Municipalities. When parameters are specified, returns matching municipalities.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var municipality = new intrinioSDK.MunicipalityApi();

var opts = { 
  'hasFinancials': null,
  'governmentName': null,
  'governmentType': null,
  'areaName': null,
  'areaType': null,
  'city': null,
  'state': null,
  'zipcode': null,
  'populationGreaterThan': null,
  'populationLessThan': null,
  'enrollmentGreaterThan': null,
  'enrollmentLessThan': null,
  'nextPage': null
};

municipality.getAllMunicipalities(opts).then(function(data) {
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
 **hasFinancials** | Boolean| Return municipalities with financials | [optional]  &nbsp;
 **governmentName** | String| Return municipalities with a government name matching the given query | [optional]  &nbsp;
 **governmentType** | String| Return municipalities with the given government type | [optional]  &nbsp;
 **areaName** | String| Return municipalities with an area name matching the given query | [optional]  &nbsp;
 **areaType** | String| Return municipalities with the given area type | [optional]  &nbsp;
 **city** | String| Return municipalities in the given city | [optional]  &nbsp;
 **state** | String| Return municipalities in the given state | [optional]  &nbsp;
 **zipcode** | Number| Return municipalities in the given zipcode | [optional]  &nbsp;
 **populationGreaterThan** | Number| Return municipalities with a population greater than the given number | [optional]  &nbsp;
 **populationLessThan** | Number| Return municipalities with a population less than the given number | [optional]  &nbsp;
 **enrollmentGreaterThan** | Number| Return municipalities with an enrollment greater than the given number | [optional]  &nbsp;
 **enrollmentLessThan** | Number| Return municipalities with an enrollment less than the given number | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseMunicipalities**](ApiResponseMunicipalities.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:MunicipalityApi)

[//]: # (METHOD:getMunicipalityById)

[//]: # (RETURN_TYPE:Municipality)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Municipality.md)

[//]: # (OPERATION:getMunicipalityById_v2)

[//]: # (ENDPOINT:/municipalities/{id})

[//]: # (DOCUMENT_LINK:MunicipalityApi.md#getMunicipalityById)

<a name="getMunicipalityById"></a>
## **getMunicipalityById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getMunicipalityById_v2)

[//]: # (START_OVERVIEW)

> Municipality getMunicipalityById(id)

#### Municipality by ID


Returns the Municipality with the given ID

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var municipality = new intrinioSDK.MunicipalityApi();

var id = "mun_Xn7x4z";

municipality.getMunicipalityById(id).then(function(data) {
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
 **id** | String| An Intrinio ID of a Municipality |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Municipality**](Municipality.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:MunicipalityApi)

[//]: # (METHOD:getMunicipalityFinancials)

[//]: # (RETURN_TYPE:ApiResponseMunicipalitiyFinancials)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseMunicipalitiyFinancials.md)

[//]: # (OPERATION:getMunicipalityFinancials_v2)

[//]: # (ENDPOINT:/municipalities/{id}/financials)

[//]: # (DOCUMENT_LINK:MunicipalityApi.md#getMunicipalityFinancials)

<a name="getMunicipalityFinancials"></a>
## **getMunicipalityFinancials**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getMunicipalityFinancials_v2)

[//]: # (START_OVERVIEW)

> ApiResponseMunicipalitiyFinancials getMunicipalityFinancials(id, opts)

#### Financials for a Municipality


Returns financial statement data for the Municipality with the given ID

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var municipality = new intrinioSDK.MunicipalityApi();

var id = "mun_Xn7x4z";

var opts = { 
  'fiscalYear': 2017
};

municipality.getMunicipalityFinancials(id, opts).then(function(data) {
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
 **id** | String| An Intrinio ID of a Municipality |  &nbsp;
 **fiscalYear** | Number| Return financials for the given fiscal year | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseMunicipalitiyFinancials**](ApiResponseMunicipalitiyFinancials.md)



[//]: # (END_OPERATION)

