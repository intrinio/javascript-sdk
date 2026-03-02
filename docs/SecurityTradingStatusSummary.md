
[//]: # (CLASS:SecurityTradingStatusSummary)

[//]: # (KIND:object)

### SecurityTradingStatusSummary

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier &nbsp;
**tradingStatus** | String | The trading status of the security. &nbsp;
**tradingStatusReason** | String | The exchange supplied reason for its current status. &nbsp;
**tradingStatusUpdatedOn** | Date | The time the exchange reported that it changed its trading status. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: TradingStatusEnum**

Name | Value
---- | -----
trading | &quot;trading&quot;
quotes_only | &quot;quotes_only&quot;
stopped | &quot;stopped&quot;



