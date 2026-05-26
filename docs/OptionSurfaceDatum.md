
[//]: # (CLASS:OptionSurfaceDatum)

[//]: # (KIND:object)

### OptionSurfaceDatum

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**strikePrice** | Number | The actual strike price.  Present when the requesting surface type is raw. &nbsp;
**unixTimestamp** | Number | The expiration DateTime.  Present when the requesting surface type is raw. &nbsp;
**forwardNaturalLogMoneyness** | Number | The natural logarithm of forward moneyness, calculated as ln(F / K), where F is the forward underlying price adjusted for risk-free rate and dividend yield over time to expiration, and K is the option strike. Present when the requesting surface type is something other than raw. &nbsp;
**squareRootTau** | Number | The square root of tau, where tau is the option’s time to expiration in years using a 365.25-day year basis. Present when the requesting surface type is something other than raw. &nbsp;
**impliedVolatility** | Number | The implied volatility of the contract calculated using the Black-Scholes Model, and smoothed if the requesting surface type was logarithmic_smoothed. Always present. &nbsp;

[//]: # (END_DEFINITION)





