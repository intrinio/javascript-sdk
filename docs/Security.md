# intrinioSDK.Security

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Intrinio ID for the Security | [optional] 
**companyId** | **String** | The Intrinio ID for the company for which the Security is issued | [optional] 
**name** | **String** | The name of the Security | [optional] 
**type** | **String** | The Security&#39;s type | [optional] 
**code** | **String** | A 2-3 digit code classifying the Security | [optional] 
**shareClass** | **String** | The Security&#39;s share class (if applicable) | [optional] 
**currency** | **String** | The currency in which the Security is traded on the exchange | [optional] 
**roundLotSize** | **Number** | The normal unit of trading | [optional] 
**ticker** | **String** | The common ticker | [optional] 
**exchangeTicker** | **String** | The exchange-level ticker | [optional] 
**compositeTicker** | **String** | The country-composite ticker | [optional] 
**alternateTickers** | **[String]** | Alternate formats of the common ticker | [optional] 
**figi** | **String** | The exchange-level OpenFIGI identifier | [optional] 
**cik** | **String** | Central Index Key issued by the SEC, which is the unique identifier for all owner filings | [optional] 
**compositeFigi** | **String** | The country-composite OpenFIGI identifier | [optional] 
**shareClassFigi** | **String** | The global-composite OpenFIGI identifier | [optional] 
**figiUniqueid** | **String** | The OpenFIGI unique ID | [optional] 
**active** | **Boolean** | If true, the Security is active and has been recently traded | [optional] 
**etf** | **Boolean** | If true, this Security is an ETF | [optional] 
**delisted** | **Boolean** | If true, the Security is no longer traded on the exchange | [optional] 
**primaryListing** | **Boolean** | If true, the Security is the primary issue for the company, otherwise it is a secondary issue on a secondary stock exchange | [optional] 
**primarySecurity** | **Boolean** | If true, the Security is considered by Intrinio to be the primary Security for its company | [optional] 
**firstStockPrice** | **Date** | The date of the first recorded stock price | [optional] 
**lastStockPrice** | **Date** | The date of the last recorded stock price (or the most recent trading day) | [optional] 
**lastStockPriceAdjustment** | **Date** | The date of the last stock price adjustment (dividend, split, etc) | [optional] 
**lastCorporateAction** | **Date** | The date of the last corporate action | [optional] 
**previousTickers** | **[String]** | Previous tickers used by this security | [optional] 


