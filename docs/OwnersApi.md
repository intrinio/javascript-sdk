# intrinioSDK.OwnersApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOwners**](OwnersApi.md#getAllOwners) | **GET** /owners | All Owners
[**getOwnerById**](OwnersApi.md#getOwnerById) | **GET** /owners/{identifier} | Owner by ID
[**insiderTransactionFilingsByOwner**](OwnersApi.md#insiderTransactionFilingsByOwner) | **GET** /owners/{identifier}/insider_transaction_filings | Insider Transaction Filings by Owner
[**institutionalHoldingsByOwner**](OwnersApi.md#institutionalHoldingsByOwner) | **GET** /owners/{identifier}/institutional_holdings | Institutional Holdings by Owner
[**searchOwners**](OwnersApi.md#searchOwners) | **GET** /owners/search | Search Owners



[//]: # (START_OPERATION)

[//]: # (CLASS:OwnersApi)

[//]: # (METHOD:getAllOwners)

[//]: # (RETURN_TYPE:ApiResponseOwners)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOwners.md)

[//]: # (OPERATION:getAllOwners_v2)

[//]: # (ENDPOINT:/owners)

[//]: # (DOCUMENT_LINK:OwnersApi.md#getAllOwners)

<a name="getAllOwners"></a>
## **getAllOwners**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getAllOwners_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOwners getAllOwners(opts)

#### All Owners


Returns all owners and information for all insider and institutional owners of securities covered by Intrinio.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var owners = new intrinioSDK.OwnersApi();

var opts = { 
  'institutional': null,
  'pageSize': 100,
  'nextPage': null
};

owners.getAllOwners(opts).then(function(data) {
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
 **institutional** | Boolean| Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOwners**](ApiResponseOwners.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OwnersApi)

[//]: # (METHOD:getOwnerById)

[//]: # (RETURN_TYPE:Owner)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:Owner.md)

[//]: # (OPERATION:getOwnerById_v2)

[//]: # (ENDPOINT:/owners/{identifier})

[//]: # (DOCUMENT_LINK:OwnersApi.md#getOwnerById)

<a name="getOwnerById"></a>
## **getOwnerById**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/getOwnerById_v2)

[//]: # (START_OVERVIEW)

> Owner getOwnerById(identifier)

#### Owner by ID


Returns the Owner with the given ID

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var owners = new intrinioSDK.OwnersApi();

var identifier = "0000001800";

owners.getOwnerById(identifier).then(function(data) {
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
 **identifier** | String| An Intrinio ID or CIK of an Owner |  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**Owner**](Owner.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OwnersApi)

[//]: # (METHOD:insiderTransactionFilingsByOwner)

[//]: # (RETURN_TYPE:ApiResponseOwnerInsiderTransactionFilings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOwnerInsiderTransactionFilings.md)

[//]: # (OPERATION:insiderTransactionFilingsByOwner_v2)

[//]: # (ENDPOINT:/owners/{identifier}/insider_transaction_filings)

[//]: # (DOCUMENT_LINK:OwnersApi.md#insiderTransactionFilingsByOwner)

<a name="insiderTransactionFilingsByOwner"></a>
## **insiderTransactionFilingsByOwner**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/insiderTransactionFilingsByOwner_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOwnerInsiderTransactionFilings insiderTransactionFilingsByOwner(identifier, opts)

#### Insider Transaction Filings by Owner


Returns a list of all insider transaction filings by an owner in as many companies as the owner may be considered an insider. Criteria for being an insider include being a director, officer, or 10%+ owner in the company. Transactions are detailed for both non-derivative and derivative transactions by the insider.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var owners = new intrinioSDK.OwnersApi();

var identifier = "0001494730";

var opts = { 
  'startDate': new Date("2018-01-01"),
  'endDate': new Date("2019-01-01"),
  'pageSize': 100,
  'nextPage': null
};

owners.insiderTransactionFilingsByOwner(identifier, opts).then(function(data) {
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
 **identifier** | String| The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under. |  &nbsp;
 **startDate** | Date| Return Owner&#39;s insider transaction filings on or after this date | [optional]  &nbsp;
 **endDate** | Date| Return Owner&#39;s insider transaction filings on or before this date | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOwnerInsiderTransactionFilings**](ApiResponseOwnerInsiderTransactionFilings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OwnersApi)

[//]: # (METHOD:institutionalHoldingsByOwner)

[//]: # (RETURN_TYPE:ApiResponseOwnerInstitutionalHoldings)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOwnerInstitutionalHoldings.md)

[//]: # (OPERATION:institutionalHoldingsByOwner_v2)

[//]: # (ENDPOINT:/owners/{identifier}/institutional_holdings)

[//]: # (DOCUMENT_LINK:OwnersApi.md#institutionalHoldingsByOwner)

<a name="institutionalHoldingsByOwner"></a>
## **institutionalHoldingsByOwner**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/institutionalHoldingsByOwner_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOwnerInstitutionalHoldings institutionalHoldingsByOwner(identifier, opts)

#### Institutional Holdings by Owner


Returns a list of all ownership interests and the value of their interests by a single institutional owner.

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var owners = new intrinioSDK.OwnersApi();

var identifier = "430692";

var opts = { 
  'pageSize': 100,
  'asOfDate': "2021-01-05",
  'nextPage': null
};

owners.institutionalHoldingsByOwner(identifier, opts).then(function(data) {
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
 **identifier** | String| The Central Index Key issued by the SEC, which is the unique identifier all owner filings are issued under. |  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **asOfDate** | [**Object**](.md)| Return only holdings filed before this date. | [optional]  &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOwnerInstitutionalHoldings**](ApiResponseOwnerInstitutionalHoldings.md)



[//]: # (END_OPERATION)


[//]: # (START_OPERATION)

[//]: # (CLASS:OwnersApi)

[//]: # (METHOD:searchOwners)

[//]: # (RETURN_TYPE:ApiResponseOwners)

[//]: # (RETURN_TYPE_KIND:object)

[//]: # (RETURN_TYPE_DOC:ApiResponseOwners.md)

[//]: # (OPERATION:searchOwners_v2)

[//]: # (ENDPOINT:/owners/search)

[//]: # (DOCUMENT_LINK:OwnersApi.md#searchOwners)

<a name="searchOwners"></a>
## **searchOwners**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/javascript/searchOwners_v2)

[//]: # (START_OVERVIEW)

> ApiResponseOwners searchOwners(query, opts)

#### Search Owners


Searches for Owners matching the text &#x60;query&#x60;

[//]: # (END_OVERVIEW)

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR_API_KEY";
intrinioSDK.ApiClient.instance.enableRetries = true;

var owners = new intrinioSDK.OwnersApi();

var query = "Cook";

var opts = { 
  'institutional': null,
  'pageSize': 100,
  'nextPage': null
};

owners.searchOwners(query, opts).then(function(data) {
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
 **institutional** | Boolean| Returns insider owners who have filed forms 3, 4, or 5 with the SEC only. Possible values are true, false, or omit for both. | [optional]  &nbsp;
 **pageSize** | Number| The number of results to return | [optional] [default to 100] &nbsp;
 **nextPage** | String| Gets the next page of data from a previous API call | [optional]  &nbsp;
<br/>

[//]: # (END_PARAMETERS)

### Return type

[**ApiResponseOwners**](ApiResponseOwners.md)



[//]: # (END_OPERATION)

