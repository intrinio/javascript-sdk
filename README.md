# Intrinio JavaScript SDK

To get an API key, [sign up here](https://intrinio.com/).

Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.

- API version: 2.0.0
- Package version: 1.0.0


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
 
var company_api = new IntrinioClient.CompanyApi()
 
company_api.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.intrinio.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intrinioSDK.CompanyApi* | [**filterCompanies**](docs/CompanyApi.md#filterCompanies) | **GET** /companies/filter | Filter Companies
*intrinioSDK.CompanyApi* | [**filterCompanyFundamentals**](docs/CompanyApi.md#filterCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals/filter | Filter Fundamentals for a Company
*intrinioSDK.CompanyApi* | [**getAllCompanies**](docs/CompanyApi.md#getAllCompanies) | **GET** /companies | Get All Companies
*intrinioSDK.CompanyApi* | [**getAllCompanyNews**](docs/CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | Get All Company News
*intrinioSDK.CompanyApi* | [**getCompany**](docs/CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Get a Company by ID
*intrinioSDK.CompanyApi* | [**getCompanyDataPointNumber**](docs/CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Get Company Data Point (Number)
*intrinioSDK.CompanyApi* | [**getCompanyDataPointText**](docs/CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Get Company Data Point (Text)
*intrinioSDK.CompanyApi* | [**getCompanyFilings**](docs/CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | Get Filings for a Company
*intrinioSDK.CompanyApi* | [**getCompanyFundamentals**](docs/CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | Get All Fundamentals for a Company
*intrinioSDK.CompanyApi* | [**getCompanyHistoricalData**](docs/CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Get Company Historical Data
*intrinioSDK.CompanyApi* | [**getCompanyNews**](docs/CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | Get News for a Company
*intrinioSDK.CompanyApi* | [**getCompanySecurities**](docs/CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | Get Securities by Company
*intrinioSDK.CompanyApi* | [**lookupCompanyFundamental**](docs/CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental for a Company
*intrinioSDK.CompanyApi* | [**searchCompanies**](docs/CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
*intrinioSDK.DataPointApi* | [**getDataPointNumber**](docs/DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Get a Data Point (Number)
*intrinioSDK.DataPointApi* | [**getDataPointText**](docs/DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Get a Data Point (Text)
*intrinioSDK.DataTagApi* | [**filterDataTags**](docs/DataTagApi.md#filterDataTags) | **GET** /data_tags/filter | Filter Data Tags
*intrinioSDK.DataTagApi* | [**getAllDataTags**](docs/DataTagApi.md#getAllDataTags) | **GET** /data_tags | Get All Data Tags
*intrinioSDK.DataTagApi* | [**getDataTagById**](docs/DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Get a Data Tag by ID
*intrinioSDK.DataTagApi* | [**searchDataTags**](docs/DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags
*intrinioSDK.FilingApi* | [**filterFilings**](docs/FilingApi.md#filterFilings) | **GET** /filings/filter | Filter Filings
*intrinioSDK.FilingApi* | [**getAllFilings**](docs/FilingApi.md#getAllFilings) | **GET** /filings | Get All Filings
*intrinioSDK.FilingApi* | [**getFilingById**](docs/FilingApi.md#getFilingById) | **GET** /filings/{id} | Get a Filing by ID
*intrinioSDK.FundamentalsApi* | [**getFundamentalById**](docs/FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Get a Fundamental by ID
*intrinioSDK.FundamentalsApi* | [**getFundamentalReportedFinancials**](docs/FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Get Reported Financials for a Fundamental
*intrinioSDK.FundamentalsApi* | [**getFundamentalStandardizedFinancials**](docs/FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Get Standardized Financials for a Fundamental
*intrinioSDK.FundamentalsApi* | [**lookupFundamental**](docs/FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental
*intrinioSDK.HistoricalDataApi* | [**getHistoricalData**](docs/HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Get Historical Data
*intrinioSDK.IndexApi* | [**getAllEconomicIndices**](docs/IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | Get All Economic Indices
*intrinioSDK.IndexApi* | [**getAllSicIndices**](docs/IndexApi.md#getAllSicIndices) | **GET** /indices/sic | Get All SIC Indices
*intrinioSDK.IndexApi* | [**getAllStockMarketIndices**](docs/IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | Get All Stock Market Indices
*intrinioSDK.IndexApi* | [**getEconomicIndexById**](docs/IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Get an Economic Index by ID
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointNumber**](docs/IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Get Economic Index Data Point (Number)
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointText**](docs/IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Get Economic Index Data Point (Text)
*intrinioSDK.IndexApi* | [**getEconomicIndexHistoricalData**](docs/IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Get Economic Index Historical Data
*intrinioSDK.IndexApi* | [**getSicIndexById**](docs/IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Get an SIC Index by ID
*intrinioSDK.IndexApi* | [**getSicIndexDataPointNumber**](docs/IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Get SIC Index Data Point (Number)
*intrinioSDK.IndexApi* | [**getSicIndexDataPointText**](docs/IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Get SIC Index Data Point (Text)
*intrinioSDK.IndexApi* | [**getSicIndexHistoricalData**](docs/IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Get SIC Index Historical Data
*intrinioSDK.IndexApi* | [**getStockMarketIndexById**](docs/IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Get a Stock Market Index by ID
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointNumber**](docs/IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Get Stock Market Index Data Point (Number)
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointText**](docs/IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Get Stock Market Index Data Point (Text)
*intrinioSDK.IndexApi* | [**getStockMarketIndexHistoricalData**](docs/IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Get Stock Market Index Historical Data
*intrinioSDK.IndexApi* | [**searchEconomicIndices**](docs/IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
*intrinioSDK.IndexApi* | [**searchSicIndices**](docs/IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
*intrinioSDK.IndexApi* | [**searchStockMarketsIndices**](docs/IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices
*intrinioSDK.SecurityApi* | [**getAllSecurities**](docs/SecurityApi.md#getAllSecurities) | **GET** /securities | Get All Securiites
*intrinioSDK.SecurityApi* | [**getSecurityById**](docs/SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Get a Security by ID
*intrinioSDK.SecurityApi* | [**getSecurityDataPointNumber**](docs/SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Get Security Data Point (Number)
*intrinioSDK.SecurityApi* | [**getSecurityDataPointText**](docs/SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Get Security Data Point (Text)
*intrinioSDK.SecurityApi* | [**getSecurityHistoricalData**](docs/SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Get Security Historical Data
*intrinioSDK.SecurityApi* | [**getSecurityStockPriceAdjustments**](docs/SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Get Stock Price Adjustments for Security
*intrinioSDK.SecurityApi* | [**getSecurityStockPrices**](docs/SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Get Stock Prices for Security
*intrinioSDK.SecurityApi* | [**screenSecurities**](docs/SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
*intrinioSDK.SecurityApi* | [**searchSecurities**](docs/SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities
*intrinioSDK.StockExchangeApi* | [**filterStockExchanges**](docs/StockExchangeApi.md#filterStockExchanges) | **GET** /stock_exchanges/filter | Filter Stock Exchanges
*intrinioSDK.StockExchangeApi* | [**getAllStockExchanges**](docs/StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | Get All Stock Exchanges
*intrinioSDK.StockExchangeApi* | [**getStockExchangeById**](docs/StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Get Stock Exchange by ID
*intrinioSDK.StockExchangeApi* | [**getStockExchangePriceAdjustments**](docs/StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Get Stock Price Adjustments by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangePrices**](docs/StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Get Stock Prices by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangeSecurities**](docs/StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Get Securities by Exchange


## Documentation for Models

 - [intrinioSDK.ApiResponseCompanies](docs/ApiResponseCompanies.md)
 - [intrinioSDK.ApiResponseCompanyFilings](docs/ApiResponseCompanyFilings.md)
 - [intrinioSDK.ApiResponseCompanyFundamentals](docs/ApiResponseCompanyFundamentals.md)
 - [intrinioSDK.ApiResponseCompanyHistoricalData](docs/ApiResponseCompanyHistoricalData.md)
 - [intrinioSDK.ApiResponseCompanyNews](docs/ApiResponseCompanyNews.md)
 - [intrinioSDK.ApiResponseCompanySecurities](docs/ApiResponseCompanySecurities.md)
 - [intrinioSDK.ApiResponseDataTags](docs/ApiResponseDataTags.md)
 - [intrinioSDK.ApiResponseEconomicIndexHistoricalData](docs/ApiResponseEconomicIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseEconomicIndices](docs/ApiResponseEconomicIndices.md)
 - [intrinioSDK.ApiResponseFilings](docs/ApiResponseFilings.md)
 - [intrinioSDK.ApiResponseHistoricalData](docs/ApiResponseHistoricalData.md)
 - [intrinioSDK.ApiResponseNews](docs/ApiResponseNews.md)
 - [intrinioSDK.ApiResponseReportedFinancials](docs/ApiResponseReportedFinancials.md)
 - [intrinioSDK.ApiResponseSICIndexHistoricalData](docs/ApiResponseSICIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseSICIndices](docs/ApiResponseSICIndices.md)
 - [intrinioSDK.ApiResponseSecurities](docs/ApiResponseSecurities.md)
 - [intrinioSDK.ApiResponseSecurityHistoricalData](docs/ApiResponseSecurityHistoricalData.md)
 - [intrinioSDK.ApiResponseSecurityStockPriceAdjustments](docs/ApiResponseSecurityStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseSecurityStockPrices](docs/ApiResponseSecurityStockPrices.md)
 - [intrinioSDK.ApiResponseStandardizedFinancials](docs/ApiResponseStandardizedFinancials.md)
 - [intrinioSDK.ApiResponseStockExchangeSecurities](docs/ApiResponseStockExchangeSecurities.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPriceAdjustments](docs/ApiResponseStockExchangeStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPrices](docs/ApiResponseStockExchangeStockPrices.md)
 - [intrinioSDK.ApiResponseStockExchanges](docs/ApiResponseStockExchanges.md)
 - [intrinioSDK.ApiResponseStockMarketIndexHistoricalData](docs/ApiResponseStockMarketIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseStockMarketIndices](docs/ApiResponseStockMarketIndices.md)
 - [intrinioSDK.Company](docs/Company.md)
 - [intrinioSDK.CompanyFiling](docs/CompanyFiling.md)
 - [intrinioSDK.CompanyNews](docs/CompanyNews.md)
 - [intrinioSDK.CompanyNewsSummary](docs/CompanyNewsSummary.md)
 - [intrinioSDK.CompanySummary](docs/CompanySummary.md)
 - [intrinioSDK.DataTag](docs/DataTag.md)
 - [intrinioSDK.DataTagSummary](docs/DataTagSummary.md)
 - [intrinioSDK.EconomicIndex](docs/EconomicIndex.md)
 - [intrinioSDK.EconomicIndexSummary](docs/EconomicIndexSummary.md)
 - [intrinioSDK.Filing](docs/Filing.md)
 - [intrinioSDK.FilingSummary](docs/FilingSummary.md)
 - [intrinioSDK.Fundamental](docs/Fundamental.md)
 - [intrinioSDK.FundamentalSummary](docs/FundamentalSummary.md)
 - [intrinioSDK.HistoricalData](docs/HistoricalData.md)
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

