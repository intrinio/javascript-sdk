# intrinioSDK.Fundamental

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Intrinio ID of the Fundamental | [optional] 
**statementCode** | **String** | The code of the financial statement that the Fundamental represents | [optional] 
**fiscalYear** | **Number** | The fiscal year | [optional] 
**fiscalPeriod** | **String** | The fiscal period | [optional] 
**type** | **String** | The type of Fundamental | [optional] 
**startDate** | **Date** | The period start date | [optional] 
**endDate** | **Date** | The period start date | [optional] 
**filingDate** | **Date** | The date and time when the Fundamental was filed with the SEC | [optional] 
**company** | [**CompanySummary**](CompanySummary.md) | The Company that the Fundamental was belongs to | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `reported` (value: `"reported"`)

* `restated` (value: `"restated"`)

* `calculated` (value: `"calculated"`)




