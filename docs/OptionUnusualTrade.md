
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
**contractType** | String | The type of Option (put or call) &nbsp;
**contractExpiration** | Date | The expiration date for the options contract &nbsp;
**contractStrike** | Number | The strike price of the option contract &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: ContractTypeEnum**

Name | Value
---- | -----
put | &quot;put&quot;
call | &quot;call&quot;



