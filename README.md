# Intrinio JavaScript SDK

To get an API key, [sign up here](https://intrinio.com/).

Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.

- API version: 2.2.0
- Package version: 2.1.0


## Installation

```shell
npm install intrinio-sdk --save
```

## Installation from Github

```shell
npm install intrinio/javascript-sdk --save
```

## Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module", most certainly you should disable AMD loader. Add/merge the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## SDK Code Examples

Code examples for Intrinio SDKs are available at https://github.com/intrinio/sdk-code-samples

## Getting Started

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var intrinioSDK = require('intrinio-sdk');
const util = require('util')
 
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";
 
var companyAPI = new intrinioSDK.CompanyApi()
 
companyAPI.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.intrinio.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intrinioSDK.CompanyApi* | [**getAllCompanies**](docs/CompanyApi.md#getAllCompanies) | **GET** /companies | All Companies
*intrinioSDK.CompanyApi* | [**getAllCompanyNews**](docs/CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | All News
*intrinioSDK.CompanyApi* | [**getCompany**](docs/CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Lookup Company
*intrinioSDK.CompanyApi* | [**getCompanyDataPointNumber**](docs/CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Data Point (Number) for Company
*intrinioSDK.CompanyApi* | [**getCompanyDataPointText**](docs/CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Data Point (Text) for Company
*intrinioSDK.CompanyApi* | [**getCompanyFilings**](docs/CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | All Filings by Company
*intrinioSDK.CompanyApi* | [**getCompanyFundamentals**](docs/CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | All Fundamentals by Company
*intrinioSDK.CompanyApi* | [**getCompanyHistoricalData**](docs/CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Historical Data for Company
*intrinioSDK.CompanyApi* | [**getCompanyNews**](docs/CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | All News by Company
*intrinioSDK.CompanyApi* | [**getCompanySecurities**](docs/CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | All Securities by Company
*intrinioSDK.CompanyApi* | [**lookupCompanyFundamental**](docs/CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental by Company
*intrinioSDK.CompanyApi* | [**searchCompanies**](docs/CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
*intrinioSDK.DataPointApi* | [**getDataPointNumber**](docs/DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Data Point (Number)
*intrinioSDK.DataPointApi* | [**getDataPointText**](docs/DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Data Point (Text)
*intrinioSDK.DataTagApi* | [**getAllDataTags**](docs/DataTagApi.md#getAllDataTags) | **GET** /data_tags | All Data Tags
*intrinioSDK.DataTagApi* | [**getDataTagById**](docs/DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Lookup Data Tag
*intrinioSDK.DataTagApi* | [**searchDataTags**](docs/DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags
*intrinioSDK.FilingApi* | [**getAllFilings**](docs/FilingApi.md#getAllFilings) | **GET** /filings | All Filings
*intrinioSDK.FilingApi* | [**getAllNotes**](docs/FilingApi.md#getAllNotes) | **GET** /filings/notes | All Filing Notes
*intrinioSDK.FilingApi* | [**getFilingById**](docs/FilingApi.md#getFilingById) | **GET** /filings/{id} | Lookup Filing
*intrinioSDK.FilingApi* | [**getNote**](docs/FilingApi.md#getNote) | **GET** /filings/notes/{identifier} | Filing Note by ID
*intrinioSDK.FilingApi* | [**getNoteHtml**](docs/FilingApi.md#getNoteHtml) | **GET** /filings/notes/{identifier}/html | Filing Note HTML
*intrinioSDK.FilingApi* | [**getNoteText**](docs/FilingApi.md#getNoteText) | **GET** /filings/notes/{identifier}/text | Filing Note Text
*intrinioSDK.FilingApi* | [**searchNotes**](docs/FilingApi.md#searchNotes) | **GET** /filings/notes/search | Search Filing Notes
*intrinioSDK.ForexApi* | [**getForexCurrencies**](docs/ForexApi.md#getForexCurrencies) | **GET** /forex/currencies | Forex Currencies
*intrinioSDK.ForexApi* | [**getForexPairs**](docs/ForexApi.md#getForexPairs) | **GET** /forex/pairs | Forex Currency Pairs
*intrinioSDK.ForexApi* | [**getForexPrices**](docs/ForexApi.md#getForexPrices) | **GET** /forex/prices/{pair}/{timeframe} | Forex Currency Prices
*intrinioSDK.FundamentalsApi* | [**getFundamentalById**](docs/FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Fundamental by ID
*intrinioSDK.FundamentalsApi* | [**getFundamentalReportedFinancials**](docs/FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Reported Financials
*intrinioSDK.FundamentalsApi* | [**getFundamentalStandardizedFinancials**](docs/FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Standardized Financials
*intrinioSDK.FundamentalsApi* | [**lookupFundamental**](docs/FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental
*intrinioSDK.HistoricalDataApi* | [**getHistoricalData**](docs/HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Historical Data
*intrinioSDK.IndexApi* | [**getAllEconomicIndices**](docs/IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | All Economic Indices
*intrinioSDK.IndexApi* | [**getAllSicIndices**](docs/IndexApi.md#getAllSicIndices) | **GET** /indices/sic | All SIC Indices
*intrinioSDK.IndexApi* | [**getAllStockMarketIndices**](docs/IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | All Stock Market Indices
*intrinioSDK.IndexApi* | [**getEconomicIndexById**](docs/IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Lookup Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointNumber**](docs/IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Data Point (Number) for an Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointText**](docs/IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Data Point (Text) for an Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexHistoricalData**](docs/IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Historical Data for an Economic Index
*intrinioSDK.IndexApi* | [**getSicIndexById**](docs/IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Lookup SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexDataPointNumber**](docs/IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Data Point (Number) for an SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexDataPointText**](docs/IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Data Point (Text) for an SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexHistoricalData**](docs/IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Historical Data for an SIC Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexById**](docs/IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Lookup Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointNumber**](docs/IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Data Point (Number) for Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointText**](docs/IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Data Point (Text) for Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexHistoricalData**](docs/IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Historical Data for Stock Market Index
*intrinioSDK.IndexApi* | [**searchEconomicIndices**](docs/IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
*intrinioSDK.IndexApi* | [**searchSicIndices**](docs/IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
*intrinioSDK.IndexApi* | [**searchStockMarketsIndices**](docs/IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices
*intrinioSDK.MunicipalityApi* | [**getAllMunicipalities**](docs/MunicipalityApi.md#getAllMunicipalities) | **GET** /municipalities | All Municipalities
*intrinioSDK.MunicipalityApi* | [**getMunicipalityById**](docs/MunicipalityApi.md#getMunicipalityById) | **GET** /municipalities/{id} | Municipality by ID
*intrinioSDK.MunicipalityApi* | [**getMunicipalityFinancials**](docs/MunicipalityApi.md#getMunicipalityFinancials) | **GET** /municipalities/{id}/financials | Financials for a Municipality
*intrinioSDK.SecurityApi* | [**getAllSecurities**](docs/SecurityApi.md#getAllSecurities) | **GET** /securities | All Securities
*intrinioSDK.SecurityApi* | [**getSecurityById**](docs/SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Lookup Security
*intrinioSDK.SecurityApi* | [**getSecurityDataPointNumber**](docs/SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Data Point (Number) for Security
*intrinioSDK.SecurityApi* | [**getSecurityDataPointText**](docs/SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Data Point (Text) for Security
*intrinioSDK.SecurityApi* | [**getSecurityHistoricalData**](docs/SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Historical Data for Security
*intrinioSDK.SecurityApi* | [**getSecurityIntradayPrices**](docs/SecurityApi.md#getSecurityIntradayPrices) | **GET** /securities/{identifier}/prices/intraday | Intraday Stock Prices for Security
*intrinioSDK.SecurityApi* | [**getSecurityLatestDividendRecord**](docs/SecurityApi.md#getSecurityLatestDividendRecord) | **GET** /securities/{identifier}/dividends/latest | Lastest Dividend Record for Security
*intrinioSDK.SecurityApi* | [**getSecurityLatestEarningsRecord**](docs/SecurityApi.md#getSecurityLatestEarningsRecord) | **GET** /securities/{identifier}/earnings/latest | Lastest Earnings Record for Security
*intrinioSDK.SecurityApi* | [**getSecurityRealtimePrice**](docs/SecurityApi.md#getSecurityRealtimePrice) | **GET** /securities/{identifier}/prices/realtime | Realtime Stock Price for Security
*intrinioSDK.SecurityApi* | [**getSecurityStockPriceAdjustments**](docs/SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Stock Price Adjustments by Security
*intrinioSDK.SecurityApi* | [**getSecurityStockPrices**](docs/SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Stock Prices by Security
*intrinioSDK.SecurityApi* | [**screenSecurities**](docs/SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
*intrinioSDK.SecurityApi* | [**searchSecurities**](docs/SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities
*intrinioSDK.StockExchangeApi* | [**getAllStockExchanges**](docs/StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | All Stock Exchanges
*intrinioSDK.StockExchangeApi* | [**getStockExchangeById**](docs/StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Lookup Stock Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangePriceAdjustments**](docs/StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Stock Price Adjustments by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangePrices**](docs/StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Stock Prices by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangeRealtimePrices**](docs/StockExchangeApi.md#getStockExchangeRealtimePrices) | **GET** /stock_exchanges/{identifier}/prices/realtime | Realtime Stock Prices by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangeSecurities**](docs/StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Securities by Exchange


## Documentation for Models

 - [intrinioSDK.ApiResponseCompanies](docs/ApiResponseCompanies.md)
 - [intrinioSDK.ApiResponseCompaniesSearch](docs/ApiResponseCompaniesSearch.md)
 - [intrinioSDK.ApiResponseCompanyFilings](docs/ApiResponseCompanyFilings.md)
 - [intrinioSDK.ApiResponseCompanyFundamentals](docs/ApiResponseCompanyFundamentals.md)
 - [intrinioSDK.ApiResponseCompanyHistoricalData](docs/ApiResponseCompanyHistoricalData.md)
 - [intrinioSDK.ApiResponseCompanyNews](docs/ApiResponseCompanyNews.md)
 - [intrinioSDK.ApiResponseCompanySecurities](docs/ApiResponseCompanySecurities.md)
 - [intrinioSDK.ApiResponseDataTags](docs/ApiResponseDataTags.md)
 - [intrinioSDK.ApiResponseDataTagsSearch](docs/ApiResponseDataTagsSearch.md)
 - [intrinioSDK.ApiResponseEconomicIndexHistoricalData](docs/ApiResponseEconomicIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseEconomicIndices](docs/ApiResponseEconomicIndices.md)
 - [intrinioSDK.ApiResponseEconomicIndicesSearch](docs/ApiResponseEconomicIndicesSearch.md)
 - [intrinioSDK.ApiResponseFilingNotes](docs/ApiResponseFilingNotes.md)
 - [intrinioSDK.ApiResponseFilingNotesSearch](docs/ApiResponseFilingNotesSearch.md)
 - [intrinioSDK.ApiResponseFilings](docs/ApiResponseFilings.md)
 - [intrinioSDK.ApiResponseForexCurrencies](docs/ApiResponseForexCurrencies.md)
 - [intrinioSDK.ApiResponseForexPairs](docs/ApiResponseForexPairs.md)
 - [intrinioSDK.ApiResponseForexPrices](docs/ApiResponseForexPrices.md)
 - [intrinioSDK.ApiResponseHistoricalData](docs/ApiResponseHistoricalData.md)
 - [intrinioSDK.ApiResponseMunicipalities](docs/ApiResponseMunicipalities.md)
 - [intrinioSDK.ApiResponseMunicipalitiyFinancials](docs/ApiResponseMunicipalitiyFinancials.md)
 - [intrinioSDK.ApiResponseNews](docs/ApiResponseNews.md)
 - [intrinioSDK.ApiResponseReportedFinancials](docs/ApiResponseReportedFinancials.md)
 - [intrinioSDK.ApiResponseSICIndexHistoricalData](docs/ApiResponseSICIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseSICIndices](docs/ApiResponseSICIndices.md)
 - [intrinioSDK.ApiResponseSICIndicesSearch](docs/ApiResponseSICIndicesSearch.md)
 - [intrinioSDK.ApiResponseSecurities](docs/ApiResponseSecurities.md)
 - [intrinioSDK.ApiResponseSecuritiesSearch](docs/ApiResponseSecuritiesSearch.md)
 - [intrinioSDK.ApiResponseSecurityHistoricalData](docs/ApiResponseSecurityHistoricalData.md)
 - [intrinioSDK.ApiResponseSecurityIntradayPrices](docs/ApiResponseSecurityIntradayPrices.md)
 - [intrinioSDK.ApiResponseSecurityStockPriceAdjustments](docs/ApiResponseSecurityStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseSecurityStockPrices](docs/ApiResponseSecurityStockPrices.md)
 - [intrinioSDK.ApiResponseStandardizedFinancials](docs/ApiResponseStandardizedFinancials.md)
 - [intrinioSDK.ApiResponseStockExchangeRealtimeStockPrices](docs/ApiResponseStockExchangeRealtimeStockPrices.md)
 - [intrinioSDK.ApiResponseStockExchangeSecurities](docs/ApiResponseStockExchangeSecurities.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPriceAdjustments](docs/ApiResponseStockExchangeStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPrices](docs/ApiResponseStockExchangeStockPrices.md)
 - [intrinioSDK.ApiResponseStockExchanges](docs/ApiResponseStockExchanges.md)
 - [intrinioSDK.ApiResponseStockMarketIndexHistoricalData](docs/ApiResponseStockMarketIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseStockMarketIndices](docs/ApiResponseStockMarketIndices.md)
 - [intrinioSDK.ApiResponseStockMarketIndicesSearch](docs/ApiResponseStockMarketIndicesSearch.md)
 - [intrinioSDK.Company](docs/Company.md)
 - [intrinioSDK.CompanyFiling](docs/CompanyFiling.md)
 - [intrinioSDK.CompanyNews](docs/CompanyNews.md)
 - [intrinioSDK.CompanyNewsSummary](docs/CompanyNewsSummary.md)
 - [intrinioSDK.CompanySummary](docs/CompanySummary.md)
 - [intrinioSDK.DataTag](docs/DataTag.md)
 - [intrinioSDK.DataTagSummary](docs/DataTagSummary.md)
 - [intrinioSDK.DividendRecord](docs/DividendRecord.md)
 - [intrinioSDK.EarningsRecord](docs/EarningsRecord.md)
 - [intrinioSDK.EconomicIndex](docs/EconomicIndex.md)
 - [intrinioSDK.EconomicIndexSummary](docs/EconomicIndexSummary.md)
 - [intrinioSDK.Filing](docs/Filing.md)
 - [intrinioSDK.FilingNote](docs/FilingNote.md)
 - [intrinioSDK.FilingNoteFiling](docs/FilingNoteFiling.md)
 - [intrinioSDK.FilingNoteSummary](docs/FilingNoteSummary.md)
 - [intrinioSDK.FilingSummary](docs/FilingSummary.md)
 - [intrinioSDK.ForexCurrency](docs/ForexCurrency.md)
 - [intrinioSDK.ForexPair](docs/ForexPair.md)
 - [intrinioSDK.ForexPrice](docs/ForexPrice.md)
 - [intrinioSDK.Fundamental](docs/Fundamental.md)
 - [intrinioSDK.FundamentalSummary](docs/FundamentalSummary.md)
 - [intrinioSDK.HistoricalData](docs/HistoricalData.md)
 - [intrinioSDK.IntradayStockPrice](docs/IntradayStockPrice.md)
 - [intrinioSDK.Municipality](docs/Municipality.md)
 - [intrinioSDK.MunicipalityFinancial](docs/MunicipalityFinancial.md)
 - [intrinioSDK.RealtimeStockPrice](docs/RealtimeStockPrice.md)
 - [intrinioSDK.RealtimeStockPriceSecurity](docs/RealtimeStockPriceSecurity.md)
 - [intrinioSDK.ReportedFinancial](docs/ReportedFinancial.md)
 - [intrinioSDK.ReportedTag](docs/ReportedTag.md)
 - [intrinioSDK.SICIndex](docs/SICIndex.md)
 - [intrinioSDK.Security](docs/Security.md)
 - [intrinioSDK.SecurityScreenClause](docs/SecurityScreenClause.md)
 - [intrinioSDK.SecurityScreenGroup](docs/SecurityScreenGroup.md)
 - [intrinioSDK.SecurityScreenResult](docs/SecurityScreenResult.md)
 - [intrinioSDK.SecurityScreenResultData](docs/SecurityScreenResultData.md)
 - [intrinioSDK.SecuritySummary](docs/SecuritySummary.md)
 - [intrinioSDK.StandardizedFinancial](docs/StandardizedFinancial.md)
 - [intrinioSDK.StockExchange](docs/StockExchange.md)
 - [intrinioSDK.StockMarketIndex](docs/StockMarketIndex.md)
 - [intrinioSDK.StockMarketIndexSummary](docs/StockMarketIndexSummary.md)
 - [intrinioSDK.StockPrice](docs/StockPrice.md)
 - [intrinioSDK.StockPriceAdjustment](docs/StockPriceAdjustment.md)
 - [intrinioSDK.StockPriceAdjustmentSummary](docs/StockPriceAdjustmentSummary.md)
 - [intrinioSDK.StockPriceSummary](docs/StockPriceSummary.md)

