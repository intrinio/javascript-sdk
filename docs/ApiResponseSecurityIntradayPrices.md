### ApiResponseSecurityIntradayPrices

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intradayPrices** | [**[IntradayStockPrice]**](IntradayStockPrice.md) | The intraday stock prices for the Security | [optional] 
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier | [optional] 
**source** | **String** | The source of the data | [optional] 
**nextPage** | **String** | The token required to request the next page of the data | [optional] 


<br/>

#### Enum: SourceEnum**

Name | Value
---- | -----
iex | &quot;iex&quot;
bats | &quot;bats&quot;



