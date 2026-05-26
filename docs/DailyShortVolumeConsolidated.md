
[//]: # (CLASS:DailyShortVolumeConsolidated)

[//]: # (KIND:object)

### DailyShortVolumeConsolidated

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**securityId** | String | The unique identifier of the security. &nbsp;
**symbol** | String | The ticker symbol of the security. &nbsp;
**tradeDate** | Date | The date of the reported short volume data in YYYY-MM-DD format. &nbsp;
**totalVolume** | Number | The aggregated total volume of shares traded across all FINRA reporting facilities combined. Represents the total off-exchange trading volume for the security on this date. &nbsp;
**shortVolume** | Number | The aggregated volume of shares sold short across all FINRA reporting facilities combined. Represents the total off-exchange short selling volume for the security on this date. &nbsp;
**shortExemptVolume** | Number | The aggregated volume of shares sold short with exemptions across all FINRA reporting facilities combined. Includes pre-borrow arrangements, market maker activities, and other regulated short sale exemptions. &nbsp;
**shortVolumeRatio** | Number | The ratio of aggregated short volume to aggregated total volume across all facilities, rounded to 4 decimal places. Ranges from 0.0 to 1.0.  This market-wide metric is useful for: - Comparing short selling intensity between securities - Identifying unusual short volume spikes - Tracking trends in bearish positioning - Assessing relative market sentiment toward a security  &nbsp;
**sources** | [String] | The list of FINRA reporting facility codes that contributed data to this consolidated aggregate. Multiple facilities typically report on the same security daily, and their volumes are summed here. &nbsp;

[//]: # (END_DEFINITION)





