
[//]: # (CLASS:CompanyInitialPublicOffering)

[//]: # (KIND:object)

### CompanyInitialPublicOffering

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**id** | String | The Intrinio ID for the IPO &nbsp;
**ticker** | String | The ticker under which the Company will be traded after the IPO takes place &nbsp;
**date** | Date | The date of the IPO, when the stock first trades on a major exchange &nbsp;
**status** | String | The status of the IPO. Upcoming IPOs have not taken place yet but are expected to. Priced IPOs have taken place. Withdrawn IPOs were expected to take place, but were subsequently withdrawn and did not take place &nbsp;
**exchange** | String | The acronym of the stock exchange that the company is going to trade publicly on. Typically NYSE or NASDAQ &nbsp;
**offerAmount** | Number | The total dollar amount of shares offered in the IPO. Typically this is share price * share count &nbsp;
**sharePrice** | Number | The price per share at which the IPO was offered &nbsp;
**sharePriceLowest** | Number | The expected lowest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs) &nbsp;
**sharePriceHighest** | Number | The expected highest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs) &nbsp;
**shareCount** | Number | The number of shares offered in the IPO &nbsp;
**shareCountLowest** | Number | The expected lowest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs) &nbsp;
**shareCountHighest** | Number | The expected highest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs) &nbsp;
**announcementUrl** | String | The URL to the company&#39;s announcement of the IPO &nbsp;
**secReportUrl** | String | The IRL to the company&#39;s S-1, S-1/A, F-1, or F-1/A SEC filing, which is required to be filed before an IPO takes place. &nbsp;
**openPrice** | Number | The opening price at the beginning of the first trading day (only available for priced IPOs) &nbsp;
**closePrice** | Number | The closing price at the end of the first trading day (only available for priced IPOs) &nbsp;
**volume** | Number | The volume at the end of the first trading day (only available for priced IPOs) &nbsp;
**dayChange** | Number | The percentage change between the open price and the close price on the first trading day (only available for priced IPOs) &nbsp;
**weekChange** | Number | The percentage change between the open price on the first trading day and the close price approximately a week after the first trading day (only available for priced IPOs) &nbsp;
**monthChange** | Number | The percentage change between the open price on the first trading day and the close price approximately a month after the first trading day (only available for priced IPOs) &nbsp;
**company** | [**CompanySummary**](CompanySummary.md) | The Company that is going public via the IPO &nbsp;
**security** | [**SecuritySummary**](SecuritySummary.md) | The primary Security for the Company that is going public via the IPO &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:CompanySummary)


[//]: # (CONTAINED_CLASS:SecuritySummary)



<br/>

#### Enum: StatusEnum**

Name | Value
---- | -----
upcoming | &quot;upcoming&quot;
priced | &quot;priced&quot;
withdrawn | &quot;withdrawn&quot;



