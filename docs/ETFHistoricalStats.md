
[//]: # (CLASS:ETFHistoricalStats)

[//]: # (KIND:object)

### ETFHistoricalStats

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**messages** | [String] | A list of messages related to the request, such as warnings or errors. &nbsp;
**etf** | [**ETFSummary**](ETFSummary.md) | A brief summary of the ETF it which these stats refer.  Not included when returning historical stats. &nbsp;
**stats** | [**[ETFStats]**](ETFStats.md) | The historical stats for the ETF &nbsp;
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:ETFSummary)


[//]: # (CONTAINED_CLASS:ETFStats)





