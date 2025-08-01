
[//]: # (CLASS:DividendRecord)

[//]: # (KIND:object)

### DividendRecord

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**exDividend** | Number | Amount of dividend in US dollars &nbsp;
**currency** | String | The 3-digit currency code the dividend amount was reported in &nbsp;
**announcementDate** | Date | Date dividend was announced &nbsp;
**recordDate** | Date | Date before which holders-of-record will receive the dividend &nbsp;
**payDate** | Date | Date the divdiend was paid &nbsp;
**frequency** | String | Identifies payment frequency of announced dividend &nbsp;
**status** | String | Status of the dividend &nbsp;
**forwardYield** | Number | The forward dividend yield &nbsp;
**forwardRate** | Number | The forward dividend rate &nbsp;
**lastExDividendDate** | Date | The last reported day the stock starts trading without the value of its next dividend payment &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) |  &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: StatusEnum**

Name | Value
---- | -----
P | &quot;P&quot;
X | &quot;X&quot;
S | &quot;S&quot;
R | &quot;R&quot;



