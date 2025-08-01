
[//]: # (CLASS:SecurityTradesResult)

[//]: # (KIND:object)

### SecurityTradesResult

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**nextPage** | String | The token required to request the next page of the data. If null, no further results are available. &nbsp;
**source** | String | The source of the trades. &nbsp;
**trades** | [**[SecurityTrades]**](SecurityTrades.md) | Array of all the trades in this page of the result. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecurityTrades)



<br/>

#### Enum: SourceEnum**

Name | Value
---- | -----
iex | &quot;iex&quot;
delayed_sip | &quot;delayed_sip&quot;
utp_delayed | &quot;utp_delayed&quot;
cta_a_delayed | &quot;cta_a_delayed&quot;
cta_b_delayed | &quot;cta_b_delayed&quot;
otc_delayed | &quot;otc_delayed&quot;
nasdaq_basic | &quot;nasdaq_basic&quot;
cboe_one_delayed | &quot;cboe_one_delayed&quot;
iex_delayed | &quot;iex_delayed&quot;



