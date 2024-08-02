
[//]: # (CLASS:OptionPriceRealtime)

[//]: # (KIND:object)

### OptionPriceRealtime

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**last** | Number | The price of the last trade &nbsp;
**lastSize** | Number | The size of the last trade &nbsp;
**lastTimestamp** | Date | The time of the last trade &nbsp;
**volume** | Number | The cumulative volume of this options contract that traded that day. &nbsp;
**ask** | Number | The price of the top ask order &nbsp;
**askSize** | Number | The size of the top ask order &nbsp;
**askTimestamp** | Date | The timestamp of the top ask order &nbsp;
**bid** | Number | The price of the top bid order &nbsp;
**bidSize** | Number | The size of the top bid order &nbsp;
**bidTimestamp** | Date | The time of the top bid order &nbsp;
**openInterest** | Number | The total number of this options contract that are still open. &nbsp;
**exerciseStyle** | String | The exercise style of the option.  (\&quot;A\&quot; &#x3D; \&quot;American\&quot;, \&quot;E\&quot; &#x3D; \&quot;European\&quot;) &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: ExerciseStyleEnum**

Name | Value
---- | -----
A | &quot;A&quot;
E | &quot;E&quot;



