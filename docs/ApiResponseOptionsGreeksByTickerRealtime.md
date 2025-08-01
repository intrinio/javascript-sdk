
[//]: # (CLASS:ApiResponseOptionsGreeksByTickerRealtime)

[//]: # (KIND:object)

### ApiResponseOptionsGreeksByTickerRealtime

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security resolved from the given identifier &nbsp;
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;
**messages** | [String] | Any messages or warnings about the data &nbsp;
**contracts** | [**[ApiResponseOptionsGreekContractRealtime]**](ApiResponseOptionsGreekContractRealtime.md) | The options greeks data for this security &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecuritySummary)


[//]: # (CONTAINED_CLASS:ApiResponseOptionsGreekContractRealtime)





