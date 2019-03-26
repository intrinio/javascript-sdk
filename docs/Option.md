# intrinioSDK.Option

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Intrinio ID for the Option. | [optional] 
**code** | **String** | The Intrinio Code for the Option. | [optional] 
**ticker** | **String** | The ticker symbol of the Security for the Option. | [optional] 
**expiration** | **String** | The date on which the Option expires. The Option becomes invalid after this date and cannot be exercised. | [optional] 
**strike** | **Number** | The strike price is the fixed price at which a derivative can be exercised, and refers to the price of the derivative’s underlying asset.  In a call option, the strike price is the price at which the option holder can purchase the underlying security.  For a put option, the strike price is the price at which the option holder can sell the underlying security. | [optional] 
**type** | **String** | The type of Option (put or call). A put option is an option contract giving the owner the right, but not the obligation, to sell a specified amount of an underlying asset at a specified price before the option&#39;s expiration date. A call option gives the holder the right to buy an underlying asset at a specified price, before the option&#39;s expiration date. | [optional] 


