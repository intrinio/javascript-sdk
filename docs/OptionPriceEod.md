
[//]: # (CLASS:OptionPriceEod)

[//]: # (KIND:object)

### OptionPriceEod

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**date** | String | The date of the price, in the format YYYY-MM-DD &nbsp;
**close** | Number | The closing price of the options contract. &nbsp;
**closeBid** | Number | The closing bid price of the options contract. &nbsp;
**closeAsk** | Number | The closing ask price of the options contract. &nbsp;
**volume** | Number | The cumulative volume of this options contract that traded that day. &nbsp;
**open** | Number | The price at the beginning of the period &nbsp;
**openAsk** | Number | The ask at the beginning of the period &nbsp;
**openBid** | Number | The bid at the beginning of the period &nbsp;
**openInterest** | Number | The total number of this options contract that are still open. &nbsp;
**high** | Number | The highest price over the span of the period &nbsp;
**low** | Number | The highest price over the span of the period &nbsp;
**mark** | Number | The mid price between the latest bid and ask spread &nbsp;
**askHigh** | Number | The highest ask over the span of the period &nbsp;
**askLow** | Number | The lowest ask over the span of the period &nbsp;
**bidHigh** | Number | The highest bid over the span of the period &nbsp;
**bidLow** | Object | The lowest bid over the span of the period &nbsp;
**impliedVolatility** | Number | The implied volatility of the contract calculated using the Black-Scholes Model. &nbsp;
**delta** | Number | Delta represents the rate of change between the option&#39;s price and a $1 change in the underlying asset&#39;s price. &nbsp;
**gamma** | Number | Gamma represents the rate of change between an option&#39;s delta and the underlying asset&#39;s price. &nbsp;
**theta** | Number | Theta represents the rate of change between the option price and time, or time sensitivity - sometimes known as an option&#39;s time decay. &nbsp;
**vega** | Number | Vega represents the rate of change between an option&#39;s value and the underlying asset&#39;s implied volatility. &nbsp;

[//]: # (END_DEFINITION)





