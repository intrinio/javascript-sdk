
[//]: # (CLASS:ApiResponseSecurityIntervalPrices)

[//]: # (KIND:object)

### ApiResponseSecurityIntervalPrices

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**intervals** | [**[StockPriceInterval]**](StockPriceInterval.md) | Open, High, Low, Close, and Volume for a particular interval &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier &nbsp;
**source** | String | The source of the data &nbsp;
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:StockPriceInterval)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: SourceEnum**

Name | Value
---- | -----
iex | &quot;iex&quot;
bats | &quot;bats&quot;



