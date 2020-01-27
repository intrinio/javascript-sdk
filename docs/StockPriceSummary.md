
[//]: # (CLASS:StockPriceSummary)

[//]: # (KIND:object)

### StockPriceSummary

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**date** | Date | The calendar date that the stock price represents. For non-daily stock prices, this represents the last day in the period (end of the week, month, quarter, year, etc) &nbsp;
**intraperiod** | Boolean | If true, the stock price represents an unfinished period (be it day, week, quarter, month, or year), meaning that the close price is the latest price available, not the official close price for the period &nbsp;
**frequency** | String | The type of period that the stock price represents &nbsp;
**open** | Number | The price at the beginning of the period &nbsp;
**high** | Number | The highest price over the span of the period &nbsp;
**low** | Number | The lowest price over the span of the period &nbsp;
**close** | Number | The price at the end of the period &nbsp;
**volume** | Number | The number of shares exchanged during the period &nbsp;
**adjOpen** | Number | The price at the beginning of the period, adjusted for splits and dividends &nbsp;
**adjHigh** | Number | The highest price over the span of the period, adjusted for splits and dividends &nbsp;
**adjLow** | Number | The lowest price over the span of the period, adjusted for splits and dividends &nbsp;
**adjClose** | Number | The price at the end of the period, adjusted for splits and dividends &nbsp;
**adjVolume** | Number | The number of shares exchanged during the period, adjusted for splits and dividends &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: FrequencyEnum**

Name | Value
---- | -----
daily | &quot;daily&quot;
weekly | &quot;weekly&quot;
monthly | &quot;monthly&quot;
quarterly | &quot;quarterly&quot;
yearly | &quot;yearly&quot;



