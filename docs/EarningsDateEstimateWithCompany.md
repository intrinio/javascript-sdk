
[//]: # (CLASS:EarningsDateEstimateWithCompany)

[//]: # (KIND:object)

### EarningsDateEstimateWithCompany

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**companyId** | String | The Intrinio ID for the company &nbsp;
**ticker** | String | The ticker symbol of the company &nbsp;
**fiscalYear** | Number | The fiscal year for the earnings report &nbsp;
**fiscalPeriod** | String | The fiscal period for the earnings report (Q1, Q2, Q3, Q4, or FY) &nbsp;
**expectedDate** | Date | The expected date of the earnings announcement &nbsp;
**expected8kAt** | Date | The expected timestamp when the 8-K filing will be available &nbsp;
**historicallyEarliest** | String | The earliest date (MM-DD format) this company has historically announced earnings for this fiscal period &nbsp;
**historicallyLatest** | String | The latest date (MM-DD format) this company has historically announced earnings for this fiscal period &nbsp;
**confidenceIntervals** | [**{String: EarningsDateEstimateConfidenceIntervals}**](EarningsDateEstimateConfidenceIntervals.md) | Confidence intervals for the expected date, sorted by confidence level (descending) &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:EarningsDateEstimateConfidenceIntervals)





