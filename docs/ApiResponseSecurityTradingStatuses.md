
[//]: # (CLASS:ApiResponseSecurityTradingStatuses)

[//]: # (KIND:object)

### ApiResponseSecurityTradingStatuses

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**statuses** | [**[SecurityTradingStatusSummary]**](SecurityTradingStatusSummary.md) | The trading statuses of each returned security. &nbsp;
**marketStatus** | String | The status of the market. &nbsp;
**messages** | [String] | A list of messages related to the request, such as warnings or errors. &nbsp;
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecurityTradingStatusSummary)



<br/>

#### Enum: MarketStatusEnum**

Name | Value
---- | -----
open | &quot;open&quot;
closed | &quot;closed&quot;
premarket | &quot;premarket&quot;
postmarket | &quot;postmarket&quot;
closed_early | &quot;closed_early&quot;



