
[//]: # (CLASS:OptionRealtime)

[//]: # (KIND:object)

### OptionRealtime

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**code** | String | The Intrinio Code for the Option. &nbsp;
**ticker** | String | The ticker symbol of the Security for the Option. &nbsp;
**expiration** | Date | The date on which the Option expires. The Option becomes invalid after this date and cannot be exercised. &nbsp;
**strike** | Number | The strike price is the fixed price at which a derivative can be exercised, and refers to the price of the derivative’s underlying asset.  In a call option, the strike price is the price at which the option holder can purchase the underlying security.  For a put option, the strike price is the price at which the option holder can sell the underlying security. &nbsp;
**type** | String | The type of Option (put or call). &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: TypeEnum**

Name | Value
---- | -----
put | &quot;put&quot;
call | &quot;call&quot;



