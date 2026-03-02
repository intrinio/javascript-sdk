
[//]: # (CLASS:ApiResponseSecurityTradingStatus)

[//]: # (KIND:object)

### ApiResponseSecurityTradingStatus

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**tradingStatus** | String | The trading status of the security. &nbsp;
**tradingStatusReason** | String | The exchange supplied reason for its current status. &nbsp;
**tradingStatusUpdatedOn** | Date | The time the exchange reported that it changed its trading status. &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier &nbsp;
**marketStatus** | String | The status of the market. &nbsp;
**messages** | [String] | A list of messages related to the request, such as warnings or errors. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: TradingStatusEnum**

Name | Value
---- | -----
trading | &quot;trading&quot;
quotes_only | &quot;quotes_only&quot;
stopped | &quot;stopped&quot;

<br/>

#### Enum: MarketStatusEnum**

Name | Value
---- | -----
open | &quot;open&quot;
closed | &quot;closed&quot;
premarket | &quot;premarket&quot;
postmarket | &quot;postmarket&quot;
closed_early | &quot;closed_early&quot;



