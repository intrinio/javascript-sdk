
[//]: # (CLASS:OptionUnusualTrade)

[//]: # (KIND:object)

### OptionUnusualTrade

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**symbol** | String | The underlying option security symbol for the trade &nbsp;
**timestamp** | Date | The UTC timestamp of order placement &nbsp;
**type** | String | The type of unusual trade &nbsp;
**totalValue** | Number | The aggregated value of all option contract premiums included in the trade &nbsp;
**totalSize** | Number | The total number of contracts involved in a single transaction &nbsp;
**averagePrice** | Number | The average premium paid per option contract &nbsp;
**contract** | String | The option contract symbol &nbsp;
**askAtExecution** | Number | Ask price at execution &nbsp;
**bidAtExecution** | Number | Bid price at execution &nbsp;
**sentiment** | String | Bullish, Bearish, or Neutral Sentiment is estimated based on whether the trade was executed at the bid, ask, or mark price. &nbsp;
**underlyingPriceAtExecution** | Number | Price of the underlying security at execution of trade &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: SentimentEnum**

Name | Value
---- | -----
bullish | &quot;bullish&quot;
bearish | &quot;bearish&quot;
neutral | &quot;neutral&quot;



