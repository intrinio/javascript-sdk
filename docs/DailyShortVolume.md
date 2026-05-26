
[//]: # (CLASS:DailyShortVolume)

[//]: # (KIND:object)

### DailyShortVolume

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**securityId** | String | The unique identifier of the security. &nbsp;
**symbol** | String | The ticker symbol of the security. &nbsp;
**tradeDate** | Date | The date of the reported short volume data in YYYY-MM-DD format. &nbsp;
**reportingFacilityCode** | String | The FINRA-assigned facility code identifying which market center or reporting facility reported this short volume. Different facilities may report different short volumes for the same security on the same date. &nbsp;
**totalVolume** | Number | The total volume of shares traded at this facility. This includes both long and short sales. &nbsp;
**shortVolume** | Number | The volume of shares sold short at this facility. Short sales represent bearish positions or hedging activity. &nbsp;
**shortExemptVolume** | Number | The volume of shares sold short with exemptions (e.g., pre-borrow arrangements, market maker activities). These shorts are legally exempt from certain short sale restrictions. &nbsp;
**shortVolumeRatio** | Number | The ratio of short volume to total volume at this facility, rounded to 4 decimal places. Ranges from 0.0 to 1.0. A higher ratio indicates more short selling activity relative to overall trading volume. &nbsp;

[//]: # (END_DEFINITION)





