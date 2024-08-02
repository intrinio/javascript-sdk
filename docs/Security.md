
[//]: # (CLASS:Security)

[//]: # (KIND:object)

### Security

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**id** | String | The Intrinio ID for the Security &nbsp;
**companyId** | String | The Intrinio ID for the company for which the Security is issued &nbsp;
**name** | String | The name of the Security &nbsp;
**type** | String | The Security&#39;s type &nbsp;
**code** | String | A 2-3 digit code classifying the Security (&lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/security_codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;) &nbsp;
**shareClass** | String | The Security&#39;s share class (if applicable) &nbsp;
**currency** | String | The currency in which the Security is traded on the exchange &nbsp;
**roundLotSize** | Number | The normal unit of trading &nbsp;
**ticker** | String | The common ticker &nbsp;
**exchangeTicker** | String | The exchange-level ticker &nbsp;
**compositeTicker** | String | The country-composite ticker &nbsp;
**alternateTickers** | [String] | Alternate formats of the common ticker &nbsp;
**figi** | String | The exchange-level OpenFIGI identifier &nbsp;
**cik** | String | Central Index Key issued by the SEC, which is the unique identifier for all owner filings &nbsp;
**compositeFigi** | String | The country-composite OpenFIGI identifier &nbsp;
**shareClassFigi** | String | The global-composite OpenFIGI identifier &nbsp;
**figiUniqueid** | String | The OpenFIGI unique ID &nbsp;
**active** | Boolean | If true, the Security is active and has been recently traded &nbsp;
**etf** | Boolean | If true, this Security is an ETF &nbsp;
**delisted** | Boolean | If true, the Security is no longer traded on the exchange &nbsp;
**primaryListing** | Boolean | If true, the Security is the primary issue for the company, otherwise it is a secondary issue on a secondary stock exchange &nbsp;
**primarySecurity** | Boolean | If true, the Security is considered by Intrinio to be the primary Security for its company &nbsp;
**firstStockPrice** | Date | The date of the first recorded stock price &nbsp;
**lastStockPrice** | Date | The date of the last recorded stock price (or the most recent trading day) &nbsp;
**lastStockPriceAdjustment** | Date | The date of the last stock price adjustment (dividend, split, etc) &nbsp;
**lastCorporateAction** | Date | The date of the last corporate action &nbsp;
**previousTickers** | [String] | Previous tickers used by this security &nbsp;
**listingExchangeMic** | String | The MIC code of the exchange on which this security primarily trades &nbsp;

[//]: # (END_DEFINITION)





