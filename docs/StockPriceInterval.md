
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
**bidHigh** | Number | The highest bid price from the interval. &nbsp;
**bidLow** | Number | The lowest bid price from the interval. &nbsp;
**bidClose** | Number | The last bid price from the interval. &nbsp;
**bidOpen** | Number | The first bid price from the interval. &nbsp;
**bidFirstTime** | Date | The timestamp that represents the first bid time from the interval span. &nbsp;
**bidLastTime** | Date | The timestamp that represents the last bid time from the interval span. &nbsp;
**bidChangePercent** | Number | The ratio of the close to open bid difference, in percent. &nbsp;
**askHigh** | Number | The highest ask price from the interval. &nbsp;
**askLow** | Number | The lowest ask price from the interval. &nbsp;
**askClose** | Number | The last ask price from the interval. &nbsp;
**askOpen** | Number | The first ask price from the interval. &nbsp;
**askFirstTime** | Date | The timestamp that represents the first ask time from the interval span. &nbsp;
**askLastTime** | Date | The timestamp that represents the last ask time from the interval span. &nbsp;
**askChangePercent** | Number | The ratio of the close to open ask difference, in percent. &nbsp;

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



