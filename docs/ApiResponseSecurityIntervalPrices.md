
[//]: # (CLASS:ApiResponseSecurityIntervalPrices)

[//]: # (KIND:object)

### ApiResponseSecurityIntervalPrices

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**intervals** | [**[StockPriceInterval]**](StockPriceInterval.md) | Open, close, high, low, volume, average price, and change ratio for a particular interval &nbsp;
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
realtime | &quot;realtime&quot;
delayed | &quot;delayed&quot;
nasdaq_basic | &quot;nasdaq_basic&quot;
nasdaq_basic_filtered | &quot;nasdaq_basic_filtered&quot;
nasdaq_basic_last_sale | &quot;nasdaq_basic_last_sale&quot;



