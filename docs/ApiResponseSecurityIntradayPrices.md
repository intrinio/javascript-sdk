
[//]: # (CLASS:ApiResponseSecurityIntradayPrices)

[//]: # (KIND:object)

### ApiResponseSecurityIntradayPrices

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**intradayPrices** | [**[IntradayStockPrice]**](IntradayStockPrice.md) | The intraday stock prices for the Security &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier &nbsp;
**source** | String | The source of the data &nbsp;
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:IntradayStockPrice)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: SourceEnum**

Name | Value
---- | -----
iex | &quot;iex&quot;
bats | &quot;bats&quot;



