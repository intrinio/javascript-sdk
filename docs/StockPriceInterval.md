
[//]: # (CLASS:StockPriceInterval)

[//]: # (KIND:object)

### StockPriceInterval

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**time** | Date | The timestamp that represents the start of the interval span. &nbsp;
**open** | Number | The first traded price during the period &nbsp;
**close** | Number | The last traded price during the period &nbsp;
**high** | Number | The highest price over the span of the period &nbsp;
**low** | Number | The lowest price over the span of the period &nbsp;
**volume** | Number | The number of shares exchanged during the period &nbsp;
**closeTime** | Date | The timestamp that represents the end of the interval span. &nbsp;
**interval** | String | The size of the interval. &nbsp;
**average** | Number | The average trade price of an individual stock during the interval. &nbsp;
**change** | Number | The change ratio from open to close.  ((Close - Open)/Open). &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: IntervalEnum**

Name | Value
---- | -----
SixtyMinute | &quot;SixtyMinute&quot;
ThirtyMinute | &quot;ThirtyMinute&quot;
FifteenMinute | &quot;FifteenMinute&quot;
TenMinute | &quot;TenMinute&quot;
FiveMinute | &quot;FiveMinute&quot;
OneMinute | &quot;OneMinute&quot;



