
[//]: # (CLASS:ShortInterestWithSecurity)

[//]: # (KIND:object)

### ShortInterestWithSecurity

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**settlementDate** | Date | The settlement date of the short interest record &nbsp;
**currentShortPosition** | Number | The current short position (shares) as of the settlement date &nbsp;
**previousShortPosition** | Number | The previous short position (shares) from the prior reporting period &nbsp;
**changePercent** | Number | The percentage change in short position from the previous reporting period &nbsp;
**daysToCover** | Number | The estimated number of days to cover the short position based on average daily volume &nbsp;
**averageDailyVolume** | Number | The average daily trading volume used to calculate days to cover &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) | The security associated with this short interest record &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:SecuritySummary)





