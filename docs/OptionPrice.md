# intrinioSDK.OptionPrice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **String** | The date of the price, in the format YYYY-MM-DD | [optional] 
**close** | **Number** | The closing price of the options contract. | [optional] 
**closeBid** | **Number** | The closing bid price of the options contract. | [optional] 
**closeAsk** | **Number** | The closing ask price of the options contract. | [optional] 
**volume** | **Number** | The cumulative volume of this options contract that traded that day. | [optional] 
**volumeBid** | **Number** | The cumulative volume of this options contract that traded on the bid price that day. | [optional] 
**volumeAsk** | **Number** | The cumulative volume of this options contract that traded on the ask price that day. | [optional] 
**trades** | **Number** | The number of trades executed that for this options contract on that day. | [optional] 
**openInterest** | **Number** | The total number of this options contract that are still open. | [optional] 
**openInterestChange** | **Number** | The change in the total number of this options contract that are still open from the previous day. | [optional] 
**nextDayOpenInterest** | **Number** | The total number of this options contract that are still open at the start of the next day. | [optional] 
**impliedVolatility** | **Number** | The estimated volatility of the Security&#39;s price. Volatility is a statistical measure of dispersion of returns for the Security. Standard deviation of a Security&#39;s returns and a market index is an example of a measurement of volatility. Implied volatility approximates the future value of an option, and the option&#39;s current value takes this into consideration. | [optional] 
**impliedVolatilityChange** | **Number** | The change in implied volatility for that day. | [optional] 
**delta** | **Number** | Delta measures the degree to which an options contract is exposed to shifts in the price of the underlying Security. Values of delta range from 0.0 to 1.0 for call options and -1.0 to 0.0 for put options. For example, if a put option has a delta of -0.50, if the price of the underlying Security increases by $1, the price of the put option will decrease by $0.50. | [optional] 


