# intrinioSDK.DividendRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exDividend** | **Number** | Amount of dividend in US dollars | [optional] 
**currency** | **String** | The 3-digit currency code the dividend amount was reported in | [optional] 
**announcementDate** | **Date** | Date dividend was announced | [optional] 
**recordDate** | **Date** | Date before which holders-of-record will receive the dividend | [optional] 
**payDate** | **Date** | Date the divdiend was paid | [optional] 
**frequency** | **String** | Identifies payment frequency of announced dividend | [optional] 
**status** | **String** | Status of the dividend | [optional] 
**forwardYield** | **Number** | The forward dividend yield | [optional] 
**forwardRate** | **Number** | The forward dividend rate | [optional] 
**security** | [**SecuritySummary**](SecuritySummary.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `P` (value: `"P"`)

* `X` (value: `"X"`)

* `S` (value: `"S"`)

* `R` (value: `"R"`)




