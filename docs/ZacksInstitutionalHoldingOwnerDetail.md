
[//]: # (CLASS:ZacksInstitutionalHoldingOwnerDetail)

[//]: # (KIND:object)

### ZacksInstitutionalHoldingOwnerDetail

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**name** | String | The owner&#39;s name &nbsp;
**cik** | String | The Central Index Key (CIK) assigned to the company by the SEC as a unique identifier, used in SEC filings &nbsp;
**address** | String | The owner&#39;s address &nbsp;
**cityState** | String | The owner&#39;s city and state (City, ST) &nbsp;
**locationCode** | String | The owner&#39;s location code. (&#39;D&#39; &#x3D; Domestic, &#39;C&#39; &#x3D; Canadian, &#39;F&#39; &#x3D; Foreign) &nbsp;
**phoneNumber** | String | The owner&#39;s phone number &nbsp;
**postalCode** | String | The owner&#39;s postal code &nbsp;
**url** | String | The owner&#39;s website url &nbsp;
**investmentStyle** | String | The owner&#39;s investment style (&#39;I&#39; &#x3D; Income, &#39;V&#39; &#x3D; Value, &#39;G&#39; &#x3D; Growth, &#39;B&#39; &#x3D;  Growth at a Reasonable Price, &#39;A&#39; &#x3D; Aggressive Growth, &#39;P&#39; &#x3D; Passive/Index, &#39;D&#39; &#x3D; Deep Value) &nbsp;
**numberOfHoldings** | Number | Count of equity holdings only, doesn&#39;t include bonds or other funds held &nbsp;
**totalHoldingsValue** | Number | Market value of equity holdings in 1,000s. Sum of shares held times last close price. &nbsp;
**portfolioTurnoverPercent** | Number | Annual portfolio turnover in terms of percentage of total value. &nbsp;
**isFund** | String | If &#39;Y&#39;, the owner is a fund? (&#39;Y&#39; &#x3D; Yes, &#39;N&#39; &#x3D; No) &nbsp;
**fundTicker** | String | Fund ticker if the institution is a fund &nbsp;
**hasFundManager** | String | Does the fund have a manager. (&#39;Y&#39; &#x3D; Yes, &#39;N&#39; &#x3D; No) &nbsp;
**fundManagerCity** | String | The fund manager&#39;s city &nbsp;
**fundManagerName** | String | The fund manager&#39;s name &nbsp;
**fundManagerState** | String | The fund manager&#39;s state &nbsp;
**files13f** | String | If &#39;Y&#39;, the company files the SEC 13F report. (&#39;Y&#39; &#x3D; Yes, &#39;N&#39; &#x3D; No) &nbsp;
**isEtf** | String | If &#39;Y&#39;, the owner is an ETF. (&#39;Y&#39; &#x3D; Yes, &#39;N&#39; &#x3D; No) &nbsp;
**lastUpdatedOn** | Date | The the last updated date &nbsp;

[//]: # (END_DEFINITION)





